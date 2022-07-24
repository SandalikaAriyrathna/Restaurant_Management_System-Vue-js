<template>
<Header />

 <!-- Section: Design Block -->
<section class="background-radial-gradient overflow-hidden">



  <div class="container px-4 py-5 px-md-5 text-center ">
    <div class="row gx-lg-5 align-items-center mb-5">
      <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">
        <h1 class="my-5 display-5 fw-bold ls-tight text-lg-start my-5" style="color: hsl(218, 81%, 95%)">
          Hello User,  <br />
          <span style="color: hsl(218, 81%, 75%)">Contact with Resto Home</span>
        </h1>
        <p class="mb-4 opacity-70 text-lg-start my-5" style="color: hsl(218, 81%, 85%)">
         Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.
        </p>
      </div>

      <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>

  <div class="card" style="background: linear-gradient(140deg, rgba(72, 115, 150, 1) 50%, rgba(57, 108, 150, 0.65) 65%, rgba(42, 102, 150, 0.6) 50%, rgba(27, 95, 150, 0.95) 80%, rgba(12, 88, 150, 1) 90%, rgba(0, 83, 150, 0.8) 70%);">
        <div class="card-body px-4 px-md-5">
          

           <!--Section: Contact v.2-->
<section class="mb-4">

    <!--Section heading-->
    <h2 class="h1-responsive font-weight-bold text-center my-4" style="color: hsl(218, 81%, 95%)">Contact us</h2>
    <!--Section description-->
  
    <div class="row">

        <!--Grid column-->
        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                <!--Grid row-->
                <div class="row">

                    <!--Grid column-->
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control">
                            <label for="name" class="" style="color: hsl(218, 81%, 95%)">Your name</label>
                        </div>
                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control">
                            <label for="email" class="" style="color: hsl(218, 81%, 95%)">Your email</label>
                        </div>
                    </div>
                    <!--Grid column-->

                </div>
                <!--Grid row-->

                <!--Grid row-->
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control">
                            <label for="subject" class="" style="color: hsl(218, 81%, 95%)">Subject</label>
                        </div>
                    </div>
                </div>
                <!--Grid row-->

                <!--Grid row-->
                <div class="row">

                    <!--Grid column-->
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="7" class="form-control md-textarea"></textarea>
                            <label for="message" style="color: hsl(218, 81%, 95%)">Your message</label>
                        </div>

                    </div>
                </div>
                <!--Grid row-->

            </form>

            <div class="text-center text-md-left">
                <a class="btn btn-warning" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div class="status"></div>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x" style="color: hsl(218, 81%, 95%)"></i>
                    <p style="color: hsl(218, 81%, 95%)">San Francisco, CA 94126, USA</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x" style="color: hsl(218, 81%, 95%)"></i>
                    <p style="color: hsl(218, 81%, 95%)">+ 01 234 567 89</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x" style="color: hsl(218, 81%, 95%)"></i>
                    <p style="color: hsl(218, 81%, 95%)">contact@mdbootstrap.com</p>
                </li>
            </ul>
        </div>
        
        <!--Grid column-->

    </div>

</section>
<!--Section: Contact v.2-->
</div></div>
      
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
    name: "ContactUs",

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