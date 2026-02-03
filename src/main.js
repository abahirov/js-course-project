import { fetchQuote } from './js/api/quote-api';
import {
  loadQuote,
  saveQuote,
  isQuoteActual,
} from './js/storage/quote-storage';
import { renderQuote } from './js/ui/render-quote';


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

import { initFilters } from './js/handlers/filter-handlers';

initFilters();
