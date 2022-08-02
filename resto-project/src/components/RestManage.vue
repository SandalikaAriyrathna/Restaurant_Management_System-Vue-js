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


<div style="margin-top: 50px;">
   <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal" style="width: 230px;">
  Add Restaurant Details
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      
      <form>
  
<!-- Text input -->
 <div class="form-outline mb-4">
    <input type="text" v-model="restaurant.url" id="form6Example3" class="form-control" />
    <label class="form-label" for="form6Example3">Restaurant Logo Url</label>
  </div>

  <!-- Text input -->
  <div class="form-outline mb-4">
    <input type="text" v-model="restaurant.name" id="form6Example3" class="form-control" />
    <label class="form-label" for="form6Example3">Restaurant Name</label>
  </div>

  <!-- Text input -->
  <div class="form-outline mb-4">
    <input type="text"  v-model="restaurant.address" id="form6Example4" class="form-control" />
    <label class="form-label" for="form6Example4">Address</label>
  </div>

  <!-- Number input -->
  <div class="form-outline mb-4">
    <input type="number" v-model="restaurant.contact"  id="form6Example6" class="form-control" />
    <label class="form-label" for="form6Example6">Contact</label>
  </div>

<button type="submit" v-on:click="addRestaurant" class="btn btn-primary">Add New Restaurant</button>
</form>
      
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>




<!-- update Modal -->
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Update</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      
       <form>
  <!-- 2 column grid layout with text inputs for the first and last names -->

  <!-- Text input -->
  <div class="form-outline mb-4">
    <input type="text" v-model="restaurant.name" id="form6Example3" class="form-control" />
   
  </div>

  <!-- Text input -->
  <div class="form-outline mb-4">
    <input type="text"  v-model="restaurant.address" id="form6Example4" class="form-control" /> 
    
  </div>

  <!-- Number input -->
  <div class="form-outline mb-4">
    <input type="number" v-model="restaurant.contact"  id="form6Example6" class="form-control" />  
   
  </div>
<button type="submit" v-on:click="updateRestaurant(restaurant.id)" class="btn btn-primary">Update Restaurant</button>
</form>
      
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

  </div>


  <!-- === -->


<table class="table" style="margin-top: 50px;">
  <thead class="table-dark">
     <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Address</th>
      <th scope="col">Contact</th>
      <th scope="col">Logo</th>
      <th scope="col-2">Action</th>
     
    </tr>
  </thead>

  <tbody>

  <tr v-for="item in restaurant" :key="item.id">
      <th scope="row">{{item.id}}</th>
      <td>{{item.name}}</td>
      <td>{{item.address}}</td>
      <td>{{item.contact}}</td>
      <td><img :src="item.url" style="width:100px;"/></td>
      <td>
    <button v-on:click="getOne(item.id)" type="button" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal2" style="margin-left: 100px;">
         <i class="fas fa-pen"></i>
    </button>
    <button v-on:click="deleteRestaurant(item.id)" type="button" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal3" style="margin-left: 100px;">
          <i class="fab fa-bitbucket"></i>
    </button>
      </td>
      
    </tr>

  
  </tbody>
</table>


  
  </div>
</div>

  
</template>

<script>
import Sidenav from './Sidenav.vue';
import axios from 'axios';

export default {
    name: "RestManage",

    components: { 
      Sidenav
    },

    data(){
     
        return{         
          restaurant:[],
          restaurant :{
            id:'',
            name:'',
            address:'',
            contact:'',
            url:''
          }
         

        }
    },

     methods: {
    
     async addRestaurant(){
        console.warn(this.restaurant);
       
        const result = await axios.post("http://localhost:3000/restaurant",{
          name:this.restaurant.name,
          address:this.restaurant.address,
          contact:this.restaurant.contact,
          url:this.restaurant.url,
          
        });
      
       
        console.warn("result",result)
      },

      async getOne(id){
        console.warn(id)
        const getonedata = await axios.get('http://localhost:3000/restaurant/'+id,
        );
         console.warn(getonedata)
         this.restaurant.id= getonedata.data.id
         this.restaurant.name= getonedata.data.name
          this.restaurant.address= getonedata.data.address
          this.restaurant.contact= getonedata.data.contact
          this.restaurant.url= getonedata.data.url
      },

      async updateRestaurant(id){
        
         console.warn(this.restaurant);

        const upresult = await axios.put(`http://localhost:3000/restaurant/`+ id,{
          name:this.restaurant.name,
          address:this.restaurant.address,
          contact:this.restaurant.contact,
          url:this.restaurant.url
        });
        console.warn("result",upresult)
      },

      async deleteRestaurant (id) {
        // alert('want to delete '+ id +'?')
      console.warn(id)
          const delresult = await axios.delete('http://localhost:3000/restaurant/'+id);
           console.warn(delresult)
          if(delresult.status == 200){
            this.loadData();
          }
      },

      async loadData(){
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: "SignUp" });
        }

        let result = await axios.get("http://localhost:3000/restaurant");
        console.warn(result);
        this.restaurant = result.data;
      }
    },

    async mounted() {
        this.loadData();
    },


}

</script>