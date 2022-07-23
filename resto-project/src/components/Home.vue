<template>

<h1>Hello User, Welcome on Home Page</h1>

</template>

<script>

export default {
    name:'Home',

     mounted() {
    let user = localStorage.getItem('user-info');

    if(!user){
       this.$router.push({name:'SignUp'})
    }
  },
}

</script>