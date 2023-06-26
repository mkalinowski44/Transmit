export default function home_init() {
  $('.home-slider .slick-slider').slick({
    dots: false
  })
  $('.brands .slick-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
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