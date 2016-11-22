import footer from '../components/footer.vue'
import knowledge from '../views/knowledge.vue'

export default [
{
  path: '/knowledge',
  components: {
    maincontent: knowledge,
    detailfooter: footer
  }
}
]
