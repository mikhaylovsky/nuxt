<template>
  <!-- box header -->
  <header class="box-header">
    <div class="box-logo">
      <nuxt-link :to="{ name: 'index' }">
        <img src="~assets/img/logo.png" width="80" alt="Logo" />
      </nuxt-link>
    </div>
    <!-- box-nav -->
    <a class="box-primary-nav-trigger" href="javascript:void(0)">
      <span class="box-menu-text">Menu</span><span class="box-menu-icon"></span>
    </a>
    <!-- box-primary-nav-trigger -->
  </header>
  <!-- end box header -->
</template>
