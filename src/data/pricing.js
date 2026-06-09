export const plans = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: "$48",
    annualPrice: "$38",
    priceSuffix: "/mo",
    featured: false,
    features: [
      "10 API calls / Minute",
      "Earning event Calendar",
      "Basic Transcript Data",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    monthlyPrice: "$55",
    annualPrice: "$44",
    priceSuffix: "/mo",
    featured: true,
    features: [
      "20 API calls / Minute",
      "Earning event Calendar",
      "Basic Transcript Data",
      "Enhanced Transcript Data",
    ],
  },
  {
    id: "ultimate",
    name: "Ultimate",
    monthlyPrice: "$103",
    annualPrice: "$82",
    priceSuffix: "/mo",
    featured: false,
    features: [
      "50 API calls / Minute",
      "Earning event Calendar",
      "Basic Transcript Data",
      "Enhanced Transcript Data",
      "Audio Files",
    ],
  },
  {
    id: "ultimate-plus",
    name: "Ultimate+",
    monthlyPrice: "$124",
    annualPrice: "$99",
    priceSuffix: "/mo",
    featured: false,
    features: [
      "250 API calls / Minute",
      "Earning event Calendar",
      "Basic Transcript Data",
      "Enhanced Transcript Data",
      "Audio Files",
      "Real Time Notifications",
    ],
  },
];

export const refundConditions = [
  {
    label: "Under 1,000 API calls",
    desc: "Fewer than 1,000 API calls made on your account.",
  },
  {
    label: "Within 7 days",
    desc: "Request submitted within 7 days of initial purchase.",
  },
  {
    label: "First purchase only",
    desc: "Renewals are not covered by this refund policy.",
  },
];

export const faqs = [
  {
    q: "What's the difference between Basic and Enhanced Transcript Data?",
    a: "Basic Transcript Data provides the complete transcript as a single continuous string in JSON format. Enhanced Transcript Data goes further, offering additional metadata such as: (1) Speaker groupings that segment text by speaker, complete with speaker name and title, (2) Word-level timestamps, and (3) Segmented transcript by Prepared Remarks and Q&A sections. For more details, check the documentation: https://earningscall.biz/api-guide",
  },
  {
    q: "What does Real Time Notification do?",
    a: "We use an event notification system to send you notifications as soon as new earnings events are available in our system. This means you don't have to perform any polling, and you will be notified in real-time.",
  },
  {
    q: "Is there a limit to the number of API calls I can make?",
    a: "Yes. The rate limit depends on the plan you choose.",
  },
  {
    q: "How up-to-date are the transcripts?",
    a: "Over 50% of transcripts are published within 15 minutes of the earnings call ending.",
  },
  {
    q: "Can I access historical earnings call transcripts?",
    a: "Yes. For most companies we have transcripts going back to the year 2020.",
  },
  {
    q: "How reliable is the transcription accuracy?",
    a: "We use a state-of-the-art machine learning model for speech recognition and transcription, which performs remarkably well. However, since the transcript is computer generated, it may from time to time contain errors. Please take this into account for your particular use-case.",
  },
  {
    q: "Can I integrate the API with other services?",
    a: "Yes, the EarningsCall APIs are designed to be integrated with other software and services, allowing for automated workflows and data analysis.",
  },
  {
    q: "Is this a subscription service? What frequency will I be charged?",
    a: "If you select a monthly plan you will be charged each month until your plan is canceled. If you select an annual plan, you will be charged once per year on the anniversary of your first purchase date.",
  },
  {
    q: "Can I cancel at any time?",
    a: "Yes, you may cancel your plan at any time. Your plan will remain active until the end of the current billing cycle (either the end of the month or the year). Once your plan is canceled, you will no longer be billed for any subsequent billing dates.",
  },
  {
    q: "Can I try out your service for one month and cancel after a month?",
    a: "Certainly! You can try out our service for one month and then cancel after a month. We will not bill you for any subsequent months after you cancel the subscription.",
  },
  {
    q: "Do you cover the companies in the S&P 500?",
    a: "Yes, our service covers the 500 companies contained in the S&P500 index.",
  },
  {
    q: "Do you cover companies outside of the United States?",
    a: "Yes, we do track companies in many markets such as Canada, Europe and Australia. We only track companies that perform quarterly investor conference calls, and the incidence of companies holding regular calls outside of the USA is much less.",
  },
];
