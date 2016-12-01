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

var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      {message: 'foo' },
      {message: 'Bar' }
    ]
  }
})

var example2 = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})

var app9 = new Vue({
  el:'#app-9',
  data:{
    n:""
  },
})

var app10 = new Vue({
  el:'#app-10',
  data:{

  },
})

new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      'Do the dishes',
      'Take out the trash',
      'Mow the lawn'
    ]
  },
  methods: {
    addNewTodo: function () {
      this.todos.push(this.newTodoText)//增加列表项
      this.newTodoText = ''
    }
  }
})

//计算属性方法
new Vue({
  el:'#app-11',
  data: {
  numbers: [ 1, 2, 3, 4, 5 ]

},
computed: {
  evenNumbers: function () {
    return this.numbers.filter(function (number) {
      return number % 2 === 0
    })
  }
}
})

//事情处理器

new Vue({
  el: '#app-12',
  data: {
    counter: 0
  },
})

new Vue({
  el: '#app-13',
  data: {
    name: 'Vue.js'
  },
  // 在 `methods` 对象中定义方法
  methods: {
    greet: function (event) {
      // `this` 在方法里指当前 Vue 实例
      alert('Hello ' + this.name + '!'),
      // `event` 是原生 DOM 事件
      alert(event.target.tagName)
    }
  }
})

new Vue({
  el:'#app-14',
  data:{
    checked:false
  }
})

new Vue({
  el:'#app-15',
  data:{
    checkedNames:[]
  }
})

new Vue({
  el:'#app-16',
  data:{
    picked:''
  }
})

new Vue({
  el:'#app-17',
  data:{
    age:''
  }
})


Vue.component('simple-counter', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  // data 是一个函数，因此 Vue 不会警告，
  // 但是我们为每一个组件返回了同一个对象引用
  data: function () {
    return {
      counter:0
    }
  }
})
new Vue({
  el: '#app-18'
})

Vue.component('button-counter', {
  template: '<button v-on:click="increment">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    increment: function () {
      this.counter += 1
      this.$emit('increment')//触发父组件的方法---incrementTotal
    }
  },
})
new Vue({
  el: '#counter-event-example',
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function () {
      this.total += 1
    }
  }
})

Vue.component('currency-input', {
  template: '\
    <span>\
      $\
      <input\
        ref="input"\
        v-bind:value="value"\
        v-on:input="updateValue($event.target.value)"\
      >\
    </span>\
  ',
  props: ['value'],
  methods: {
    // Instead of updating the value directly, this
    // method is used to format and place constraints
    // on the input's value
    updateValue: function (value) {
      var formattedValue = value
        // Remove whitespace on either side
        .trim()
        // Shorten to 2 decimal places
        .slice(0, value.indexOf('.') + 3)
      // If the value was not already normalized,
      // manually override it to conform
      if (formattedValue !== value) {
        this.$refs.input.value = formattedValue
      }
      // Emit the number value through the input event
      this.$emit('input', Number(formattedValue))
    }
  }
})

new Vue({
  el:'#app-19'
})

Vue.component('my-component',{
  template:'<div class="container">\
  <header>\
    <slot name="header"></slot>\
  </header>\
  <main>\
    <slot></slot>\
  </main>\
  <footer>\
    <slot name="footer"></slot>\
  </footer>\
</div>'
})
new Vue({
  el:'#app-20'
})

var app21 = new Vue({
  el: '#app-21',
  data: {
    message: '123'
  }
})
app21.message = 'new message' // 更改数据
app21.$el.textContent === 'new message' // false
Vue.nextTick(function () {
  app21.$el.textContent === 'new message' // true
})

new Vue({
  el: '#app-23',
  data: {
    show: true
  }
})

new Vue({
  el: '#app-22',
  data: {
    show: true
  }
})

new Vue({
  el: '#app-24',
  data: {
    show: true
  }
})

new Vue({
  el: '#app-25',
  data: {
    show: true
  }
})

new Vue({
  el: '#transition-components-demo',
  data: {
    view: 'v-a'
  },
  components: {
    'v-a': {
      template: '<div>Component A</div>'
    },
    'v-b': {
      template: '<div>Component B</div>'
    }
  }
})

new Vue({
  el: '#list-complete-demo',
  data: {
    items: [1,2,3,4,5,6,7,8,9],
    nextNum: 10
  },
  methods: {
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    },
    shuffle: function () {
      this.items = _.shuffle(this.items)
    }
  }
})

// 注册一个全局自定义指令 v-focus
Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    // 聚焦元素
    el.placeholder = 'sdfgsd',
    el.focus()

  }
})

new Vue({
  el:'#app-27'
})


alert(new Date().toJSON());
