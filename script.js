const standings = [
  {name:'Matt Stewart',points:489,detail:'Official series rank #2',move:'â€”'},
  {name:'Brandon Hunter',points:483,detail:'Official series rank #3',move:'â€”'},
  {name:'Jacob Leake',points:479,detail:'Official series rank #4',move:'â€”'},
  {name:'Blayne Peterman',points:467,detail:'Official series rank #5',move:'â€”'}
];
const FISHING_CHAOS_CLUB_URL = 'https://app.fishingchaos.com/club/Ehg8nJithN8CCAMoLKHj';
const FISHING_CHAOS_SERIES_TOURNAMENTS_URL = `${FISHING_CHAOS_CLUB_URL}/tournament-series/a7NS6zRU4LrTmuYPWIDH/tournaments`;
const liveBroadcast = {embedUrl:'',watchUrl:''};
const events = [
  {month:'APR',day:'11',name:'Rocky Fork',detail:'29 anglers Â· Complete',status:'Complete',done:true,url:'https://app.fishingchaos.com/tournament/sjOzaQrBhQHvTn0O8ETj'},
  {month:'APR',day:'25',name:'Hoover Reservoir',detail:'23 anglers Â· Complete',status:'Complete',done:true,url:'https://app.fishingchaos.com/tournament/3kcgxAsCv7mJV6uxMcJu'},
  {month:'MAY',day:'9',name:'Caesar Creek',detail:'23 anglers Â· Complete',status:'Complete',done:true,url:'https://app.fishingchaos.com/tournament/O7hRGI225ITNazEe2eml'},
  {month:'MAY',day:'24',name:'Sandusky Bay',detail:'24 anglers Â· Complete',status:'Complete',done:true,url:'https://app.fishingchaos.com/tournament/JbojeSRqs1YifPoBPp8R'},
  {month:'JUN',day:'20',name:'Sandusky Bay Co-Event',detail:'29 anglers Â· Complete',status:'Complete',done:true,url:'https://app.fishingchaos.com/tournament/qU02CzQoOD82or0KhAOv'},
  {month:'JUL',day:'11',name:'Deer Creek',detail:'Rain-soaked showdown Â· Complete',status:'Complete',done:true,url:'https://app.fishingchaos.com/tournament/1eo6UgxmQx1LzxDHiX0k'},
  {month:'JUL',day:'25',name:'Seneca Lake',detail:'7:00 AMâ€“4:00 PM Â· $2,000 added',status:'Registration open',next:true,url:'https://app.fishingchaos.com/tournament/1sg3z3WItJCo4PgyK0uI'},
  {month:'AUG',day:'7â€“9',name:'48-Hour All-Ohio',detail:'All legal Ohio waters',status:'Registration open',url:'https://app.fishingchaos.com/tournament/yvSiToIoNhEW0DO8TXw4'},
  {month:'AUG',day:'15â€“16',name:'Scioto River 24-Hour',detail:'Noon Saturdayâ€“Noon Sunday',status:'Upcoming',url:'https://app.fishingchaos.com/tournament/CibEwf4GgRCAQAQ5V0kz'},
  {month:'SEP',day:'12',name:'Ohio River',detail:'River + approved tributaries',status:'Upcoming',url:'https://app.fishingchaos.com/tournament/ziSP9LjG69LXOGJHOA9f'},
  {month:'OCT',day:'10',name:'Championship',detail:'Top 15 AOY anglers Â· $5,000 added',status:'Qualified field',url:FISHING_CHAOS_SERIES_TOURNAMENTS_URL,seriesFallback:true}
];
const newsArticles = [
  {
    slug:'trail-update-july-13-2026',event:'2026 Trail Update',date:'July 13, 2026',category:'Current events',cardBanner:'Six down. Five to go.',
    title:'One point at the top as the trail turns toward Seneca',
    dek:'Corey Jeffers leads Matt Stewart by a single point after six events, with 858 fish submitted and five championship-shaping stops still ahead.',
    facts:[['6','Completed events'],['858','Fish submitted'],['$26,300','Paid out']],
    sidebarTitle:'AOY top five',
    sidebarItems:[['Corey Jeffers','490 pts'],['Matt Stewart','489 pts'],['Brandon Hunter','483 pts'],['Jacob Leake','479 pts'],['Blayne Peterman','467 pts']],
    highlight:['The margin','1 point','Jeffers leads Stewart by one; Hunter is seven points off the lead.'],
    factNote:'Standings and event details come from Fishing Chaos. The payout total reflects published Katyakers event recaps through Deer Creek.',
    paragraphs:[
      'The inaugural Katyakers season has reached its hinge point. Six of 11 scheduled events are complete, from the April 11 opener at Rocky Fork through the July 11 rain-soaked stop at Deer Creek. Those fields add up to 143 angler entries and 858 accepted fish, while published Katyakers recaps account for $26,300 in payouts.',
      'The Angler of the Year race is nearly level. Corey Jeffers holds 490 points, only one ahead of Matt Stewart at 489. Brandon Hunter sits at 483, Jacob Leake at 479, and Blayne Peterman at 467. Only 23 points separate first from fifth.',
      'Seneca Lake is next on July 25. Fishing Chaos lists a 7:00 AM to 4:00 PM event window, with registration closing at 6:59 AM that morning. The event uses a longest-five catfish leaderboard, so a complete limitâ€”not one isolated giantâ€”will shape the standings.',
      'After Seneca, the published schedule continues with the 48-Hour All-Ohio event, the Scioto River 24-Hour, the Ohio River stop, and the top-15 championship. With five dates remaining, every current contender still has meaningful ground available.'
    ],
    sources:[
      ['Official Fishing Chaos standings','https://app.fishingchaos.com/club/Ehg8nJithN8CCAMoLKHj/tournament-series/a7NS6zRU4LrTmuYPWIDH'],
      ['Katyakers Facebook updates','https://www.facebook.com/KATYAKERSOUTFITTERS']
    ]
  },
  {
    slug:'deer-creek-2026',event:'Deer Creek',date:'July 11, 2026',time:'7:00 AMâ€“4:00 PM ET',anglers:15,fish:104,
    title:'Jeffers wins a rain-soaked Deer Creek showdown',
    dek:'Corey Jeffers totaled 130 inches to win as Brandon Hunter and Jeff Tate finished just 1.75 inches behind.',
    podium:[['Corey Jeffers','130.00â€³'],['Brandon Hunter','128.25â€³'],['Jeff Tate','128.25â€³']],
    bigFish:['Corey Jeffers','30.75â€³ channel catfish'],
    paragraphs:[
      'Persistent rain made Deer Creek a test of preparation and patience, but the field kept producing. Fifteen anglers combined for 104 accepted fish during the nine-hour event.',
      'Corey Jeffers built a 130.00-inch total to secure the win. The race behind him could not have been tighter: Brandon Hunter and Jeff Tate each finished on 128.25 inches, only 1.75 inches off the winning mark.',
      'Jeffers also claimed Big Fish with a 30.75-inch channel catfish, completing a sweep of the event win and the dayâ€™s largest submitted fish.'
    ],
    chaosUrl:'https://app.fishingchaos.com/tournament/1eo6UgxmQx1LzxDHiX0k'
  },
  {
    slug:'sandusky-bay-june-2026',event:'Sandusky Bay Co-Event',date:'June 20, 2026',time:'7:00 AMâ€“4:00 PM ET',anglers:29,fish:226,
    title:'Leake tops a high-volume Sandusky Bay field',
    dek:'Jacob Leake won with 170 inches as 29 anglers submitted a season-high 226 fish.',
    podium:[['Jacob Leake','170.00â€³'],['Kyle Harman','165.00â€³'],['Nicholas Wilson','158.75â€³']],
    bigFish:['Kyle Harman','36.25â€³ channel catfish'],
    paragraphs:[
      'Sandusky Bay delivered the busiest leaderboard of the first six events. Twenty-nine anglers recorded 226 accepted fish, the highest event submission total of the season through Deer Creek.',
      'Jacob Leake separated himself with a 170.00-inch score and a five-inch winning margin. Kyle Harman finished second at 165.00 inches, while Nicholas Wilson completed the podium with 158.75 inches.',
      'Harman added the Big Fish honor with a 36.25-inch channel catfish, the largest channel cat recorded in a completed Katyakers event through July 11.'
    ],
    chaosUrl:'https://app.fishingchaos.com/tournament/qU02CzQoOD82or0KhAOv'
  },
  {
    slug:'sandusky-bay-may-2026',event:'Sandusky Bay',date:'May 24, 2026',time:'7:00 AMâ€“4:00 PM ET',anglers:24,fish:218,
    title:'Half an inch decides a Sandusky Bay thriller',
    dek:'Matt Stewart edged Brandon Hunter and Skip Martin in the closest winning margin of the seasonâ€™s first six events.',
    podium:[['Matt Stewart','166.50â€³'],['Brandon Hunter','166.00â€³'],['Skip Martin','166.00â€³']],
    bigFish:['Troy Geer','35.25â€³ channel catfish'],
    paragraphs:[
      'Sandusky Bay produced a true photo finish. Twenty-four anglers combined for 218 accepted fish, and the entire podium was separated by only half an inch.',
      'Matt Stewartâ€™s 166.50-inch total held up for the victory. Brandon Hunter and Skip Martin both finished at 166.00 inches, leaving just 0.50 inches between first place and the two anglers immediately behind him.',
      'Troy Geer landed the eventâ€™s Big Fish, a 35.25-inch channel catfish, during one of the most productive stops on the 2026 trail.'
    ],
    chaosUrl:'https://app.fishingchaos.com/tournament/JbojeSRqs1YifPoBPp8R'
  },
  {
    slug:'caesar-creek-2026',event:'Caesar Creek',date:'May 9, 2026',time:'7:00 AMâ€“4:00 PM ET',anglers:23,fish:79,
    title:'Stewart takes control at Caesar Creek',
    dek:'Matt Stewart posted 174.50 inches to beat Blayne Peterman and Skip Martin.',
    podium:[['Matt Stewart','174.50â€³'],['Blayne Peterman','166.00â€³'],['Skip Martin','157.75â€³']],
    bigFish:['Auzzie Dangerous','37.50â€³ blue catfish'],
    paragraphs:[
      'Caesar Creek asked the field to make every fish count. Twenty-three anglers produced 79 accepted submissions, the lowest event total among the first six completed stops.',
      'Matt Stewart answered with a 174.50-inch score and an 8.50-inch victory over Blayne Peterman. Skip Martinâ€™s 157.75-inch total earned the final podium position.',
      'Auzzie Dangerous delivered the dayâ€™s standout single fish, earning Big Fish with a 37.50-inch blue catfish.'
    ],
    chaosUrl:'https://app.fishingchaos.com/tournament/O7hRGI225ITNazEe2eml'
  },
  {
    slug:'hoover-reservoir-2026',event:'Hoover Reservoir',date:'April 25, 2026',time:'7:00 AMâ€“4:00 PM ET',anglers:23,fish:107,
    title:'Peterman wins big at Hoover Reservoir',
    dek:'Blayne Petermanâ€™s 187.50 inches set the highest winning score of the seasonâ€™s first six completed events.',
    podium:[['Blayne Peterman','187.50â€³'],['Jacob Leake','182.50â€³'],['Corey Jeffers','179.00â€³']],
    bigFish:['Matt Stewart','46.00â€³ blue catfish'],
    paragraphs:[
      'Hoover Reservoir produced both a huge winning total and the largest submitted fish of the season through Deer Creek. Twenty-three anglers combined for 107 accepted fish.',
      'Blayne Peterman won with 187.50 inches, five inches ahead of Jacob Leake. Corey Jeffers stayed close at 179.00 inches to complete a podium separated by only 8.50 inches from first to third.',
      'Matt Stewart supplied the dayâ€™s headline catch: a 46.00-inch blue catfish that remains the biggest submitted fish in the first six completed Katyakers events.'
    ],
    chaosUrl:'https://app.fishingchaos.com/tournament/3kcgxAsCv7mJV6uxMcJu'
  },
  {
    slug:'rocky-fork-2026',event:'Rocky Fork',date:'April 11, 2026',time:'7:00 AMâ€“4:00 PM ET',anglers:29,fish:124,
    title:'Jeffers opens the season with a Rocky Fork win',
    dek:'Corey Jeffers held off Dan Phelps and Chris Poor in the 2026 trail opener.',
    podium:[['Corey Jeffers','154.25â€³'],['Dan Phelps','151.00â€³'],['Chris Poor','149.75â€³']],
    bigFish:['Dan Phelps','33.50â€³ channel catfish'],
    paragraphs:[
      'The 2026 Katyakers season began at Rocky Fork with 29 anglers and 124 accepted fish. From the opening stop, the podium race stayed compact.',
      'Corey Jeffers secured the seasonâ€™s first victory with 154.25 inches. Dan Phelps finished only 3.25 inches back at 151.00, and Chris Poor took third with 149.75 inches.',
      'Phelps paired his runner-up finish with Big Fish honors after submitting a 33.50-inch channel catfish.'
    ],
    chaosUrl:'https://app.fishingchaos.com/tournament/sjOzaQrBhQHvTn0O8ETj'
  }
];
const featuredAnglersBase = [
  {name:'Corey Jeffers',rank:'#1 AOY',initials:'CJ',stats:'490 pts Â· Official series leader'},
  {name:'Matt Stewart',rank:'#2 AOY',initials:'MS',stats:'489 pts Â· One point off the lead'},
  {name:'Brandon Hunter',rank:'#3 AOY',initials:'BH',stats:'483 pts Â· Official series standings'},
  {name:'Jacob Leake',rank:'#4 AOY',initials:'JL',stats:'479 pts Â· Official series standings'}
];
const memberNames = [
  'Michael Gallaugher','Scott Hickman','Scott Wills','Justin Scheuerman','Robert Biehler','Kyle Harman',
  'Matthew Collene','Austyn Ray','David Rose','Kristian Moore','John Ratliff','Robert Ratliff',
  'Steven Mills, Jr','Jermaine Jones','Jason Berenato','Jeramy Paramore','Cage Keysor','Mark Rupe',
  'Skip Martin','Justin Roberts','Bryan Mellon','Brandon Penwell','Kenneth Clifford','Bryan Ellis',
  'Barbara Bolser','Harley White','Anthony Smith','John Drummond','Paula Hood','Harry Hefner',
  'Justin Johnston','Justin Cantrell','Clint Bafford','Nicholas Wilson','Zachary Shipley','Andrew Chanthathirath',
  'Codey Layport','Paul Burnside','Cameron Marriott','Aubrey Boykin','Jack Richardson','Kayak Mike',
  'Gage Smith','Peter Domin','Clayton Adkins','Nick Cruz','Amanda Johnson','Jeff Tate','Brier Thompson',
  'River Kline','Curtis Cunningham','Krazy Kat Ladies','Robert Shively','Troy Geer','Brandon Hunter',
  'Blayne Peterman','Dan Phelps','Auzzie Dangerous','James Capehart','William Sobers','Kevin Miller',
  'Jacob Leake','Chris Poor','Corey Jeffers','Jon Myers','Matt Stewart','Tom Nunley','Kat Yakers'
];
const memberPhotos = {
  'Scott Hickman':'assets/members/22d81cb9b5f44e76.jpg','Scott Wills':'assets/members/6a16a3d5e9606183.jpg',
  'Justin Scheuerman':'assets/members/440977bd2ea0f35f.jpg','Austyn Ray':'assets/members/c9c94c8de56d234d.jpg',
  'Kristian Moore':'assets/members/2e9d947141090c49.jpg','Kyle Harman':'assets/members/a26c5f319e8df7e7.jpg',
  'Robert Biehler':'assets/members/f8172a76b72feb64.jpg','Cage Keysor':'assets/members/2d0ab81823e80cdd.jpg',
  'Skip Martin':'assets/members/2c980b799d61405b.jpg','John Ratliff':'assets/members/ea8b1e922171f4af.jpg',
  'Steven Mills, Jr':'assets/members/037bbe9c729071f8.jpg','Robert Ratliff':'assets/members/d3270150665dc2b5.jpg',
  'Jason Berenato':'assets/members/1f2d0cf7a7f4df1b.jpg','Brandon Penwell':'assets/members/c93b732d402f5a8b.jpg',
  'Bryan Mellon':'assets/members/1354cae5a8914ec5.jpg','John Drummond':'assets/members/9a9c490aeea74afc.jpg',
  'Paula Hood':'assets/members/af7f4154cae7c520.jpg','Andrew Chanthathirath':'assets/members/f5f8675f0d5386dc.jpg',
  'Justin Johnston':'assets/members/8477dbbe6b5a994d.jpg','Clint Bafford':'assets/members/f8f42e4932c98f39.jpg',
  'Nicholas Wilson':'assets/members/34c3d5e281c0d4cd.jpg','Gage Smith':'assets/members/a73a740b35bc7c3e.jpg',
  'Kayak Mike':'assets/members/987a2a9980652e47.jpg','Aubrey Boykin':'assets/members/db66f62450dd1fdd.jpg',
  'Cameron Marriott':'assets/members/d317123431281637.jpg','Clayton Adkins':'assets/members/a86df778dd0c81e1.jpg',
  'Nick Cruz':'assets/members/55394c47f1fb44c5.jpg','Jeff Tate':'assets/members/535fb92670d59e48.jpg',
  'River Kline':'assets/members/682bebf952ed079e.jpg','Brier Thompson':'assets/members/82c8205ca20eb19a.jpg',
  'Amanda Johnson':'assets/members/ecee3dc923a87fd4.jpg','Robert Shively':'assets/members/fed69c4f21cf3603.jpg',
  'Blayne Peterman':'assets/members/900a2fa864618943.jpg','Brandon Hunter':'assets/members/51cb1052fd02875b.jpg',
  'Krazy Kat Ladies':'assets/members/94cf5b5675659794.jpg','Auzzie Dangerous':'assets/members/e7da2b8fdb4b0b46.jpg',
  'Kevin Miller':'assets/members/0f48f0323424c1f1.jpg','Jacob Leake':'assets/members/7d1663fa65b260ae.jpg',
  'James Capehart':'assets/members/989ee61964e3afa5.jpg','Matt Stewart':'assets/members/3beefaf8416e1907.jpg',
  'Chris Poor':'assets/members/b8f9f148b79a790c.jpg','Corey Jeffers':'assets/members/43ba88258188c374.jpg',
  'Tom Nunley':'assets/members/3ae36b1d9660f4fc.jpg','Jon Myers':'assets/members/80cc867dad1003e7.jpg'
};
const lifetimeStats = Object.fromEntries([
  ["Michael Gallaugher",1,0,0,0,0,0],["Justin Scheuerman",1,0,0,0,0,0],["Robert Biehler",1,1,0,0,0,0],["Kyle Harman",1,1,1,1,0,1470],
  ["Matthew Collene",1,0,0,0,0,0],["Austyn Ray",1,0,0,0,0,0],["David Rose",1,0,0,0,0,0],["Kristian Moore",1,0,0,0,0,0],
  ["John Ratliff",1,1,0,0,0,0],["Robert Ratliff",1,0,0,0,0,0],["Steven Mills, Jr",1,0,0,0,0,0],["Jason Berenato",2,0,0,0,0,0],
  ["Cage Keysor",2,0,0,0,0,0],["Mark Rupe",1,0,0,0,0,0],["Skip Martin",4,4,2,2,0,870],["Justin Roberts",4,3,0,0,0,0],
  ["Bryan Mellon",1,1,1,0,0,0],["Brandon Penwell",1,0,0,0,0,0],["Anthony Smith",2,0,0,0,0,0],["John Drummond",2,0,0,0,0,0],
  ["Justin Johnston",2,1,1,0,0,392],["Justin Cantrell",2,1,0,0,0,0],["Clint Bafford",5,2,0,0,0,0],["Nicholas Wilson",3,2,1,1,0,588],
  ["Andrew Chanthathirath",1,0,0,0,0,0],["Cameron Marriott",5,0,0,0,0,0],["Aubrey Boykin",1,0,0,0,0,0],["Jack Richardson",3,0,0,0,0,0],
  ["Kayak Mike",1,1,0,0,0,0],["Gage Smith",1,0,0,0,0,0],["Peter Domin",2,0,0,0,0,0],["Clayton Adkins",3,1,1,0,0,0],
  ["Amanda Johnson",1,0,0,0,0,0],["Jeff Tate",5,3,1,1,0,350],["Brier Thompson",1,1,1,0,0,0],["Curtis Cunningham",1,0,0,0,0,0],
  ["Krazy Kat Ladies",5,4,0,0,0,0],["Robert Shively",4,0,0,0,0,0],["Troy Geer",6,3,0,0,0,440],["Brandon Hunter",6,5,3,2,0,2367],
  ["Blayne Peterman",5,4,2,2,1,3440],["Dan Phelps",3,1,1,1,0,1470],["Auzzie Dangerous",6,3,1,0,0,430],["James Capehart",1,0,0,0,0,0],
  ["William Sobers",1,0,0,0,0,0],["Kevin Miller",1,0,0,0,0,0],["Jacob Leake",5,4,4,2,1,3525],["Chris Poor",5,1,1,1,0,588],
  ["Corey Jeffers",6,5,4,3,2,5155],["Jon Myers",6,0,0,0,0,0],["Matt Stewart",6,6,4,2,2,5215],["Tom Nunley",2,0,0,0,0,0]
].map(([name,eventsFished,top10,top5,top3,wins,winnings])=>[name,{eventsFished,top10,top5,top3,wins,winnings}]));
const emptyLifetimeStats = {eventsFished:0,top10:0,top5:0,top3:0,wins:0,winnings:0};
const verifiedRecords = Object.fromEntries([
  ["Amanda Johnson",54.75,"Hoover Reservoir",26.5,"Blue catfish","Hoover Reservoir"],["Andrew Chanthathirath",107.25,"Hoover Reservoir",34.5,"Blue catfish","Hoover Reservoir"],
  ["Anthony Smith",54.5,"Rocky Fork",28,"Channel catfish","Rocky Fork"],["Aubrey Boykin",53.75,"Hoover Reservoir",28.75,"Blue catfish","Hoover Reservoir"],
  ["Austyn Ray",85.5,"Sandusky Bay â€” June 20",32.25,"Channel catfish","Sandusky Bay â€” June 20"],["Auzzie Dangerous",151.75,"Sandusky Bay â€” June 20",37.5,"Blue catfish","Caesar Creek"],
  ["Blayne Peterman",187.5,"Hoover Reservoir",40,"Blue catfish","Hoover Reservoir"],["Brandon Hunter",166,"Sandusky Bay â€” May 24",34.5,"Channel catfish","Sandusky Bay â€” May 24"],
  ["Brandon Penwell",51.5,"Rocky Fork",28,"Channel catfish","Rocky Fork"],["Brier Thompson",173.5,"Hoover Reservoir",41.5,"Blue catfish","Hoover Reservoir"],
  ["Bryan Mellon",138.5,"Caesar Creek",33,"Blue catfish","Caesar Creek"],["Cage Keysor",79.5,"Deer Creek",29,"Channel catfish","Deer Creek"],
  ["Cameron Marriott",146.5,"Sandusky Bay â€” May 24",34,"Blue catfish","Caesar Creek"],["Chris Poor",149.75,"Rocky Fork",32.25,"Channel catfish","Rocky Fork"],
  ["Clayton Adkins",153.25,"Sandusky Bay â€” May 24",38,"Blue catfish","Hoover Reservoir"],["Clint Bafford",154,"Hoover Reservoir",39,"Blue catfish","Hoover Reservoir"],
  ["Corey Jeffers",179,"Hoover Reservoir",40.25,"Blue catfish","Hoover Reservoir"],["Curtis Cunningham",132,"Sandusky Bay â€” June 20",30,"Channel catfish","Sandusky Bay â€” June 20"],
  ["Dan Phelps",151,"Rocky Fork",33.5,"Channel catfish","Rocky Fork"],["David Rose",142.75,"Sandusky Bay â€” June 20",30.25,"Channel catfish","Sandusky Bay â€” June 20"],
  ["Gage Smith",25.75,"Hoover Reservoir",25.75,"Blue catfish","Hoover Reservoir"],["Jack Richardson",32.25,"Sandusky Bay â€” May 24",32.25,"Channel catfish","Sandusky Bay â€” May 24"],
  ["Jacob Leake",182.5,"Hoover Reservoir",40.25,"Blue catfish","Hoover Reservoir"],["Jason Berenato",130.75,"Sandusky Bay â€” June 20",31.5,"Channel catfish","Sandusky Bay â€” May 24"],
  ["Jeff Tate",150.75,"Sandusky Bay â€” June 20",40.5,"Blue catfish","Hoover Reservoir"],["John Drummond",146.75,"Sandusky Bay â€” May 24",30.5,"Channel catfish","Sandusky Bay â€” May 24"],
  ["John Ratliff",154,"Sandusky Bay â€” May 24",33.75,"Channel catfish","Sandusky Bay â€” May 24"],["Jon Myers",146.5,"Sandusky Bay â€” May 24",32.5,"Blue catfish","Hoover Reservoir"],
  ["Justin Cantrell",157,"Hoover Reservoir",39,"Blue catfish","Hoover Reservoir"],["Justin Johnston",157.25,"Sandusky Bay â€” June 20",33.5,"Channel catfish","Sandusky Bay â€” June 20"],
  ["Justin Roberts",157,"Sandusky Bay â€” May 24",35,"Channel catfish","Sandusky Bay â€” June 20"],["Kayak Mike",155.5,"Sandusky Bay â€” June 20",32.25,"Channel catfish","Sandusky Bay â€” June 20"],
  ["Kevin Miller",28,"Rocky Fork",28,"Channel catfish","Rocky Fork"],["Krazy Kat Ladies",159.25,"Sandusky Bay â€” May 24",34,"Channel catfish","Sandusky Bay â€” May 24"],
  ["Kristian Moore",117.5,"Sandusky Bay â€” May 24",33.75,"Channel catfish","Sandusky Bay â€” May 24"],["Kyle Harman",165,"Sandusky Bay â€” June 20",36.25,"Channel catfish","Sandusky Bay â€” June 20"],
  ["Matt Stewart",174.5,"Caesar Creek",46,"Blue catfish","Hoover Reservoir"],["Matthew Collene",78.75,"Sandusky Bay â€” June 20",28.75,"Channel catfish","Sandusky Bay â€” June 20"],
  ["Michael Gallaugher",110,"Deer Creek",24,"Channel catfish","Deer Creek"],["Nicholas Wilson",165,"Sandusky Bay â€” May 24",34,"Channel catfish","Sandusky Bay â€” May 24"],
  ["Robert Biehler",154.5,"Sandusky Bay â€” June 20",32,"Channel catfish","Sandusky Bay â€” June 20"],["Robert Ratliff",149.75,"Sandusky Bay â€” May 24",33.25,"Channel catfish","Sandusky Bay â€” May 24"],
  ["Robert Shively",153.75,"Sandusky Bay â€” May 24",38.5,"Blue catfish","Hoover Reservoir"],["Skip Martin",166,"Sandusky Bay â€” May 24",34,"Blue catfish","Caesar Creek"],
  ["Troy Geer",155,"Sandusky Bay â€” May 24",35.25,"Channel catfish","Sandusky Bay â€” May 24"],["William Sobers",20.75,"Rocky Fork",20.75,"Channel catfish","Rocky Fork"]
].map(([name,bestScore,bestScoreEvent,biggestFish,biggestFishSpecies,biggestFishEvent])=>[name,{bestScore,bestScoreEvent,biggestFish,biggestFishSpecies,biggestFishEvent}]));
const memberInitials = name => {
  const parts = name.replace(/[^A-Za-z0-9 ]/g,' ').split(/\s+/).filter(Boolean);
  return `${parts[0]?.[0] || 'K'}${parts.length > 1 ? parts[parts.length-1][0] : ''}`.toUpperCase();
};
const memberSlug = name => name.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const rosterPhoto = name => memberPhotos[name] ? `${memberPhotos[name]}?v=2` : '';
const anglers = memberNames.map(name => ({name,rank:'Official member',initials:memberInitials(name),photo:rosterPhoto(name),stats:'Katyakers of Ohio Â· Fishing Chaos roster'}));
const featuredAnglers = featuredAnglersBase.map(angler => ({...angler,photo:rosterPhoto(angler.name)}));
const votes = [
  {name:'Jacob Leake',votes:108},{name:'Cage Keysor',votes:55},{name:'Clayton Adkins',votes:36},
  {name:'Chris Poor',votes:32},{name:'Krazy Kat Ladies',votes:20},{name:'Skip Martin',votes:15},
  {name:'Clint Bafford',votes:9},{name:'Jon Myers',votes:9},{name:'Matt Stewart',votes:9},
  {name:'Corey Jeffers',votes:8},{name:'Cameron Marriott',votes:8},{name:'Blayne Peterman',votes:6},
  {name:'Dan Phelps',votes:6},{name:'Jeff Tate',votes:5},{name:'Justin Johnston',votes:4},
  {name:'Brier Thompson',votes:2},{name:'Troy Geer',votes:2},{name:'John Drummond',votes:2},
  {name:'Jason Berenato',votes:1},{name:'Austin Harding',votes:1},{name:'Brandon Hunter',votes:1},
  {name:'John Ratliff',votes:1},{name:'Shawn Wiseman',votes:1}
];
const votesLastUpdated = 'July 14, 2026 at 8:55 PM ET';
const voteVoters = {"Blayne Peterman":["Crenly Marrero","Isaac Anderson","Mary Sophia Grace Peterman","Matt Stewart","Matthew Dickson","Troy Reeg"],"Cage Keysor":["Aaliya Larsen","April Dawn","Ashton Fuller","Austin Combs","Austin Snyder","Beliah Schnell","Bobbi Jo Redding","Branden Young","Cameron Hand","Carson Liming","Chris Klewer","Chunkk Houser","Clay Drummond","Cole Leiss","Colton Fetters","Corbin Kayne","Damien Younger","Danya Bryson","David Klingbeil","Derek Summers","Dylan Caudill","Elaine Garrett","Hurbzi","Jj Eves","Jordan Carolus","Jose Melendez","Joseph Springer","Joshua Pontious","Kayla Summers","Kenyon Sears","Kimmi Kaye","LaTisha Liming","Liv Springer","Marshall Denney","Matt Borger","Michael Dale Schooley","Michael Posada","Milo Keysor","Myles Bonifas","Nate Bowman","Nate Longwell","Noah Leininger","Prosper Bryant","Ray Melioli","Ricky Joseph Raudabaugh","Roberts Guy","Ross Klosterman","Ryan Sanning","Sandy Ebright","Seth Huston","Spencer Wannemacher","Tristan Peck","Tyler Franklin","Vicki Masonbrink","Zach Spinns"],"Jacob Leake":["Allison Leake","Amber Lehman","Andy Ward Jr.","Angela Leake","Asa Bentley","Ashlie Hurst","Ashton Ray Kasler","Ben Odom","Bertie Clement","Bethany Young","Bill Craig","Billy Entingh","Brandon Schrader","Brian Lehman","Brittany Leake","Brittany Walls","Candy Blevins","Charlene Berry","Cherokiee Mohler","Chris Allen Goodwin","Colin Turner","Courtney Glover","Crystal Dawn","Dalton Hurst","Dan Chesser","Daniel Large","Dave Thompson","David Chalfant","David McCoy","Debbi Sue","Destiny Warren","Emily Maye","Evan Ross","Fred Cox","Gene Bourne","Glen Burchfield","Jack Scoles","Jacob Gray","Jacob Leake","Jaden Stiltner","Jakob Kline","James Reuscher","Jana Sue Lehman","Jared Bartow","Jared Lewellyn","Jasmine Chandler","Jay Stiltner","Jennetta Polly","Joe Owens","Johnny Hammersticks","Jonathan Maye","Joscelyn Jones","Josh Entingh","Josh Snyder","Josh Upchurch","Joyce Evans","Justen Patterson","Justin Tolliver","Katlin Nicole Leake","Kenny Sigler","Kermit Berry","Kim FisherBag","Kimberly Louise","Krystal Williams","Lawrence Dotson","Louis Warr","Luke Blosser","Man Rose","Megan Studebaker","Meghann Shearer","Michael Bourne","Michael Fabbro","Michael Holmes","Misti Louise","Misty Maye","Nicholas Andrew Leake","Peyton Chandler","Randle Rains","Richard Leake","Ricky Moorehead","Robert Kilkenny","Ron Hughes","Rose Bruce","Rose Hurley Shaver","Ross Asbury","Rusty Dusty","Samantha Glover","Samantha Holschuh","Sarah Deer","Sebastian Wiseman","Shane Holschuh","Shawn Douglas","Shawn Hurst","Shawn Wiseman","Shiasa Turner","Stephanie Mcclurg-Stiltner","Susan Williams","Tabby Goodwin","Tabitha Goodwin","Tami Riffle","Tammy Miller","Tiffany Rife","Tina Stutler","Todd Chandler","Troy Glover","Tyler Vickroy","Vernon Staley","Zachary Gibbs"],"Krazy Kat Ladies":["Aiden Tackett","Bernice White","Bettina Lemaster","Brianna Jo Sharrock","Bryan Mellon","Colin McAdams","Corey Jeffers","Hiltibran C James","Jackie Huggins","Janet Hopper","Janna Stone","Jeffrey W Sharrock","Jennifer Lynn Hood","Jennifer Shaw","Jessica Asbury","Jodi Mitchell","Jordan Elizabeth","Kaylee Carol Ann","Mark Blauvelt","Natalie Taylor"],"Clint Bafford":["Courtney Rouse","David Christy","Jack Richardson","Jef Bafford","Neysa Leichty","Sara Marie O'Daniels","Shawnya Marie Scott","Tracy Christy","Travis Christy"],"Chris Poor":["A.D. Grierson","Adam Peace","Ann Smith","Anthony Grierson","Brandon Neeley","Chelsea Moser","Danielle Shanley","Danny Lamb","David Heidorn","Dustin Poor","Haley Heidorn","Hannah Marcum","Hayley Hamblin","Julie Jones","Keiran Engle","Kelly Haston","Kenneth Crabtree","Kim Maness","Lindsay Hambly","Lisa Black Hance","Lori Pence","Mandi Lawwill","Mike Buis","Mike Smart","Rachel Scott-Miller","Ronnie Lawson","Tammy Peters-Poor","Teri Frazier","Terry C Parsons","Tina Vaughn","Tyler Shane","Victoria Lynne Davis"],"Corey Jeffers":["Brad Adams","Clint Bafford","Hunter Butin","Justin Roberts","Kevin Harvey","Mike Mccurry","Pam Smith","Paula Hood"],"Jon Myers":["Alex Brown","Ben Kopacz","Cameron Marriott","Michelle Demchock McKee","Nathan Karpinski","Renea Myers","Seth Myers","Shirley Ann Myers","Tori Robb"],"Cameron Marriott":["Ashlee Watts","Jobie McCoy","Jonathon Myers","Keith Wallington","Laura Wallington","Micha Marriott","Rebecca Miler","Sandi Hoffman"],"Skip Martin":["Blaze Fox","Dewayne Hunter","Gabi Blackivory","James Bink Fox","Jason Adams","Johnnie Fortner","Kevin Blough","Nancy Frye","Rafe Reynolds","Richard Jackson","Robert Biehler","Sandra Martin","Sergio Rodriguez","Steve Gray","William Roberts"],"Dan Phelps":["Joe Brickner","Keith Miller","Lonnie Rigsby","Mike Mentges","Ryan Mi","Tosh T Collins"],"Jeff Tate":["Amber Marie Jeffers","David Adkins","Gina Thomas","Jessica Valentine","Sara Tate"],"Clayton Adkins":["April Adkins","Belinda Crane","Ben Arnold","Braedon Drummond","Brenda Leisure","Brittany Arnold","Calvin N Emma Lemaster","Charlie Cardwell","Clayton Adkins","Cory Lombard","Dawn Scott","Deanna Bumgardner","Debbie Campbell","Debbie Daugherty","Emily Adkins Ollangg","Hannah Mollette","Jason Dana Stewart","Jenifer Campbell","Jessica Reynolds","John Bumgardner","Kathy Adkins","Kris Uhlig Miller","Matthew Adkins","Michael Fooce","Michelle Long Anders","Molly Bumgardner Stone","Nicky Heiser","Nik Hayes","Rachel Bumgardner","Richard Kevin Fox","Shane Bumgardner","Taylor Speakman","Tracy Nicole Adkins","Travis Bumgardner","Troy Adams","Twila Trein"],"Jason Berenato":["Diane Smith"],"Austin Harding":["Brandon Hunter"],"Justin Johnston":["Bryan Paul Leonard","Jared Mitchem","Joe Byrum","Pete J Craft"],"Matt Stewart":["Ami Stewart","Blayne Peterman","Bri Anne","Hope Stewart","Jon Calcara","Julie Calcara","Phil Neff","Shari Scarff","Trish Devaney"],"Brier Thompson":["Ciara Thompson","Ruth Thompson"],"Troy Geer":["Denise Kraft","Tina Kraft Purnell"],"John Drummond":["Michael Bell","Tina Skaggs"],"Brandon Hunter":["Jeff Tate"],"John Ratliff":["Tamara Ratlips"],"Shawn Wiseman":["Donna Lerch"]};
const products = [
  {id:'trail-tee',name:'Official Trail Tee',price:30,category:'apparel',badge:'New',image:'assets/merch/official-trail-tee.webp',description:'The official Katyakers of Ohio trail logo tee.',sizes:['S','M','L','XL','2XL','3XL'],sizeAdjustments:{'2XL':2,'3XL':4},checkout:{base:'https://buy.stripe.com/fZu14n5Kue4Y6NL7OG18c01','2XL':'https://buy.stripe.com/eVqeVd3Cmf922xv5Gy18c04','3XL':'https://buy.stripe.com/dRm14na0K1ic8VTd9018c05'}},
  {id:'schedule-tee',name:'2026 Schedule Tee',price:30,category:'apparel',badge:'New',image:'assets/merch/schedule-tee.webp',description:'The complete 2026 Katyakers tournament schedule in one bold design.',sizes:['S','M','L','XL','2XL','3XL'],sizeAdjustments:{'2XL':2,'3XL':4},checkout:{base:'https://buy.stripe.com/eVqaEXdcWf92dc98SK18c00','2XL':'https://buy.stripe.com/aFafZhb4O1ic5JHfh818c06','3XL':'https://buy.stripe.com/3cI28rb4Of92c85ed418c07'}},
  {id:'logo-hoodie',name:'Tournament Logo Hoodie',price:55,category:'apparel',badge:'Coming soon',art:'COMING SOON',sub:'TOURNAMENT LOGO HOODIE',comingSoon:true},
  {id:'snapback',name:'Official Trail Snapback',price:33,category:'headwear',badge:'New',image:'assets/merch/official-trail-snapback.webp',description:'Gray-and-blue flat-bill snapback featuring the official Katyakers trail logo.',checkout:{base:'https://buy.stripe.com/14A00jdcW5ysegdc4W18c02'}}
];

