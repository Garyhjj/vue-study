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

/*var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})*/
var vm1 = new Vue({
  el: '#demo',
  data:{
    firstName:'Foo',
    lastName:'Bar'
  },
  computed:{
    fullName:{
      get: function(){
        return this.firstName+' '+this.lastName
      },
      set: function(newValue){
        var names = newValue.split(' ')
        this.firstName= names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }

})
vm1.firstName = 'hugd'
vm1.fullName='gary huang'
console.log(vm1.lastName)

var watchExampleVM = new Vue({
  el:'#watch-example',
  data: {
    question:'',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch:{
    question:function(newQuestion){
      this.answer = 'Waiting for you to stop typing...'
      this.getAnswer()
    }
  },
  methods:{
    getAnswer: _.debounce(
      function () {
        var vm = this
        if(this.question){
          if (this.question.indexOf('?') === -1) {
            vm.answer = 'Questions usually contain a question mark. ;-)'
             return
          }
        }else{
          this.answer = 'Waiting for you to stop typing...'
          return
        }

        vm.answer ='Thinking...'
        axios.get('https://yesno.wtf/api')
           .then(function(response){
             vm.answer = _.capitalize(response.data.answer)
           })
           .catch(function(error){
             vm.answer = 'Erro!Could not reach the API.'+error
           })
      },

      500
    )
  }
})

var app8=new Vue({
  el:"#app-8",
  data: {
    classN: {
      red: false,
      green:false,
      blue:false
    },
    message:"dfgd"
  }
})
app8.classN.red =true
