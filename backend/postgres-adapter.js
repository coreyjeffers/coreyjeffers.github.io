// Parameterized adapter shared by the edge runtime and PostgreSQL integration tests.
export function toPostgres(query){let n=0;const ignore=/^INSERT OR IGNORE /i.test(query);let sql=query.replace(/^INSERT OR IGNORE /i,'INSERT ').replace(/\?/g,()=>'$'+(++n));if(ignore)sql+=' ON CONFLICT DO NOTHING';return sql;}
export function normalizeRow(row){return Object.fromEntries(Object.entries(row).map(([k,v])=>[k,v instanceof Date?v.toISOString():typeof v==='bigint'?Number(v):v]));}
export function databaseAdapter(execute,transaction){
 function prepare(query){const statement={query,values:[],bind(...values){return {...statement,values};},async all(){const r=await execute(toPostgres(this.query),this.values);return {results:r.rows.map(normalizeRow)};},async first(){return (await this.all()).results[0]||null;},async run(){const r=await execute(toPostgres(this.query),this.values);return {meta:{changes:Number(r.count??r.rows.length)}};}};return statement;}
 return {prepare,async batch(statements){return transaction(async exec=>{const results=[];for(const statement of statements){const r=await exec(toPostgres(statement.query),statement.values);results.push({results:r.rows.map(normalizeRow),meta:{changes:Number(r.count??r.rows.length)}});}return results;});}};
}
