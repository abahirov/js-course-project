const BASE_URL = 'https://your-energy.b.goit.study/api';

/**
 * Fetch categories by filter type
 * @param {string} filter
 */
export async function fetchFilters(filter) {
  const response = await fetch(
    `${BASE_URL}/filters?filter=${encodeURIComponent(filter)}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch filters');
  }

  return response.json();
}
