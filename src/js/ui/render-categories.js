export function renderCategories(categories, filter) {
  const listEl = document.getElementById('categories-list');
  if (!listEl) return;

  if (!categories.length) {
    listEl.innerHTML = '<li>No categories found</li>';
    return;
  }

  listEl.innerHTML = categories
    .map(
      item => `
      <li class="category-card">
        <button 
          type="button" 
          class="category-btn" 
          data-filter="${filter}"
          data-name="${item.name}"
        >
          <img src="${item.imgUrl}" alt="${item.name}" loading="lazy" />
          <div class="category-info">
            <h3>${item.name}</h3>
            <p>${filter}</p>
          </div>
        </button>
      </li>
    `
    )
    .join('');
}