<template>
<Header />

<section class="background-radial-gradient overflow-hidden">

 

  <div class="container px-4 py-5 px-md-5 text-center ">
    <div class="row align-items-center mb-5">
         <div class="mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>
  
      <div class="container">
  <div class="Col row-col-4">
    <div class="row">

    <div class="card" style="width: 18rem; margin-left: 10px;" v-for="item in restaurant" :key="item.id">
    
  <img :src="item.url" class="card-img-top" alt="Sunset Over the Sea" style="margin-top: 50px;"/>
   
  <div class="card-body">
    <h3 class="card-title">{{item.name}}</h3>
        <p class="card-text">{{item.address}}</p>
        <h5 class="card-text">{{item.contact}}</h5>
</div>
</div>    
    </div>
   
  </div>
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
import axios from 'axios';

export default {
    name: "Restaurant",

    data(){
        return{
          name:'',
          restaurant:[]
        }
    },

    components: { 
      Header, 
      Footer 
    },

   
    
    async mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: "SignUp" });
        }

        let result = await axios.get("http://localhost:3000/restaurant");
        console.warn(result);
        this.restaurant = result.data;


    },
   
   
}

</script>