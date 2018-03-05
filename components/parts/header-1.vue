<template>
  <div class="part-name">
    <p>
      {{name}}
    </p>
    <p>
      {{job_description}}
    </p>
  </div>
</template>

<script>
export default {
  transition: "blur",
  props: ["name", "job_description"],
  methods: {},
  created: function() {},
  components: {}
};
</script>

<style>

</style>
