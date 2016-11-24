import indexfooter from '../components/indexFooter.vue'
import footer from '../components/footer.vue'
import index from '../views/index.vue'
import sitemap from '../views/sitemap.vue'

export default [
{
  path: '/',
  components: {
    maincontent: index,
    brieffooter: indexfooter
  },
  path: '/sitemap',
  components: {
    maincontent: sitemap,
    detailfooter: footer
  }
}
]
