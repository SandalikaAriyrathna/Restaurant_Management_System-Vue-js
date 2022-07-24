<template>
<Header />

<section class="background-radial-gradient overflow-hidden">



  <div class="container px-4 py-5 px-md-5 text-center ">
    <div class="row gx-lg-5 align-items-center mb-5">
      <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">
        <h1 class="my-5 display-5 fw-bold ls-tight text-lg-start my-5" style="color: hsl(218, 81%, 95%)">
         About Us<br />
       
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

   <div id="carouselExampleInterval" class="carousel slide" data-mdb-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-mdb-interval="2000">
      <img src="https://media-cdn.tripadvisor.com/media/photo-s/04/93/c8/9c/bristol.jpg" class="d-block w-100" style="height: 400px;" alt="Wild Landscape"/>
    </div>
    <div class="carousel-item" data-mdb-interval="2000">
      <img src="https://travellers.lk/wp-content/uploads/2022/04/d01dfa8621f83289155a3be0970fb0cb.jpg" class="d-block w-100" style="height: 400px;" alt="Camera"/>
    </div>
    <div class="carousel-item" data-mdb-interval="2000">
      <img src="https://static4.depositphotos.com/1001203/386/i/450/depositphotos_3863502-stock-photo-outdoor-restaurant-at-the-beach.jpg" class="d-block w-100" style="height: 400px;" alt="Exotic Fruits"/>
    </div>
    <div class="carousel-item" data-mdb-interval="2000">
      <img src="https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2019/10/Blog-10-1030x538.jpg" class="d-block w-100" style="height: 400px;" alt="Exotic Fruits"/>
    </div>
  </div>
  <button class="carousel-control-prev" data-mdb-target="#carouselExampleInterval" type="button" data-mdb-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" data-mdb-target="#carouselExampleInterval" type="button" data-mdb-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      
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
    name: "AboutUs",

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