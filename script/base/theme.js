// //載入時切換主題
// function auto_theme(){
//   let mode;
//   if(window.matchMedia('(prefers-color-scheme: dark)').matches){
//     mode = 'dark';
//   }
//   else if(window.matchMedia('(prefers-color-scheme: light)').matches){
//     mode = 'light';
//   }
//   return mode;
// }

// //切換主題按鈕
// function switch_mode() {
//   $('.themeSwitch').click((e)=> {
//     let mode = e.target.dataset.theme;
//     localStorage.setItem('theme', mode);
//     if (mode == 'auto') {
//       if(window.matchMedia('(prefers-color-scheme: dark)').matches){
//         mode = 'dark';
//       }
//       else if(window.matchMedia('(prefers-color-scheme: light)').matches){
//         mode = 'light';
//       }
//     }
//     $('html').attr('data-bs-theme', mode);
//   });
// }

// //主程式
// let mode;
// if (localStorage.getItem('theme')) {
//   mode = localStorage.getItem('theme');
//   if  (mode == 'auto'){
//     mode = auto_theme();
//   }
// }
// else{
//   if (window.matchMedia('(prefers-color-scheme)').media === 'not all') {
//     console.log('瀏覽器不支援自動模式')
//     mode = 'light';
//   }
//   else{
//     mode = auto_theme();
//     localStorage.setItem('theme', 'auto');
//   }
// }
// $('html').attr('data-bs-theme', mode);
// $(document).ready(()=>{
//   switch_mode()
// });

/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
  'use strict'

  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = theme => localStorage.setItem('theme', theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = theme => {
    if (theme === 'auto') {
      document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  const showActiveTheme = (theme, focus = false) => {
    const themeSwitcher = document.querySelector('#bd-theme')

    if (!themeSwitcher) {
      return
    }

    // const themeSwitcherText = document.querySelector('#bd-theme-text')
    const activeThemeIcon = document.querySelector('.theme-icon-active use')
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
    const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('xlink:href')

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active')
      element.setAttribute('aria-pressed', 'false')
    })

    btnToActive.classList.add('active')
    btnToActive.setAttribute('aria-pressed', 'true')
    activeThemeIcon.setAttribute('xlink:href', svgOfActiveBtn)
    // const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
    // themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)

    if (focus) {
      themeSwitcher.focus()
    }
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          setStoredTheme(theme)
          setTheme(theme)
          showActiveTheme(theme, true)
        })
      })
  })
})()