import{N as X,a as z}from"./vendor-C1SuE_Y7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const x=new X({duration:3e3,position:{x:"right",y:"top"},dismissible:!0,ripple:!1,types:[{type:"success",icon:{className:"notyf__icon--success",tagName:"i"}},{type:"error",icon:{className:"notyf__icon--error",tagName:"i"}}]});function I(){const e=document.querySelector(".notyf");if(e){e.hasAttribute("popover")||e.setAttribute("popover","manual");try{e.matches(":popover-open")&&e.hidePopover(),e.showPopover()}catch{}}}const h={success(e){x.success(e),I()},error(e){x.error(e),I()},warning(e){x.open({type:"warning",message:e}),I()},info(e){x.open({type:"info",message:e}),I()}},J="https://your-energy.b.goit.study/api",E={TABLET:768,DESKTOP:1440},f={CATEGORIES_MOBILE:9,CATEGORIES_DESKTOP:12,EXERCISES_MOBILE:8,EXERCISES_TABLET:10,DEFAULT:12},v={FAVORITES:"favoriteExercises",QUOTE:"quote-of-the-day"},D=300,y=z.create({baseURL:J}),P={400:"Bad request. Please check your input.",401:"Unauthorized. Please log in.",404:"Resource not found.",409:"This email has already been used.",500:"Server error. Please try again later.",default:"Something went wrong. Please try again."};y.interceptors.response.use(e=>e,e=>{var i;if(!e.response){const o=!navigator.onLine?"No internet connection. Please check your network.":"Unable to connect to server. Please try again later.";return h.error(o),Promise.reject(e)}const t=e.response.status;if(t===409)return Promise.reject(e);const a=((i=e.response.data)==null?void 0:i.message)||P[t]||P.default;return h.error(a),Promise.reject(e)});const Y=async()=>{const{data:e}=await y.get("/quote");return e},Z=async({filter:e,page:t=1,limit:n=f.DEFAULT})=>{const{data:a}=await y.get("/filters",{params:{filter:e,page:t,limit:n}});return a},ee=async({bodypart:e,muscles:t,equipment:n,keyword:a,page:i=1,limit:s=f.EXERCISES_TABLET})=>{const o={page:i,limit:s};e&&(o.bodypart=e),t&&(o.muscles=t),n&&(o.equipment=n),a&&(o.keyword=a);const{data:c}=await y.get("/exercises",{params:o});return c},U=async e=>{const{data:t}=await y.get(`/exercises/${e}`);return t},te=async(e,t,n,a="")=>{const i={rate:t,email:n};a&&(i.review=a);const{data:s}=await y.patch(`/exercises/${e}/rating`,i);return s},ne=async e=>{const{data:t}=await y.post("/subscription",{email:e});return t},ae=`<li class="exercise-card {{cardClass}}" data-id="{{id}}">
  <div class="exercise-card-header">
    <div class="exercise-card-left">
      <span class="exercise-workout-badge">WORKOUT</span>
      <span class="exercise-rating" aria-label="Rating: {{ratingFormatted}} out of 5">
        {{ratingFormatted}}
        <svg width="18" height="18" class="exercise-rating-star" aria-hidden="true">
          <use href="#icon-star"></use>
        </svg>
      </span>
      <button type="button" class="favorite-delete-btn" data-id="{{id}}" aria-label="Remove {{name}} from favorites">
        <svg width="20" height="20" aria-hidden="true">
          <use href="#icon-trash"></use>
        </svg>
      </button>
    </div>
    <button class="exercise-start-btn" data-id="{{id}}" aria-label="Start exercise {{name}}">
      Start
      <svg width="16" height="16" aria-hidden="true">
        <use href="#icon-arrow"></use>
      </svg>
    </button>
  </div>

  <div class="exercise-card-body">
    <span class="exercise-icon">
      <svg width="16px" height="16px" aria-hidden="true">
        <use href="#icon-quote"></use>
      </svg>
    </span>
    <h3 class="exercise-card-title">{{name}}</h3>
  </div>

  <ul class="exercise-card-meta">
    <li class="meta-item">
      <span class="meta-label">Burned calories:</span>
      <span class="meta-value">{{burnedCalories}} / {{time}} min</span>
    </li>
    <li class="meta-item">
      <span class="meta-label">Body part:</span>
      <span class="meta-value">{{bodyPart}}</span>
    </li>
    <li class="meta-item">
      <span class="meta-label">Target:</span>
      <span class="meta-value">{{target}}</span>
    </li>
  </ul>
