/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function () { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function () {

  eval(`// burger menu
  let burgerBtn = document.querySelector('.burger');
  let burgerMenu = document.querySelector('.mobile-menu');
  let body = document.querySelector('body');
  burgerBtn.addEventListener('click', () => {
      burgerBtn.classList.toggle('open');
      if (burgerMenu.classList.contains('open')) {
          burgerMenu.style.left = '100%';
          burgerMenu.classList.remove('open');
          body.style.overflow = 'auto';
      } else {
          burgerMenu.style.left = '0';
          burgerMenu.classList.add('open');
          body.style.overflow = 'hidden';
      }
  })
  
  let menu = document.querySelector('.nav');
  const headerNav = menu.querySelectorAll('[data-scroll]');
  headerNav.forEach(link => {
      link.addEventListener('click', e => {
          e.preventDefault();
          const target = document.getElementById(link.dataset.scroll);
          if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
          }
      });
  });

  const btnMenus = document.querySelectorAll('.buttons');

  btnMenus.forEach(btnMenu => {
      const btnNav = btnMenu.querySelectorAll('[data-scroll]');
      btnNav.forEach(link => {
          link.addEventListener('click', e => {
              e.preventDefault();
              const target = document.getElementById(link.dataset.scroll);
              if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
              }
          });
      });
  });
  const burgerNav = burgerMenu.querySelectorAll('[data-scroll]');
  burgerNav.forEach(link => {
      link.addEventListener('click', e => {
          e.preventDefault();
          if (burgerMenu.classList.contains('open')) {
              burgerMenu.style.left = '100%';
              burgerMenu.classList.remove('open');
              body.style.overflow = 'auto';
          } else {
              burgerMenu.style.left = '0';
              burgerMenu.classList.add('open');
              body.style.overflow = 'hidden';
          }
          const target = document.getElementById(link.dataset.scroll);
          if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
          }
      });
  });
  
  // faq
  let faq = document.querySelector('.faq');
  let card = faq.querySelectorAll('.card');
  
  card.forEach(item => {
      item.addEventListener('click', () => {
          cardOpen(item)
      })
  })
  
  function cardOpen(card) {
      let p = card.querySelector('p')
      if (p.classList.contains('open')) {
          openCloseCard(p)
      } else {
          closeAllCards(card);
          openCloseCard(p)
      }
  }
  function openCloseCard(p) {
      p.classList.toggle('open')
  }
  function closeAllCards(card) {
      let allParagraphs = card.parentElement.querySelectorAll('p')
      allParagraphs.forEach(item => {
          item.classList.remove('open')
      })
  }
  
  // Swiper
  
  var swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      breakpoints: {
          1140: {
              slidesPerView: 3,
              spaceBetween: 30,
          },
      }
  })
  
  // blocks animation
  function onEntry(entry) {
      entry.forEach(change => {
          if (change.isIntersecting) {
              change.target.classList.add('element-show');
          }
      });
  }
  
  var options = {
      threshold: 0.1
  };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  for (let elm of elements) {
      observer.observe(elm);
  }
  
`);
  

        /***/
      })

    /******/
  });

/************************************************************************/
/******/
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
  /******/
  /******/
})()
