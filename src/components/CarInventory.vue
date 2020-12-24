<template>
<div  class ='Container'>

<div>
  <h1>Our Super Car Inventory</h1>
    
</div>
    <div class='inventory'>
      <div
       class="card"
       :class = "$store.state.selectedItems.find( ele => ele.name == item.name) ? 'selected' : '' " 
       v-for = 'item in $store.state.inventory' :key= item.id
       @click=" manageCart(item)"       >
       <h4>{{item.name}}</h4>
        <img :src = 'item.url' width='200ps'>
        <div class = 'desc'>
            <p> 
            <span>In Stock ({{item.qty}})</span>
            </p>
            <p>${{item.price}}.00</p>
        </div>
      </div>
    </div>
</div>
</template>

<script>

// import {mapGetters, mapMutations} from 'vuex'
export default {
 name:'CarInventory',
 components:{
   
 },

 data(){
     return{
    //    selectedItems:[]
     }
 },

 computed:{

 },

 filters:{
     capitalize: function (value ) {
         if (!value) return ''
         value = value.toString()
         return value.charAt(0).toUpperCase() + value.slice(1)
     }
     },
 

 methods:{
     manageCart(item){
        console.log(`Items sent ${item.name}`)
        console.log(this.$store.state.selectedItems)
              if (this.$store.state.selectedItems.find( ele => ele.name == item.name)){
                this.$store.dispatch("removeSelectedItem", item.name)
         }else{
                this.$store.dispatch("addSelectedItem", item)
         
        }
        //  var name = this.inventory[item].name
        //  var selectedItem = this.inventory[item]
    //    console.log(selectedItem)
    //    const tempItem =
    //      {
    //          name:'Nissan GTR', 
    //          price:'124,000', qty:20, url: '../../assets/images/nissan_gtr.jpg'
    //          }   
    //      this.addCartItem(tempItem)
    //      if( !this.cartItems.includes(name)){
    //          this.addCartItem(selectedItem)
    //          this.active =true
    //      }else{
    //          this.deleteCartItem(item)
    //      }
    //      this.cartActive = this.cartItems.length
    // },
            


     }
 },
}
      
     
 


</script>

<style scoped>

.container{
    width:80%;
    margin:auto;
    background-color:red;
}
.inventory{
   display:flex;
   flex-wrap:wrap;
   width:100%;
   height:80vh;
   margin: 0 auto;
   text-align:center;
   padding:2em;
   overflow-y:auto;
}

.card{
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:300px;
    padding:.25em;
    background-color:grey;
    align-items: center;
    margin:1em;
}

.selected{
    background-color:green;
}

.card img{
    width:250px;
}

.desc{
    width: 250px;
    background-color: cornsilk;
    margin-top: 15px;
    padding:2px;
}

button{
    margin-top:2em;
    margin-right:2em;
    border-style:none;
    background-color:darkgrey;
    padding:1em;
}
</style>
