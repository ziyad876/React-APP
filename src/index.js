import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
let done = 0;
document.addEventListener("scroll", () => {
  if (done === 0) {
    const aboutPage = document.querySelector(".AboutPage");
    const movingImage = document.querySelector(".moving-image");
    if(aboutPage && movingImage){
    const aboutPageTop = aboutPage.getBoundingClientRect().top;
    if (aboutPageTop < window.innerHeight && aboutPageTop > 0) {
      movingImage.classList.add("visible");
      done = 1;
    }
  }
  }
});
