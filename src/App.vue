<template>
  <div id="mycomponent">
    <h1>My Components</h1>
    <div>
          <div>Selector: {{selector}}</div>
          <ui-selector defaultValue="Hola" :items="options"></ui-selector>
          <div>Filter: {{filter}}</div>
          <ui-searchlist :items="items" v-model="filter" placeholder="Cities ..."></ui-searchlist>
          <div>{{value}}</div>
          <app-input v-model="value" placeholder="Placeholder" ></app-input>
          <app-button :onClick="handleClick" text="My Props"></app-button>
    </div>
  </div>
</template>

<script>
import UIButton from './components/UIButton'
import UIInput from './components/UIInput'
import UISearchList from './components/UISearchList'
import UISelector from './components/UISelector'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
//import { Option, Select } from 'element-ui'

export default {
  name: 'app',
  created() {
     this.$on('filterEvent', r => {
        this.filter = r
     });
     this.$on('selectorEvent', s => {
        this.selector = s
     });
  },
  components: {
    'app-button': UIButton,
    'app-input' : UIInput,
    'ui-searchlist': UISearchList,
    'ui-selector': UISelector
  },
  data(){
    return {
      value : '',
      filter: '',
      selector: '',
      items: ['Perth', 'Melbourne', 'Sidney'],
      options: [{'value': 'option1', 'label': 'OPTION1'},
                {'value': 'option2', 'label': 'OPTION2'},
                {'value': 'option3', 'label': 'OPTION3'},
               ]
    }
  },
  methods:{
    handleClick: function(){
      console.log('Hello methods')
    }
  }
}
</script>

<style>
#app {
  background-color: #e9e9e9;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>