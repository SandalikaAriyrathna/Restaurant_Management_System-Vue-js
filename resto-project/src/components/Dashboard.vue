<template>
    
<div class="row">
  <div class="col-sm-2" style="margin-right: 100px;"> <Sidenav /></div>

  <div class="col-sm-9">

      <div className="container-fluid" style="margin-top: 50px;"> 
          <div className="row">
              <div className="col-sm-1">                     
                       <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDa08a9vIJ0xpjYwQc8V7pPq9PjHUKmBCu9abOUK5KRrBq6b4d0iWR9386YEKzOGDfrMg&usqp=CAU"
                height="70"
                alt="logo"
                loading="lazy"
                />
              </div>                  
                    <div className="col-sm-10">              
                       <h1 className="fredoka"> Hello Admin ! </h1>
                    </div >
                    <div className="col-sm-1">                     
                        <a href="/" className="btn btn-dash d-inline" v-on:Click="logout"><span style="color: white">LOGOUT</span></a>
                    </div>
            </div>
        </div>



            <div class="container-fluid ">
                <div class="row">
                    <div class="col-sm-0"></div>
                    <div class="col-sm-3">
                        <div class="dbox dbox--color-2">
                            <div class="dbox__body">
                                <span class="dbox__count">8,252</span>
                                <span class="dbox__title">Active Users</span>
                            </div>

                            <div class="dbox__action">
                                <a href="#" class="dbox_action_btn">More Info</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="dbox dbox--color-2">
                            <div class="dbox__body">
                                <span class="dbox__count">100</span>
                                <span class="dbox__title">Active Facebook Fllowers</span>
                            </div>

                            <div class="dbox__action">
                                <a href="#" class="dbox_action_btn">More Info</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="dbox dbox--color-2">
                            <div class="dbox__body">
                                <span class="dbox__count">100</span>
                                <span class="dbox__title">Active Instagram Fllowers</span>
                            </div>

                            <div class="dbox__action">
                                <a href="#" class="dbox_action_btn">More Info</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="dbox dbox--color-2">
                            <div class="dbox__body">
                                <span class="dbox__count">2502</span>
                                <span class="dbox__title">Active Youtube Fllowers</span>
                            </div>

                            <div class="dbox__action">
                                <a href="#" class="dbox_action_btn">More Info</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

 </div>
            </div>



</template>



<script>
import Sidenav from './Sidenav.vue';


export default {
    name: "Dashboard",

    components: { 
      Sidenav
    },
}

</script>