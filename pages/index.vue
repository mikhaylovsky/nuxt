<template>
  <div class="portfolio-div">
    <div class="portfolio">
      <no-ssr>
        <vue-isotope
          ref="cpt"
          v-images-loaded:on.progress="layout"
          :options="options"
          :list="projects"
          class="no-padding portfolio_container"
        >
          <div
            v-for="project in projects"
            :key="project.id"
            class="col-md-3 col-sm-6 grid-item"
          >
            <nuxt-link
              :to="{ name: 'projects-id', params: { id: project.id } }"
              class="portfolio_item"
            >
              <img :src="project.image" alt="image" class="img-responsive" />
              <div class="portfolio_item_hover">
                <div class="portfolio-border clearfix">
                  <div class="item_info">
                    <span>{{ project.name }}</span>
                    <em>{{ project.category }}</em>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </vue-isotope>
      </no-ssr>
      <!-- end portfolio_container -->
    </div>
    <!-- portfolio -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'main',
  data() {
    return {
      options: {
        itemSelector: '.grid-item',
        percentPosition: true
      }
    }
  },
  computed: mapGetters({
    projects: 'projects/get'
  }),
  methods: {
    layout() {
      this.$refs.cpt.layout('masonry')
    }
  }
}
</script>

<style scoped>
.grid-item,
.grid-sizer {
  width: 25%;
}
.grid-item:nth-child(3n) {
  width: 50%;
}
</style>