</li>
`,ie=`<li class="category-card" data-filter="{{filter}}" data-name="{{name}}">
  <img src="{{imgURL}}" alt="" class="category-card-bg">
  <div class="category-card-overlay"></div>
  <div class="category-card-content">
    <h3 class="category-name">
      <a href="#" class="category-link">{{name}}</a>
    </h3>
    <p class="category-filter">{{filter}}</p>
  </div>
</li>
`,se=`<div class="favorites-empty">
  <p class="favorites-empty-text">
    It appears that you haven't added any exercises to your favorites yet. To get started, you can
    add exercises that you like to your favorites for easier access in the future.
  </p>
</div>
`,re=`<ul class="pagination-list">
  <li>
    <a href="#" class="pagination-btn pagination-first" data-page="1" aria-label="Go to first page">
      <svg width="13" height="12" class="pagination-icon flip" aria-hidden="true">
        <use href="#icon-double-arrow-right"></use>
      </svg>
    </a>
  </li>
  <li>
    <a href="#" class="pagination-btn pagination-prev" aria-label="Go to previous page">
      <svg width="20" height="20" class="pagination-icon flip" aria-hidden="true">
        <use href="#icon-arrow-right"></use>
      </svg>
    </a>
  </li>
  <li>
    <ul class="pagination-numbers"></ul>
  </li>
  <li>
    <a href="#" class="pagination-btn pagination-next" aria-label="Go to next page">
      <svg width="20" height="20" class="pagination-icon" aria-hidden="true">
        <use href="#icon-arrow-right"></use>
      </svg>
    </a>
  </li>
  <li>
    <a href="#" class="pagination-btn pagination-last" aria-label="Go to last page">
      <svg width="13" height="12" class="pagination-icon" aria-hidden="true">
        <use href="#icon-double-arrow-right"></use>
      </svg>
    </a>
  </li>
