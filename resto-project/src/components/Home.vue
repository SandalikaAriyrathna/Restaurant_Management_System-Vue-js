<template>

<Header />

 <!-- Section: Design Block -->
<section class="background-radial-gradient overflow-hidden">



  <div class="container px-4 py-5 px-md-5 text-center ">
    <div class="row gx-lg-5 align-items-center mb-5">
      <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">
        <h1 class="my-5 display-5 fw-bold ls-tight text-lg-start my-5" style="color: hsl(218, 81%, 95%)">
          Hello User,  <br />
          <span style="color: hsl(218, 81%, 75%)">Welcome on Resto Home</span>
        </h1>
        <p class="mb-4 opacity-70 text-lg-start my-5" style="color: hsl(218, 81%, 85%)">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Temporibus, expedita iusto veniam atque, magni tempora mollitia
          dolorum consequatur nulla, neque debitis eos reprehenderit quasi
          ab ipsum nisi dolorem modi. Quos?
        </p>
      </div>

      <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

      
      </div>
    </div>
  </div>
</section>
<!-- Section: Design Block -->

<Footer />

</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {
    name: "Home",

    components: { 
      Header, 
      Footer 
    },
    
    mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: "SignUp" });
        }
    },
   
   
}

</script>