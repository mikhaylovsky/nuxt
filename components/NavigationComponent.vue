<template>
  <!-- nav -->
  <nav>
    <ul class="box-primary-nav">
      <li class="box-label">About me</li>
      <li>
        <nuxt-link :to="{ name: 'index' }">Intro</nuxt-link>
        <i class="ion-ios-circle-filled color"></i>
      </li>
      <li><nuxt-link :to="{ name: 'about' }">About me</nuxt-link></li>
      <li><a href="services.html">services</a></li>
      <li><a href="portfolio.html">portfolio</a></li>
      <li><a href="contact.html">contact me</a></li>
      <li class="box-label">Follow me</li>
      <li class="box-social">
        <a href="#0"><i class="ion-social-facebook"></i></a>
      </li>
      <li class="box-social">
        <a href="#0"><i class="ion-social-instagram-outline"></i></a>
      </li>
      <li class="box-social">
        <a href="#0"><i class="ion-social-twitter"></i></a>
      </li>
      <li class="box-social">
        <a href="#0"><i class="ion-social-dribbble"></i></a>
      </li>
    </ul>
  </nav>
  <!-- end nav -->
</template>

<script>
import $ from 'jquery'
export default {
  mounted() {
    $(document).ready(function($) {
      const MQL = 1170

      if ($(window).width() > MQL) {
        const headerHeight = $('.box-header').height()
        $(window).on(
          'scroll',
          {
            previousTop: 0
          },
          function() {
            const currentTop = $(window).scrollTop()

            if (currentTop < this.previousTop) {
              // if scrolling up...
              if (currentTop > 0 && $('.box-header').hasClass('is-fixed')) {
                $('.box-header').addClass('is-visible')
              } else {
                $('.box-header').removeClass('is-visible is-fixed')
              }
            } else {
              // if scrolling down...
              $('.box-header').removeClass('is-visible')
              if (
                currentTop > headerHeight &&
                !$('.box-header').hasClass('is-fixed')
              )
                $('.box-header').addClass('is-fixed')
            }
            this.previousTop = currentTop
          }
        )
      }

      // open/close primary navigation
      $('.box-primary-nav-trigger').on('click', function() {
        $('.box-menu-icon').toggleClass('is-clicked')
        $('.box-header').toggleClass('menu-is-open')

        // in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
        if ($('.box-primary-nav').hasClass('is-visible')) {
          $('.box-primary-nav')
            .removeClass('is-visible')
            .one(
              'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
              function() {
                $('body').removeClass('overflow-hidden')
              }
            )
        } else {
          $('.box-primary-nav')
            .addClass('is-visible')
            .one(
              'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
              function() {
                $('body').addClass('overflow-hidden')
              }
            )
        }
      })
    })
  }
}
</script>
