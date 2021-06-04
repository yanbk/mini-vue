import { createApp } from "../../lib/mini-vue.esm.js";
import App from "./App.js";
console.log(App)
const rootContainer = document.querySelector("#root");
createApp(App).mount(rootContainer);
