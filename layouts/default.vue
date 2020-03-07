<template>
  <div>
    <Navbar class="navbar-light bg-light" />
    <Banner />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/common/Navbar"
import Banner from "@/components/common/Banner"
import Footer from "@/components/common/Footer"
export default {
  components:{
    Navbar,
    Banner,
    Footer
  }
}
</script>

<style>

</style>
