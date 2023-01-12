<template>
  <div class="container">
    <Profile image="1" />
    <Card
      title="Welkom!"
      :button="button"
      :password="password"
    >
      <div>
        <p>
          Op <b>26 mei 2023</b> gaan wij trouwen, en we willen graag dat
          jullie erbij zijn!
        </p>
        <p>
          Omdat het al 2023 is krijg je alle informatie en deze uitnodiging
          digitaal. Op deze site vind je info over het programmam, de locatie en de mogelijkheid om te RSVP'en. 
        </p>
        <p>
          Marjolein en Robbert
        </p>
        <p>
          Om Project X te voorkomen, hebben we eerst deze vraag voor je:   
        </p>
        <p>In welke plaats wonen we?</p>
        <input name="password" type="password" v-model="password" />
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
      password: null,
      button: {
        title: 'Beantwoorden',
        page: '/program'
      }
    }
  }
}
</script>

<style>
.container {
  background-image: url('~@/assets/VV1.jpg');
  background-size: cover;
  height: auto;
  min-height: 100%;
  padding: 30px;
}
a {
  color: #41B883;
}
</style>
