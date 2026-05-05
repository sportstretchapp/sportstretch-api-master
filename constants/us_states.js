const us_states = {
  AL: "Alabama",
  AK: "Alaska",
  AZ: "Arizona",
  AR: "Arkansas",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  DC: "District Of Columbia",
  FL: "Florida",
  GA: "Georgia",
  HI: "Hawaii",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  IA: "Iowa",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  ME: "Maine",
  MD: "Maryland",
  MA: "Massachusetts",
  MI: "Michigan",
  MN: "Minnesota",
  MS: "Mississippi",
  MO: "Missouri",
  MT: "Montana",
  NE: "Nebraska",
  NV: "Nevada",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  NC: "North Carolina",
  ND: "North Dakota",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PA: "Pennsylvania",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VT: "Vermont",
  VA: "Virginia",
  WA: "Washington",
  WV: "West Virginia",
  WI: "Wisconsin",
  WY: "Wyoming",
};

/**
 * Normalizes a state value to its 2-letter abbreviation.
 * Accepts either a full state name (e.g. "California") or an abbreviation (e.g. "CA").
 * Returns the abbreviation in uppercase, or null if the value is unrecognized.
 *
 * @param {string} state
 * @returns {string|null}
 */
const normalizeState = (state) => {
  if (!state || typeof state !== "string") return null;

  const trimmed = state.trim();

  // Already a 2-letter abbreviation
  if (/^[a-zA-Z]{2}$/.test(trimmed)) {
    const upper = trimmed.toUpperCase();
    return us_states[upper] ? upper : null;
  }

  // Full name — build a reverse lookup (case-insensitive)
  const lower = trimmed.toLowerCase();
  const match = Object.entries(us_states).find(
    ([, fullName]) => fullName.toLowerCase() === lower
  );

  return match ? match[0] : null;
};

module.exports = us_states;
module.exports.normalizeState = normalizeState;