let cart = JSON.parse(localStorage.getItem('katyakersCartV3') || '[]');
let rosterExpanded = false;
let publicProfiles = {};
let currentAccount = null;
let requestedProfileMember = '';
let lastFocused = null;
const $ = selector => document.querySelector(selector);
const money = value => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(value);

function renderStandings(){
  $('#standingsTable').innerHTML = standings.map((item,index) => `<div class="standing-row"><span class="pos">${String(index+2).padStart(2,'0')}</span><div class="standing-person"><img class="standing-thumb" src="/${rosterPhoto(item.name)}" alt="${item.name}" loading="lazy"><div><h3>${item.name}</h3><p>${item.detail}</p></div></div><span class="movement ${item.move.includes('â–¼')?'down':''}" aria-label="${item.move==='â€”'?'No rank change':item.move.includes('â–¼')?'Down one place':`Up ${item.move.replace('â–² ','')} place`}">${item.move}</span><strong class="points">${item.points} <small>PTS</small></strong></div>`).join('');
}
function renderEvents(){
  $('#eventGrid').innerHTML = events.map(event => `<a class="event-card ${event.next?'next':''}" href="${event.url}" target="_blank" rel="noopener" aria-label="${event.seriesFallback?'Open the official series tournament list for':`Open ${event.name} on`} Fishing Chaos"><div class="date-box"><span>${event.month}</span><strong>${event.day}</strong></div><div class="event-copy"><h3>${event.name}</h3><p>${event.detail}</p><span class="event-link">${event.seriesFallback?'Open series tournaments':'View tournament'} â†—</span></div><span class="status ${event.done?'complete':event.status==='Upcoming'?'upcoming':'open'}">${event.status}</span></a>`).join('');
}
function renderAnglers(){
  const list = rosterExpanded ? anglers : featuredAnglers;
  const grid = $('#anglerGrid');
  grid.classList.toggle('full-roster',rosterExpanded);
  grid.innerHTML = list.map(angler => {
    const profile=publicProfiles[angler.name];
    const method=profile?.fishing_method ? profile.fishing_method[0].toUpperCase()+profile.fishing_method.slice(1) : '';
    const details=profile?[method,profile.hometown,profile.favorite_water].filter(Boolean).join(' Â· '):angler.stats;
    const url=`/anglers/${memberSlug(angler.name)}`;
    return `<article class="angler-card ${profile?'claimed':''}"><a class="angler-card-link" href="${url}" aria-label="View ${escapeHtml(angler.name)} profile"><div class="angler-image">${angler.photo?`<img src="/${angler.photo}" alt="${escapeHtml(angler.name)}" loading="lazy" decoding="async">`:`<span aria-hidden="true">${angler.initials}</span>`}</div><div class="angler-info"><span>${profile?'âœ“ Claimed profile':angler.rank}</span><h3>${escapeHtml(profile?.display_name||angler.name)}</h3>${profile?.display_name&&profile.display_name!==angler.name?`<p class="roster-name">${escapeHtml(angler.name)}</p>`:''}<div class="angler-stats">${escapeHtml(details||'Katyakers of Ohio member')}</div>${profile?.bio?`<p class="angler-bio">${escapeHtml(profile.bio)}</p>`:''}<strong class="view-profile">View profile <span aria-hidden="true">â†’</span></strong></div></a></article>`;
  }).join('');
  $('#showAllAnglers').textContent = rosterExpanded ? 'Show featured' : 'View full roster';
  $('#showAllAnglers').setAttribute('aria-expanded',String(rosterExpanded));
}
function escapeHtml(value=''){return String(value).replace(/[&<>'"]/g,character=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[character]))}
function renderNews(){
  const grid=$('#newsGrid');
  if(!grid)return;
  grid.innerHTML=newsArticles.map((article,index)=>`<article class="news-card ${index===0?'featured-news':''}"><a class="news-card-link" href="/news/${article.slug}" aria-label="Read ${escapeHtml(article.title)}"><div class="news-image ${index%3===1?'blue':index%3===2?'black':''}"><span>${escapeHtml(article.event)} Â· ${escapeHtml(article.date)}</span><b>${escapeHtml(article.cardBanner||(article.podium?`${article.podium[0][0]} wins`:'Trail news'))}</b></div><div class="news-card-copy"><span>${escapeHtml(article.category||'Tournament recap')}</span><h3>${escapeHtml(article.title)}</h3><p>${escapeHtml(article.dek)}</p><strong>Read full article <span aria-hidden="true">â†’</span></strong></div></a></article>`).join('');
}
function renderNewsArticlePage(){
  const page=$('#newsArticlePage');
  const match=location.pathname.match(/^\/news\/([^/]+)\/?$/);
  if(!match){page.hidden=true;return}
  document.body.classList.add('news-article-route');
  $('.brand').setAttribute('href','/');
  document.querySelectorAll('.main-nav a[href^="#"], footer a[href^="#"]').forEach(link=>link.setAttribute('href',`/${link.getAttribute('href')}`));
  page.hidden=false;
  const article=newsArticles.find(item=>item.slug===decodeURIComponent(match[1]).toLowerCase());
  if(!article){document.title='Article not found | Katyakers of Ohio';$('#newsArticleContent').innerHTML='<div class="profile-not-found"><span class="eyebrow dark">TRAIL NEWS</span><h1>Article not found</h1><p>That tournament recap is not available.</p></div>';return}
  document.title=`${article.title} | Katyakers of Ohio`;
  const facts=article.facts||[[article.anglers,'Anglers'],[article.fish,'Fish submitted'],[article.time,'Event window']];
  const sidebarTitle=article.sidebarTitle||'Top three';
  const sidebarItems=article.sidebarItems||article.podium;
  const highlight=article.highlight||['Big Fish',article.bigFish[0],article.bigFish[1]];
  const sources=article.sources||[['Fishing Chaos results',article.chaosUrl],['Katyakers Facebook updates','https://www.facebook.com/KATYAKERSOUTFITTERS']];
  const factNote=article.factNote||'Through these six completed events, Katyakers anglers recorded 858 accepted fish and published event recaps account for $26,300 in total payouts.';
  const factsHtml=facts.map(([value,label])=>`<div><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>`).join('');
  const sidebarHtml=sidebarItems.map(([name,score],index)=>`<li><span>${index+1}</span><div><strong>${escapeHtml(name)}</strong><small>${escapeHtml(score)}</small></div></li>`).join('');
  const sourcesHtml=sources.map(([label,url])=>`<a href="${escapeHtml(url)}" target="_blank" rel="noopener">${escapeHtml(label)} â†—</a>`).join('');
  const paragraphs=article.paragraphs.map(paragraph=>`<p>${escapeHtml(paragraph)}</p>`).join('');
  $('#newsArticleContent').innerHTML=`<header class="article-hero"><span class="eyebrow">${escapeHtml((article.category||'Tournament recap').toUpperCase())} Â· ${escapeHtml(article.date)}</span><h1 id="newsArticleTitle">${escapeHtml(article.title)}</h1><p>${escapeHtml(article.dek)}</p></header><div class="article-facts">${factsHtml}</div><div class="article-layout"><div class="article-story">${paragraphs}<aside class="article-season-note"><strong>Fact-check note</strong><p>${escapeHtml(factNote)}</p></aside><div class="article-sources"><span>Sources</span>${sourcesHtml}</div></div><aside class="article-results"><span class="eyebrow dark">AT A GLANCE</span><h2>${escapeHtml(sidebarTitle)}</h2><ol>${sidebarHtml}</ol><div class="article-big-fish"><span>${escapeHtml(highlight[0])}</span><strong>${escapeHtml(highlight[1])}</strong><small>${escapeHtml(highlight[2])}</small></div><a class="button primary" href="${escapeHtml(sources[0][1])}" target="_blank" rel="noopener">Open primary source â†—</a></aside></div>`;
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
  const displayName=profile.display_name||angler.name;
  const method=profile.fishing_method?profile.fishing_method[0].toUpperCase()+profile.fishing_method.slice(1):'Not added yet';
  const image=angler.photo?`<img src="/${angler.photo}" alt="${escapeHtml(angler.name)}">`:`<span aria-hidden="true">${angler.initials}</span>`;
  const fact=(label,value)=>`<div class="profile-fact"><span>${label}</span><strong>${escapeHtml(value||'Not added yet')}</strong></div>`;
  const stat=(label,value,accent='')=>`<div class="profile-stat ${accent}"><strong>${value}</strong><span>${label}</span></div>`;
  const socials=[['Facebook',profile.facebook_url],['Instagram',profile.instagram_url],['TikTok',profile.tiktok_url],['YouTube',profile.youtube_url]].filter(([,url])=>url);
  const bestScore=record.bestScore==null?'<strong>No score yet</strong><small>No Fishing Chaos submission recorded</small>':`<strong>${record.bestScore.toFixed(2)} in.</strong><small>${escapeHtml(record.bestScoreEvent)}</small>`;
  const biggestFish=record.biggestFish==null?'<strong>No fish yet</strong><small>No Fishing Chaos submission recorded</small>':`<strong>${record.biggestFish.toFixed(2)} in.</strong><small>${escapeHtml(record.biggestFishSpecies)} Â· ${escapeHtml(record.biggestFishEvent)}</small>`;
  document.title=`${displayName} | Katyakers of Ohio`;
  $('#anglerProfileContent').innerHTML=`<div class="profile-hero"><div class="profile-portrait">${image}</div><div class="profile-hero-copy"><span class="eyebrow">${publicProfiles[angler.name]?'CLAIMED ANGLER PROFILE':'OFFICIAL KATYAKERS MEMBER'}</span><h1 id="anglerProfileName">${escapeHtml(displayName)}</h1>${displayName!==angler.name?`<p class="profile-roster-name">${escapeHtml(angler.name)}</p>`:''}<div class="profile-chips"><span>${escapeHtml(method)}</span>${profile.hometown?`<span>${escapeHtml(profile.hometown)}</span>`:''}</div><p>${escapeHtml(profile.bio||'Official Katyakers of Ohio roster member. Personal angler details can be added after this profile is claimed.')}</p><button class="button primary" type="button" data-claim-member="${escapeHtml(angler.name)}">${publicProfiles[angler.name]?'Manage my profile':'Claim this profile'}</button></div></div><div class="profile-content-grid"><section class="profile-panel"><div class="profile-panel-heading"><span class="eyebrow dark">ANGLER DETAILS</span><h2>On the water</h2></div><div class="profile-facts">${fact('Fishing method',method)}${fact('Hometown',profile.hometown)}${fact('Favorite body of water',profile.favorite_water)}${fact('Total years professionally fishing',profile.years_fishing==null?'':String(profile.years_fishing))}${fact('Personal best blue cat',profile.personal_best_blue||profile.personal_best)}${fact('Personal best flathead',profile.personal_best_flathead)}${fact('Personal best channel cat',profile.personal_best_channel)}</div></section><section class="profile-panel lifetime-panel"><div class="profile-panel-heading"><span class="eyebrow dark">VERIFIED COMPETITION RECORD</span><h2>Lifetime totals</h2><p>Automatically tracked from completed Katyakers events in Fishing Chaos.</p></div><div class="verified-highlights"><div><span>Best Katyakers event score</span>${bestScore}</div><div><span>Biggest submitted fish</span>${biggestFish}</div></div><div class="profile-stats">${stat('Events fished',stats.eventsFished)}${stat('Top 10 finishes',stats.top10)}${stat('Top 5 finishes',stats.top5)}${stat('Top 3 finishes',stats.top3)}${stat('Wins',stats.wins)}${stat('Lifetime winnings',money(stats.winnings),'money-stat')}</div><p class="profile-stats-note">Verified through Deer Creek. Finishes are cumulative categories; winnings include published placement and Big Fish payouts.</p></section></div><div class="profile-social"><span>Follow ${escapeHtml(displayName)}</span>${socials.length?socials.map(([label,url])=>`<a href="${escapeHtml(url)}" target="_blank" rel="noopener">${label} â†—</a>`).join(''):'<em class="profile-social-empty">No social links added yet.</em>'}</div>`;
}
async function fetchJson(url,options){const response=await fetch(url,options);const data=await response.json().catch(()=>({error:'Something went wrong'}));if(!response.ok)throw new Error(data.error||'Something went wrong');return data}
async function loadPublicProfiles(){try{const data=await fetchJson('/api/profiles');publicProfiles=Object.fromEntries(data.profiles.map(profile=>[profile.member_name,profile]));renderAnglers();renderAnglerProfilePage()}catch(error){console.warn('Profiles unavailable',error)}}
function setProfilePanel(signedIn){$('#profileSignedOut').hidden=signedIn;$('#profileForm').hidden=!signedIn;$('#profileAccount').hidden=!signedIn}
function fillProfileForm(profile){const form=$('#profileForm');const values=profile||{};['member_name','display_name','hometown','fishing_method','years_fishing','favorite_water','personal_best_blue','personal_best_flathead','personal_best_channel','bio','facebook_url','instagram_url','tiktok_url','youtube_url'].forEach(name=>{form.elements[name].value=values[name]??''})}
async function openProfileModal(){
  lastFocused=document.activeElement;$('#profileModal').classList.add('open');$('#profileModal').setAttribute('aria-hidden','false');$('#profileBackdrop').hidden=false;requestAnimationFrame(()=>$('#profileBackdrop').classList.add('open'));document.body.classList.add('drawer-open');
  const returnTo=`${location.pathname}#claim-profile`;
  $('#profileSignedOut a').href=`/signin-with-chatgpt?return_to=${encodeURIComponent(returnTo)}`;
  try{currentAccount=await fetchJson('/api/member-account');setProfilePanel(currentAccount.authenticated);if(currentAccount.authenticated){$('#profileAccountName').textContent=currentAccount.user.name||currentAccount.user.email;$('#memberName').innerHTML='<option value="">Choose your roster name</option>'+memberNames.map(name=>`<option value="${escapeHtml(name)}">${escapeHtml(name)}${publicProfiles[name]&&currentAccount.profile?.member_name!==name?' â€” claimed':''}</option>`).join('');fillProfileForm(currentAccount.profile);if(!currentAccount.profile&&requestedProfileMember)$('#memberName').value=requestedProfileMember;$('#profileTitle').textContent=currentAccount.profile?'Edit your member profile':'Claim your roster profile'}else{$('#profileTitle').textContent='Create your member profile'}}catch(error){toast(error.message)}
  $('#closeProfile').focus();
}
function closeProfileModal(){if(!$('#profileModal').classList.contains('open'))return;$('#profileModal').classList.remove('open');$('#profileModal').setAttribute('aria-hidden','true');$('#profileBackdrop').classList.remove('open');document.body.classList.remove('drawer-open');setTimeout(()=>{$('#profileBackdrop').hidden=true},250);if(lastFocused)lastFocused.focus()}
async function saveProfile(event){event.preventDefault();const form=new FormData(event.currentTarget);const payload=Object.fromEntries(form.entries());const button=$('#saveProfile');button.disabled=true;button.textContent='Savingâ€¦';try{const data=await fetchJson('/api/profile',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});currentAccount.profile=data.profile;await loadPublicProfiles();fillProfileForm(data.profile);$('#profileTitle').textContent='Edit your member profile';toast('Profile saved')}catch(error){toast(error.message)}finally{button.disabled=false;button.textContent='Save profile'}}
function renderVotes(){
  const total = votes.reduce((sum,item) => sum+item.votes,0);
  const max = Math.max(...votes.map(item => item.votes));
  $('#voteTotal').textContent = `${total} votes`;
  $('#voteUpdated').textContent = `Updated ${votesLastUpdated}`;
  $('#voteList').innerHTML = votes.map((item,index) => `<div class="vote-option"><div><button class="vote-name" type="button" data-voters-for="${escapeHtml(item.name)}" aria-label="Show voters for ${escapeHtml(item.name)}">${index+1}. ${escapeHtml(item.name)}</button><p>Click the name to see counted voters</p></div><strong class="vote-count">${item.votes}</strong><div class="vote-bar" role="progressbar" aria-label="${item.name}: ${item.votes} votes" aria-valuemin="0" aria-valuemax="${max}" aria-valuenow="${item.votes}"><i style="width:${item.votes/max*100}%"></i></div></div>`).join('');
}
function cleanVoterName(name){
  const tagged=['Pam Smith','Clayton Adkins','Dan Phelps'];
  let display=name.replace(/@highlight comment.*$/i,'').replace(/@$/,'').trim();
  tagged.forEach(tag=>{const index=display.indexOf(tag);if(index>0)display=display.slice(0,index).trim()});
  return display;
}
function openVoterModal(angler){
  const names=(voteVoters[angler]||[]).map(cleanVoterName).filter(Boolean);
  lastFocused=document.activeElement;
  $('#voterModalTitle').textContent=angler;
  $('#voterModalCount').textContent=`${names.length} counted ${names.length===1?'voter':'voters'}`;
  $('#voterNames').innerHTML=names.map((name,index)=>`<li><span>${index+1}</span>${escapeHtml(name)}</li>`).join('');
  $('#voterModal').classList.add('open');$('#voterModal').setAttribute('aria-hidden','false');
  $('#voterBackdrop').hidden=false;requestAnimationFrame(()=>$('#voterBackdrop').classList.add('open'));
  document.body.classList.add('drawer-open');$('#closeVoters').focus();
}
function closeVoterModal(){
  if(!$('#voterModal').classList.contains('open'))return;
  $('#voterModal').classList.remove('open');$('#voterModal').setAttribute('aria-hidden','true');
  $('#voterBackdrop').classList.remove('open');document.body.classList.remove('drawer-open');
  setTimeout(()=>{$('#voterBackdrop').hidden=true},250);if(lastFocused)lastFocused.focus();
}
function renderLiveBroadcast(){
  const frame=$('#liveBroadcastFrame'),placeholder=$('#livePlaceholder'),link=$('#liveBroadcastLink'),note=$('#liveBroadcastNote');
  if(liveBroadcast.embedUrl){frame.src=liveBroadcast.embedUrl;frame.hidden=false;placeholder.hidden=true;note.textContent='The official broadcast is ready';}
  if(liveBroadcast.watchUrl){link.href=liveBroadcast.watchUrl;link.hidden=false;}
}
function renderProducts(filter='all'){
  const visible = products.filter(product => filter==='all' || product.category===filter);
  $('#productGrid').innerHTML = visible.map(product => `<article class="product-card${product.comingSoon?' is-coming-soon':''}"><div class="product-image">${product.badge?`<span class="product-badge">${product.badge}</span>`:''}${product.image?`<img src="/${product.image}" alt="${escapeHtml(product.name)} artwork" loading="lazy" decoding="async">`:`<div class="product-art">${product.art}<small>${product.sub}</small></div>`}</div><div class="product-info"><h3>${product.name}</h3>${product.description?`<p>${escapeHtml(product.description)}</p>`:''}${product.sizes?`<label class="product-size">Size<select data-size-for="${product.id}" aria-label="Choose size for ${escapeHtml(product.name)}">${product.sizes.map(size=>`<option value="${size}">${size}${product.sizeAdjustments?.[size]?` (+${money(product.sizeAdjustments[size])})`:''}</option>`).join('')}</select></label>`:''}<div class="product-meta"><strong>${money(product.price)}</strong>${product.comingSoon?'<span class="coming-soon-label">Launching soon</span>':`<button class="quick-add" type="button" data-id="${product.id}" aria-label="Buy ${product.name} securely">Buy now</button>`}</div></div></article>`).join('');
}

function checkoutUrl(product,size=''){
  const base=product.checkout?.[size]||product.checkout?.base;
  if(!base)return '';
  return `${base}?client_reference_id=${encodeURIComponent(`${product.id}-${size||'one-size'}`.toLowerCase())}`;
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
  $('#cartItems').innerHTML = cart.length ? cart.map(item=>{const product=products.find(entry=>entry.id===item.id);const unit=productUnitPrice(product,item.size);return `<div class="cart-item"><div class="cart-thumb" aria-hidden="true">K</div><div><h3>${product.name}</h3><p>${item.size?`Size ${item.size} Â· `:''}Qty ${item.qty} Â· ${money(unit*item.qty)}</p></div><button type="button" data-remove="${escapeHtml(cartItemKey(item))}" aria-label="Remove ${product.name}${item.size?` size ${item.size}`:''}">Remove</button></div>`}).join('') : '<div class="empty-cart"><h3>Your cart is empty</h3><p>Add official Katyakers gear to get started.</p></div>';
  $('#cartSubtotal').textContent = money(cart.reduce((sum,item)=>{const product=products.find(entry=>entry.id===item.id);return sum+productUnitPrice(product,item.size)*item.qty},0));
}
function toast(message){const element=$('#toast');element.textContent=message;element.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>element.classList.remove('show'),1800)}
function updateCountdown(){
  const target = new Date('2026-07-25T07:00:00-04:00');
  const diff = Math.max(0,target-Date.now());
  const values=[Math.floor(diff/86400000),Math.floor(diff/3600000)%24,Math.floor(diff/60000)%60];
  $('#countdown').innerHTML=['Days','Hours','Min'].map((label,index)=>`<div><strong>${String(values[index]).padStart(2,'0')}</strong><span>${label}</span></div>`).join('');
}
function setMenu(open){const nav=$('#mainNav'),button=$('#menuToggle');nav.classList.toggle('open',open);button.setAttribute('aria-expanded',String(open));button.setAttribute('aria-label',open?'Close navigation':'Open navigation')}
function openCart(){lastFocused=document.activeElement;$('#cartDrawer').classList.add('open');$('#cartDrawer').setAttribute('aria-hidden','false');$('#drawerBackdrop').hidden=false;requestAnimationFrame(()=>$('#drawerBackdrop').classList.add('open'));$('#cartButton').setAttribute('aria-expanded','true');document.body.classList.add('drawer-open');$('#closeCart').focus()}
function closeCart(){if(!$('#cartDrawer').classList.contains('open'))return;$('#cartDrawer').classList.remove('open');$('#cartDrawer').setAttribute('aria-hidden','true');$('#drawerBackdrop').classList.remove('open');$('#cartButton').setAttribute('aria-expanded','false');document.body.classList.remove('drawer-open');setTimeout(()=>{$('#drawerBackdrop').hidden=true},250);if(lastFocused)lastFocused.focus()}
function requestOrder(){
  if(!cart.length){toast('Your cart is empty');return}
  const lines=cart.map(item=>{const product=products.find(entry=>entry.id===item.id);return `${product.name}${item.size?` â€” Size ${item.size}`:''} â€” Qty ${item.qty} â€” ${money(productUnitPrice(product,item.size)*item.qty)}`});
  const total=$('#cartSubtotal').textContent;
  const body=encodeURIComponent(`Hi Katyakers,\n\nI'd like to request this merchandise order:\n\n${lines.join('\n')}\n\nEstimated subtotal: ${total}\n\nPlease confirm sizes, availability, shipping, and payment.\n`);
  window.location.href=`mailto:corey@katyakers.com?subject=Katyakers%20merchandise%20order&body=${body}`;
}

document.addEventListener('click',event=>{
  const target=event.target;
  const claimButton=target.closest('[data-claim-member]');
  if(claimButton){requestedProfileMember=claimButton.dataset.claimMember;openProfileModal()}
  const voterButton=target.closest('[data-voters-for]');
  if(voterButton)openVoterModal(voterButton.dataset.votersFor);
  if(target.matches('.quick-add')){const product=products.find(entry=>entry.id===target.dataset.id);const size=$(`[data-size-for="${target.dataset.id}"]`)?.value||'';const url=checkoutUrl(product,size);if(url)window.location.href=url;else toast('Checkout is not available for this item yet')}
  if(target.matches('[data-remove]'))removeFromCart(target.dataset.remove);
  if(target.matches('.filter')){document.querySelectorAll('.filter').forEach(button=>{button.classList.remove('active');button.setAttribute('aria-pressed','false')});target.classList.add('active');target.setAttribute('aria-pressed','true');renderProducts(target.dataset.filter)}
  if(target.closest('.main-nav a'))setMenu(false);
});
document.addEventListener('keydown',event=>{
  if(event.key==='Escape'){setMenu(false);closeCart();closeProfileModal();closeVoterModal()}
  if(event.key==='Tab' && $('#cartDrawer').classList.contains('open')){const focusable=[...$('#cartDrawer').querySelectorAll('button,a,[tabindex]:not([tabindex="-1"])')].filter(element=>!element.disabled);if(!focusable.length)return;const first=focusable[0],last=focusable[focusable.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}}
});
$('#showAllAnglers').addEventListener('click',()=>{rosterExpanded=!rosterExpanded;renderAnglers()});
$('#profileButton').addEventListener('click',openProfileModal);
$('#closeProfile').addEventListener('click',closeProfileModal);
$('#profileBackdrop').addEventListener('click',closeProfileModal);
$('#profileForm').addEventListener('submit',saveProfile);
$('#closeVoters').addEventListener('click',closeVoterModal);
$('#voterBackdrop').addEventListener('click',closeVoterModal);
$('#menuToggle').addEventListener('click',()=>setMenu(!$('#mainNav').classList.contains('open')));
$('#cartButton').addEventListener('click',openCart);
$('#closeCart').addEventListener('click',closeCart);
$('#drawerBackdrop').addEventListener('click',closeCart);
$('#checkoutButton').addEventListener('click',requestOrder);

renderStandings();renderEvents();renderAnglers();renderNews();renderAnglerProfilePage();renderNewsArticlePage();renderVotes();renderLiveBroadcast();renderProducts();renderCart();updateCountdown();loadPublicProfiles();if(location.hash==='#claim-profile')openProfileModal();setInterval(updateCountdown,60000);

