import { fetchExerciseById } from '../api/exercises-api.js';
import { openModal, closeModal } from './modal.js';
import {
  addToFavorites,
  removeFromFavorites,
  isFavorite,
} from '../storage/favorites-storage.js';

export async function showExerciseModal(exerciseId) {
  try {
    const exercise = await fetchExerciseById(exerciseId);
    renderExerciseModal(exercise);
    openModal('exercise-modal');
  } catch (error) {
    console.error('Failed to load exercise details:', error);
  }
}

function renderExerciseModal(exercise) {
  const modalBody = document.getElementById('modal-body');
  if (!modalBody) return;

  const isInFavorites = isFavorite(exercise._id);
  const favoriteText = isInFavorites
    ? 'Remove from favorites'
    : 'Add to favorites';

  modalBody.innerHTML = `
    <div class="exercise-modal">
      ${
        exercise.gifUrl
          ? `<div class="exercise-modal-video">
          <img src="${exercise.gifUrl}" alt="${exercise.name}" />
        </div>`
          : ''
      }
      
      <div class="exercise-modal-info">
        <h3 class="exercise-modal-title">${exercise.name}</h3>
        
        <div class="exercise-modal-rating">
          <span>${exercise.rating.toFixed(1)}</span>
          <svg width="16" height="16">
            <use href="img/sprite.svg#star"></use>
          </svg>
        </div>

        <div class="exercise-modal-details">
          <div class="exercise-modal-detail">
            <span class="exercise-modal-detail-label">Target</span>
            <span class="exercise-modal-detail-value">${exercise.target}</span>
          </div>
          <div class="exercise-modal-detail">
            <span class="exercise-modal-detail-label">Body Part</span>
            <span class="exercise-modal-detail-value">${exercise.bodyPart}</span>
          </div>
          <div class="exercise-modal-detail">
            <span class="exercise-modal-detail-label">Equipment</span>
            <span class="exercise-modal-detail-value">${exercise.equipment}</span>
          </div>
          <div class="exercise-modal-detail">
            <span class="exercise-modal-detail-label">Popular</span>
            <span class="exercise-modal-detail-value">${exercise.popularity}</span>
          </div>
          <div class="exercise-modal-detail">
            <span class="exercise-modal-detail-label">Burned Calories</span>
            <span class="exercise-modal-detail-value">${exercise.burnedCalories} / 3 min</span>
          </div>
        </div>

        <p class="exercise-modal-description">${exercise.description}</p>

        <div class="exercise-modal-actions">
          <button 
            type="button" 
            class="exercise-modal-favorite" 
            id="toggle-favorite"
            data-id="${exercise._id}"
          >
            ${favoriteText}
          </button>
          <button 
            type="button" 
            class="exercise-modal-rating-btn"
            id="open-rating-modal"
            data-id="${exercise._id}"
          >
            Give a rating
          </button>
        </div>
      </div>
    </div>
  `;

  initModalHandlers(exercise);
}

function initModalHandlers(exercise) {
  const closeBtn = document.getElementById('modal-close');
  const favoriteBtn = document.getElementById('toggle-favorite');
  const ratingBtn = document.getElementById('open-rating-modal');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => closeModal('exercise-modal'));
  }

  if (favoriteBtn) {
    favoriteBtn.addEventListener('click', () => {
      const isInFavorites = isFavorite(exercise._id);

      if (isInFavorites) {
        removeFromFavorites(exercise._id);
        favoriteBtn.textContent = 'Add to favorites';
      } else {
        addToFavorites(exercise);
        favoriteBtn.textContent = 'Remove from favorites';
      }
    });
  }

  if (ratingBtn) {
    ratingBtn.addEventListener('click', () => {
      console.log('Open rating modal for:', exercise._id);
    });
  }
}