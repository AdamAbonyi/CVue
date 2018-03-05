<template>
  <div>
      <CV :data="source"></CV>
  </div>
</template>

<script>
import CV from "~/components/CV.vue";
import axios from 'axios';

export default {
  transition: "blur",
  data() {
    return {
      source: "test"
    }
  },
  asyncData(context) {
    return axios.get(`/${context.route.params.id}.json`)
      .then(response => {
        return { source: response.data  }
      })
      .catch(reason => console.log(e))
  },
  methods: {

  },
  created() {
  },
  components: {
  }
};
</script>

<style lang="scss">

</style>
