import indexfooter from '../components/indexFooter.vue'
import footer from '../components/footer.vue'
import index from '../views/index.vue'
import sitemap from '../views/sitemap.vue'

import support from '../views/support.vue'
import warranty from '../views/support/warranty.vue'
import download from '../views/support/download.vue'

export default [
{
  path: '/',
  components: {
    maincontent: index,
    brieffooter: indexfooter
  },
},
{
  path: '/sitemap',
  components: {
    maincontent: sitemap,
    detailfooter: footer
  }
},
{
  path: '/support',
  components: {
    maincontent: support,
    detailfooter: footer,
  },
  children: [
    {
      path: '',
      component: warranty,
    },
    {
      path: 'warranty',
      component: warranty,
    },
    {
      path: 'download',
      component: download,
    }
  ]
}
]
