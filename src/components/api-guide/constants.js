const statusCodes = [
  { code: "200", label: "Success", ok: true },
  { code: "401", label: "Missing or invalid API Key", ok: false },
  { code: "403", label: "Not authorized to call this API", ok: false },
  { code: "404", label: "Not found", ok: false },
];

export const sidebarNav = [
  {
    group: "Getting Started",
    links: [
      { href: "#authentication", label: "Authentication" },
      { href: "#sdks", label: "SDKs" },
    ],
  },
  {
    group: "Endpoints",
    links: [
      { href: "#op-1", label: "Get Earnings Event Calendar", isNew: true },
      { href: "#op-2", label: "Get Earnings Events" },
      { href: "#op-3", label: "Get Earnings Call Transcript" },
      { href: "#op-4", label: "Get Full Company List" },
      { href: "#op-5", label: "Get Audio File" },
      { href: "#op-6", label: "Get Slide Decks" },
    ],
  },
  {
    group: "Support",
    links: [{ href: "#contact", label: "Contact Us" }],
  },
];

export const authInfo = {
  baseUrl: "https://v2.api.earningscall.biz",
};

export const sdks = [
  {
    lang: "Python",
    install: "pip install earningscall",
    href: "https://github.com/EarningsCall/earningscall-python#readme",
  },
  {
    lang: "JavaScript",
    install: "npm install earningscall",
    href: "https://github.com/EarningsCall/earningscall-js#readme",
  },
];

