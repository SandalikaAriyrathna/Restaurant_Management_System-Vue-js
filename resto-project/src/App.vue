<template>
  <router-view />
  <!-- <SignUp /> -->
</template>

<script>

// import SignUp from './components/SignUp.vue'

export default {
  name: 'App',
  // components:{
  //   SignUp
  // },
}
</script>

<style>
#app {

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



.logo{
    width: 120px;
   
}

.card{
  margin-top: 20px;
  margin-bottom: 20px;
}

.card-body{
  padding-left: 50px;
  padding-right: 50px;
}

.gradient-custom-3 {
/* fallback for old browsers */
background: #000913;
height: 100%;


/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to right, rgba(39, 55, 87, 0.5), rgba(94, 178, 220, 0.5));

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to right, rgba(24, 120, 222, 0.5), rgba(1, 13, 19, 0.5))
}
.gradient-custom-4 {
/* fallback for old browsers */
background: #21c6e7;

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to right, rgb(9, 120, 168), rgb(10, 198, 85));

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to right, rgb(51, 180, 222),rgb(14, 135, 169))
}

   .background-radial-gradient {
      background-color: hsl(218, 41%, 15%);
      background-image: radial-gradient(650px circle at 0% 0%,
          hsl(218, 41%, 35%) 15%,
          hsl(218, 41%, 30%) 35%,
          hsl(218, 41%, 20%) 75%,
          hsl(218, 41%, 19%) 80%,
          transparent 100%),
        radial-gradient(1250px circle at 100% 100%,
          hsl(218, 41%, 45%) 15%,
          hsl(218, 41%, 30%) 35%,
          hsl(218, 41%, 20%) 75%,
          hsl(218, 41%, 19%) 80%,
          transparent 100%);
    }

    #radius-shape-1 {
      height: 220px;
      width: 220px;
      top: -60px;
      left: -130px;
      background: radial-gradient(#00466b, #1fe5ff);
      overflow: hidden;
    }

    #radius-shape-2 {
      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
      bottom: -60px;
      right: -110px;
      width: 300px;
      height: 300px;
      background: radial-gradient(#006b6b, #1fe5ff);
      overflow: hidden;
    }

</style>
