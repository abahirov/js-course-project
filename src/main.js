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

initQuote();

import { initFilters } from './js/handlers/filter-handlers.js';

initFilters();

import {
  initCategoryHandlers,
  initBackButton,
  initSearchForm,
  initExerciseCardHandlers,
} from './js/handlers/exercises-handlers.js';

initCategoryHandlers();
initBackButton();
initSearchForm();
initExerciseCardHandlers();