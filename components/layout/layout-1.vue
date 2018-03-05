<template>
  <div>
    <div>Header For Layout 1
      <header-1 :name="data.name"></header-1>
    </div>
    <div class="flexbox-container">
      <div class="column-1">

      </div>
      <p>
        X
      </p>
      <p>
        Y
      </p>
    </div>
  </div>
</template>

<script>
export default {
  transition: "blur",
  props: ["data"],
  methods: {},
  created: function() {},
  components: {}
};
</script>

<style>
.flexbox-container {
  display: flex;
  width: 100%;
}

.sidebar{
	order: 1;
	flex: 1;
	/* background-color: purple; */
  flex-basis: auto;
  /* padding: .5rem; */
  /* min-height: 666px; */
}

.main{
	order: 1;
	flex: 5;
	/* background-color: #CE9B64; */
  /* padding: .5rem; */
}
</style>
