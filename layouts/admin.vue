<template>
  <div>
    <Navbar class="navbar-dark bg-dark" />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/common/Navbar"
import Footer from "@/components/common/Footer"
export default {
  components:{
    Navbar,
    Footer
  }
}
</script>

<style>

</style>
