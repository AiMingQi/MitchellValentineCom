<template lang="pug">
  v-container.home
    v-layout(row wrap)
      v-flex(xs6 offset-xs3)
        v-card.pa-3
          h1.primary--text Mitchell Valentine
          v-img.mx-auto(src="/images/logo.png" alt="Mitchell Valentine Logo" width="50%")
</template>
<script>

export default {
  name: 'home',
  components: {
    
  }
}
</script>
