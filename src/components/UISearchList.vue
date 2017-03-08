<template>
    <div class="component">
        <div class="search-input">
            <input
                :value="innerFilter" 
                :placeholder="placeholder"
                @input="updateFilter($event.target.value)"
                @focus="handleFocus"
                @blur="handleBlur"
                class="field">
            </input>
            <img v-if="innerFilter.length === 0" class="icon" width='25px' height='25px' src="../assets/icons/search.svg"></img>
            <img @click="resetSearch" v-else class="icon" width='20px' height='20px' src="../assets/icons/multiply.svg"></img>
        </div>
        
        <div class="dropdown">
            <div key="index" v-for="(result,index) in results" class="result">
                <div @click="selectResult(result,index)">{{result}}</div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">

    export default {
        name: 'ui-searchlist',
        props: {
            filter: String,
            placeholder: String,
            items: Array
        },
        data(){
            return {
                results: '',
                innerFilter: '',
                urlIcon: '',
                isSelected: false
            }
        },
        methods:{
            updateFilter(value) {
                this.innerFilter = value
                this.isSelected = false
            },
            resetSearch(){
                this.innerFilter = ''
            },
            selectResult(r, i){
                this.innerFilter = r
                this.isSelected = true
                this.$parent.$emit('filterEvent',r)
            },
            handleFocus(){
                this.urlIcon = '../assets/icons/search-color.svg'
            },
            handleBlur(){
                this.urlIcon = '../assets/icons/search.svg'
            }
        },
        compute: {
          isNotEmpty(){
            return innerFilter.length > 0
          }
        },
        watch:{
            'innerFilter': function(value, oldValue){
                let items = this.items.filter(item => item.toLowerCase().includes(value)) || []
                
                if(value != ""){
                    this.results = items      
                }else {this.results = value}
            }
        }
    }
</script>

<style scoped>

.icon{
    align-self: center;    
    margin-right: 10px;
}

.search-input{
    display: flex;
    background-color: #fff;
}

.dropdown{
    display: flex;
    flex-flow: column;
    position: absolute;
    margin-top: 45px;
}
.component{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.result{
    border: 0px solid #ecf0f1;
    background-color: #fff;
    width: 200px;
    font-size: 16px;
    font-weight: 300;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    z-index: 10;
}

.result:hover{
    background-color: #1abc9c;
    color: #fff;
}

.field{
    outline: none;
    border: none;
    font-size: 16px;
    font-weight: 300;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    margin: 5px 0 5px;
}
    
</style>