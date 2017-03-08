<template>
    <a @click="onClick" class="mybutton" :style="getType">{{ getText }}</a>
</template>

<script type="text/babel">
    export default {
        name: 'app-button',
        props: {
            text: String,
            onClick: Function, 
            type: {
                type: String,
                default: 'default'
            }
        },
        computed: {
            getType(){
                let types = [
                     {type: 'default', color:'#1abc9c'},
                     {type: 'info', color:'#3498db'},
                     {type: 'danger', color:'#e74c3c'}
                ]
                
                let color = types.find( x => x.type === this.type)
                let backgroundColor = {'background-color': color.color || '#1abc9c'}
                
                return backgroundColor
            },
            getText(){
                return this.text.toUpperCase()
            }
        }
    }
</script>

<style scoped>

a {
    color: #fff;
}

.mybutton {
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
}
</style>
