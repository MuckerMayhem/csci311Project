<template>
  <div class="login">
    <LoginSection/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import LoginSection from '@/components/LoginSection.vue'


  export default {
    name: 'Login',
    components: {
      LoginSection
    },
    data() {
      return {
        users: null
      }
    },
  }
</script>