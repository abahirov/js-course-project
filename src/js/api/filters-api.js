const BASE_URL = 'https://your-energy.b.goit.study/api';

export async function fetchFilters(filter) {
  const response = await fetch(
    `${BASE_URL}/filters?filter=${encodeURIComponent(filter)}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch filters');
  }

  return response.json();
}