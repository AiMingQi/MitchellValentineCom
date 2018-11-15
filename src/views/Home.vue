<template lang="pug">
    v-layout(row wrap)
      v-flex(d-flex xs12 md5 child-flex)
        v-card.pa-3.ma-1
          h1.primary--text Mitchell Valentine
          v-img.mx-auto(src="/images/logo.png" alt="Mitchell Valentine Logo" width="61.8%" light)
      v-flex(d-flex xs12 md7)
        v-card.pa-3.ma-1
          div.videoWrapper
            youtube(
              video-id="zFd-YQWGIk8" 
              :player-vars="{autoplay: 0}"
              ) 
      v-flex(d-flex xs12 md7 child-flex)
        v-card.pa-3.ma-1
          h1 Instagram
            vue-instagram(token="31801281.8314d34.aeaabe33d23043c088ddb38db8487830" :count="6" mediaType="image")
                template(slot="feeds" slot-scope="props")
                  v-layout(row wrap)
                    v-flex(d-flex xs12 md6 order-xs2 order-md1)
                      v-card.pa-2
                        v-img(:src="props.feed.images.standard_resolution.url" min-width="150px" min-height="150px" max-width="640px" max-height="640px")
                    v-flex(d-flex xs12 md6 order-xs1 order-md2 child-flex)
                      v-card.pa-2
                        h3.pt-5 {{props.feed.caption.text}}
                template(slot="error" slot-scope="props")
                  div.fancy-alert {{props.error_message}}
      v-flex(d-flex xs12 md5 child-flex)
        v-card.pa-3.ma-1
          h1.primary--text Logos
          v-card(light).pa-3.ma-1
            a(href="https://Crypto-Catalyst.com" target="_blank" rel="noopener")
              v-img.mx-auto.my-3(src="/images/Crypto-Catalyst-logo.png" alt="Crypto-Catalyst Logo" width="61.8%" light)
          v-card.pa-3.ma-1
            a(href="https://RaceDayQuads.com" target="_blank" rel="noopener")
              v-img.mx-auto.my-3(src="/images/RaceDayQuads-Logo-bl.png" alt="RaceDayQuads.com Logo" width="90%" light)
          v-card(light).pa-3.ma-1
            a(href="https://www.cffp.edu/foundations" target="_blank" rel="noopener")
              v-img.mx-auto.my-3(src="/images/FPQP.png" alt="FPQP Logo" width="61.8%" light)
          v-card().pa-3.ma-1
            a(href="http://ThoseFunkenDronez.com" target="_blank" rel="noopener")
              v-img.mx-auto.my-3(src="/images/TFD-Logo.png" alt="TFD Logo" width="61.8%" light)
          v-card(light).pa-3.ma-1
            a(href="https://www.multigp.com/chapters/view/?chapter=AuroraFPV" target="_blank" rel="noopener")
              v-img.mx-auto.my-3(src="/images/APD-Logo.png" alt="APD Logo" width="61.8%" light)
          
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

