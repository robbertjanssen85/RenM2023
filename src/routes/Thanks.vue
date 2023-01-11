<template>
  <div class="container">
    <Profile image="5" />
    <Card
      title="Dankjewel"
      :prevButton="prevButton"
    >
      <p>Het is nog even weg, maar wij hebben er al megaveel zin in!</p>
      <p>Liefs,<br/>Fran, Chris &amp; the little one</p>
    </Card>
  </div>
</template>

<script>
import Profile from '@/components/Profile.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'Program',
  components: {
    Card,
    Profile
  },
  mounted() {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  },
  data() {
    return {
      prevButton: {
        title: 'Welkom',
        page: '/'
      }
    }
  }
}
</script>

<style scoped>
</style>
