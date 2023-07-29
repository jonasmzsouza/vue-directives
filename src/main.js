import { createApp } from "vue";
import App from "./App.vue";

const Vue = createApp(App);

// importing and globally registering custom directives
import customizeText from "@/directives/customizeText";
import position from "@/directives/position";
import information from "@/directives/information";

Vue.directive("customizeText", customizeText);
Vue.directive("position", position);
Vue.directive("information", information);
//

Vue.mount("#app");
