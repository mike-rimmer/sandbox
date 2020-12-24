import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const store = new Vuex.Store({
   state:{
       inventory:[
         {id:1, name: 'Ferrari', price: 200000, url:'https://media.istockphoto.com/photos/ferrari-laferrari-picture-id503407231'},  
         {id: 2, name: 'Nissan GTR', price:134000, url:'https://www.nismo.com/gallery/gallery-nissan-gt-r-nismo-2020/#&gid=1&pid=2'},
         {id: 3, name: 'Mercedes AMG', price:134000, url:'https://cdn.motor1.com/images/mgl/BoB2M/s1/2020-mercedes-amg-gt-black-series-rendering.jpg'},
         {id: 4, name: 'Lambogini Countach', price:134000, url:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbesthqwallpapers.com%2Fcars%2Flamborghini-countach-lp400-1980-supercar-retro-cars-24045&psig=AOvVaw3uvz62Q89yfj4vDs1ttUMa&ust=1608758736467000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDC577D4u0CFQAAAAAdAAAAABAN'},
         {id =5, name: 'Aston Martin DB11', price: 40000, url:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.roadandtrack.com%2Fnew-cars%2Fcar-technology%2Fa20730941%2Faston-martin-db11-amr-matt-becker%2F&psig=AOvVaw1-vXjj3Ny-3NNjpOK8YHRl&ust=1608758857862000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjf5fnD4u0CFQAAAAAdAAAAABAD'},
       ],
       ctrColor: "red",
       ctr: 0,
       fruits:['apples','banana','pears', 'oranges']
   },

   

  })
