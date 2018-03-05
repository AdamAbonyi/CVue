<template>
  <div class="cv">
    <component :is="getComponentName" :data="data">
      <!-- inactive components will be cached! -->
    </component>
    <!-- <layout-1 :data="data"></layout-1> -->
  </div>
</template>

<script>
export default {
  transition: "blur",
  props: ["data"],
  methods: {},
  computed: {
    getComponentName: function() {
      return `layout-${this.data.layout || 1}`
    }
  },
  created: function() {},
  components: {}
};
</script>

<style>

</style>
