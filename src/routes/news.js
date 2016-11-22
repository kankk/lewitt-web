import footer from '../components/footer.vue'
import news from '../views/news.vue'

export default [
{
  path: '/news',
  components: {
    maincontent: news,
    detailfooter: footer
  }
}
]
