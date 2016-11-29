var app1 =new Vue({
  el:'#app-1',
  data:{
    message:"hello vue.js",
    mesg:new Date()+''
  },
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date()
  }
})
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app0 = new Vue({
  el:'#app-0',
  methods:{
    toggleMessage:function(){
      if(app3.seen){
        app3.seen=false
      }else{
        app3.seen=true
      }
    },
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

app4.todos.push({text:'my new items'})

var app5 = new Vue({
  el:'#app-5',
  data:{
    message:'what a wonderful day'
  },
  methods:{
    reverseMessage:function(){
      this.message=this.message.split(" ").reverse().join(' ')
    },
  }
})

var app6= new Vue({
  el:'#app-6',
  data:{
    message:'type in whatever you want!'
  }
})

Vue.component('todo-item',{
  props:['todo'],
  template:'<li>{{todo.text}}</li>'
})
var app7 = new Vue({
  el:'#app-7',
  data:{
    groceryList:[
      {text:'Vegetables'},
      {text:'Cheeese'},
      {text:'whatever else humans are supposed to eat'}
    ]
  }
})

app7.groceryList.push({text:'my 2nd new items'})


var vm = new Vue({
  el:'#example',
  data: {
    message: "Hello"
  },
  computed:{
    reversedMessage:function(){
       return this.message.split('').reverse().join('')
    }
  }
})

console.log(vm.reversedMessage)
vm.message = 'Goodbye'
