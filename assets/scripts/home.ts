import { createApp } from "vue/dist/vue.esm-bundler";
import HomeVue from "../components/Home.vue";

const homeApp = createApp(HomeVue);

homeApp.mount("#homepage");
