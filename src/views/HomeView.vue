<script setup>

</script>
<template>
  <main>

  </main>
</template>
<script>
export default {
  // data 是数据的集合
  data() {
    return {

    }
  },
  // methods 是js方法的集合
  methods: {},
  // `mounted` 是生命周期钩子
  mounted() {
  },
  beforeCreate () {
    document.querySelector('body')
        .setAttribute('style',
            'background-image: url(public/img/home.jpg);');
  },
  beforeDestroy () {
    document.querySelector('body').removeAttribute('style')
  }
}
</script>
<style scoped>


</style>