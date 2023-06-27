import { screen, debounce } from './utils'

export default function navigation_init() {
  const navbarToggle = $('.navbar-toggle')
  const nav = $('.nav')

  navbarToggle.click(() => {
    if(screen("xs", "md")) {
      if(nav.hasClass('expanded')) {
        nav.removeClass('expanded')
        nav.removeAttr('style')
      } else {
        nav.addClass('expanded')
        nav.css('height', `${window.innerHeight}px`);
      }
    }
  })

  const navDropdowns = $('.nav .dropdown .navbar-link');
  navDropdowns.each((i, el) => {
    const item = $(el)
    item.click((e) => {
      const parent = item.parent()
      parent.toggleClass('expanded')
      e.preventDefault()
    })
  })

  let prevScrollY = 0;
  $(window).scroll(() => {
    if(window.scrollY > prevScrollY && window.scrollY > 100) {
      nav.addClass('hide')
    } else {
      nav.removeClass('hide')
    }
    prevScrollY = window.scrollY
  })
}