<template>
  <div class="article">
    <logo />
    <article>
      <h1 class="title">Test</h1>
      <div class="slider">
        <no-ssr>
          <vue-tiny-slider v-bind="tinySliderOptions">
            <div class="slide">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus, minima?
              </p>
            </div>
            <div class="slide">
              <p>
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </vue-tiny-slider>
        </no-ssr>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        alias aperiam aut beatae delectus dignissimos dolore dolorum excepturi
        iste iusto molestias neque officiis perferendis possimus quae quisquam
        recusandae sed, totam vel voluptates? Aliquam autem ea facilis natus
        quisquam ullam voluptatem! Harum id similique veniam voluptatem
        voluptates! Amet asperiores assumenda atque consequatur, culpa, cum
        cupiditate delectus dignissimos, eius eligendi ex excepturi expedita
        facere iste labore laudantium libero molestias natus nesciunt odit
        perspiciatis quia quis quo quos reiciendis repellendus soluta suscipit
        ullam ut voluptas. Accusamus aut earum error ipsum, natus quasi quos rem
        sed unde vel? Alias blanditiis eligendi facere harum itaque
        necessitatibus perferendis praesentium quae saepe voluptate! Accusamus
        ad assumenda at, cumque, eligendi fugiat inventore, laboriosam libero
        magni molestias rerum unde ut velit voluptas voluptatibus. Accusantium
        amet culpa, delectus dolorem ducimus eius enim explicabo fugit in
        incidunt, iusto minus, obcaecati pariatur repellat sunt veniam
        voluptate. Corporis dolore illum incidunt itaque nemo non odit sed
        voluptas. Beatae culpa dolore eligendi esse eveniet excepturi explicabo
        facere facilis fugit harum illum impedit magnam magni molestias
        praesentium quia quidem rem, repellendus sapiente sequi sint, suscipit
        tempore ullam velit voluptas. Alias distinctio, similique! At delectus
        fugit id ipsum iste libero, natus sequi sit tempora! Maxime, quasi.
      </p>
    </article>
    <footer-component />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import FooterComponent from '~/components/FooterComponent.vue'
import axios from 'axios'

export default {
  components: {
    Logo,
    FooterComponent
  },
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.1/tiny-slider.css'
        }
      ]
    }
  },
  data() {
    return {
      tinySliderOptions: {
        autoplay: true
      }
    }
  },
  mounted() {
    axios.get('https://httpbin.org/get').then(response => {
      console.log(response)
    })
  }
}
</script>

<style scoped>
h1 {
  font-size: 29px;
}
.article {
  max-width: 1120px;
  margin: 0 auto;
}
</style>
