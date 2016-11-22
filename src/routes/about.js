import footer from '../components/footer.vue'
import about from '../views/about.vue'

import contactus from '../views/about/contactus.vue'
import ourstory from '../views/about/ourstory.vue'
import wheretobuy from '../views/about/wheretobuy.vue'

export default [
{
  path: '/about',
  components: {
    maincontent: about,
    detailfooter: footer
  }
},
{
  path: '/about/contactus',
  components: {
    maincontent: contactus,
    detailfooter: footer
  }
},
{
  path: '/about/ourstory',
  components: {
    maincontent: ourstory,
    detailfooter: footer
  }
},
{
  path: '/about/wheretobuy',
  components: {
    maincontent: wheretobuy,
    detailfooter: footer
  }
},
]
