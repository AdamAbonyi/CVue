import Vue from "vue";
import CV from "../components/CV.vue";

// Layouts
import layout1 from "../components/layout/layout-1.vue";
import layout2 from "../components/layout/layout-2.vue";

// Parts
import header1 from "../components/parts/header-1.vue";

// Globally Add
Vue.component('CV', CV);

Vue.component('layout-1', layout1);
Vue.component('layout-2', layout2);

Vue.component('header-1', header1);
