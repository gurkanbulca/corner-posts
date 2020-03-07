<template>
  <nav class="navbar navbar-expand-lg ">
    <nuxt-link to="/" tag="a" class="navbar-brand">Köse Yazıları</nuxt-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarColor03"
      aria-controls="navbarColor03"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav mr-auto">
        
        <li class="nav-item">
          <nuxt-link to="/posts" tag="a" class="nav-link">Yazılar</nuxt-link>
        </li>
        
      </ul>
      <ul class="navbar-nav my-2 my-lg-0">
        <nuxt-link to="/admin" tag="a" class="nav-link">Admin</nuxt-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
nav{
    border: none !important;
}
</style>