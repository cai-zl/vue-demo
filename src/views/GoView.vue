<template>
  <main>
  </main>
</template>

<script>
export default {
  name: "GoView",
  // data 是数据的集合
  data() {
    return {}
  },
  // methods 是js方法的集合
  methods: {},
  // `mounted` 是生命周期钩子
  mounted() {
  },
  beforeCreate() {
    document.querySelector('body')
        .setAttribute('style',
            'background-image: url(public/img/go.jpg);');
  },
  beforeDestroy() {
    document.querySelector('body').removeAttribute('style')
  }
}
</script>

<style scoped>

</style>