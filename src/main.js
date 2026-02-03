import { fetchQuote } from './js/api/quote-api.js';
import {
  loadQuote,
  saveQuote,
  isQuoteActual,
} from './js/storage/quote-storage.js';
import { renderQuote } from './js/ui/render-quote.js';

async function initQuote() {
  try {
    const savedQuote = loadQuote();

    if (savedQuote && isQuoteActual(savedQuote)) {
      renderQuote(savedQuote);
      return;
    }

    const data = await fetchQuote();
    saveQuote(data);
    renderQuote(data);
  } catch (error) {
    console.error('Quote initialization failed:', error);
  }
}

import { initFilters } from './js/handlers/filter-handlers.js';
import {
  initCategoryHandlers,
  initBackButton,
  initSearchForm,
  initExerciseCardHandlers,
} from './js/handlers/exercises-handlers.js';
import { initSubscription } from './js/handlers/subscription-handler.js';
import { initRatingModal } from './js/handlers/rating-handler.js';

function initApp() {
  initQuote();
  initFilters();
  initCategoryHandlers();
  initBackButton();
  initSearchForm();
  initExerciseCardHandlers();
  initSubscription();
  initRatingModal();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}