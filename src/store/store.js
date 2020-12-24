import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const store = new Vuex.Store({
   state:{
       inventory:[
         {id:1, name: 'Ferrari', price: 200000, url:'https://media.istockphoto.com/photos/ferrari-laferrari-picture-id503407231'},  
         {id: 2, name: 'Audi R-8', price:134000, url:'https://www.rimike.ca/images/audir8.jpg'},
         {id: 3, name: 'Mercedes AMG', price:134000, url:'https://cdn.motor1.com/images/mgl/BoB2M/s1/2020-mercedes-amg-gt-black-series-rendering.jpg'},
         {id: 4, name: 'Lambogini Countach', price:134000, url:'https://www.rimike.ca/images/lambo.jpg'},
         {id: 5, name: 'Aston Martin DB11', price: 236500, url:'https://amsc-prod-cd.azureedge.net/-/media/aston-martin/images/default-source/models/db11/db11_05_asset_33.jpg?mw=1980&rev=-1&hash=2D938C73A44D9F8CC3D89B2E999EFC30'},
         {id:6, name:'Jaguar F-Type', price:107500, url:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-jaguar-f-type-r-130-1594736411.jpg?crop=0.498xw:0.423xh;0.303xw,0.413xh&resize=2048:*'}
       ],

       selectedItems:[],

       showCart:true
    
    },

   mutations:{
     addSelectedItem(state, payload){
        state.selectedItems.push(payload)
     },

     removeSelectedItem(state, payload){
       state.selectedItems = state.selectedItems.filter( ele =>{
         return ele.name != payload
       })
     }
   },

   actions:{
     addSelectedItem(context, payload){
       context.commit("addSelectedItem",payload)
     },

     removeSelectedItem(context, payload){
      context.commit('removeSelectedItem', payload)     
    }
   }

  })
