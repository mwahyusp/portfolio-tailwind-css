import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

// Smooth scroll for skip link
│   │       document.querySelectorAll('a[href^="#"]').forEach(anchor => {
│   │         anchor.addEventListener('click', function (e) {
│   │           e.preventDefault();
│   │           document.querySelector(this.getAttribute('href')).scrollIntoView({
│   │             behavior: 'smooth'
│   │           });
│   │         });
│   │       });
│   │
│   │       // Form submission alert (placeholder)
│   │       document.getElementById('contact-form').addEventListener('submit', function (e) {
│   │         e.preventDefault();
│   │         alert('Form submitted! (Placeholder for actual submission)');
│   │       });
