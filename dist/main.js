(()=>{"use strict";const e=e=>{const t=document.getElementById(e).querySelectorAll("input"),o=/\D+/gi,a=/[^а-я\-\s]/gi,n=/[^\w\@\-\.\!\~\*\'\"]/gi;t.forEach((e=>{e.addEventListener("input",(t=>{"tel"==e.type&&(t.target.value=t.target.value.replace(o,"")),"text"!=e.type&&"Ваше сообщение"!=e.placeholder||(t.target.value=t.target.value.replace(a,"")),"email"==e.type&&(t.target.value=t.target.value.replace(n,""))}))}))},t=({formId:e,someElem:t=[]})=>{const o=document.querySelector(".popup"),a=document.getElementById(e),n=a.querySelectorAll("input"),r=document.createElement("div"),c=/[^а-я\-\s]/gi,l=/[^\+\d\(\)\-]/g,s=/[^а-я\-\!\.\,\?\:\;\(\)\"\s]/gi,i=/[^\w\@\-\.\!\~\*\'\"]/gi;r.style.color="#ffffff";try{if(!a)throw new Error("Неверно указана форма");n.forEach((e=>{"user_email"==e.name&&e.setAttribute("required",!0)})),a.addEventListener("submit",(u=>{u.preventDefault(),(()=>{const u=new FormData(a),m={};var d;r.textContent="Загрузка...",a.append(r),u.forEach(((e,t)=>{m[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type?m[e.id]=t.textContent:"input"===e.type&&(m[e.id]=t.value)})),(e=>{let t=!0;return e.forEach((e=>{"user_phone"===e.name&&l.test(e.value)&&(t=!1),"user_name"===e.name&&c.test(e.value)&&(t=!1),"user_message"===e.name&&s.test(e.value)&&(t=!1),"user_email"===e.name&&i.test(e.value)&&(t=!1)})),t})(n)?(d=m,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(d),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{r.textContent="Успешно отправлено! Спасибо! ","form1"!==e&&"form2"!==e||setTimeout((()=>{r.textContent=""}),3e3),"form3"===e&&setTimeout((()=>{o.style.display="none",r.textContent=""}),1500),n.forEach((e=>{e.value=""}))})).catch((e=>{r.textContent="Ошибка..."})):alert("Данные не валидны")})()}))}catch(e){console.log(e.message)}};(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),a=document.getElementById("timer-seconds"),n=()=>{let e=(()=>{let e=(new Date("21:00:00 13 January 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();for(let t in e)switch(!0){case e[t]<10&&e[t]>0:e[t]="0"+e[t];break;case e[t]<=0:e[t]="00"}t.textContent=e.hours,o.textContent=e.minutes,a.textContent=e.seconds,e.timeRemaining>0?setTimeout(n,1e3):(clearTimeout(n),t.textContent="00",o.textContent="00",a.textContent="00")};n()})(),(()=>{const e=document.querySelector("menu");document.body.addEventListener("click",(t=>{t.target.closest(".menu")||"close-btn"===t.target.className||t.target.matches("menu > ul > li > a")?e.classList.toggle("active-menu"):t.target.closest("menu")||e.classList.remove("active-menu")}))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup");e.forEach((e=>{e.addEventListener("click",(()=>{t.style.display="block",document.documentElement.clientWidth>=751&&(({timing:e,draw:t,duration:o})=>{let a=performance.now();requestAnimationFrame((function n(r){let c=(r-a)/o;c>1&&(c=1);let l=e(c);t(l),c<1&&requestAnimationFrame(n)}))})({duration:200,timing:e=>e,draw(e){t.style.opacity=e}})}))})),t.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(t.style.display="")}))})(),((e=100)=>{const t=document.querySelectorAll("input.calc-item"),o=document.querySelector(".calc-block"),a=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),r=document.querySelector(".calc-count"),c=document.querySelector(".calc-day"),l=document.getElementById("total");t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D/,"")}))})),o.addEventListener("input",(t=>{t.target!==a&&t.target!==n&&t.target!==r&&t.target!==c||(()=>{const t=+a.options[a.selectedIndex].value,o=n.value;let s=0,i=1,u=1;r.value>1&&(i+=+r.value/10),c.value&&c.value<5?u=2:c.value&&c.value<10&&(u=1.5),s=a.value&&n.value?e*t*o*i*u:0,l.textContent=s})()}))})(),e("form1"),e("form2"),e("form3"),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const a=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===a?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots");let a,n=0;(()=>{let e;for(let a=0;a<t.length;a++)e=document.createElement("li"),e.classList.add("dot"),o.append(e)})();const r=document.querySelectorAll(".dot");r[0].classList.add("dot-active");const c=(e,t,o)=>{e[t].classList.remove(o)},l=(e,t,o)=>{e[t].classList.add(o)},s=()=>{c(t,n,"portfolio-item-active"),c(r,n,"dot-active"),n++,n>=t.length&&(n=0),l(t,n,"portfolio-item-active"),l(r,n,"dot-active")},i=(e=1500)=>{a=setInterval(s,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(c(t,n,"portfolio-item-active"),c(r,n,"dot-active"),e.target.matches("#arrow-right")?n++:e.target.matches("#arrow-left")?n--:e.target.classList.contains("dot")&&r.forEach(((t,o)=>{e.target===t&&(n=o)})),n>=t.length&&(n=0),n<0&&(n=t.length-1),l(t,n,"portfolio-item-active"),l(r,n,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(a)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&i(2e3)}),!0),i(2e3)})(),t({formId:"form1",someElem:[{type:"block",id:"total"}]}),t({formId:"form2",someElem:[{type:"block",id:"total"}]}),t({formId:"form3",someElem:[{type:"block",id:"total"}]})})();