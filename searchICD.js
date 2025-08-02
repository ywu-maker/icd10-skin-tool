
import icdList from './icd_list.json' assert { type: 'json' };
import aliasMap from './alias_map_skinpathology.json' assert { type: 'json' };
import locationMap from './location_map_skinpathology.json' assert { type: 'json' };

export function searchICD(input, mode = 'diagnosis') {
  const query = input.trim().toLowerCase();
  let results = [];

  // Try alias expansion
  const expanded = aliasMap[query] || query;

  // Search by diagnosis or location
  if (mode === 'diagnosis') {
    results = icdList.filter(entry =>
      entry.diagnosis.toLowerCase().includes(expanded)
    );
  } else if (mode === 'location') {
    const mappedTerms = locationMap[query] || [query];
    results = icdList.filter(entry =>
      mappedTerms.some(term =>
        entry.diagnosis.toLowerCase().includes(term)
      )
    );
  }

  // Format results
  return results.length > 0
    ? results.map(entry => ({
        diagnosis: capitalize(entry.diagnosis),
        code: entry.code
      }))
    : [{ diagnosis: capitalize(input), code: 'Not Found' }];
}

function capitalize(str) {
  return str.replace(/\b\w+/g, w => w.charAt(0).toUpperCase() + w.slice(1));
}
