export function runningEntries(events, now=Date.now()) {
  return events.filter(e=>e.entry_status==='active'&&e.state==='open'&&Date.parse(e.starts_at)<=now&&now<=Date.parse(e.upload_deadline)).sort((a,b)=>Date.parse(a.upload_deadline)-Date.parse(b.upload_deadline)||a.id.localeCompare(b.id));
}
export function homeEventId(events, now=Date.now()) {
  const running=runningEntries(events,now);
  return running.length===1?running[0].id:null;
}
