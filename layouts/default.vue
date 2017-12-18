<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
}

body {
  background-color: #fdfdfd;
}
nav a {
  position: relative;
  display: inline-block;
  margin: 15px 25px;
  outline: none;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 400;
  text-shadow: 0 0 1px rgba(255, 255, 255, 0.3);
  font-size: 1.35em;
}

nav a:hover,
nav a:focus {
  outline: none;
}

$duration: 0.5s;
$scale: 1.6;
$color-to: rgba(0, 0, 0, 0.5);
$color-from: rgb(230, 230, 230);

/* Effect 15: scale down, reveal */
.cl-effect-15 a {
  color: $color-to;
  -webkit-text-stroke: 1px black;
  font-weight: 700;
  text-shadow: none;
}

.cl-effect-15 a::before {
  color: $color-from;
  content: attr(data-hover);
  position: absolute;
  -webkit-transition: -webkit-transform $duration, opacity $duration;
  -moz-transition: -moz-transform $duration, opacity $duration;
  transition: transform $duration, opacity $duration;
}

.cl-effect-15 a:hover::before,
.cl-effect-15 a:focus::before {
  -webkit-transform: scale($scale);
  -moz-transform: scale($scale);
  transform: scale($scale);
  opacity: 0;
}
</style>
