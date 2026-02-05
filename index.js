import{s as w,f as $,i as B,a as I,b as S,l as L,c as k,r as y,d as C,e as M}from"./assets/burger-menu-B1RBd-sX.js";/* empty css                      */const A="https://your-energy.b.goit.study/api";async function T(e){const t=`${A}/filters?filter=${encodeURIComponent(e)}`;try{const s=new AbortController,i=setTimeout(()=>s.abort(),5e3),n=await fetch(t,{signal:s.signal});if(clearTimeout(i),!n.ok)throw new Error(`API error: ${n.status}`);return await n.json()}catch(s){return console.error("Failed to fetch filters:",s),{results:[],page:1,perPage:0,totalPages:0}}}function F(e){const t=document.createElement("canvas");t.width=400,t.height=300;const s=t.getContext("2d"),i=s.createLinearGradient(0,0,400,300);return i.addColorStop(0,"#242424"),i.addColorStop(1,"#1a1a1a"),s.fillStyle=i,s.fillRect(0,0,400,300),s.fillStyle="#f4f4f4",s.font="24px Arial, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(e||"Exercise",200,150),t.toDataURL("image/png")}function h(e,t){const s=document.getElementById("categories-list");if(s){if(!e||!e.length){s.innerHTML="<li>No categories found</li>";return}s.innerHTML=e.map(i=>{const n=i.name||"Category",r=i.imgUrl&&!i.imgUrl.includes("ftp.goit.study")?i.imgUrl:F(n);return`
      <li class="category-card">
        <button 
          type="button" 
          class="category-btn" 
          data-filter="${t}"
          data-name="${n}"
        >
          <img 
            src="${r}" 
            alt="${n}" 
            loading="lazy"
          />
          <div class="category-info">
            <h3>${n}</h3>
            <p>${t}</p>
          </div>
        </button>
      </li>
    `}).join("")}}let o="Muscles";async function q(){const e=document.querySelectorAll(".filter-btn");e.length!==0&&(e.forEach(t=>{t.dataset.filter===o&&t.classList.add("is-active")}),e.forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.filter;s!==o&&(o=s,H(e,t),v())})}),v())}function H(e,t){e.forEach(s=>s.classList.remove("is-active")),t.classList.add("is-active")}async function v(){try{const e=await T(o);h(e.results,o)}catch(e){console.error(e),h([],o)}}function p(e){const t=document.getElementById("exercises-list"),s=document.getElementById("exercises-empty");if(t){if(!e||e.length===0){t.innerHTML="",s&&(s.style.display="block");return}s&&(s.style.display="none"),t.innerHTML=e.map(i=>`
      <li class="exercise-card" data-id="${i._id||""}">
        <div class="exercise-card-header">
          <span class="exercise-badge">WORKOUT</span>
          <div class="exercise-rating">
            <span class="exercise-rating-value">${(i.rating||0).toFixed(1)}</span>
            <svg width="16" height="16" class="exercise-rating-icon">
              <use href="img/sprite.svg#star"></use>
            </svg>
          </div>
        </div>

        <div class="exercise-card-body">
          <h3 class="exercise-card-title">${i.name||"Exercise"}</h3>
          
          <ul class="exercise-card-info">
            <li class="exercise-card-info-item">
              <span class="exercise-card-info-label">Burned calories:</span>
              <span class="exercise-card-info-value">${i.burnedCalories||0} / 3 min</span>
            </li>
            <li class="exercise-card-info-item">
              <span class="exercise-card-info-label">Body part:</span>
              <span class="exercise-card-info-value">${i.bodyPart||"N/A"}</span>
            </li>
            <li class="exercise-card-info-item">
              <span class="exercise-card-info-label">Target:</span>
              <span class="exercise-card-info-value">${i.target||"N/A"}</span>
            </li>
          </ul>
        </div>

        <button type="button" class="exercise-card-btn" data-id="${i._id||""}">
          Start
          <svg width="16" height="16">
            <use href="img/sprite.svg#arrow-right"></use>
          </svg>
        </button>
      </li>
    `).join("")}}function Q(){const e=document.querySelector(".exercises-section"),t=document.querySelector(".categories-section");e&&(e.style.display="block"),t&&(t.style.display="none")}function U(){const e=document.querySelector(".exercises-section"),t=document.querySelector(".categories-section");e&&(e.style.display="none"),t&&(t.style.display="block")}function x(e,t,s){const i=document.getElementById("pagination-container");if(!i||t<=1){i&&(i.innerHTML="");return}const n=P(e,t);i.innerHTML=`
    <div class="pagination">
      <button 
        type="button" 
        class="pagination-btn pagination-prev" 
        ${e===1?"disabled":""}
        data-page="${e-1}"
      >
        <svg width="16" height="16">
          <use href="img/sprite.svg#arrow-left"></use>
        </svg>
      </button>
      
      <div class="pagination-numbers">
        ${n.map(a=>a==="..."?'<span class="pagination-ellipsis">...</span>':`
            <button 
              type="button" 
              class="pagination-number ${a===e?"is-active":""}"
              data-page="${a}"
              ${a===e?"disabled":""}
            >
              ${a}
            </button>
          `).join("")}
      </div>
      
      <button 
        type="button" 
        class="pagination-btn pagination-next" 
        ${e===t?"disabled":""}
        data-page="${e+1}"
      >
        <svg width="16" height="16">
          <use href="img/sprite.svg#arrow-right"></use>
        </svg>
      </button>
    </div>
  `,i.querySelectorAll("[data-page]").forEach(a=>{a.disabled||a.addEventListener("click",()=>{const r=parseInt(a.dataset.page);s(r)})})}function P(e,t){const s=[];if(t<=7)for(let n=1;n<=t;n++)s.push(n);else{s.push(1);const n=Math.max(2,e-2),a=Math.min(t-1,e+2);n>2&&s.push("...");for(let r=n;r<=a;r++)s.push(r);a<t-1&&s.push("..."),s.push(t)}return s}let d="",u="",f="",c=1,l=1;const g=10;function R(){const e=document.getElementById("categories-list");e&&e.addEventListener("click",async t=>{const s=t.target.closest(".category-btn");if(!s)return;const i=s.dataset.filter,n=s.dataset.name;await D(i,n)})}function N(){const e=document.getElementById("back-to-categories");e&&e.addEventListener("click",()=>{U(),d="",u="",f="",c=1,l=1})}function _(){const e=document.getElementById("search-form");e&&e.addEventListener("submit",async t=>{t.preventDefault(),f=document.getElementById("search-input").value.trim(),c=1,await m()})}function j(){const e=document.getElementById("exercises-list");e&&e.addEventListener("click",t=>{const s=t.target.closest(".exercise-card-btn");if(!s)return;const i=s.dataset.id;i&&w(i)})}async function D(e,t){try{d=e,u=t,f="",c=1;const s=document.getElementById("exercises-title");s&&(s.textContent=`Exercises / ${t}`);const i=document.getElementById("search-input");i&&(i.value=""),Q(),await m()}catch(s){console.error("Failed to load exercises:",s),p([])}}async function m(){try{const e={page:c,limit:g};d==="Muscles"?e.muscles=u:d==="Body parts"?e.bodypart=u:d==="Equipment"&&(e.equipment=u),f&&(e.keyword=f);const t=await $(e);if(!t)throw new Error("No data received from API");const s=t.results||[];p(s),t.totalPages?l=t.totalPages:t.total&&g?l=Math.ceil(t.total/g):l=1,x(c,l,E)}catch(e){console.error("Failed to load exercises:",e),p([]),x(1,1,E)}}function E(e){c=e,m();const t=document.getElementById("exercises-section");t&&t.scrollIntoView({behavior:"smooth",block:"start"})}async function O(){try{const e=L();if(e&&k(e)){y(e);return}const t=await C();M(t),y(t)}catch(e){console.error("Quote initialization failed:",e)}}function b(){O(),q(),R(),N(),_(),j(),B(),I(),S()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",b):b();
//# sourceMappingURL=index.js.map
