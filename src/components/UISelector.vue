<template>
    <div class="component">
        <div class="selector" @click="handleClickSelector">
            <div>&nbsp;&nbsp;{{ selected }}</div>
            <img class="icon" width='25px' height='25px' src="../assets/icons/icon_arrow-down.svg"></img>
        </div>
        <div class="dropdown" >
            <div v-for="item in items">
                <div @click="handleClickOption(item.value)" class="option" v-if="isOpen" :value="item.value">{{item.label}}</div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">

    export default {
        name: 'ui-selector',
        props: {
            selector: String,
            defaultValue: String,
            items: Array
        },
        data(){
            return {
                innerSelector: '',
                selected: this.defaultValue || '',
                isOpen: false
            }
        },
        methods:{
            handleClickSelector(){
                this.isOpen = !this.isOpen
            },
            handleClickOption(val){
                console.log('Value:'+val)
                this.isOpen = false
                this.selected = val
                this.$parent.$emit('selectorEvent', val)
            }
        }
    }
</script>

<style scoped>

.icon{
    align-self: center;    
    margin-right: 10px;
}

.dropdown{
    position: absolute;
    margin-top: 85px;
}

.component{
    display: flex;
    justify-content: center; 
    align-items: center;
    flex-flow: column;
}

.selector{
    width: 200px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 0 5px;
    padding-bottom: 10px;
    padding-top: 10px;
    padding-left: 10px;
    z-index: 10;
}

.option{
    width: 200px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
}

.option:hover{
    background-color: #1abc9c;
    color: #fff;
}
    
</style>