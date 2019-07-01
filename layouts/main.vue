<template>
  <div>
    <div class="container-fluid">
      <!--<preloader-component />-->
      <header-component />
      <navigation-component />
      <!-- box-intro -->
      <section class="box-intro">
        <div class="table-cell">
          <h1 class="box-headline letters rotate-2">
            <span class="box-words-wrapper">
              <b class="is-visible">design.</b>
              <b>&nbsp;coding.</b>
              <b>graphic.</b>
            </span>
          </h1>
          <h5>everything you need to build your personal portfolio</h5>
        </div>

        <div class="mouse">
          <div class="scroll"></div>
        </div>
      </section>
      <!-- end box-intro -->
    </div>
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
