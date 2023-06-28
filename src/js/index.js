import navigation from './navigation'
import home from './home'
import page from './page'
import './cookies'

navigation()
home()
page()

CookiesInfo({
  title: 'Cookies Policy',
  infoButton: {
     link: 'https://cookieinformation.com/what-is-a-cookie/',
     blank: true,
     text: 'Find out more'
  },
  acceptText: 'Accept',
  description: 'This website uses cookies. By using the website, you agree to the storage or reading of cookies according to your browser settings.'
})