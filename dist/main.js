(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([e.id,'body, html {\n    margin: 0;\n    padding: 0;\n    font-family: \'Roboto\', sans-serif;\n    background-image: url("https://static.vecteezy.com/system/resources/previews/029/159/347/original/campground-nature-at-night-2d-cartoon-background-full-moon-trees-dark-woods-river-campsite-colorful-aesthetic-illustration-nobody-camping-nighttime-flat-line-wallpaper-art-lofi-image-vector.jpg");\n    height: 100%;\n    width: 100%;\n    background-size: cover;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.current-weather {\n    display: flex;\n    flex-direction: column;\n    color: white;\n    justify-content: center;\n    align-items: center;\n}\n\n.input-bar {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    margin-left: 8rem;\n    margin-top: 2rem;\n}\n\n.input-bar input {\n    background-color: rgb(245, 149, 245, 0.3);\n    border: none;\n    padding: 0.4rem;\n    color: white;\n    font-weight: bolder;\n    font-size: 1rem;\n    border-radius: 10px;\n}\n\n.input-bar input::placeholder {\n    color: white;\n    font-weight: bolder;\n    font-size: 1rem;\n}\n\n.error {\n    color: red;\n    font-size: 1rem;\n    margin-top: 1rem;\n    display: none;\n}\n\n.weather-data {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n    margin: 1rem;\n    padding: 1rem;\n    width: fit-content;\n    transform: scale(0);\n    transition: transform 1s ease-in-out;\n}\n\n.weather-data.loaded {\n    transform: scale(1);\n}\n\n.info {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin-bottom: 1rem;\n    margin-top: 6rem;\n    width: 100%;\n    transition: all 0.5s ease;\n}\n\n.weather-data h3,\n.weather-data h1 {\n    margin: 0;\n}\n\n.weather-data h3 {\n    font-size: 1.5rem;\n    font-weight: 300;\n}\n\n.weather-data h1 {\n    font-size: 2rem;\n    overflow-wrap: break-word;\n    font-weight: 600;\n}\n\n.details {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1.5fr;\n    grid-template-areas: \n    "temperature additional-info"\n    "button button";\n}\n\n.temperature {\n    grid-area: temperature;\n    display: flex;\n    padding-right: 1rem;\n    position: relative;\n    align-items: center;\n    justify-content: center;\n    font-size: 6rem;\n    border-right: 2px solid white;\n}\n\n.temp-type {\n    font-size: 1.3rem;\n    font-weight: 600;\n    position: absolute;\n    top: 0;\n    right: 2%;\n}\n\n.additional-info {\n    grid-area: additional-info;\n    padding-left: 1rem;\n    display: flex;\n    flex-direction: column;\n    font-size: 1.3rem;\n}\n\n.additional-info div {\n    margin-top: 0.5rem;\n}\n\n.feels-like {\n    display: flex;\n    position: relative;\n    padding-right: 1rem;\n    width: fit-content;\n}\n\n.temp-type-feels-like {\n    font-size: 0.8rem;\n    position: absolute;\n    top: 0;\n    right: 1%;\n}\n\n.forecast-option {\n    grid-area: button;\n    margin-top: 1rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nbutton {\n    background-color: rgb(245, 149, 245, 0.3);\n    border: none;\n    padding: 0.4rem;\n    color: white;\n    font-weight: bolder;\n    font-size: 1rem;\n    border-radius: 10px;\n    cursor: pointer;\n}\n\nbutton:hover {\n    background-color: rgb(245, 149, 245, 0.5);\n}\n\n.forecast-details {\n    display: none;\n    flex-direction: column;\n    height: fit-content;\n    margin: 1rem;\n    padding: 1rem;\n    width: fit-content;\n    background-color: rgb(245, 149, 245, 0.5);\n    border-radius: 10px;\n    color: white;\n}\n\n.forecast-data {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n    width: fit-content;\n    padding: 0.5rem;\n    width: fit-content;\n}\n\n.forecast-day {\n    display: grid;\n    grid-template-columns: 3fr 1fr;\n    align-items: center;\n    width: 100%;\n    border-radius: 25px;\n    background-color: rgba(130, 42, 130, 0.427);\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n    margin-top: 0.5rem;\n}\n\n.day-details {\n    display: flex;\n    align-items: center;\n}',""]);const c=a},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var p=t(u),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var d=r(e,o),s=0;s<i.length;s++){var l=t(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=d}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(72),n=t.n(e),r=t(825),o=t.n(r),i=t(659),a=t.n(i),c=t(56),d=t.n(c),s=t(540),l=t.n(s),u=t(113),p=t.n(u),f=t(208),m={};m.styleTagTransform=p(),m.setAttributes=d(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),n()(f.A,m),f.A&&f.A.locals&&f.A.locals;let h="Manila";const y=document.querySelector(".weather-data"),g=document.querySelector("#searchForm"),v=document.querySelector("#forecast");async function b(e){const n=document.querySelector(".error");try{const n=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=a21fddacf001434b931115221242502&q=${e}/&days=7`,{mode:"cors"}),t=await n.json();console.log(t);const r={location:{country:t.location.country,city:t.location.name},condition:t.current.condition.text,icon:t.current.condition.icon,date:t.current.last_updated,feelsLike:{celsius:t.current.feelslike_c,fahrenheit:t.current.feelslike_f},wind:{kph:t.current.wind_kph,mph:t.current.wind_mph},temperature:{celsius:t.current.temp_c,fahrenheit:t.current.temp_f},humidity:t.current.humidity,rain_chance:t.forecast.forecastday[0].day.daily_chance_of_rain};!function(e){const n=document.querySelector(".forecast-data");n.innerHTML="";for(let t=0;t<7;t++){const r=e[t],o=document.createElement("div"),i=document.createElement("div"),a=document.createElement("div"),c=document.createElement("img"),d=document.createElement("div");o.classList.add("forecast-day"),i.classList.add("day"),a.classList.add("day-details"),d.classList.add("day-temp"),i.textContent=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(r.date).getDay()],c.src=r.day.condition.icon,d.textContent=r.day.avgtemp_c+"°C",a.appendChild(c),a.appendChild(d),o.appendChild(i),o.appendChild(a),n.appendChild(o)}}(t.forecast.forecastday),function(e){const n=document.querySelector(".error"),t=document.querySelector(".info"),r=document.querySelector(".temp-value"),o=document.querySelector(".temp-type"),i=document.querySelector(".temp-feels-like"),a=document.querySelector(".temp-type-feels-like"),c=document.querySelector(".humidity"),d=document.querySelector(".wind");t.firstElementChild.textContent=e.condition,t.children[1].textContent=e.location.city+", "+e.location.country,r.textContent=e.temperature.celsius,o.textContent="°C",i.textContent="FEELS LIKE: "+e.feelsLike.celsius,a.textContent="°C",c.textContent="WIND: "+e.humidity+" kph",d.textContent="HUMIDITY: "+e.wind.kph+"%",n.style.display="none",y.classList.add("loaded")}(r)}catch(e){n.style.display="flex"}}g.addEventListener("submit",(function(){event.preventDefault(),h=document.querySelector("#search").value,y.classList.remove("loaded"),b(h)})),v.addEventListener("click",(function(){const e=document.querySelector(".forecast-details");"flex"===e.style.display?(e.style.display="none",v.textContent="See Forecast"):(e.style.display="flex",v.textContent="Hide Forecast")})),b(h)})()})();