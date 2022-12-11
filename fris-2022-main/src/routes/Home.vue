<template>
  <div class="container">
    <Profile image="1" />
    <Card
      :title="`Hoi ${this.$root.query.name}`"
      :button="button"
    >
      <div>
        <p>
          Op <b>3 september 2022</b> gaan wij trouwen, en we willen graag dat
          {{plural ? 'jullie' : 'jij'}} erbij {{plural ? 'zijn' : 'bent'}}!
        </p>
        <p>
          Omdat het al 2022 is krijg je alle informatie en deze uitnodiging
          digitaal. We hebben een paar vragen voor je, maar eerst het programma!
        </p>
        <p>Chris &amp; Fran</p>
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
      plural: this.$root.query.name.includes('&'),
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
