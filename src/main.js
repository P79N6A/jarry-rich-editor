import Vue from "vue";
import App from "./App.vue";

import JrEditor from "@/modules/editor";
Vue.use(JrEditor);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount("#app");
