<template>
  <div>
    <div class="container-fluid">
      <!--<preloader-component />-->
      <header-component />
      <navigation-component />
    </div>
    <!-- top-bar -->
    <div class="top-bar">
      <h1>project title</h1>
      <p><a href="#">Home</a> / <a href="#">portfolio</a> / project title</p>
    </div>
    <!-- end top-bar -->
    <main>
      <nuxt />
    </main>
    <footer-component />
  </div>
</template>

<script>
// import PreloaderComponent from '~/components/PreloaderComponent.vue'
import HeaderComponent from '~/components/HeaderComponent.vue'
import NavigationComponent from '~/components/NavigationComponent.vue'
import FooterComponent from '~/components/FooterComponent.vue'

export default {
  components: {
    // PreloaderComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent
  }
}
</script>
