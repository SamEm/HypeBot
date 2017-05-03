var config = {
  botLogChannel: '282959338887315459',
  botSpam: '307324599861903363',
  
  modRole: '258357921505738752',
  hypeQueenRole: '258333211300462612',
  discordDevRole: '200719965437820928',
  hypeAlchRole: '282233528089968643',

  locations: {
    'asia':           { roleID: '298624295498809344', name: 'Asia' },
    'australia':      { roleID: '248856061203841045', name: 'Australia' },
    'belgium':        { roleID: '268464326820495360', name: 'Belgium' },
    'brazil':         { roleID: '244231073498791937', name: 'Brazil' },
    'canada':         { roleID: '244230794413998080', name: 'Canada' },
    'central':        { roleID: '265937810731565056', name: 'Central U.S.' },
    'czech':          { roleID: '245965740107235338', name: 'Czech Republic' },
    'denmark':        { roleID: '245619528224997379', name: 'Denmark' },
    'eastern':        { roleID: '244231750534823937', name: 'Eastern U.S.' },
    'estonia':        { roleID: '276396950608150528', name: 'Estonia' },
    'finland':        { roleID: '244234866818940928', name: 'Finland' },
    'france':         { roleID: '245965402230751232', name: 'France' },
    'germany':        { roleID: '244231069413408769', name: 'Germany' },
    'ireland':        { roleID: '244235647706071040', name: 'Ireland' },
    'israel':         { roleID: '291456001478098945', name: 'Israel' },
    'italy':          { roleID: '258880784713121794', name: 'Italy' },
    'lithuania':      { roleID: '244236784488284160', name: 'Lithuania' },
    'Mexico':         { roleID: '279689382489751552', name: 'Mexico' },
    'mountain':       { roleID: '244231892474396672', name: 'Mountain U.S.' },
    'netherlands':    { roleID: '245304094472929280', name: 'Netherlands' },
    'newzealand':     { roleID: '257779110657392640', name: 'New Zealand' },
    get 'nz'()        { return this.newzealand; },
    'norway':         { roleID: '244234761789243393', name: 'Norway' },
    'pacific':        { roleID: '244231963974565888', name: 'Pacific U.S.' },
    'poland':         { roleID: '258732939616059392', name: 'Poland' },
    'portugal':       { roleID: '246071476690747394', name: 'Portugal' },
    'russia':         { roleID: '296722342053150721', name: 'Russia' },
    'scotland':       { roleID: '296356252542566407', name: 'Scotland' },
    'serbia':         { roleID: '259438351692726273', name: 'Serbia' },
    'slovenia':       { roleID: '244235514864074752', name: 'Slovenia' },
    'southamerica':   { roleID: '298617952813580289', name: 'South America' },
    'spain':          { roleID: '255790548466532352', name: 'Spain' },
    'sweden':         { roleID: '248188867553787905', name: 'Sweden' },
    'switzerland':    { roleID: '247775856515219458', name: 'Switzerland' },
    'turkey':         { roleID: '244231544451891200', name: 'Turkey' },
    'unitedkingdom':  { roleID: '244231223528914946', name: 'United Kingdom' },
    get 'uk'()        { return this.unitedkingdom; }
  },

  everybodyRole: 'everybody', // Fake role for commands everyone can use

  botID: '290910991175254016',
  HSserverID: '200661830648070145',
  delayInMS: 5000
}
module.exports = config;
