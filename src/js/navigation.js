import { screen } from './utils'

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

  const navDropdowns = $('.nav .dropdown-arrow');
  navDropdowns.each((i, el) => {
    const item = $(el)
    item.click(() => {
      const parent = item.parent()
      parent.toggleClass('expanded')
    })
  })
}