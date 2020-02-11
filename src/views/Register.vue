<template>
  <div class="register">
    <RegisterSection/>
  </div>
</template>

<script>
// @ is an alias to /src
import RegisterSection from '@/components/RegisterSection.vue'


export default {
  name: 'Register',
  components: {
    RegisterSection
  }
}
</script>
