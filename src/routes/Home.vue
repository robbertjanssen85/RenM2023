<template>
  <div v-if="invite" class="container">
    <Profile image="1" />
    <Card
      title="Welkom!"
      :button="button"
    >
      <div>
        <p>
          Op <b>26 mei 2023</b> gaan wij trouwen, en we willen graag dat
          jullie erbij zijn!
        </p>
        <p>
          Omdat het al 2023 is krijg je alle informatie en deze uitnodiging
          digitaal. We hebben een paar vragen voor je, maar eerst het programma!
        </p>
        <p>Marjolein &amp; Robbert</p>
      </div>
    </Card>
  </div>
</template>

<script>
import Profile from '@/components/Profile.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'Home',
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
      invite: this.$root.query.invite, // To make the page crash without query param
      button: {
        title: 'Bekijk het programma',
        page: '/program'
      }
    }
  }
}
</script>

<style>
.container {
  background-image: url('~@/assets/benedensas.jpg');
  background-size: cover;
  height: auto;
  min-height: 100%;
  padding: 30px;
}
a {
  color: #41B883;
}
</style>
