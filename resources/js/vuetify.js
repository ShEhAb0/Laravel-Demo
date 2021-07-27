import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)


const vuetify = new Vuetify({
    icons: {
        iconfont: 'mdiSvg',
    }
});

export default new Vuetify(vuetify)