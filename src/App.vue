<script setup>
import {RouterLink, RouterView} from 'vue-router'

</script>

<template>
  <header>
    <!--    头部-->
    <ul class="nav">
      <li v-for="menu in menus"><a v-bind:href="menu.path">{{ menu.name }}</a></li>
    </ul>
  </header>
  <router-view ></router-view>
</template>

<script>
import router from "@/router";

export default {
  // data 是数据的集合
  data() {
    return {
      menus: [],
      info: {
        'pic': '/img/caizl.jpeg',
        'name': 'caizl',
        'address': '湖北-武汉',
        'sign': '跟着生活流。',
        'email': '740662047@qq.com',
        'stack': 'Java、Go、Js、HTML、CSS',
      },
    }
  },
  // methods 是js方法的集合
  methods: {},
  // `mounted` 是生命周期钩子
  mounted() {
    let routes = router.getRoutes();
    for (const r in routes) {
      let route = routes[r];
      this.menus[r] = {'name': route.name, 'path': route.path}
    }
  },

}
</script>

<style scoped lang="scss">

* {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: hsl(285, 100%, 37%);
  transition: 0.4s;
  font-weight: 700;
}

.nav {
  display: flex;
  width: 1000px;
  margin: 0 auto;
  height: 80px;
  line-height: 80px;
  font-size: 20px;
  text-align: center;
  border-radius: 20px;
  align-items: center;
  justify-content: space-around;

  a {
    display: inline-block;
    flex: 1;
    height: 80px;
    width: 200px;

    &:hover {
      text-decoration: underline;
      color: hsl(0, 3%, 6%);
    }
  }
}

.left {
  float: left;
}

.right {
  float: right;
}

.info {
  text-align: left;
  font-weight: 400;
  margin: 0 auto;

  .name {
    text-align: center;
    font-weight: 700;
  }

  .title {
    display: inline-block;
    text-align: right;
    font-weight: 700;
    width: 100px;
    margin: 5px 10px 0 0;
  }

  > img {
    width: 100px;
    border-radius: 50px;
    margin: 0 150px;
  }
}

</style>

