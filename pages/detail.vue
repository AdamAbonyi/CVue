<template>
  <section class="container">
    <div>
      <!-- <logo/> -->
      <h1 class="title text-pop-up-top">
        What will you do?
      </h1>
      <p>Some content here.. blah blah blah</p>
      <nav class="cl-effect-15">
        <nuxt-link  to="/" data-hover="Home" >Home</nuxt-link >
        <nuxt-link  to="/detail" data-hover="Detail" >Detail</nuxt-link >
        <nuxt-link  to="/detail/adam" data-hover="Adam">Adam</nuxt-link >
        <nuxt-link  to="/detail/petr" data-hover="Petr">Petr</nuxt-link >
      </nav>

      <div>
        <nuxt-child></nuxt-child>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'


export default {
  transition: 'blur',
  methods: {
  },
  created: function() {
  },
  components: {
    Logo
  }
}
</script>

<style lang="scss">

</style>
