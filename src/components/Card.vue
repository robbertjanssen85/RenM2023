<template>
  <div class="card">
    <h1>{{ title }}</h1>
    <slot></slot>
    <div class="button-group">
      <button class="button prev-button" v-if="prevButton" v-on:click="routeTo(prevButton.page)">{{ prevButton.title }}</button>
      <button class="button main-button" v-if="button && !loading" v-on:click="routeTo(button.page)">{{ button.title }}</button>
      <button class="button main-button main-loading" v-if="button && loading">
        <div class="loader"></div>
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Card',
  props: {
    title: String,
    button: Object,
    prevButton: Object,
    adults: Array,
    children: Array,
    rsvp: Object,
    questions: String,
  },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    postDatabase() {
      const payload = {
        adults: this.$props.adults.map(x => x.name),
        children: this.$props.children.map(x => x.name),
        attends_day: this.$props.rsvp.attends_day,
        attends_party: this.$props.rsvp.attends_party,
        attends_breakfast: this.$props.rsvp.attends_breakfast,
        sleeping: this.$props.rsvp.sleeping,
        allergies: this.$props.rsvp.allergies,
        allergies_description: this.$props.rsvp.allergies_description,
        questions_or_remarks: this.$props.questions
      }
      return axios.post('https://api.robbertenmarjolein.nl/responses', payload)
    },
    async routeTo(page) {
      if (!this.$props.adults || page !== '/thanks') {
        this.$root.currentRoute = page
      } else {
        try {
          this.loading = true
          await this.postDatabase()
          this.loading = false
          this.$root.currentRoute = page
        } catch (e) {
          this.loading = false
          window.alert('Sorry, het ging verschrikkelijk mis met het opsturen van deze van deze informatie. Controleer of je alle velden hebt ingevuld, probeer het nog eens, of stuur ons een mailtje!')
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  background-color: #FFFFFF;
  border-radius: 10px;
  max-width: 550px;
  margin: 0 auto 80px auto;
  padding: 80px 50px 50px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 18px;
}
.button-group {
  display: flex;
  justify-content: center;
}
.button {
  font-size: 20px;
  font-weight: 400;
  padding: 15px 20px 15px 20px;
  margin-top: 20px;
  border-radius: 5px;
  text-decoration: none;
  border: none;
  align-self: center;
  cursor: pointer;
}
.button + .button {
  margin-left: 20px;
}
.main-button {
  background-color: #41B883;
  color: #FFFFFF;
}
.prev-button {
  background-color: #E1E1E1;
  color: #3C3C3C;
}
.loader {
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #868484;
  width: 15px;
  height: 15px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  margin: 0 auto;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.main-loading {
  width: 120px;
}
</style>
