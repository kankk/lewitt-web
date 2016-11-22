import footer from '../components/footer.vue'
import samples from '../views/samples.vue'

import applications from '../views/samples/applications.vue'
import microphones from '../views/samples/microphones.vue'
import compare from '../views/samples/compare.vue'

export default [
{
  path: '/samples',
  components: {
    maincontent: samples,
    detailfooter: footer
  }
},
{
  path: '/samples/applications',
  components: {
    maincontent: applications,
    detailfooter: footer
  }
},
{
  path: '/samples/microphones',
  components: {
    maincontent: microphones,
    detailfooter: footer
  }
},
{
  path: '/samples/compare',
  components: {
    maincontent: compare,
    detailfooter: footer
  }
},
]
