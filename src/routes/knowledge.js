import footer from '../components/footer.vue'
import knowledge from '../views/knowledge.vue'
import qalist from '../components/qalist.vue'

export default [
{
  path: '/knowledge',
  components: {
    maincontent: knowledge,
    detailfooter: footer
  },
  children: [
    {
      path: ':qatitle',
      component: qalist,
    }
  ]
}
]
