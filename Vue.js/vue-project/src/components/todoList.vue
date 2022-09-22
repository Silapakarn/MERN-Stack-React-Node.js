<template>
    <ul>
        <li>
           <h1 class="color">Kan</h1>
        </li>
        <input />
    </ul>
</template>

<script>
export default {
    name: 'todoList',
    props: {
        todosItems: {
            type: Array
        }
    }

}
</script>

<style>
    .color{
        color:blue;
        font-size: 100px;
    }
</style>
