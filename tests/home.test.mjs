import {test} from 'node:test';
import assert from 'node:assert/strict';
import {runningEntries,homeEventId} from '../app/home.js';
const now=Date.parse('2027-06-01T15:00:00Z');
const event=(id,extra={})=>({id,entry_status:'active',state:'open',starts_at:'2027-06-01T11:00:00Z',ends_at:'2027-06-01T20:00:00Z',upload_deadline:'2027-06-01T21:00:00Z',...extra});
test('one running registered tournament opens directly',()=>assert.equal(homeEventId([event('mine'),event('other',{entry_status:null})],now),'mine'));
test('two running entries require a choice',()=>{const events=[event('a'),event('b')];assert.equal(homeEventId(events,now),null);assert.equal(runningEntries(events,now).length,2);});
test('upcoming, unpaid, final and expired entries do not take over home',()=>assert.equal(runningEntries([event('a',{entry_status:'payment_pending'}),event('b',{state:'final'}),event('c',{starts_at:'2027-07-01T00:00:00Z'}),event('d',{upload_deadline:'2027-06-01T14:00:00Z'})],now).length,0));
test('tournament stays available through upload deadline',()=>assert.equal(homeEventId([event('mine',{ends_at:'2027-06-01T14:00:00Z'})],now),'mine'));
