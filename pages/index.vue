<template>
  <section class="container">
    <div>
      <!-- <logo/> -->
      <h1 class="title text-pop-up-top">
        CVue
      </h1>
      <h2 class="subtitle">
        Stylish Resume Generator
      </h2>
      <nav class="cl-effect-15">
        <router-link to="detail" data-hover="Continue">Continue</router-link>
      </nav>
    </div>
  </section>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  transition: 'blur',
  methods: {
  },
  created: function() {
  },
  // components: {
  //   Logo
  // }
}
</script>

