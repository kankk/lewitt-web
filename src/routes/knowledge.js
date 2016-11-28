import footer from '../components/footer.vue'
import knowledge from '../views/knowledge.vue'
import qalist from '../components/qalist.vue'
import qadetail from '../views/qadetail.vue'

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
    },
    {
      path: ':qatitle/:qadetail',
      component: qadetail
    }
  ]
}
]
