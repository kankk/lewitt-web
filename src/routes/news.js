import footer from '../components/footer.vue'
import news from '../views/news.vue'
import newsDetail from '../views/news/news.vue'

export default [
{
  path: '/news',
  components: {
    maincontent: news,
    detailfooter: footer
  }
},
{
  path: '/news/:newspath',
  components: {
    maincontent: newsDetail,
    detailfooter: footer
  }
}
]
