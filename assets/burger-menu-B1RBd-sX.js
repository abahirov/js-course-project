(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=o(i);fetch(i.href,s)}})();const I="https://your-energy.b.goit.study/api";async function J(){const e=await fetch(`${I}/quote`);if(!e.ok)throw new Error("Failed to fetch quote");return e.json()}const b="quoteOfTheDay";function V(e){const t={...e,date:new Date().toISOString().split("T")[0]};localStorage.setItem(b,JSON.stringify(t))}function U(){const e=localStorage.getItem(b);return e?JSON.parse(e):null}function H(e){const t=new Date().toISOString().split("T")[0];return e.date===t}function Q({quote:e,author:t}){const o=document.getElementById("quote-text"),n=document.getElementById("quote-author");!o||!n||(o.textContent=e,n.textContent=t?`— ${t}`:"")}const p="https://your-energy.b.goit.study/api";async function G(e={}){const t=new URLSearchParams;e.bodypart&&t.append("bodypart",e.bodypart),e.muscles&&t.append("muscles",e.muscles),e.equipment&&t.append("equipment",e.equipment),e.keyword&&t.append("keyword",e.keyword),e.page&&t.append("page",e.page),e.limit&&t.append("limit",e.limit);const o=`${p}/exercises?${t.toString()}`,n=await fetch(o);if(!n.ok)throw new Error("Failed to fetch exercises");return n.json()}async function B(e){const t=await fetch(`${p}/exercises/${e}`);if(!t.ok)throw new Error("Failed to fetch exercise details");return t.json()}async function q(e,t,o){const n=await fetch(`${p}/exercises/${e}/rating`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({rating:t,email:o})});if(!n.ok)throw new Error("Failed to rate exercise");return n.json()}function E(e){const t=document.getElementById(e);if(!t)return;t.style.display="flex",document.body.style.overflow="hidden";const o=i=>{i.key==="Escape"&&c(e)},n=i=>{i.target===t&&c(e)};document.addEventListener("keydown",o),t.addEventListener("click",n),t.dataset.escapeListener="true"}function c(e){const t=document.getElementById(e);t&&(t.style.display="none",document.body.style.overflow="",document.removeEventListener("keydown",k),t.removeEventListener("click",$))}function k(e){if(e.key==="Escape"){const t=document.querySelector('.modal-overlay[style*="flex"]');t&&c(t.id)}}function $(e){e.target.classList.contains("modal-overlay")&&c(e.target.id)}const y="favoriteExercises";function g(){const e=localStorage.getItem(y);return e?JSON.parse(e):[]}function A(e){const t=g();t.some(n=>n._id===e._id)||(t.push(e),localStorage.setItem(y,JSON.stringify(t)))}function C(e){const o=g().filter(n=>n._id!==e);localStorage.setItem(y,JSON.stringify(o))}function h(e){return g().some(o=>o._id===e)}const M=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;function x(e){if(!e||typeof e!="string")return{isValid:!1,error:"Email is required"};const t=e.trim();return t.length===0?{isValid:!1,error:"Email is required"}:M.test(t)?{isValid:!0,error:null}:{isValid:!1,error:"Please enter a valid email address"}}function S(e,t){const o=e.closest(".form-group")||e.parentElement,n=o.querySelector(".field-error");if(n&&n.remove(),e.classList.add("is-invalid"),t){const i=document.createElement("span");i.className="field-error",i.textContent=t,o.appendChild(i)}}function l(e){const t=e.closest(".form-group")||e.parentElement;e.classList.remove("is-invalid");const o=t.querySelector(".field-error");o&&o.remove()}let f=null;function K(){const e=document.getElementById("rating-modal");if(!e)return;const t=document.getElementById("rating-modal-close"),o=document.getElementById("rating-form");if(t&&t.addEventListener("click",()=>u()),o){const n=o.elements.email;n&&n.addEventListener("input",()=>{l(n)}),o.addEventListener("submit",N)}document.addEventListener("keydown",n=>{n.key==="Escape"&&e.style.display==="flex"&&u()}),e.addEventListener("click",n=>{n.target===e&&u()})}function T(e){f=e,c("exercise-modal");const t=document.getElementById("rating-modal");t&&(t.style.display="flex",document.body.style.overflow="hidden")}function u(){const e=document.getElementById("rating-modal"),t=document.getElementById("rating-form");if(e&&(e.style.display="none",document.body.style.overflow=""),t){t.reset();const o=t.elements.email;o&&l(o)}f&&E("exercise-modal")}async function N(e){e.preventDefault();const t=e.target,o=new FormData(t),n=parseInt(o.get("rating")),i=o.get("email").trim(),s=t.elements.email,r=x(i);if(!r.isValid){S(s,r.error);return}if(l(s),!f){d("Exercise ID not found","error");return}if(!n||n<1||n>5){d("Please select a rating","error");return}const a=t.querySelector('button[type="submit"]'),w=a.textContent;a.disabled=!0,a.textContent="Sending...";try{await q(f,n,i),d("Rating submitted successfully!","success"),u()}catch(L){d(L.message||"Failed to submit rating","error"),a.disabled=!1,a.textContent=w}}function d(e,t="info"){const o=document.querySelector(".notification");o&&o.remove();const n=document.createElement("div");n.className=`notification notification-${t}`,n.textContent=e,document.body.appendChild(n),setTimeout(()=>{n.classList.add("show")},10),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},3e3)}async function z(e){if(!e){console.error("No exercise ID provided");return}try{const t=await B(e);t?(F(t),E("exercise-modal")):console.error("Exercise not found")}catch(t){console.error("Failed to load exercise details:",t)}}function F(e){const t=document.getElementById("modal-body");if(!t)return;const n=h(e._id)?"Remove from favorites":"Add to favorites";t.innerHTML=`
    <div class="exercise-modal">
      ${e.gifUrl?`<div class="exercise-modal-video">
          <img src="${e.gifUrl}" alt="${e.name||"Exercise"}" />
        </div>`:""}
      
      <div class="exercise-modal-info">
        <h3 class="exercise-modal-title">${e.name||"Exercise"}</h3>
        
        <div class="exercise-modal-rating">
          <span>${(e.rating||0).toFixed(1)}</span>
          <svg width="16" height="16">
            <use href="img/sprite.svg#star"></use>
          </svg>
        </div>

        <div class="exercise-modal-details">
          <div class="exercise-modal-detail">
            <span class="exercise-modal-detail-label">Target</span>
            <span class="exercise-modal-detail-value">${e.target||"N/A"}</span>
          </div>
          <div class="exercise-modal-detail">
            <span class="exercise-modal-detail-label">Body Part</span>
            <span class="exercise-modal-detail-value">${e.bodyPart||"N/A"}</span>
          </div>
          <div class="exercise-modal-detail">
            <span class="exercise-modal-detail-label">Equipment</span>
            <span class="exercise-modal-detail-value">${e.equipment||"N/A"}</span>
          </div>
          <div class="exercise-modal-detail">
            <span class="exercise-modal-detail-label">Popular</span>
            <span class="exercise-modal-detail-value">${e.popularity||0}</span>
          </div>
          <div class="exercise-modal-detail">
            <span class="exercise-modal-detail-label">Burned Calories</span>
            <span class="exercise-modal-detail-value">${e.burnedCalories||0} / 3 min</span>
          </div>
        </div>

        <p class="exercise-modal-description">${e.description||"No description available."}</p>

        <div class="exercise-modal-actions">
          <button 
            type="button" 
            class="exercise-modal-favorite" 
            id="toggle-favorite"
            data-id="${e._id||""}"
          >
            ${n}
          </button>
          <button 
            type="button" 
            class="exercise-modal-rating-btn"
            id="open-rating-modal"
            data-id="${e._id||""}"
          >
            Give a rating
          </button>
        </div>
      </div>
    </div>
  `,O(e)}function O(e){const t=document.getElementById("modal-close"),o=document.getElementById("toggle-favorite"),n=document.getElementById("open-rating-modal");t&&t.addEventListener("click",()=>c("exercise-modal")),o&&o.addEventListener("click",()=>{h(e._id)?(C(e._id),o.textContent="Add to favorites"):(A(e),o.textContent="Remove from favorites")}),n&&n.addEventListener("click",()=>{T(e._id)})}const _="https://your-energy.b.goit.study/api";async function P(e){const t=await fetch(`${_}/subscription`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})});if(!t.ok){const o=await t.json();throw new Error(o.message||"Subscription failed")}return t.json()}function Y(){const e=document.getElementById("subscription-form");if(!e)return;const t=e.elements.email;t&&t.addEventListener("input",()=>{l(t)}),e.addEventListener("submit",R)}async function R(e){e.preventDefault();const t=e.target,o=t.elements.email,n=o.value.trim(),i=x(n);if(!i.isValid){S(o,i.error);return}l(o);const s=t.querySelector('button[type="submit"]'),r=s.textContent;s.disabled=!0,s.textContent="Subscribing...";try{await P(n),v("Successfully subscribed! Check your email.","success"),t.reset()}catch(a){v(a.message||"Failed to subscribe","error")}finally{s.disabled=!1,s.textContent=r}}function v(e,t="info"){const o=document.querySelector(".notification");o&&o.remove();const n=document.createElement("div");n.className=`notification notification-${t}`,n.textContent=e,document.body.appendChild(n),setTimeout(()=>{n.classList.add("show")},10),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},3e3)}function Z(){const e=document.querySelector(".burger-btn"),t=document.querySelector(".mobile-menu");if(!e||!t)return;e.addEventListener("click",D),t.addEventListener("click",n=>{n.target===t&&m()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&!t.hidden&&m()}),t.querySelectorAll(".mobile-nav-link").forEach(n=>{n.addEventListener("click",m)})}function D(){const e=document.querySelector(".mobile-menu"),t=document.querySelector(".burger-btn");if(!e||!t)return;e.hidden?j():m()}function j(){const e=document.querySelector(".mobile-menu"),t=document.querySelector(".burger-btn");if(!e||!t)return;e.hidden=!1,t.setAttribute("aria-expanded","true"),t.setAttribute("aria-label","Close navigation menu"),document.body.style.overflow="hidden";const o=t.querySelector("use");o&&o.setAttribute("href","img/sprite.svg#close")}function m(){const e=document.querySelector(".mobile-menu"),t=document.querySelector(".burger-btn");if(!e||!t)return;e.hidden=!0,t.setAttribute("aria-expanded","false"),t.setAttribute("aria-label","Open navigation menu"),document.body.style.overflow="";const o=t.querySelector("use");o&&o.setAttribute("href","img/sprite.svg#menu")}export{K as a,Z as b,H as c,J as d,V as e,G as f,g,C as h,Y as i,U as l,Q as r,z as s};
//# sourceMappingURL=burger-menu-B1RBd-sX.js.map
