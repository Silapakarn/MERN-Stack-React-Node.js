<template>
  
  <div class="bg">
    <Content />

  </div>

</template>


<script lang="ts">

import Components from '@/components/indexs'
import Content from '~/components/Content/Content.vue';
import Navbar from '~/components/Navbar/Navbar.vue'

export default{
    component: {
        ...Components
    },
    components: { Content, Navbar },
}
</script>

<style scoped>
div{
  font-family: 'Inter Tight', sans-serif;
}
</style>
