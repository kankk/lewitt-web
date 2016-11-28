import footer from '../components/footer.vue'
import endorsers from '../views/endorsers.vue'
import endorser from '../views/endorsers/endorser.vue'

export default [
{
  path: '/endorsers',
  components: {
    maincontent: endorsers,
    detailfooter: footer
  }
},
{
  path: '/endorsers/:name',
  components: {
    maincontent: endorser,
    detailfooter: footer
  }
}
]
