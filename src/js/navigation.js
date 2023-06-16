import { screen } from './utils'

export default function navigation_init() {
  const navToggleButton = document.querySelector('.nav-toggle')
  const navList = document.querySelector('.nav-list-wrapper')
  navToggleButton.addEventListener('click', function() {
    if(screen('xs', 'lg')) {
      if(this.classList.contains('active')) {
        this.classList.remove('active')
        navList.removeAttribute('style')
        navList.classList.remove('expanded')
        document.body.classList.remove('noscroll')
      } else {
        this.classList.add('active')
        navList.style.height = window.innerHeight + 'px'
        navList.classList.add('expanded')
        document.body.classList.add('noscroll')
      }
    }
  })

  const nav = document.querySelector('.nav')
  function onScroll() {
    if(window.pageYOffset > 0) {
      nav.classList.add('scrolled')
    } else {
      nav.classList.remove('scrolled')
    }
  }
  window.addEventListener('scroll', onScroll)
  onScroll()

  // Dropdown
  const navDropdowns = document.querySelectorAll('.nav-item.dropdown')
  navDropdowns.forEach(dropdown => {
    const navLink = dropdown.querySelector('.nav-link')
    navLink.addEventListener('mouseenter', function() {
      if(screen('xl', 'xxl')) {
        const currentGroup = dropdown.querySelector('.column2 .dropdown-group.active')
        if(currentGroup) {
          currentGroup.classList.remove('active')
        }
        const currentLink = dropdown.querySelector('.column1 .dropdown-link.active')
        if(currentLink) {
          currentLink.classList.remove('active')
        }
        const dropdownGroup = dropdown.querySelector(`.column2 .dropdown-group[data-dropdown="1"]`)
        if(dropdownGroup) {
          dropdownGroup.classList.add('active')
        }
        const link = dropdown.querySelector('.column1 .dropdown-link[data-dropdown="1"]')
        if(link) {
          link.classList.add('active')
        }
      }
    })

    navLink.addEventListener('click', function(e) {
      if(screen('xs', 'lg')) {
        e.preventDefault()
        if(dropdown.classList.contains('active')) {
          dropdown.classList.remove('active')
          return
        }
        const currentDropdown = document.querySelector('.nav .nav-item.dropdown.active')
        if(currentDropdown) {
          currentDropdown.classList.remove('active')
        }
        dropdown.classList.add('active')
        const currentGroup = dropdown.querySelector('.column2 .dropdown-group.active')
        if(currentGroup) {
          currentGroup.classList.remove('active')
        }
        const currentLink = dropdown.querySelector('.column1 .dropdown-link.active')
        if(currentLink) {
          currentLink.classList.remove('active')
        }
        const dropdownGroup = dropdown.querySelector(`.column2 .dropdown-group[data-dropdown="1"]`)
        if(dropdownGroup) {
          dropdownGroup.classList.add('active')
        }
        const link = dropdown.querySelector('.column1 .dropdown-link[data-dropdown="1"]')
        if(link) {
          link.classList.add('active')
        }

      }
    })

    const dropdownLinks = dropdown.querySelectorAll('.column1 .dropdown-link')
    dropdownLinks.forEach(link => {
      const dataDropdown = link.dataset.dropdown
      link.addEventListener('mouseenter', function() {
        if(screen("xl", "xxl")) {
          const currentGroup = dropdown.querySelector('.column2 .dropdown-group.active')
          if(currentGroup) {
            currentGroup.classList.remove('active')
          }
          const currentLink = dropdown.querySelector('.column1 .dropdown-link.active')
          if(currentLink) {
            currentLink.classList.remove('active')
          }
          const dropdownGroup = dropdown.querySelector(`.column2 .dropdown-group[data-dropdown="${dataDropdown}"]`)
          dropdownGroup.classList.add('active')
          link.classList.add('active')
        }
      })
      link.addEventListener('click', function(e) {
        if(screen("xs", "lg")) {
          e.preventDefault()
          const currentGroup = dropdown.querySelector('.column2 .dropdown-group.active')
          if(currentGroup) {
            currentGroup.classList.remove('active')
          }
          const currentLink = dropdown.querySelector('.column1 .dropdown-link.active')
          if(currentLink) {
            currentLink.classList.remove('active')
          }
          const dropdownGroup = dropdown.querySelector(`.column2 .dropdown-group[data-dropdown="${dataDropdown}"]`)
          dropdownGroup.classList.add('active')
          link.classList.add('active')
        }
      })
    })
  })

  // Mobile Nav
  if(screen("xs", "lg")) {
    var lastScrollPos = 0;
    const navBar = document.querySelector('.nav')
    window.addEventListener('scroll', function(e) {
      const currentPos = window.scrollY
      const delta = lastScrollPos - currentPos
      if(delta < 0) {
        if(currentPos > 128) {
          navBar.classList.add('hide')
        }
      } else {
        navBar.classList.remove('hide')
      }
      lastScrollPos = currentPos
    })
  }
}