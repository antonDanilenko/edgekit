import { AudienceDefinition } from '../../types';

const TTL_IN_SECS = 100;
const LOOK_BACK_IN_SECS = 100;
const OCCURRENCES = 2;
const VERSION = 1;

export const sportKeywords = ['golf', 'liverpool', 'football', 'sport'];

export const travelKeywords = [
  'british airways',
  'cruise ship',
  'ship',
  'airline',
  'hotel',
  'travel',
  'holland america line',
  'royal navy',
  'tourism',
  'cruise line',
];

export const automotiveKeywords = [
  'international space station',
  'vehicle',
  'road',
  'driving',
  'elon musk',
  'walking',
  'traffic',
  'transport',
];

export const sportInterestAudience: AudienceDefinition = {
  id: 'iab-607',
  name: 'Interest | Sport',
  version: VERSION,
  definition: {
    featureVersion: 1,
    ttl: TTL_IN_SECS,
    lookBack: LOOK_BACK_IN_SECS,
    occurrences: OCCURRENCES,
    queryProperty: 'keywords',
    queryValue: sportKeywords,
    queryFilterComparisonType: 'arrayIntersects',
  },
};

export const travelInterestAudience: AudienceDefinition = {
  id: 'iab-719',
  name: 'Interest | Travel',
  version: VERSION,
  definition: {
    featureVersion: 1,
    ttl: TTL_IN_SECS,
    lookBack: LOOK_BACK_IN_SECS,
    occurrences: OCCURRENCES,
    queryProperty: 'keywords',
    queryValue: travelKeywords,
    queryFilterComparisonType: 'arrayIntersects',
  },
};

export const automotiveInterestAudience: AudienceDefinition = {
  id: 'iab-243',
  name: 'Interest | Automotive',
  version: VERSION,
  definition: {
    featureVersion: 1,
    ttl: TTL_IN_SECS,
    lookBack: LOOK_BACK_IN_SECS,
    occurrences: OCCURRENCES,
    queryProperty: 'keywords',
    queryValue: automotiveKeywords,
    queryFilterComparisonType: 'arrayIntersects',
  },
};

export const allAudienceDefinitions = [
  sportInterestAudience,
  travelInterestAudience,
  automotiveInterestAudience,
];
