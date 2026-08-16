const standings = [
  {rank:2,name:'Corey Jeffers',points:493},
  {rank:3,name:'Matt Stewart',points:490},
  {rank:4,name:'Skip Martin',points:486},
  {rank:5,name:'Brandon Hunter',points:483},
  {rank:6,name:'Blayne Peterman',points:481},
  {rank:7,name:'Auzzie Dangerous',points:469},
  {rank:7,name:'Krazy Kat Ladies',displayName:'Krazy Kat Ladies Smith',points:469},
  {rank:9,name:'Jeff Tate',points:461},
  {rank:10,name:'Justin Roberts',points:460},
  {rank:11,name:'Chris Poor',points:454},
  {rank:12,name:'Troy Geer',points:450},
  {rank:13,name:'Clint Bafford',points:448},
  {rank:14,name:'Robert Shively',points:438},
  {rank:15,name:'Jon Myers',points:430}
];
const FISHING_CHAOS_CLUB_URL = 'https://app.fishingchaos.com/club/Ehg8nJithN8CCAMoLKHj';
const FISHING_CHAOS_SERIES_TOURNAMENTS_URL = `${FISHING_CHAOS_CLUB_URL}/tournament-series/a7NS6zRU4LrTmuYPWIDH/tournaments`;
const liveBroadcast = {
  embedUrl:'https://www.youtube.com/embed/sfiD_k-eUpo?autoplay=1&mute=1&playsinline=1&rel=0',
  watchUrl:'https://www.youtube.com/watch?v=sfiD_k-eUpo'
};
const events = [
  {month:'APR',day:'11',name:'Rocky Fork',detail:'29 anglers · Complete',status:'Complete',done:true,url:'https://app.fishingchaos.com/tournament/sjOzaQrBhQHvTn0O8ETj'},
  {month:'APR',day:'25',name:'Hoover Reservoir',detail:'23 anglers · Complete',status:'Complete',done:true,url:'https://app.fishingchaos.com/tournament/3kcgxAsCv7mJV6uxMcJu'},
  {month:'MAY',day:'9',name:'Caesar Creek',detail:'23 anglers · Complete',status:'Complete',done:true,url:'https://app.fishingchaos.com/tournament/O7hRGI225ITNazEe2eml'},
  {month:'MAY',day:'24',name:'Sandusky Bay',detail:'24 anglers · Complete',status:'Complete',done:true,url:'https://app.fishingchaos.com/tournament/JbojeSRqs1YifPoBPp8R'},
  {month:'JUN',day:'20',name:'Sandusky Bay Co-Event',detail:'29 anglers · Complete',status:'Complete',done:true,url:'https://app.fishingchaos.com/tournament/qU02CzQoOD82or0KhAOv'},
  {month:'JUL',day:'11',name:'Deer Creek',detail:'Rain-soaked showdown · Complete',status:'Complete',done:true,url:'https://app.fishingchaos.com/tournament/1eo6UgxmQx1LzxDHiX0k'},
  {month:'JUL',day:'25',name:'Seneca Lake',detail:'20 anglers · Complete',status:'Complete',done:true,url:'https://app.fishingchaos.com/tournament/1sg3z3WItJCo4PgyK0uI'},
  {month:'AUG',day:'7–9',name:'48-Hour All-Ohio',detail:'43 anglers · 143 accepted fish · Complete',status:'Complete',done:true,url:'https://app.fishingchaos.com/tournament/yvSiToIoNhEW0DO8TXw4'},
  {month:'AUG',day:'15–16',name:'Indian Lake 24-Hour',detail:'23 anglers · 128 fish entries · Complete',status:'Complete',done:true,url:'https://app.fishingchaos.com/tournament/CibEwf4GgRCAQAQ5V0kz'},
  {month:'SEP',day:'12',name:'Ohio River',detail:'7:00 AM–4:00 PM · Registration open',status:'Registration open',next:true,url:'https://app.fishingchaos.com/tournament/ziSP9LjG69LXOGJHOA9f'},
  {month:'OCT',day:'10',name:'Championship',detail:'Top 15 AOY anglers · $5,000 added',status:'Qualified field',url:FISHING_CHAOS_SERIES_TOURNAMENTS_URL,seriesFallback:true}
];
const newsArticles = [
  {
    slug:'indian-lake-24-hour-2026',event:'Indian Lake 24-Hour',date:'August 15–16, 2026',time:'Noon Saturday–noon Sunday',anglers:23,fish:128,
    title:'Bays wins a flathead-heavy 24-hour battle at Indian Lake',
    dek:'Nick Bays won with 108.25 inches, while Justin Roberts claimed Big Fish with a 40-inch flathead.',
    facts:[['23','Anglers'],['128','Fish entries'],['108.25″','Winning total'],['$4,300','Total payout']],
    podium:[['Nick Bays','108.25″ · $2,365'],['Matt Groeschel','102.00″ · $1,075'],['Skip Martin','100.50″ · $430']],
    sidebarTitle:'Final podium',
    bigFish:['Justin Roberts','40.00″ flathead catfish · $430'],
    highlight:['Event Big Fish','Justin Roberts','$430 · 40.00″ flathead · Showdown qualifier'],
    factNote:'Final placement, angler count, fish-entry total, scores, and Big Fish were verified in Fishing Chaos on August 16, 2026. Katyakers Outfitters’ final Facebook update confirmed that every placing position held and verified the $4,300 payout split.',
    paragraphs:[
      'Indian Lake delivered a full 24 hours of changing conditions, hard work, and a major overnight flathead bite. The official event listed 23 anglers and 128 fish entries, with each competitor’s best three eligible catfish counting toward the final score.',
      'Nick Bays finished with 108.25 inches to win by 6.25 inches over Matt Groeschel. Skip Martin completed the podium at 100.50 inches, while Justin Roberts finished fourth at 94.00 inches.',
      'The event turned into a flathead showcase after dark. Katyakers’ hour-21 update reported 19 flatheads caught overnight, and the final Big Fish belonged to Justin Roberts with a 40.00-inch flathead. That fish also earned Roberts the ninth confirmed Big Fish Showdown berth.',
      'The published payout totaled $4,300. Bays earned $2,365 for first place, Groeschel received $1,075 for second, Martin earned $430 for third, and Roberts received $430 for Big Fish.',
      'The official AOY standings still have Jacob Leake first at 494 points, Corey Jeffers second at 493, and Matt Stewart third at 490. Skip Martin moved into fourth with 486, Brandon Hunter is fifth at 483, and Jon Myers holds the 15th-place championship cut line at 430. The Ohio River event on September 12 is the final regular-season stop before the championship.'
    ],
    fullResults:[
      [1,'Nick Bays','108.25″'],[2,'Matt Groeschel','102.00″'],[3,'Skip Martin','100.50″'],[4,'Justin Roberts','94.00″'],[5,'Jeff Mccafferty','89.00″'],[6,'Matt Stewart','87.75″'],[7,'Jacob Leake','87.25″'],[8,'Brandon Hunter','84.25″'],[9,'Chris Poor','83.25″'],[10,'Blayne Peterman','80.25″'],[11,'Jeff Tate','80.00″'],[12,'Corey Jeffers','79.25″'],[13,'John Cotterman','78.50″'],[14,'Teddy Ivey','77.75″'],[15,'Cage Keysor','77.25″'],[16,'Rasin Cain','77.00″'],[17,'Auzzie Dangerous','75.50″'],[18,'Troy Geer','74.25″'],[19,'Robert Shively','73.75″'],[20,'Curtis Cunningham','69.00″'],[21,'Wesley Brofford','30.00″'],['—','Krazy Kat Ladies Smith','No scorable total'],['—','Paul Payne','No scorable total']
    ],
    sources:[
      ['Official Fishing Chaos results','https://app.fishingchaos.com/tournament/CibEwf4GgRCAQAQ5V0kz'],
      ['Official Fishing Chaos standings','https://app.fishingchaos.com/club/Ehg8nJithN8CCAMoLKHj/tournament-series/a7NS6zRU4LrTmuYPWIDH'],
      ['Katyakers final Facebook update','https://www.facebook.com/reel/1379685814351507/']
    ]
  },
  {
    slug:'48-hour-all-ohio-2026',event:'48-Hour All-Ohio',date:'August 7–9, 2026',time:'Noon Friday–noon Sunday',anglers:43,fish:143,
    title:'Goodman completes the three-species sweep to win All Ohio',
    dek:'Aaron Goodman combined a 43-inch blue, 37.75-inch flathead, and 34.5-inch channel cat for 115.25 inches and the 48-Hour All-Ohio championship.',
    facts:[['43','Registered anglers'],['143','Accepted fish'],['115.25″','Winning total'],['$6,300','Total payout']],
    podium:[['Aaron Goodman','115.25″ · $3,150'],['Kyle Harman','111.50″ · $1,260'],['Skip Martin','107.75″ · $756'],['Blayne Peterman','104.75″ · $504'],['Chris Minnehan','104.50″']],
    sidebarTitle:'Final top five',
    bigFish:['Kyle Harman','51.00″ blue catfish · $630'],
    highlight:['Event Big Fish','Kyle Harman','$630 · 51.00″ blue catfish · new 2026 trail record'],
    factNote:'Every score, rank, species leader, angler count, and accepted-fish total below was verified against the final Fishing Chaos tournament dashboard on August 10, 2026. The official Katyakers Outfitters results graphic verifies a $6,300 payout. Fishing Chaos listed 43 registrations and 38 anglers with a scorable total. The roster contained two separate Dave Workman registrations; one posted 20.75 inches and one did not post a score.',
    paragraphs:[
      'Forty-three anglers fished legal waters across Ohio from noon Friday through noon Sunday. The format rewarded versatility: each angler’s score was the combined length of their best blue catfish, best flathead catfish, and best channel catfish. Fishing Chaos accepted 143 fish during the 48-hour window.',
      'Aaron Goodman was the only angler to break 115 inches. His 43.00-inch blue, 37.75-inch flathead, and 34.50-inch channel produced a winning 115.25-inch total. Kyle Harman finished second at 111.50 inches, led by the tournament’s biggest fish—a 51.00-inch blue catfish. Skip Martin completed the podium at 107.75 inches.',
      'The event rewrote two season marks. Harman’s 51.00-inch blue passed Matt Stewart’s previous 46.00-inch trail best, while Tyler Neptune’s 45.50-inch flathead replaced the 28.50-inch mark set at Seneca. Joe Higgins led the channel category at 35.75 inches; Kyle Harman’s 36.25-inch Sandusky Bay channel remains the 2026 trail record. Because Harman already holds a Big Fish Showdown berth, the All-Ohio qualifying slot passes to Aaron Grubb and his 45.75-inch blue.',
      'Blayne Peterman finished fourth with 104.75 inches, only a quarter-inch ahead of Chris Minnehan. Keith Konicek took sixth at 104.25, Joe Higgins finished seventh at 100.25, and Corey Jeffers placed eighth at 99.50. Tyler Neptune and John Ratliff completed the top ten.',
      'The official payout totaled $6,300. Aaron Goodman earned $3,150 for the victory, Kyle Harman received $1,260 for second place, Skip Martin earned $756 for third, and Blayne Peterman received $504 for fourth. Harman added another $630 for Big Fish.',
      'Indian Lake followed the All-Ohio event and is now complete. The official series standings after Indian Lake show Jacob Leake first at 494 points, Corey Jeffers second at 493, Matt Stewart third at 490, Skip Martin fourth at 486, and Brandon Hunter fifth at 483. The final regular-season stop is the Ohio River on September 12.'
    ],
    speciesWinners:[
      ['Blue catfish','Kyle Harman','51.00″'],
      ['Flathead catfish','Tyler Neptune','45.50″'],
      ['Channel catfish','Joe Higgins','35.75″']
    ],
    fullResults:[
      [1,'Aaron Goodman','115.25″'],[2,'Kyle Harman','111.50″'],[3,'Skip Martin','107.75″'],[4,'Blayne Peterman','104.75″'],[5,'Chris Minnehan','104.50″'],[6,'Keith Konicek','104.25″'],[7,'Joe Higgins','100.25″'],[8,'Corey Jeffers','99.50″'],[9,'Tyler Neptune','96.50″'],[10,'John Ratliff','94.75″'],
      [11,'Rasin Cain','92.75″'],[12,'Brandon Hunter','82.25″'],[13,'Jacob Leake','77.00″'],[14,'Nathaniel Reiling','72.25″'],[15,'Aaron Grubb','70.25″'],[16,'Matt Stewart','69.50″'],[17,'Ryan Saxton','64.25″'],[18,'James Sherrock','63.00″'],[19,'Dan Phelps','61.50″'],[20,'James Krumm','61.00″'],
      [21,'Auzzie Dangerous','61.00″'],[22,'Paul Payne','57.75″'],[23,'Aaron Bergman','54.00″'],[24,'Justin Roberts','49.50″'],[25,'Charlie Moody','46.50″'],[26,'Curtis Cunningham','41.50″'],[27,'Shane Holschuh','35.25″'],[28,'Corbin Contreras','33.00″'],[29,'Matt Unger','28.50″'],[30,'Robert Shively','28.00″'],
      [31,'Chris Poor','27.75″'],[32,'Charles Hill','26.50″'],[33,'John Drummond','26.00″'],[34,'Krazy Kat Ladies Smith','25.00″'],[35,'Benjamin Allen','24.25″'],[36,'Scott Hickman','23.00″'],[37,'Jesse Ewing','22.75″'],[38,'Dave Workman','20.75″'],['—','Amanda Johnson','No scorable total'],['—','Dave Workman · second registration','No scorable total'],['—','Galen Bizzell','No scorable total'],['—','Garrett Daniels','No scorable total'],['—','Mike Smallwood','No scorable total']
    ],
    sources:[
      ['Official Fishing Chaos results','https://app.fishingchaos.com/tournament/yvSiToIoNhEW0DO8TXw4'],
      ['Official Fishing Chaos standings','https://app.fishingchaos.com/club/Ehg8nJithN8CCAMoLKHj/tournament-series/a7NS6zRU4LrTmuYPWIDH'],
      ['Official Katyakers payout graphic','https://www.facebook.com/photo/?fbid=1354468116844548&set=a.493660822925286']
    ]
  },
  {
    slug:'trail-update-july-25-2026',event:'2026 Trail Update',date:'July 25, 2026',category:'Current events',cardBanner:'Seven down. Four to go.',
    title:'Leake takes the AOY lead after a dramatic Seneca win',
    dek:'Jacob Leake leads Corey Jeffers by one point after seven events, with 954 fish submitted and four championship-shaping stops still ahead.',
    facts:[['7','Completed events'],['954','Fish submitted'],['$30,300','Paid out']],
    sidebarTitle:'AOY top five',
    sidebarItems:[['Jacob Leake','494 pts'],['Corey Jeffers','493 pts'],['Matt Stewart','490 pts'],['Brandon Hunter','483 pts'],['Blayne Peterman','475 pts']],
    highlight:['The margin','1 point','Leake leads Jeffers by one; Stewart is four points off the lead.'],
    factNote:'Standings and event details come from Fishing Chaos. The $30,300 payout total includes verified placement and Big Fish payouts across all seven completed events through Seneca.',
    paragraphs:[
      'Seven of 11 scheduled events are complete, from the April 11 opener at Rocky Fork through the July 25 stop at Seneca Lake. Those fields add up to 163 angler entries, 954 accepted fish, and $30,300 in verified placement and Big Fish payouts.',
      'The corrected Angler of the Year standings put Jacob Leake first with 494 points, one ahead of Corey Jeffers at 493. Matt Stewart sits at 490, Brandon Hunter at 483, and Blayne Peterman at 475. Only 19 points separate first from fifth under the trail’s best-five-events scoring rule.',
      'Leake changed both races at Seneca. His 130.50-inch limit won the event, and a late 33.75-inch blue catfish also secured Big Fish and the seventh place in the Big Fish Showdown field.',
      'The trail resumes with the 48-Hour All-Ohio event from noon August 7 through noon August 9. The Indian Lake 24-Hour, Ohio River stop, and top-15 championship follow, leaving four events to settle the inaugural season.'
    ],
    sources:[
      ['Official Fishing Chaos standings','https://app.fishingchaos.com/club/Ehg8nJithN8CCAMoLKHj/tournament-series/a7NS6zRU4LrTmuYPWIDH'],
      ['Katyakers Facebook updates','https://www.facebook.com/KATYAKERSOUTFITTERS']
    ]
  },
  {
    slug:'seneca-lake-2026',event:'Seneca Lake',date:'July 25, 2026',time:'7:00 AM–4:00 PM ET',anglers:20,fish:96,
    title:'Leake’s late blue cat seals a Seneca sweep',
    dek:'Jacob Leake won with 130.50 inches and claimed Big Fish with a 33.75-inch blue catfish.',
    facts:[['20','Anglers'],['96','Fish submitted'],['$4,000','Paid out']],
    podium:[['Jacob Leake','130.50″ · $2,200'],['Austin Harding','128.00″ · $1,000'],['Charles Woods','125.00″ · $400']],
    bigFish:['Jacob Leake','33.75″ blue catfish'],
    factNote:'Fishing Chaos verifies 20 anglers, 96 accepted fish, the final leaderboard, and Big Fish. The verified payout was $2,200 for first, $1,000 for second, $400 for third, and $400 for Big Fish.',
    paragraphs:[
      'Seneca Lake produced the toughest bite of the season so far, according to the official Katyakers update, but 20 anglers still combined for 96 accepted fish during the nine-hour event.',
      'Jacob Leake finished with 130.50 inches to win by 2.50 inches over Austin Harding. Charles Woods took third with 125.00 inches in his first recorded Katyakers event.',
      'Leake also landed the tournament’s largest fish, a 33.75-inch blue catfish late in the event. The catch completed the event-and-Big-Fish sweep and made Leake the seventh verified Big Fish Showdown qualifier.',
      'The event paid $2,200 to Leake for first place, $1,000 to Austin Harding for second, $400 to Charles Woods for third, and another $400 to Leake for Big Fish—a $4,000 total payout.'
    ],
    chaosUrl:'https://app.fishingchaos.com/tournament/1sg3z3WItJCo4PgyK0uI'
  },
  {
    slug:'deer-creek-2026',event:'Deer Creek',date:'July 11, 2026',time:'7:00 AM–4:00 PM ET',anglers:15,fish:104,
    title:'Jeffers wins a rain-soaked Deer Creek showdown',
    dek:'Corey Jeffers totaled 130 inches to win as Brandon Hunter and Jeff Tate finished just 1.75 inches behind.',
    podium:[['Corey Jeffers','130.00″'],['Brandon Hunter','128.25″'],['Jeff Tate','128.25″']],
    bigFish:['Corey Jeffers','30.75″ channel catfish'],
    paragraphs:[
      'Persistent rain made Deer Creek a test of preparation and patience, but the field kept producing. Fifteen anglers combined for 104 accepted fish during the nine-hour event.',
      'Corey Jeffers built a 130.00-inch total to secure the win. The race behind him could not have been tighter: Brandon Hunter and Jeff Tate each finished on 128.25 inches, only 1.75 inches off the winning mark.',
      'Jeffers also claimed Big Fish with a 30.75-inch channel catfish, completing a sweep of the event win and the day’s largest submitted fish.'
    ],
    chaosUrl:'https://app.fishingchaos.com/tournament/1eo6UgxmQx1LzxDHiX0k'
  },
  {
    slug:'sandusky-bay-june-2026',event:'Sandusky Bay Co-Event',date:'June 20, 2026',time:'7:00 AM–4:00 PM ET',anglers:29,fish:226,
    title:'Leake tops a high-volume Sandusky Bay field',
    dek:'Jacob Leake won with 170 inches as 29 anglers submitted a season-high 226 fish.',
    podium:[['Jacob Leake','170.00″'],['Kyle Harman','165.00″'],['Nicholas Wilson','158.75″']],
    bigFish:['Kyle Harman','36.25″ channel catfish'],
    paragraphs:[
      'Sandusky Bay delivered the busiest leaderboard of the first six events. Twenty-nine anglers recorded 226 accepted fish, the highest event submission total of the season through Deer Creek.',
      'Jacob Leake separated himself with a 170.00-inch score and a five-inch winning margin. Kyle Harman finished second at 165.00 inches, while Nicholas Wilson completed the podium with 158.75 inches.',
      'Harman added the Big Fish honor with a 36.25-inch channel catfish, the largest channel cat recorded in a completed Katyakers event through July 11.'
    ],
    chaosUrl:'https://app.fishingchaos.com/tournament/qU02CzQoOD82or0KhAOv'
  },
  {
    slug:'sandusky-bay-may-2026',event:'Sandusky Bay',date:'May 24, 2026',time:'7:00 AM–4:00 PM ET',anglers:24,fish:218,
    title:'Half an inch decides a Sandusky Bay thriller',
    dek:'Matt Stewart edged Brandon Hunter and Skip Martin in the closest winning margin of the season’s first six events.',
    podium:[['Matt Stewart','166.50″'],['Brandon Hunter','166.00″'],['Skip Martin','166.00″']],
    bigFish:['Troy Geer','35.25″ channel catfish'],
    paragraphs:[
      'Sandusky Bay produced a true photo finish. Twenty-four anglers combined for 218 accepted fish, and the entire podium was separated by only half an inch.',
      'Matt Stewart’s 166.50-inch total held up for the victory. Brandon Hunter and Skip Martin both finished at 166.00 inches, leaving just 0.50 inches between first place and the two anglers immediately behind him.',
      'Troy Geer landed the event’s Big Fish, a 35.25-inch channel catfish, during one of the most productive stops on the 2026 trail.'
    ],
    chaosUrl:'https://app.fishingchaos.com/tournament/JbojeSRqs1YifPoBPp8R'
  },
  {
    slug:'caesar-creek-2026',event:'Caesar Creek',date:'May 9, 2026',time:'7:00 AM–4:00 PM ET',anglers:23,fish:79,
    title:'Stewart takes control at Caesar Creek',
    dek:'Matt Stewart posted 174.50 inches to beat Blayne Peterman and Skip Martin.',
    podium:[['Matt Stewart','174.50″'],['Blayne Peterman','166.00″'],['Skip Martin','157.75″']],
    bigFish:['Austin Harding','37.50″ blue catfish'],
    paragraphs:[
      'Caesar Creek asked the field to make every fish count. Twenty-three anglers produced 79 accepted submissions, the lowest event total among the first six completed stops.',
      'Matt Stewart answered with a 174.50-inch score and an 8.50-inch victory over Blayne Peterman. Skip Martin’s 157.75-inch total earned the final podium position.',
      'Austin Harding delivered the …8241 tokens truncated… sidebarHtml=sidebarItems.map(([name,score],index)=>`<li><span>${index+1}</span><div><strong>${escapeHtml(name)}</strong><small>${escapeHtml(score)}</small></div></li>`).join('');
  const sourcesHtml=sources.map(([label,url])=>`<a href="${escapeHtml(url)}" target="_blank" rel="noopener">${escapeHtml(label)} ↗</a>`).join('');
  const paragraphs=article.paragraphs.map(paragraph=>`<p>${escapeHtml(paragraph)}</p>`).join('');
  const speciesHtml=article.speciesWinners?`<div class="species-winners">${article.speciesWinners.map(([species,name,length])=>`<article><span>${escapeHtml(species)}</span><strong>${escapeHtml(length)}</strong><small>${escapeHtml(name)}</small></article>`).join('')}</div>`:'';
  const fullResultsHtml=article.fullResults?`<section class="article-full-results"><div class="full-results-heading"><div><span class="eyebrow dark">COMPLETE OFFICIAL RESULTS</span><h2>All ${escapeHtml(article.anglers)} anglers</h2></div><p>Final rank and official score from Fishing Chaos.</p></div>${speciesHtml}<div class="full-results-grid">${article.fullResults.map(([rank,name,score])=>`<div class="full-result-row ${rank==='—'?'no-score':''}"><span>${escapeHtml(rank)}</span><strong>${escapeHtml(name)}</strong><small>${escapeHtml(score)}</small></div>`).join('')}</div></section>`:'';
  $('#newsArticleContent').innerHTML=`<header class="article-hero"><span class="eyebrow">${escapeHtml((article.category||'Tournament recap').toUpperCase())} · ${escapeHtml(article.date)}</span><h1 id="newsArticleTitle">${escapeHtml(article.title)}</h1><p>${escapeHtml(article.dek)}</p></header><div class="article-facts">${factsHtml}</div><div class="article-layout"><div class="article-story">${paragraphs}<aside class="article-season-note"><strong>Fact-check note</strong><p>${escapeHtml(factNote)}</p></aside><div class="article-sources"><span>Sources</span>${sourcesHtml}</div></div><aside class="article-results"><span class="eyebrow dark">AT A GLANCE</span><h2>${escapeHtml(sidebarTitle)}</h2><ol>${sidebarHtml}</ol><div class="article-big-fish"><span>${escapeHtml(highlight[0])}</span><strong>${escapeHtml(highlight[1])}</strong><small>${escapeHtml(highlight[2])}</small></div><a class="button primary" href="${escapeHtml(sources[0][1])}" target="_blank" rel="noopener">Open primary source ↗</a></aside></div>${fullResultsHtml}`;
}
function renderAnglerProfilePage(){
  const page=$('#anglerProfilePage');
  const match=location.pathname.match(/^\/anglers\/([^/]+)\/?$/);
  if(!match){page.hidden=true;return}
  document.body.classList.add('angler-profile-route');
  $('.brand').setAttribute('href','/');
  document.querySelectorAll('.main-nav a[href^="#"], footer a[href^="#"]').forEach(link=>link.setAttribute('href',`/${link.getAttribute('href')}`));
  page.hidden=false;
  const angler=anglers.find(item=>memberSlug(item.name)===decodeURIComponent(match[1]).toLowerCase());
  if(!angler){document.title='Angler not found | Katyakers of Ohio';$('#anglerProfileContent').innerHTML='<div class="profile-not-found"><span class="eyebrow dark">KATYAKERS ROSTER</span><h1>Angler not found</h1><p>That roster profile is not available.</p></div>';return}
  const profile=publicProfiles[angler.name]||{};
  requestedProfileMember=angler.name;
  const stats=lifetimeStats[angler.name]||emptyLifetimeStats;
  const record=verifiedRecords[angler.name]||{};
  const displayName=profile.display_name||memberDisplayName(angler.name);
  const method=profile.fishing_method?profile.fishing_method[0].toUpperCase()+profile.fishing_method.slice(1):'Not added yet';
  const image=angler.photo?`<img src="/${angler.photo}" alt="${escapeHtml(angler.name)}">`:`<span aria-hidden="true">${angler.initials}</span>`;
  const fact=(label,value)=>`<div class="profile-fact"><span>${label}</span><strong>${escapeHtml(value||'Not added yet')}</strong></div>`;
  const stat=(label,value,accent='')=>`<div class="profile-stat ${accent}"><strong>${value}</strong><span>${label}</span></div>`;
  const socials=[['Facebook',profile.facebook_url],['Instagram',profile.instagram_url],['TikTok',profile.tiktok_url],['YouTube',profile.youtube_url]].filter(([,url])=>url);
  const bestScore=record.bestScore==null?'<strong>No score yet</strong><small>No Fishing Chaos submission recorded</small>':`<strong>${record.bestScore.toFixed(2)} in.</strong><small>${escapeHtml(record.bestScoreEvent)}</small>`;
  const biggestFish=record.biggestFish==null?'<strong>No fish yet</strong><small>No Fishing Chaos submission recorded</small>':`<strong>${record.biggestFish.toFixed(2)} in.</strong><small>${escapeHtml(record.biggestFishSpecies)} · ${escapeHtml(record.biggestFishEvent)}</small>`;
  document.title=`${displayName} | Katyakers of Ohio`;
  $('#anglerProfileContent').innerHTML=`<div class="profile-hero"><div class="profile-portrait">${image}</div><div class="profile-hero-copy"><span class="eyebrow">${publicProfiles[angler.name]?'CLAIMED ANGLER PROFILE':'OFFICIAL KATYAKERS MEMBER'}</span><h1 id="anglerProfileName">${escapeHtml(displayName)}</h1>${displayName!==angler.name?`<p class="profile-roster-name">${escapeHtml(angler.name)}</p>`:''}<div class="profile-chips"><span>${escapeHtml(method)}</span>${profile.hometown?`<span>${escapeHtml(profile.hometown)}</span>`:''}</div><p>${escapeHtml(profile.bio||'Official Katyakers of Ohio roster member. Personal angler details can be added after this profile is claimed.')}</p><button class="button primary" type="button" data-claim-member="${escapeHtml(angler.name)}">${publicProfiles[angler.name]?'Manage my profile':'Claim this profile'}</button></div></div><div class="profile-content-grid"><section class="profile-panel"><div class="profile-panel-heading"><span class="eyebrow dark">ANGLER DETAILS</span><h2>On the water</h2></div><div class="profile-facts">${fact('Fishing method',method)}${fact('Hometown',profile.hometown)}${fact('Favorite body of water',profile.favorite_water)}${fact('Total years professionally fishing',profile.years_fishing==null?'':String(profile.years_fishing))}${fact('Personal best blue cat',profile.personal_best_blue||profile.personal_best)}${fact('Personal best flathead',profile.personal_best_flathead)}${fact('Personal best channel cat',profile.personal_best_channel)}</div></section><section class="profile-panel lifetime-panel"><div class="profile-panel-heading"><span class="eyebrow dark">VERIFIED COMPETITION RECORD</span><h2>Lifetime totals</h2><p>Automatically tracked from completed Katyakers events in Fishing Chaos.</p></div><div class="verified-highlights"><div><span>Best Katyakers event score</span>${bestScore}</div><div><span>Biggest submitted fish</span>${biggestFish}</div></div><div class="profile-stats">${stat('Events fished',stats.eventsFished)}${stat('Top 10 finishes',stats.top10)}${stat('Top 5 finishes',stats.top5)}${stat('Top 3 finishes',stats.top3)}${stat('Wins',stats.wins)}${stat('Lifetime winnings',money(stats.winnings),'money-stat')}</div><p class="profile-stats-note">Finishes, records, and published placement and Big Fish payouts are verified through Indian Lake.</p></section></div><div class="profile-social"><span>Follow ${escapeHtml(displayName)}</span>${socials.length?socials.map(([label,url])=>`<a href="${escapeHtml(url)}" target="_blank" rel="noopener">${label} ↗</a>`).join(''):'<em class="profile-social-empty">No social links added yet.</em>'}</div>`;
}
async function fetchJson(url,options){const response=await fetch(url,options);const data=await response.json().catch(()=>({error:'Something went wrong'}));if(!response.ok)throw new Error(data.error||'Something went wrong');return data}
async function loadPublicProfiles(){try{const data=await fetchJson('/api/profiles');publicProfiles=Object.fromEntries(data.profiles.map(profile=>[profile.member_name,profile]));renderAnglers();renderAnglerProfilePage()}catch(error){console.warn('Profiles unavailable',error)}}
function setProfilePanel(signedIn){$('#profileSignedOut').hidden=signedIn;$('#profileForm').hidden=!signedIn;$('#profileAccount').hidden=!signedIn}
function fillProfileForm(profile){const form=$('#profileForm');const values=profile||{};['member_name','display_name','hometown','fishing_method','years_fishing','favorite_water','personal_best_blue','personal_best_flathead','personal_best_channel','bio','facebook_url','instagram_url','tiktok_url','youtube_url'].forEach(name=>{form.elements[name].value=values[name]??''})}
async function openProfileModal(){
  lastFocused=document.activeElement;$('#profileModal').classList.add('open');$('#profileModal').setAttribute('aria-hidden','false');$('#profileBackdrop').hidden=false;requestAnimationFrame(()=>$('#profileBackdrop').classList.add('open'));document.body.classList.add('drawer-open');
  const returnTo=`${location.pathname}#claim-profile`;
  $('#profileSignedOut a').href=`/signin-with-chatgpt?return_to=${encodeURIComponent(returnTo)}`;
  try{currentAccount=await fetchJson('/api/member-account');setProfilePanel(currentAccount.authenticated);if(currentAccount.authenticated){$('#profileAccountName').textContent=currentAccount.user.name||currentAccount.user.email;$('#memberName').innerHTML='<option value="">Choose your roster name</option>'+memberNames.map(name=>`<option value="${escapeHtml(name)}">${escapeHtml(name)}${publicProfiles[name]&&currentAccount.profile?.member_name!==name?' — claimed':''}</option>`).join('');fillProfileForm(currentAccount.profile);if(!currentAccount.profile&&requestedProfileMember)$('#memberName').value=requestedProfileMember;$('#profileTitle').textContent=currentAccount.profile?'Edit your member profile':'Claim your roster profile'}else{$('#profileTitle').textContent='Create your member profile'}}catch(error){toast(error.message)}
  $('#closeProfile').focus();
}
function closeProfileModal(){if(!$('#profileModal').classList.contains('open'))return;$('#profileModal').classList.remove('open');$('#profileModal').setAttribute('aria-hidden','true');$('#profileBackdrop').classList.remove('open');document.body.classList.remove('drawer-open');setTimeout(()=>{$('#profileBackdrop').hidden=true},250);if(lastFocused)lastFocused.focus()}
async function saveProfile(event){event.preventDefault();const form=new FormData(event.currentTarget);const payload=Object.fromEntries(form.entries());const button=$('#saveProfile');button.disabled=true;button.textContent='Saving…';try{const data=await fetchJson('/api/profile',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});currentAccount.profile=data.profile;await loadPublicProfiles();fillProfileForm(data.profile);$('#profileTitle').textContent='Edit your member profile';toast('Profile saved')}catch(error){toast(error.message)}finally{button.disabled=false;button.textContent='Save profile'}}
function renderLiveBroadcast(){
  const frame=$('#liveBroadcastFrame'),placeholder=$('#livePlaceholder'),link=$('#liveBroadcastLink'),note=$('#liveBroadcastNote');
  if(liveBroadcast.embedUrl){frame.src=liveBroadcast.embedUrl;frame.hidden=false;placeholder.hidden=true;note.textContent='The official broadcast is ready';}
  if(liveBroadcast.watchUrl){link.href=liveBroadcast.watchUrl;link.hidden=false;}
}
function renderProducts(filter='all'){
  const visible = products.filter(product => filter==='all' || product.category===filter);
  $('#productGrid').innerHTML = visible.map(product => `<article class="product-card${product.comingSoon?' is-coming-soon':''}"><div class="product-image">${product.badge?`<span class="product-badge">${product.badge}</span>`:''}${product.image?`<img src="/${product.image}" alt="${escapeHtml(product.name)} artwork" loading="lazy" decoding="async">`:`<div class="product-art">${product.art}<small>${product.sub}</small></div>`}</div><div class="product-info"><h3>${product.name}</h3>${product.description?`<p>${escapeHtml(product.description)}</p>`:''}${product.sizes?`<label class="product-size">Size <span>Required</span><select data-size-for="${product.id}" aria-label="Choose a required size for ${escapeHtml(product.name)}" required><option value="" selected disabled>Select size</option>${product.sizes.map(size=>`<option value="${size}">${size}${product.sizeAdjustments?.[size]?` (+${money(product.sizeAdjustments[size])})`:''}</option>`).join('')}</select></label>`:''}<div class="product-meta"><strong data-price-for="${product.id}">${money(product.price)}</strong>${product.comingSoon?'<span class="coming-soon-label">Launching soon</span>':`<button class="quick-add" type="button" data-id="${product.id}" aria-label="Buy ${product.name} securely">Buy now</button>`}</div></div></article>`).join('');
}

function checkoutUrl(product,size=''){
  const base=product.checkout?.[size]||product.checkout?.base;
  if(!base)return '';
  const orderReference=`${product.id}-size-${size||'one-size'}`.toLowerCase();
  return `${base}?client_reference_id=${encodeURIComponent(orderReference)}`;
}
const productUnitPrice=(product,size='')=>product.price+(product.sizeAdjustments?.[size]||0);
const cartItemKey=item=>`${item.id}::${item.size||''}`;
function saveCart(){localStorage.setItem('katyakersCartV3',JSON.stringify(cart));renderCart()}
function addToCart(id,size=''){const item=cart.find(entry=>entry.id===id&&(entry.size||'')===size);item?item.qty++:cart.push({id,size,qty:1});saveCart();toast(`Added${size?` size ${size}`:''} to cart`)}
function removeFromCart(key){cart=cart.filter(item=>cartItemKey(item)!==key);saveCart();toast('Removed from cart')}
function renderCart(){
  const count = cart.reduce((sum,item)=>sum+item.qty,0);
  $('#cartCount').textContent = count;
  $('#cartButton').setAttribute('aria-label',`Open merchandise cart, ${count} ${count===1?'item':'items'}`);
  $('#cartItems').innerHTML = cart.length ? cart.map(item=>{const product=products.find(entry=>entry.id===item.id);const unit=productUnitPrice(product,item.size);return `<div class="cart-item"><div class="cart-thumb" aria-hidden="true">K</div><div><h3>${product.name}</h3><p>${item.size?`Size ${item.size} · `:''}Qty ${item.qty} · ${money(unit*item.qty)}</p></div><button type="button" data-remove="${escapeHtml(cartItemKey(item))}" aria-label="Remove ${product.name}${item.size?` size ${item.size}`:''}">Remove</button></div>`}).join('') : '<div class="empty-cart"><h3>Your cart is empty</h3><p>Add official Katyakers gear to get started.</p></div>';
  $('#cartSubtotal').textContent = money(cart.reduce((sum,item)=>{const product=products.find(entry=>entry.id===item.id);return sum+productUnitPrice(product,item.size)*item.qty},0));
}
function toast(message){const element=$('#toast');element.textContent=message;element.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>element.classList.remove('show'),1800)}
function updateCountdown(){
  const target = new Date('2026-09-12T07:00:00-04:00');
  const diff = Math.max(0,target-Date.now());
  const values=[Math.floor(diff/86400000),Math.floor(diff/3600000)%24,Math.floor(diff/60000)%60];
  $('#countdown').innerHTML=['Days','Hours','Min'].map((label,index)=>`<div><strong>${String(values[index]).padStart(2,'0')}</strong><span>${label}</span></div>`).join('');
}
function setMenu(open){const nav=$('#mainNav'),button=$('#menuToggle');nav.classList.toggle('open',open);button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Close navigation':'Open navigation')}
function openCart(){lastFocused=document.activeElement;$('#cartDrawer').classList.add('open');$('#cartDrawer').setAttribute('aria-hidden','false');$('#drawerBackdrop').hidden=false;requestAnimationFrame(()=>$('#drawerBackdrop').classList.add('open'));$('#cartButton').setAttribute('aria-expanded','true');document.body.classList.add('drawer-open');$('#closeCart').focus()}
function closeCart(){if(!$('#cartDrawer').classList.contains('open'))return;$('#cartDrawer').classList.remove('open');$('#cartDrawer').setAttribute('aria-hidden','true');$('#drawerBackdrop').classList.remove('open');$('#cartButton').setAttribute('aria-expanded','false');document.body.classList.remove('drawer-open');setTimeout(()=>{$('#drawerBackdrop').hidden=true},250);if(lastFocused)lastFocused.focus()}
function requestOrder(){
  if(!cart.length){toast('Your cart is empty');return}
  const lines=cart.map(item=>{const product=products.find(entry=>entry.id===item.id);return `${product.name}${item.size?` — Size ${item.size}`:''} — Qty ${item.qty} — ${money(productUnitPrice(product,item.size)*item.qty)}`});
  const total=$('#cartSubtotal').textContent;
  const body=encodeURIComponent(`Hi Katyakers,\n\nI'd like to request this merchandise order:\n\n${lines.join('\n')}\n\nEstimated subtotal: ${total}\n\nPlease confirm sizes, availability, shipping, and payment.\n`);
  window.location.href=`mailto:corey@katyakers.com?subject=Katyakers%20merchandise%20order&body=${body}`;
}

document.addEventListener('click',event=>{
  const target=event.target;
  const claimButton=target.closest('[data-claim-member]');
  if(claimButton){requestedProfileMember=claimButton.dataset.claimMember;openProfileModal()}
  if(target.matches('.quick-add')){
    const product=products.find(entry=>entry.id===target.dataset.id);
    const sizeSelect=$(`[data-size-for="${target.dataset.id}"]`);
    const size=sizeSelect?.value||'';
    if(product.sizes && !size){sizeSelect.classList.add('size-required');sizeSelect.focus();toast('Please select a shirt size');return}
    const url=checkoutUrl(product,size);
    if(url)window.location.href=url;else toast('Checkout is not available for this item yet');
  }
  if(target.matches('[data-remove]'))removeFromCart(target.dataset.remove);
  if(target.matches('.filter')){document.querySelectorAll('.filter').forEach(button=>{button.classList.remove('active');button.setAttribute('aria-pressed','false')});target.classList.add('active');target.setAttribute('aria-pressed','true');renderProducts(target.dataset.filter)}
  if(target.closest('.main-nav a'))setMenu(false);
});
document.addEventListener('change',event=>{
  const select=event.target.closest('[data-size-for]');
  if(!select)return;
  const product=products.find(entry=>entry.id===select.dataset.sizeFor);
  select.classList.remove('size-required');
  $(`[data-price-for="${product.id}"]`).textContent=money(productUnitPrice(product,select.value));
  const button=$(`.quick-add[data-id="${product.id}"]`);
  button.setAttribute('aria-label',`Buy ${product.name}, size ${select.value}, securely`);
});
document.addEventListener('keydown',event=>{
  if(event.key==='Escape'){setMenu(false);closeCart();closeProfileModal()}
  if(event.key==='Tab' && $('#cartDrawer').classList.contains('open')){const focusable=[...$('#cartDrawer').querySelectorAll('button,a,[tabindex]:not([tabindex="-1"])')].filter(element=>!element.disabled);if(!focusable.length)return;const first=focusable[0],last=focusable[focusable.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}}
});
$('#showAllAnglers').addEventListener('click',()=>{rosterExpanded=!rosterExpanded;renderAnglers()});
$('#profileButton').addEventListener('click',openProfileModal);
$('#closeProfile').addEventListener('click',closeProfileModal);
$('#profileBackdrop').addEventListener('click',closeProfileModal);
$('#profileForm').addEventListener('submit',saveProfile);
$('#menuToggle').addEventListener('click',()=>setMenu(!$('#mainNav').classList.contains('open')));
$('#cartButton').addEventListener('click',openCart);
$('#closeCart').addEventListener('click',closeCart);
$('#drawerBackdrop').addEventListener('click',closeCart);
$('#checkoutButton').addEventListener('click',requestOrder);

renderStandings();renderEvents();renderAnglers();renderNews();renderAnglerProfilePage();renderNewsArticlePage();renderLiveBroadcast();renderProducts();renderCart();updateCountdown();loadPublicProfiles();if(location.hash==='#claim-profile')openProfileModal();setInterval(updateCountdown,60000);

