<template>
     <Sidenav />
            <div class="container-fluid ">
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-2">
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
                    <div class="col-md-2">
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
                    <div class="col-md-2">
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
                    <div class="col-md-2">
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