var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){i[e]=t},e.parcelRequired7c6=n),n.register("6KYgc",(function(e,t){var i=n("2shzp"),r=n("4ZS0N");const c=document.querySelector(".popular-recipes-list");c.addEventListener("click",(function(e){if("UL"!==e.target.nodeName){const t=e.target.closest("li").id;(0,r.heardleRecipeById)(t)}})),async function(){try{const e=await i.default.get("https://tasty-treats-backend.p.goit.global/api/recipes/popular"),t=e.data.map((({preview:e,title:t,description:i,_id:n})=>{const r=80;return`<li class="recip-item" id="${n}">\n          <img class="recip-img" src="${e}" alt="${t}" width="64"/>\n          <div class="recip-content">\n            <h3 class="recip-heading">${t}</h3>\n            <p class="recip-short-descr">${i.length>r?i.substring(0,r-3)+"...":i}</p>\n          </div>\n        </li>`})).join("");c&&(c.innerHTML=t)}catch(e){console.error(e)}}()})),n("6KYgc");
//# sourceMappingURL=index.561ec0c3.js.map
