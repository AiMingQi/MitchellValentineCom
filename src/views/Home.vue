<template lang="pug">
    v-layout(row wrap)
      v-flex(xs12 md5)
        v-card.pa-3.ma-1
          h1.primary--text Mitchell Valentine
          v-img.mx-auto(src="/images/logo.png" alt="Mitchell Valentine Logo" width="50%" light)
      v-flex(xs12 md7)
        v-card.pa-3.ma-1
          div.videoWrapper
            youtube(
              video-id="zFd-YQWGIk8" 
              :player-vars="{autoplay: 0}"
              ) 
</template>
<script>

export default {
  name: 'home',
  components: {
    
  }
}
</script>

<style>
.videoWrapper {
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	padding-top: 25px;
	height: 0;
}
.videoWrapper iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
</style>

