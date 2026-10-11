import {config} from './config.js';
import {local} from './db.js';
let refreshing;
export const isLocalPreview=location.hostname==='127.0.0.1'||location.hostname==='localhost';
export const configured=!!config.apiBase||isLocalPreview;
const base=config.apiBase||'/api/tournament';
async function authRequest(path,body){const r=await fetch(config.supabaseUrl+'/auth/v1/'+path,{method:'POST',headers:{apikey:config.publishableKey,'Content-Type':'application/json'},body:JSON.stringify(body)});const data=await r.json();if(!r.ok)throw new Error(data.msg||data.error_description||data.message||'Sign-in could not be completed.');return data;}
export async function signIn(email,password,signup=false){if(!config.supabaseUrl)throw new Error('Online accounts are being connected.');const data=await authRequest(signup?'signup':'token?grant_type=password',{email,password});if(data.access_token)await local.set('auth',{...data,expires_at:Date.now()+data.expires_in*1000});return !!data.access_token;}
export async function signOut(){await local.set('auth',null);}
export async function setPreviewUser(role){if(!isLocalPreview)return;await local.set('preview-role',role);}
async function token(){if(isLocalPreview&&!config.apiBase)return 'dev-'+(await local.read('preview-role')||'director');const auth=await local.read('auth');if(!auth) return '';if(auth.expires_at>Date.now()+30000)return auth.access_token;if(!navigator.onLine)return auth.access_token;
 if(!refreshing)refreshing=authRequest('token?grant_type=refresh_token',{refresh_token:auth.refresh_token}).then(async next=>{await local.set('auth',{...next,expires_at:Date.now()+next.expires_in*1000});return next.access_token;}).finally(()=>refreshing=null);return refreshing;}
export async function request(path,options={}){if(!configured)throw new Error('Online tournament services have not been connected yet.');const access=await token();const headers={...options.headers,...(access?{Authorization:'Bearer '+access}:{})};if(options.body&&typeof options.body==='string')headers['Content-Type']='application/json';const response=await fetch(base+path,{...options,headers,signal:AbortSignal.timeout(45000)});if(!response.ok){let data;try{data=await response.json();}catch{}const error=new Error(data?.error||'Connection interrupted. Your saved fish remain on this device.');error.status=response.status;throw error;}return response;}
export async function api(path,options={}){return (await request(path,options)).json();}
export const post=(path,body={})=>api(path,{method:'POST',body:JSON.stringify(body)});
