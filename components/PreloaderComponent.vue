<template>
  <!-- Preloader -->
  <div id="preloader">
    <div class="pre-container">
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    </div>
  </div>
  <!-- end Preloader -->
</template>

<script>
import $ from 'jquery'
export default {
  mounted() {
    $(window).on('load', function() {
      $('#status').fadeOut()
      $('#preloader')
        .delay(550)
        .fadeOut('slow')
      $('body')
        .delay(550)
        .css({
          overflow: 'visible'
        })
    })
  }
}
</script>