export const endpoints = [
  {
    id: "op-1",
    isNew: true,
    endpoint: "https://v2.api.alpha.earningscall.biz/calendar",
    title: "Get Earnings Event Calendar",
    returns: "JSON Object",
    statusCodes,
    params: [
      { name: "apikey", required: true, description: 'Your unique API key. Use "demo" to try it out.' },
      { name: "year",   required: true, description: 'The 4-digit year. Example value: "2025"' },
      { name: "month",  required: true, description: 'Valid values: 1–12. Example value: "1"' },
      { name: "day",    required: true, description: 'Valid values: 1–31. Example value: "10"' },
    ],
    examples: [
      {
        title: "Example Request",
        note: "If you are using the demo API key, ensure you pass year=2025, month=1, and day=10. For full calendar access, please purchase a plan.",
        curl: "curl 'https://v2.api.alpha.earningscall.biz/calendar?apikey=demo&year=2025&month=1&day=10'",
        response: `[
  {
    "exchange": "NASDAQ",
    "symbol": "TLRY",
    "year": 2025,
    "quarter": 2,
    "conference_date": "2025-01-10T08:30:00.000-05:00",
    "company_name": "Tilray Brands, Inc.",
    "transcript_ready": true
  },
  {
    "exchange": "NYSE",
    "symbol": "DAL",
    "year": 2024,
    "quarter": 4,
    "conference_date": "2025-01-10T10:00:00-05:00",
    "company_name": "Delta Air Lines, Inc.",
    "transcript_ready": true
  },
  {
    "exchange": "NASDAQ",
    "symbol": "WDFC",
    "year": 2025,
    "quarter": 1,
    "conference_date": "2025-01-10T17:00:00.000-05:00",
    "company_name": "WD-40 Company",
    "transcript_ready": true
  }
]`,
      },
    ],
  },
  {
    id: "op-2",
    endpoint: "https://v2.api.alpha.earningscall.biz/events",
    title: "Get Earnings Events",
    returns: "JSON Object",
    statusCodes,
    params: [
      { name: "apikey",   required: true, description: 'Your unique API key. Use "demo" to try it out.' },
      { name: "exchange", required: true, description: "Valid values: NYSE, NASDAQ, AMEX, TSX, TSXV, OTC, LSE, CBOE, STO" },
      { name: "symbol",   required: true, description: "The ticker symbol." },
    ],
    examples: [
      {
        title: "Example Request",
        curl: "curl 'https://v2.api.alpha.earningscall.biz/events?apikey=demo&exchange=nasdaq&symbol=aapl'",
        response: `{
  "company_name": "Apple Inc.",
  "events": [
    {
      "year": 2024,
      "quarter": 2,
      "conference_date": "2024-05-02T17:00:00.000-04:00"
    },
    {
      "year": 2024,
      "quarter": 1,
      "conference_date": "2024-02-01T17:00:00.000-05:00"
    },
    {
      "year": 2023,
      "quarter": 4,
      "conference_date": "2023-11-03T17:00:00.000-04:00"
    },
    {
      "year": 2023,
      "quarter": 3,
      "conference_date": "2023-08-03T17:00:00.000-04:00"
    }
  ]
}`,
      },
    ],
  },
  {
    id: "op-3",
    endpoint: "https://v2.api.alpha.earningscall.biz/transcript",
    title: "Get Earnings Call Transcript",
    returns: "JSON Object",
    statusCodes,
    params: [
      { name: "apikey",   required: true,  description: 'Your unique API key. Use "demo" to try it out.' },
      { name: "exchange", required: true,  description: "Valid values: NYSE, NASDAQ, AMEX, TSX, TSXV, OTC, LSE, CBOE, STO" },
      { name: "symbol",   required: true,  description: "The ticker symbol." },
      { name: "year",     required: true,  description: 'The 4-digit year of the earnings call. Example: "2024"' },
      { name: "quarter",  required: true,  description: "Valid values: 1, 2, 3, or 4." },
      { name: "level",    required: false, description: "Default: 1. Valid values: 1, 2, 3, or 4. Basic plan includes level 1. Enhanced plan includes levels 2, 3, and 4." },
    ],
    examples: [
      {
        title: "Example 1: Get Basic Transcript Text",
        note: "Level 1 (default) is the most basic version — the entire transcript as one long text string.",
        curl: "curl 'https://v2.api.alpha.earningscall.biz/transcript?apikey=demo&exchange=nasdaq&symbol=aapl&year=2023&quarter=1'",
        response: `{
  "event": {
    "year": 2023,
    "quarter": 1,
    "conference_date": "2023-02-02T17:00:00.000-05:00"
  },
  "text": "Good day, everyone, and welcome to the Apple Q1 Fiscal Year 2023 Earnings Conference Call. Today's call is being recorded...."
}`,
      },
      {
        title: "Example 2: Get Level 2 Enhanced Transcript Data",
        note: "Level 2 includes speaker diarization and speaker name mapping with name and title attribution.",
        curl: "curl 'https://v2.api.alpha.earningscall.biz/transcript?apikey=demo&exchange=nasdaq&symbol=aapl&year=2023&quarter=1&level=2'",
        response: `{
  "event": {
    "year": 2023,
    "quarter": 1,
    "conference_date": "2023-02-02T17:00:00.000-05:00"
  },
  "speaker_name_map_v2": {
    "spk12": { "name": "Operator", "title": "Conference Call Host" },
    "spk07": { "name": "Teja Skala", "title": "Director of Investor Relations" },
    "spk01": { "name": "Tim Cook", "title": "CEO" }
  },
  "speakers": [
    {
      "speaker": "spk01",
      "text": "Thank you, Tejas. Good afternoon, everyone, and thanks for joining us. Today we're reporting revenue of $117.2 billion for the December quarter...."
    }
  ]
}`,
      },
      {
        title: "Example 3: Get Level 3 — Word-level Timestamps",
        note: "Level 3 includes word-level timestamps for every spoken word in the transcript.",
        curl: "curl 'https://v2.api.alpha.earningscall.biz/transcript?apikey=demo&exchange=nasdaq&symbol=aapl&year=2023&quarter=1&level=3'",
        response: `{
  "event": {
    "year": 2023,
    "quarter": 1,
    "conference_date": "2023-02-02T17:00:00.000-05:00"
  },
  "speakers": [
    {
      "speaker": "spk12",
      "words": ["Good", "day,", "everyone,", "and", "welcome", "to", "the", "Apple", "Q1", "..."],
      "start_times": [0.009, 0.129, 0.269, 0.709, 0.87, 1.19, 1.27, 1.45, 1.83, "..."]
    }
  ]
}`,
      },
      {
        title: "Example 4: Get Prepared Remarks and Q&A",
        note: "Level 4 provides structured transcripts separating Prepared Remarks and Q&A sections. Useful for sentiment analysis on executive responses.",
        curl: "curl 'https://v2.api.alpha.earningscall.biz/transcript?apikey=demo&exchange=nasdaq&symbol=aapl&year=2023&quarter=1&level=4'",
        response: `{
  "event": {
    "year": 2023,
    "quarter": 1,
    "conference_date": "2023-02-02T17:00:00.000-05:00"
  },
  "prepared_remarks": "Good day, everyone, and welcome to the Apple Q1 Fiscal Year 2023 Earnings Conference Call...",
  "questions_and_answers": "Our first question comes from Katie Huberty from Morgan Stanley. Please go ahead..."
}`,
      },
    ],
  },
  {
    id: "op-4",
    endpoint: "https://v2.api.alpha.earningscall.biz/symbols",
    title: "Get Full Company List",
    returns: "JSON Array",
    statusCodes,
    params: [
      { name: "apikey", required: true, description: 'Your unique API key. Use "demo" to try it out.' },
    ],
    examples: [
      {
        title: "Example Request",
        note: "Returns all companies we have earnings call data for (6,000+ companies). Demo limits results to 2.",
        curl: "curl 'https://v2.api.alpha.earningscall.biz/symbols?apikey=demo'",
        response: `[
  {
    "exchange": "NASDAQ",
    "name": "Apple Inc.",
    "symbol": "AAPL"
  },
  {
    "exchange": "NASDAQ",
    "name": "Microsoft Corporation",
    "symbol": "MSFT"
  }
]`,
      },
    ],
  },
  {
    id: "op-5",
    endpoint: "https://v2.api.alpha.earningscall.biz/audio",
    title: "Get Audio File",
    returns: "audio/mpeg — audio data",
    statusCodes,
    params: [
      { name: "apikey",   required: true, description: 'Your unique API key. Use "demo" to try it out.' },
      { name: "exchange", required: true, description: "Valid values: NYSE, NASDAQ, AMEX, TSX, TSXV, OTC, LSE, CBOE, STO" },
      { name: "symbol",   required: true, description: "The ticker symbol." },
      { name: "year",     required: true, description: 'The 4-digit year of the earnings call. Example: "2024"' },
      { name: "quarter",  required: true, description: "Valid values: 1, 2, 3, or 4." },
    ],
    examples: [
      {
        title: "Example Request",
        curl: "curl --output msft_q1_2022.mp3 'https://v2.api.alpha.earningscall.biz/audio?apikey=demo&exchange=NASDAQ&symbol=MSFT&year=2022&quarter=1'",
        response: `# Returns binary MP3 audio stream
Content-Type: audio/mpeg
Content-Disposition: attachment; filename="MSFT_2022_Q1.mp3"

[Binary MP3 audio data — save with --output flag]`,
      },
    ],
  },
  {
    id: "op-6",
    endpoint: "https://v2.api.alpha.earningscall.biz/slidedecks",
    title: "Get Slide Decks",
    returns: "JSON Object",
    statusCodes,
    params: [
      { name: "apikey",   required: true, description: 'Your unique API key. Use "demo" to try it out.' },
      { name: "exchange", required: true, description: "Valid values: NYSE, NASDAQ, AMEX, TSX, TSXV, OTC, LSE, CBOE, STO" },
      { name: "symbol",   required: true, description: "The ticker symbol." },
      { name: "year",     required: true, description: 'The 4-digit year of the earnings call. Example: "2024"' },
      { name: "quarter",  required: true, description: "Valid values: 1, 2, 3, or 4." },
    ],
    examples: [
      {
        title: "Example Request",
        curl: "curl 'https://v2.api.alpha.earningscall.biz/slidedecks?apikey=demo&exchange=NASDAQ&symbol=AAPL&year=2024&quarter=1'",
        response: `{
  "symbol": "AAPL",
  "company_name": "Apple Inc.",
  "year": 2024,
  "quarter": 1,
  "slides_url": "https://...",
  "slide_count": 24
}`,
      },
    ],
  },
];
