import footer from '../components/footer.vue'
// import about from '../views/about.vue'

import contactus from '../views/about/contactus.vue'
import ourstory from '../views/about/ourstory.vue'
import wheretobuy from '../views/about/wheretobuy.vue'

import distribution from '../views/about/wheretobuy/distribution.vue'
import retailers from '../views/about/wheretobuy/retailers.vue'
import onlineshops from '../views/about/wheretobuy/onlineshops.vue'

export default [
{
  path: '/about',
  components: {
    maincontent: contactus,
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
  },
  children: [
    {
      path: '',
      component: distribution,
    },
    {
      path: 'distribution',
      component: distribution,
    },
    {
      path: 'retailers',
      component: retailers,
    },
    {
      path: 'onlineshops',
      component: onlineshops,
    }
  ]
},
]
