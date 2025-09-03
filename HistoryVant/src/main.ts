import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

// 引入 vant 样式
import "vant/lib/index.css";

// ✅ 引入你要用到的组件
import {
  ActionBar,
  ActionBarIcon,
  ActionBarButton,
  FloatingBubble,
  BackTop,
  Card,
  Button,
  NoticeBar,
  NavBar,
  Icon
} from "vant";

const app = createApp(App);

app.use(createPinia());
app.use(router);

// ✅ 注册 vant 组件
app.use(ActionBar);
app.use(ActionBarIcon);
app.use(ActionBarButton);
app.use(FloatingBubble);
app.use(BackTop);
app.use(Card);
app.use(Button);
app.use(NoticeBar);
app.use(NavBar);
app.use(Icon);

app.mount("#app");
