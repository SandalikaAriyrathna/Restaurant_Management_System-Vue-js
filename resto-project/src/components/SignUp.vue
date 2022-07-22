
<template>
<section className="vh-100 bg-image"
  style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp'); ">
  <div className="mask d-flex align-items-center gradient-custom-3">

    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
        
          <div className="card" style="border-radius: 15px">
            <div className="card-body p-5">
  <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDa08a9vIJ0xpjYwQc8V7pPq9PjHUKmBCu9abOUK5KRrBq6b4d0iWR9386YEKzOGDfrMg&usqp=CAU" alt="">

              <h2 className="text-uppercase text-center mb-5">Sign Up</h2>

              <form>

                <div className="form-outline mb-4">
                  <input type="text" v-model="name" id="form3Example1cg" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example1cg">Your Name</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" v-model="email" id="form3Example3cg" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example3cg">Your Email</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" v-model="password" id="form3Example4cdg" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example4cdg"> password</label>
                </div>

                <div className="form-check d-flex justify-content-center mb-5">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label className="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div className="d-flex justify-content-center">
                  <button type="button" v-on:click="signUp"
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>

                <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                    className="fw-bold text-body"><u>Login here</u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


</template>

<script>

import axios from 'axios';


export default {   
  name: 'SignUp',
  data(){
    return{
        name:'',
        email:'',
        password:''
    }
  },
  methods: {
   async signUp(){
        // console.warn("signup",this.name,this.email,this.password)
        let result = await axios.post("http://localhost:3000/user",{
            name:this.name,
            email:this.email,
            password:this.password
        });

        console.warn(result);
        if(result.status==201){
            alert("sign-up done")
        }

    }
  },
}
</script>

<style>
@import '~mdb-ui-kit/css/mdb.min.css';
body, html {
  height: 100%;
}

.logo{
    width: 100px;
    margin-bottom: 20px;
}

.gradient-custom-3 {
/* fallback for old browsers */
background: #84fab0;
height: 100%;
margin: 0;

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5));

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5))
}
.gradient-custom-4 {
/* fallback for old browsers */
background: #84fab0;

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1));

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1))
}

</style>

