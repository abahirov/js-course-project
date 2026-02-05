import{i as o,a as n,b as d,l,c,r as i,d as v,e as u,g as f,s as p,h as m}from"./assets/burger-menu-B1RBd-sX.js";/* empty css                      */async function h(){try{const a=l();if(a&&c(a)){i(a);return}const t=await v();u(t),i(t)}catch(a){console.error("Quote initialization failed:",a)}}h();function s(){const a=document.getElementById("favorites-container");if(!a)return;const t=f();if(t.length===0){a.innerHTML=`
      <div class="empty-favorites">
        <p class="empty-favorites-text">Your favorites list is empty</p>
        <p class="empty-favorites-subtitle">Add exercises to see them here</p>
        <a href="/index.html" class="empty-favorites-link">Browse Exercises</a>
      </div>
    `;return}a.innerHTML=t.map(e=>g(e)).join(""),b()}function g(a){return`
    <div class="favorite-card" data-id="${a._id}">
      <div class="favorite-card-header">
        <span class="favorite-card-badge">WORKOUT</span>
        <button 
          type="button" 
          class="favorite-card-delete" 
          data-id="${a._id}"
          aria-label="Remove from favorites"
        >
          <svg width="16" height="16">
            <use href="img/sprite.svg#trash"></use>
          </svg>
        </button>
      </div>

      <button 
        type="button" 
        class="favorite-card-start" 
        data-id="${a._id}"
      >
        Start
        <svg width="16" height="16">
          <use href="img/sprite.svg#arrow"></use>
        </svg>
      </button>

      <div class="favorite-card-info">
        <h3 class="favorite-card-name">${a.name}</h3>
        <ul class="favorite-card-details">
          <li>
            <span class="favorite-card-detail-label">Burned calories:</span>
            <span class="favorite-card-detail-value">${a.burnedCalories} / 3 min</span>
          </li>
          <li>
            <span class="favorite-card-detail-label">Body part:</span>
            <span class="favorite-card-detail-value">${a.bodyPart}</span>
          </li>
          <li>
            <span class="favorite-card-detail-label">Target:</span>
            <span class="favorite-card-detail-value">${a.target}</span>
          </li>
        </ul>
      </div>
    </div>
  `}function b(){const a=document.getElementById("favorites-container");a&&(a.querySelectorAll(".favorite-card-start").forEach(t=>{t.addEventListener("click",e=>{const r=e.currentTarget.dataset.id;p(r)})}),a.querySelectorAll(".favorite-card-delete").forEach(t=>{t.addEventListener("click",e=>{const r=e.currentTarget.dataset.id;m(r),s()})}))}s();o();n();d();
//# sourceMappingURL=favorites.js.map
