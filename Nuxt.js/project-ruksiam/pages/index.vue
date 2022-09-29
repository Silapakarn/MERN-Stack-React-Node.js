<template>
  <div>
    <nuxt-link to="/users/users" class="button"><button>
      Users</button>
    </nuxt-link>
    
    <nuxt-link to="/admin/admin" class="button"><button>
      Admin</button>
    </nuxt-link>
    <PostContent title="Dragon"/>
    <PostContent title="Silapakarn"/>
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PostContent from '../components/posts/PostContent.vue'

export default Vue.extend({
  name: 'IndexPage',
  components:{
    PostContent
  }
})
</script>

<style scoped>
  .button{
    background-color: rgb(183, 240, 150);
    padding: 100px;
    color: rgb(11, 48, 0);
    font-size: larger;
  }
</style>
