<script>
import Banner from './components/Banner.vue'
import Header from './components/Header.vue'
import Slideshow from './components/Slideshow.vue'
import Page from './components/Page.vue'
import Card from './components/Card.vue'
import Pagecard from './components/Pagecard.vue'
import Bottom from './components/Bottom.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    Header,
    Banner,
    Slideshow,
    Page,
    Card,
    Pagecard,
    Bottom,
    Footer
   
  
  }
}
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
</script>

<template>
<div>
<Banner/><br><br>
<Header/>
<Slideshow/>
<Page/>
<Card/>
<Pagecard/><br><br><br>
<Bottom/>
<Footer/>
</div>
</template>