</ul>
`,oe={"exercise-card":ae,"category-card":ie,"favorites-empty":se,pagination:re},L=async e=>oe[e]||"",F=(e,t)=>e.replace(/\{\{(\w+)\}\}/g,(n,a)=>t[a]!==void 0?t[a]:""),ce=e=>{const t=document.getElementById("quote-text"),n=document.getElementById("quote-author");t&&e.quote&&(t.textContent=e.quote),n&&e.author&&(n.textContent=e.author)},le=async(e,t)=>{const n=document.getElementById(t);if(!n)return;if(e.length===0){n.innerHTML='<p class="no-results">No exercises found. Try another filter.</p>';return}const a=await L("exercise-card"),i=e.map(s=>F(a,{id:s._id,rating:s.rating||0,ratingFormatted:s.rating?s.rating.toFixed(1):"0.0",cardClass:"",name:s.name,burnedCalories:s.burnedCalories||0,time:s.time||0,bodyPart:s.bodyPart||"N/A",target:s.target||"N/A"})).join("");n.className="exercises-grid",n.innerHTML=i},de=async(e,t)=>{const n=document.getElementById(t);if(!n)return;if(e.length===0){n.innerHTML='<p class="no-results">No categories found.</p>';return}const a=await L("category-card"),i=e.map(s=>F(a,{filter:s.filter,name:s.name,imgURL:s.imgURL||""})).join("");n.className="categories-grid",n.innerHTML=i},$=(e,t,n=9)=>{const a=document.getElementById(t);if(a)if(e==="categories")a.className="categories-grid",a.innerHTML=Array(n).fill('<li class="category-skeleton skeleton-shimmer"></li>').join("");else{const i=`
      <li class="exercise-skeleton">
        <div class="shimmer-header">
           <div class="shimmer-badge skeleton-shimmer"></div>
           <div class="shimmer-badge skeleton-shimmer"></div>
        </div>
        <div class="shimmer-title skeleton-shimmer"></div>
        <div class="shimmer-line skeleton-shimmer"></div>
        <div class="shimmer-line skeleton-shimmer"></div>
      </li>
    `;a.className="exercises-grid",a.innerHTML=Array(n).fill(i).join("")}},ue=()=>{const e=document.getElementById("modal-exercise-gif"),t=document.getElementById("modal-exercise-title"),n=document.getElementById("modal-exercise-rating"),a=document.getElementById("modal-target"),i=document.getElementById("modal-bodypart"),s=document.getElementById("modal-equipment"),o=document.getElementById("modal-popular"),c=document.getElementById("modal-calories"),m=document.getElementById("modal-description");e&&(e.src="data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3C/svg%3E"),t&&(t.textContent="Loading..."),n&&(n.innerHTML='<div class="skeleton-shimmer" style="width: 100px; height: 20px; border-radius: 4px;"></div>');const u='<span class="skeleton-shimmer" style="display: inline-block; width: 60px; height: 14px; border-radius: 2px;"></span>';a&&(a.innerHTML=u),i&&(i.innerHTML=u),s&&(s.innerHTML=u),o&&(o.innerHTML=u),c&&(c.innerHTML=u),m&&(m.innerHTML=`
      <div class="skeleton-shimmer" style="width: 100%; height: 14px; border-radius: 2px; margin-bottom: 8px;"></div>
      <div class="skeleton-shimmer" style="width: 90%; height: 14px; border-radius: 2px; margin-bottom: 8px;"></div>
      <div class="skeleton-shimmer" style="width: 40%; height: 14px; border-radius: 2px;"></div>
    `)};function j(e,{timeout:t=2e3}={}){const n=()=>{"requestIdleCallback"in window?requestIdleCallback(()=>e(),{timeout:t}):setTimeout(()=>e(),1)};document.readyState==="complete"?n():window.addEventListener("load",n,{once:!0})}const M=async(e,t,n="pagination-container")=>{const a=document.getElementById(n);if(!a)return;if(t<=1){a.innerHTML="";return}if(!a.querySelector(".pagination-list")){const g=await L("pagination");a.innerHTML=g}const i=a.querySelector(".pagination-first"),s=a.querySelector(".pagination-prev"),o=a.querySelector(".pagination-next"),c=a.querySelector(".pagination-last"),m=a.querySelector(".pagination-numbers");B(i,e===1,1),B(s,e===1,e-1),B(o,e===t,e+1),B(c,e===t,t);const d=me(e,t).map(g=>g==="..."?'<li aria-hidden="true"><span class="pagination-dots">...</span></li>':g===e?`<li><a href="#" class="pagination-number current" aria-current="page">${g}</a></li>`:`<li><a href="#" class="pagination-number" data-page="${g}">${g}</a></li>`).join("");m.innerHTML=d};function B(e,t,n){t?(e.classList.add("disabled"),e.setAttribute("aria-disabled","true"),e.removeAttribute("data-page")):(e.classList.remove("disabled"),e.removeAttribute("aria-disabled"),e.dataset.page=n)}function me(e,t){const n=[];if(t<=3){for(let s=1;s<=t;s++)n.push(s);return n}let a,i;e===1?(a=1,i=3):e===t?(a=t-2,i=t):(a=e-1,i=e+1),a>1&&n.push("...");for(let s=a;s<=i;s++)n.push(s);return i<t&&n.push("..."),n}function V(e,t="pagination-container"){const n=document.getElementById(t);n&&n.dataset.listenerAttached!=="true"&&(n.dataset.listenerAttached="true",n.addEventListener("click",a=>{const i=a.target.closest(".pagination-number, .pagination-btn");if(!i||i.classList.contains("disabled")||i.classList.contains("current"))return;a.preventDefault();const s=Number(i.dataset.page);s&&!isNaN(s)&&e(s)}))}function ge(e="exercises-header"){var n;const t=document.getElementById(e);t?t.scrollIntoView({behavior:"smooth"}):(n=document.querySelector(".exercises-section"))==null||n.scrollIntoView({behavior:"smooth"})}const R=e=>{const t=document.getElementById(e);if(t&&(t.showModal(),t.dataset.backdropListener!=="true")){let n=null;t.addEventListener("mousedown",a=>{n=a.target}),t.addEventListener("click",a=>{a.target===t&&n===t&&t.close(),n=null}),t.dataset.backdropListener="true"}},b=e=>{const t=document.getElementById(e);t&&t.close()},fe=e=>{if(!e)return;const t=document.getElementById("modal-exercise-gif");t&&(t.src=e.gifUrl||"",t.alt=e.name||"Exercise");const n=document.getElementById("modal-exercise-title");n&&(n.textContent=e.name||"Exercise");const a=document.getElementById("modal-exercise-rating");if(a){const g=e.rating||0,O=Math.floor(g);a.innerHTML=`
      <span class="rating-value">${g.toFixed(1)}</span>
      <div class="rating-stars">
        ${Array.from({length:5},(Ge,W)=>`<svg class="star ${W<O?"filled":""}" width="18" height="18" aria-hidden="true">
            <use href="#icon-star"></use>
          </svg>`).join("")}
      </div>
    `}const i=document.getElementById("modal-target");i&&(i.textContent=e.target||"N/A");const s=document.getElementById("modal-bodypart");s&&(s.textContent=e.bodyPart||"N/A");const o=document.getElementById("modal-equipment");o&&(o.textContent=e.equipment||"N/A");const c=document.getElementById("modal-popular");c&&(c.textContent=e.popularity||"0");const m=document.getElementById("modal-calories");m&&(m.textContent=`${e.burnedCalories||0}/${e.time||0} min`);const u=document.getElementById("modal-description");u&&(u.textContent=e.description||"No description available.");const d=document.getElementById("exercise-modal");d&&(d.dataset.exerciseId=e._id)};let A=null;const pe=e=>{const t=document.getElementById("rating-modal");A=e,b("exercise-modal"),t&&t.dataset.closeListener!=="true"&&(t.addEventListener("close",()=>{H(),A&&(ye(),A=null)}),t.dataset.closeListener="true"),R("rating-modal"),H(),he()},ye=()=>{R("exercise-modal")},q=()=>{b("rating-modal")},H=()=>{const e=document.getElementById("rating-form"),t=document.getElementById("rating-display-value");e&&e.reset(),t&&(t.textContent="0.0")},he=()=>{const e=document.getElementById("rating-stars"),t=document.getElementById("rating-display-value");e&&e.dataset.listenerAttached!=="true"&&(e.dataset.listenerAttached="true",e.addEventListener("change",n=>{if(n.target.type==="radio"){const a=parseFloat(n.target.value);t&&(t.textContent=a.toFixed(1))}}))},ve=()=>{const e=document.querySelector('#rating-stars input[name="rating"]:checked');return e?parseFloat(e.value):0};function S(){try{const e=localStorage.getItem(v.FAVORITES);return e?JSON.parse(e):[]}catch{return[]}}function Ee(e){try{const t=S();return t.includes(e)?!1:(t.push(e),localStorage.setItem(v.FAVORITES,JSON.stringify(t)),!0)}catch{return!1}}function N(e){try{const n=S().filter(a=>a!==e);return localStorage.setItem(v.FAVORITES,JSON.stringify(n)),!0}catch{return!1}}function _(e){return S().includes(e)}async function G(e,t={}){R("exercise-modal"),ue();try{const n=await U(e);fe(n),be(e,t)}catch{b("exercise-modal")}}function be(e,t={}){const{onRemoveFavorite:n,isFavoritesPage:a=!1}=t,i=document.getElementById("modal-close-btn");i&&(i.onclick=()=>b("exercise-modal"));const s=document.getElementById("give-rating-btn");s&&(s.onclick=()=>{pe(e),we(e)});const o=document.getElementById("add-to-favorites-btn");if(o){const c=()=>{_(e)?o.innerHTML=`
          <span class="btn-text">Remove from favorites</span>
          <svg width="20" height="20" aria-hidden="true">
            <use href="#icon-trash"></use>
          </svg>
        `:o.innerHTML=`
          <span class="btn-text">Add to favorites</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M10 3.5C10 3.5 6.5 1 3.5 3.5C0.5 6 2 10 10 16.5C18 10 19.5 6 16.5 3.5C13.5 1 10 3.5 10 3.5Z" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        `};o.onclick=()=>{_(e)?(N(e),a?(b("exercise-modal"),n&&n()):c()):(Ee(e),c())},c()}}function we(e){const t=document.getElementById("rating-modal-close-btn");t&&(t.onclick=()=>q());const n=document.getElementById("rating-form");n&&(n.onsubmit=async a=>{var c,m;if(a.preventDefault(),!n.checkValidity()){n.reportValidity();return}const i=ve(),s=n.email.value.trim(),o=((c=n.review)==null?void 0:c.value.trim())||"";try{await te(e,i,s,o),q(),h.success("Rating submitted successfully!")}catch(u){((m=u.response)==null?void 0:m.status)===409?h.error("You have already rated this exercise."):h.error("Failed to submit rating. Please try again.")}})}function K(){return new Date().toISOString().split("T")[0]}function Le(){try{const e=localStorage.getItem(v.QUOTE);if(!e)return null;const{quote:t,author:n,date:a}=JSON.parse(e),i=K();return a===i?{quote:t,author:n}:(localStorage.removeItem(v.QUOTE),null)}catch{return null}}function xe(e,t){try{const n={quote:e,author:t,date:K()};localStorage.setItem(v.QUOTE,JSON.stringify(n))}catch{}}async function Q(){try{let e=Le();e||(e=await Y(),xe(e.quote,e.author)),ce(e)}catch{}}const r={view:"categories",filter:"Muscles",category:null,categoryFilter:null,keyword:"",page:1},T=()=>{const e=window.innerWidth;return r.view==="categories"?e<E.TABLET?f.CATEGORIES_MOBILE:f.CATEGORIES_DESKTOP:e<E.TABLET?f.EXERCISES_MOBILE:f.EXERCISES_TABLET};function Ie(){const e=document.querySelector(".main-content"),t=T();$(r.view,"exercises-container",t),Se(),Ae(),V(Te),Be(),e&&e.classList.add("loaded"),j(async()=>{try{await Q(),await p()}catch{}})}function Be(){let e,t=T();window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{const n=T();n!==t&&(t=n,r.page=1,p())},D)})}async function p(){const e=document.getElementById("exercises-container");try{const t=T();if($(r.view,"exercises-container",t),r.view==="categories"){const n=await Z({filter:r.filter,page:r.page,limit:t});de(n.results,"exercises-container"),M(n.page?Number(n.page):1,n.totalPages||1)}else{const n={limit:t,page:r.page};r.categoryFilter==="Muscles"?n.muscles=r.category.toLowerCase():r.categoryFilter==="Body parts"?n.bodypart=r.category.toLowerCase():r.categoryFilter==="Equipment"&&(n.equipment=r.category.toLowerCase()),r.keyword&&(n.keyword=r.keyword);const a=await ee(n);le(a.results,"exercises-container"),M(a.page?Number(a.page):1,a.totalPages||1)}}catch{e&&(e.innerHTML='<p class="error-message">Failed to load data. Please try again.</p>')}}function Te(e){e&&e!==r.page&&(r.page=e,p(),ge())}function Se(){const e=document.getElementById("filter-tabs");e&&e.dataset.listenerAttached!=="true"&&(e.dataset.listenerAttached="true",e.addEventListener("click",async t=>{const n=t.target.closest(".filter-tab");if(n){document.querySelectorAll(".filter-tab").forEach(a=>{a.classList.remove("active")}),n.classList.add("active"),r.filter=n.dataset.filter,r.view="categories",r.page=1,r.keyword="",r.category=null,Me();try{await p()}catch{}}}))}function Ae(){const e=document.getElementById("exercises-container");e&&e.dataset.listenerAttached!=="true"&&(e.dataset.listenerAttached="true",e.addEventListener("click",async t=>{const n=t.target.closest(".category-card");if(n){t.preventDefault();const i=n.dataset.name,s=n.dataset.filter;if(!i)return;r.view="exercises",r.category=i,r.categoryFilter=s,r.page=1,r.keyword="",Ce(i),ke();try{await p()}catch{}return}const a=t.target.closest(".exercise-start-btn");if(a){const i=a.dataset.id;if(!i)return;await G(i)}}))}function Ce(e){const t=document.getElementById("section-title"),n=document.getElementById("exercise-search-form");t&&(t.innerHTML=`Exercises / <span class="category-name">${e}</span>`),n&&n.classList.remove("hidden")}function Me(){const e=document.getElementById("section-title"),t=document.getElementById("exercise-search-form"),n=document.getElementById("exercise-search-input"),a=document.getElementById("exercise-clear-btn");e&&(e.textContent="Exercises"),t&&t.classList.add("hidden"),n&&(n.value=""),a&&a.classList.add("hidden")}function ke(){const e=document.getElementById("exercise-search-form"),t=document.getElementById("exercise-search-input"),n=document.getElementById("exercise-clear-btn");!e||!t||e.dataset.listenerAttached!=="true"&&(e.dataset.listenerAttached="true",t.addEventListener("input",()=>{t.value.trim()?n.classList.remove("hidden"):n.classList.add("hidden")}),n.addEventListener("click",async()=>{t.value="",n.classList.add("hidden"),t.focus(),r.keyword="",r.page=1;try{await p()}catch{}}),e.addEventListener("submit",async a=>{a.preventDefault();const i=t.value.trim();r.keyword=i,r.page=1;try{await p()}catch{}}))}const l={page:1,exercises:[]};function k(){const e=window.innerWidth;return e>=E.DESKTOP?1/0:e>=E.TABLET?f.EXERCISES_TABLET:f.EXERCISES_MOBILE}function Fe(){return window.innerWidth<E.DESKTOP}async function Re(e){const t=await L("favorites-empty");e.innerHTML=t}async function Ne(){const e=S();if(e.length===0){l.exercises=[];return}const t=e.map(async a=>{try{return await U(a)}catch{return N(a),null}}),n=await Promise.all(t);l.exercises=n.filter(Boolean)}async function w(){const e=document.getElementById("favorites-container");if(!e)return;const t=document.getElementById("favorites-pagination");if(l.exercises.length===0){await Re(e),t&&(t.innerHTML="");return}const n=k(),a=Fe(),i=a?Math.ceil(l.exercises.length/n):1;l.page>i&&(l.page=i);const s=a?(l.page-1)*n:0,o=a?s+n:l.exercises.length,c=l.exercises.slice(s,o),m=await L("exercise-card"),u=c.map(d=>F(m,{id:d._id,name:d.name,burnedCalories:d.burnedCalories||0,time:d.time||0,bodyPart:d.bodyPart||"N/A",target:d.target||"N/A",rating:d.rating||0,ratingFormatted:d.rating?d.rating.toFixed(1):"0.0",cardClass:"is-favorite"})).join("");e.className="favorites-grid",e.innerHTML=u,a?M(l.page,i,"favorites-pagination"):t&&(t.innerHTML="")}function Oe(e){e&&e!==l.page&&(l.page=e,w())}function Pe(){let e,t=k();window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{const n=k();n!==t&&(t=n,l.page=1,w())},D)})}function qe(){const e=document.getElementById("favorites-container");e&&e.dataset.listenerAttached!=="true"&&(e.dataset.listenerAttached="true",e.addEventListener("click",async t=>{const n=t.target.closest(".favorite-delete-btn");if(n){t.stopPropagation();const i=n.dataset.id;i&&(N(i),l.exercises=l.exercises.filter(s=>s._id!==i),await w());return}const a=t.target.closest(".exercise-start-btn");if(a){t.stopPropagation();const i=a.dataset.id;if(!i)return;await G(i,{isFavoritesPage:!0,onRemoveFavorite:async()=>{l.exercises=l.exercises.filter(s=>s._id!==i),await w()}})}}))}function He(){const e=document.querySelector(".favorites-page");qe(),V(Oe,"favorites-pagination"),Pe(),e&&e.classList.add("loaded"),j(async()=>{try{await Q(),await Ne(),await w()}catch{}})}function _e(){const e=document.getElementById("burger-btn"),t=document.getElementById("mobile-menu"),n=document.getElementById("mobile-close-btn");if(!e||!t||!n)return;e.addEventListener("click",De),n.addEventListener("click",C),t.addEventListener("click",i=>{i.target===t&&C()}),t.querySelectorAll(".mobile-nav-link").forEach(i=>{i.addEventListener("click",()=>{C()})}),t.addEventListener("close",()=>{e.setAttribute("aria-expanded","false"),document.body.style.overflow=""})}function De(){const e=document.getElementById("mobile-menu"),t=document.getElementById("burger-btn");e&&(e.showModal(),document.body.style.overflow="hidden"),t&&t.setAttribute("aria-expanded","true")}function C(){const e=document.getElementById("mobile-menu");e&&e.close()}function Ue(){const e=window.location.pathname;document.querySelectorAll(".nav-link, .mobile-nav-link").forEach(n=>{const a=n.getAttribute("href");e.endsWith(a.replace("./","/"))||e.endsWith("/")&&a.includes("index.html")||e.endsWith("/index.html")&&a.includes("index.html")||e.includes("favorites")&&a.includes("favorites")?(n.setAttribute("aria-current","page"),n.classList.add("active")):(n.removeAttribute("aria-current"),n.classList.remove("active"))})}document.addEventListener("DOMContentLoaded",()=>{_e(),Ue()});function $e(){const e=window.location.pathname,t=document.getElementById("nav-home"),n=document.getElementById("nav-favorites");e.includes("favorites")?n==null||n.classList.add("active"):t==null||t.classList.add("active")}function je(){const e=document.querySelector(".header");if(!e)return;const t=()=>window.innerWidth<768,n=()=>{t()&&window.scrollY>0?e.classList.add("scrolled"):e.classList.remove("scrolled")};window.addEventListener("scroll",n,{passive:!0}),window.addEventListener("resize",n,{passive:!0}),n()}function Ve(){const e=document.getElementById("subscription-form");e&&e.addEventListener("submit",async t=>{t.preventDefault();const n=e.email.value;try{await ne(n),h.success("Successfully subscribed!"),e.reset()}catch{}})}document.addEventListener("DOMContentLoaded",()=>{$e(),Ve(),je(),document.getElementById("exercises-container")&&Ie(),document.getElementById("favorites-container")&&He()});
//# sourceMappingURL=main-3HDqIxz4.js.map
