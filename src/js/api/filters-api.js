const BASE_URL = 'https://your-energy.b.goit.study/api';

const MOCK_DATA = {
  Muscles: {
    results: [
      { name: 'Biceps', filter: 'Muscles', imgUrl: 'https://ftp.goit.study/img/power-pulse/filters/biceps.jpg' },
      { name: 'Triceps', filter: 'Muscles', imgUrl: 'https://ftp.goit.study/img/power-pulse/filters/triceps.jpg' },
      { name: 'Chest', filter: 'Muscles', imgUrl: 'https://ftp.goit.study/img/power-pulse/filters/chest.jpg' },
      { name: 'Back', filter: 'Muscles', imgUrl: 'https://ftp.goit.study/img/power-pulse/filters/back.jpg' },
      { name: 'Shoulders', filter: 'Muscles', imgUrl: 'https://ftp.goit.study/img/power-pulse/filters/shoulders.jpg' },
      { name: 'Abs', filter: 'Muscles', imgUrl: 'https://ftp.goit.study/img/power-pulse/filters/abs.jpg' },
      { name: 'Quads', filter: 'Muscles', imgUrl: 'https://ftp.goit.study/img/power-pulse/filters/quads.jpg' },
      { name: 'Hamstrings', filter: 'Muscles', imgUrl: 'https://ftp.goit.study/img/power-pulse/filters/hamstrings.jpg' },
      { name: 'Calves', filter: 'Muscles', imgUrl: 'https://ftp.goit.study/img/power-pulse/filters/calves.jpg' },
      { name: 'Glutes', filter: 'Muscles', imgUrl: 'https://ftp.goit.study/img/power-pulse/filters/glutes.jpg' },
      { name: 'Forearms', filter: 'Muscles', imgUrl: 'https://ftp.goit.study/img/power-pulse/filters/forearms.jpg' },
      { name: 'Traps', filter: 'Muscles', imgUrl: 'https://ftp.goit.study/img/power-pulse/filters/traps.jpg' }
    ],
    page: 1,
    perPage: 12,
    totalPages: 1
  },
  'Body parts': {
    results: [
      { name: 'Back', filter: 'Body parts', imgUrl: 'https://ftp.goit.study/img/power-pulse/filters/back.jpg' },
      { name: 'Cardio', filter: 'Body parts', imgUrl: 'https://ftp.goit.study/img/power-pulse/filters/cardio.jpg' },
      { name: 'Chest', filter: 'Body parts', imgUrl: 'https://ftp.goit.study/img/power-pulse/filters/chest.jpg' },
      { name: 'Lower Arms', filter: 'Body parts', imgUrl: 'https://ftp.goit.study/img/power-pulse/filters/lower-arms.jpg' },
      { name: 'Lower Legs', filter: 'Body parts', imgUrl: 'https://ftp.goit.study/img/power-pulse/filters/lower-legs.jpg' },
      { name: 'Neck', filter: 'Body parts', imgUrl: 'https://ftp.goit.study/img/power-pulse/filters/neck.jpg' },
      { name: 'Shoulders', filter: 'Body parts', imgUrl: 'https://ftp.goit.study/img/power-pulse/filters/shoulders.jpg' },
      { name: 'Upper Arms', filter: 'Body parts', imgUrl: 'https://ftp.goit.study/img/power-pulse/filters/upper-arms.jpg' },
      { name: 'Upper Legs', filter: 'Body parts', imgUrl: 'https://ftp.goit.study/img/power-pulse/filters/upper-legs.jpg' },
      { name: 'Waist', filter: 'Body parts', imgUrl: 'https://ftp.goit.study/img/power-pulse/filters/waist.jpg' }
    ],
    page: 1,
    perPage: 10,
    totalPages: 1
  },
  Equipment: {
    results: [
      { name: 'Body weight', filter: 'Equipment', imgUrl: 'https://ftp.goit.study/img/power-pulse/filters/body-weight.jpg' },
      { name: 'Barbell', filter: 'Equipment', imgUrl: 'https://ftp.goit.study/img/power-pulse/filters/barbell.jpg' },
      { name: 'Dumbbell', filter: 'Equipment', imgUrl: 'https://ftp.goit.study/img/power-pulse/filters/dumbbell.jpg' },
      { name: 'Kettlebell', filter: 'Equipment', imgUrl: 'https://ftp.goit.study/img/power-pulse/filters/kettlebell.jpg' },
      { name: 'Cable', filter: 'Equipment', imgUrl: 'https://ftp.goit.study/img/power-pulse/filters/cable.jpg' },
      { name: 'Leverage machine', filter: 'Equipment', imgUrl: 'https://ftp.goit.study/img/power-pulse/filters/leverage-machine.jpg' },
      { name: 'Assisted', filter: 'Equipment', imgUrl: 'https://ftp.goit.study/img/power-pulse/filters/assisted.jpg' },
      { name: 'Resistance band', filter: 'Equipment', imgUrl: 'https://ftp.goit.study/img/power-pulse/filters/resistance-band.jpg' },
      { name: 'Stability ball', filter: 'Equipment', imgUrl: 'https://ftp.goit.study/img/power-pulse/filters/stability-ball.jpg' }
    ],
    page: 1,
    perPage: 9,
    totalPages: 1
  }
};

export async function fetchFilters(filter) {
  const url = `${BASE_URL}/filters?filter=${encodeURIComponent(filter)}`;
  
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
    
  } catch (error) {
    if (MOCK_DATA[filter]) {
      return MOCK_DATA[filter];
    }
    return { results: [], page: 1, perPage: 0, totalPages: 0 };
  }
}