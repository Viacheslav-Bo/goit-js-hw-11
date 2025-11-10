import{a as m,S as f,i as p}from"./assets/vendor-Cq7ZUixy.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function g(s){return m.get("https://pixabay.com/api/",{params:{key:"53154523-05709ccc1510dd918919f2375",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(t=>t.data.hits)}const n=document.querySelector(".loader"),l=document.querySelector(".gallery");let h=new f(".gallery-link",{captionsData:"alt",captionDelay:250});function y(s){return s.map(function(t){const{webformatURL:o,largeImageURL:i,tags:e,likes:r,views:a,comments:u,downloads:d}=t;return`<li class="gallery-item">
            <div class="gallery-img-container">
            <a class="gallery-link" href="${i}">
              <img class="image" src="${o}" alt="${e}" data-source="${i}"  /></a>
            </div>
            <div class="desc-container">
              <ul class="desc-list">
              <li class="Likes">Likes: <span>${r}</span></li>
              <li class="Views">Views: <span>${a}</span></li>
              <li class="Comments">Comments: <span>${u}</span></li>
              <li class="Downloads">Downloads: <span>${d}</span></li>
              </ul>
            </div>
          </li>`}).join("")}function b(s){if(s.length===0){iziToast.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"rgb(255, 215, 163)"});return}const t=y(s);l.insertAdjacentHTML("afterbegin",t),v(),h.refresh()}function L(){l.innerHTML=""}function w(){n.classList.add("is-shown")}function v(){n.classList.remove("is-shown")}const c=document.querySelector(".form"),S=document.querySelector("button[type=submit]");c.addEventListener("submit",s=>{s.preventDefault(),w();const t=document.querySelector('input[name="search-text"]').value.trim();t&&(L(),g(t).then(b).catch(o=>console.log(o)))});c.addEventListener("input",s=>{const t=s.target.value.trim();S.disabled=!t,t||p.show({message:"Please fill in the field to begin your search.",position:"topRight",backgroundColor:"rgb(255, 215, 163)"})});
//# sourceMappingURL=index.js.map
