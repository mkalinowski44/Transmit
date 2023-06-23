export default function home_init() {
  $('.home-slider .slick-slider').slick({
    dots: false
  })
  $('.brands .slick-slider').slick({
    dots: false,
    arrows: false,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
  })

  const collapseButtons = $('.collapse-button')
  collapseButtons.each((i, el) => {
    const element = $(el)
    element.click((e) => {
      const name = element.data('collapse')
      const target = $('.collapse-content[data-collapse="'+name+'"]')
      if(target.hasClass('expanded')) {
        element.text('More')
      } else {
        element.text('Less')
      }
      target.toggleClass('expanded')
      e.preventDefault()
    })
  })

}