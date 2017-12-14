<template>
  <section class="container">
    <div>
      <!-- <logo/> -->
      <h1 class="title text-pop-up-top">
        What will you do?
      </h1>
      <p>Some content here.. blah blah blah</p>
      <nav class="cl-effect-15">
        <router-link to="/" data-hover="Home" >Home</router-link>
        <router-link to="/detail/adam" data-hover="Adam">Adam</router-link>
        <router-link to="/detail/petr" data-hover="Petr">Petr</router-link>
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
