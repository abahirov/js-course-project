import { fetchFilters } from '../api/filters-api';
import { renderCategories } from '../ui/render-categories';

let activeFilter = 'Muscles';

export async function initFilters() {
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      if (filter === activeFilter) return;

      activeFilter = filter;
      updateActiveButton(buttons, btn);
      loadCategories();
    });
  });

  loadCategories();
}

function updateActiveButton(buttons, activeBtn) {
  buttons.forEach(btn => btn.classList.remove('is-active'));
  activeBtn.classList.add('is-active');
}

async function loadCategories() {
  try {
    const data = await fetchFilters(activeFilter);
    renderCategories(data, activeFilter);
  } catch (error) {
    console.error(error);
  }
}
