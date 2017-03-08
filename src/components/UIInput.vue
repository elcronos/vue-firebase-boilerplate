<template>
    <input 
        :value="value" 
        :placeholder="placeholder"
        @input="updateValue($event.target.value)"
        class="field">
    </input>
</template>

<script type="text/babel">
    export default {
        name: 'app-input',
        props: {
            value: String,
            placeholder: String
        },
        methods:{
            updateValue: function (value) {
              let result = value.toUpperCase()
              this.$emit('input', result)
            },
        }
    }
</script>

<style scoped>

.field{
    border: 1px solid #ecf0f1;
    width: 200px;
    font-size: 16px;
    font-weight: 300;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    margin: 5px 0 5px;
}
    
</style>