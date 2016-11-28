import footer from '../components/footer.vue'
import products from '../views/products.vue'

import lct from '../views/products/lct.vue'
import mtp from '../views/products/mtp.vue'
import dtp from '../views/products/dtp.vue'
import dgt from '../views/products/dgt.vue'
import lts from '../views/products/lts.vue'
import productdetail from '../views/products/productdetail.vue'


export default [
{
  path: '/products',
  components: {
    maincontent: products,
    detailfooter: footer
  },
},
{
  path: '/products/lct',
  components: {
    maincontent: lct,
    detailfooter: footer
  }
},
{
  path: '/products/mtp',
  components: {
    maincontent: mtp,
    detailfooter: footer
  }
},
{
  path: '/products/dtp',
  components: {
    maincontent: dtp,
    detailfooter: footer
  }
},
{
  path: '/products/dgt',
  components: {
    maincontent: dgt,
    detailfooter: footer
  }
},
{
  path: '/products/lts',
  components: {
    maincontent: lts,
    detailfooter: footer
  }
},
{
  path: '/products/:productname',
  components: {
    maincontent: productdetail,
    detailfooter: footer
  }
}
]
