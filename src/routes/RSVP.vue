<template>
  <div class="container">
    <Profile image="15" />
    <Card
      title="RSVP"
      :button="button"
      :prevButton="prevButton"
      :adults="adults"
      :children="children"
      :rsvp="rsvp"
      :questions="questions"
    >
      <div class="rsvp">
        <div class="question">
          <p class="label">Met hoeveel volwassenen kom je?</p>
          <input type="number" v-model="adultCount" />
        </div>
        <div class="question">
          <p class="label">Met hoeveel kinderen kom je?</p>
          <input type="number" v-model="childCount" />
        </div>
        <hr />
        <div v-for="(adult, index) in adults" :key="index">
          <div class="question">
            <p class="label"><b>Naam volwassene #{{index + 1}}?</b></p>
            <input v-model="adult.name" />
          </div>
        </div>
        <div v-if="childCount">
          <div v-for="(child, index) in children" :key="index">
            <div class="question">
              <p class="label"><b>Naam kind #{{index + 1}}?</b></p>
              <input v-model="child.name" />
            </div>
          </div>
        </div>
        <div>
          <div class="question">
            <p class="label"><b>Waar zijn jullie bij?</b></p>
          </div>
          <div v-if="dayGuest">
            <div class="toggle-group">
              <p>15:30 - 20:30&nbsp;&nbsp;&nbsp;Ceremonie en aansluitende borrel + diner</p>
              <Toggle class="form-toggle" v-model="rsvp.attends_day" />
            </div>
          </div>
          <div>
            <div class="toggle-group">
              <p>20:30 - 00:30&nbsp;&nbsp;&nbsp;Feest</p>
              <Toggle class="form-toggle" v-model="rsvp.attends_party" />
            </div>
            <div class="toggle-group">
              <p>10:00 - 11:00&nbsp;&nbsp;&nbsp;Gezamelijk ontbijt de volgende dag</p>
              <Toggle class="form-toggle" v-model="rsvp.attends_breakfast" />
            </div>
          </div>
          <div v-if="rsvp.attends_day" style="display:flex;align-items:center;">
            <p style="max-width: 90%">Het diner is grotendeels vegetarisch. Heb je allergieēn of dieetwensen waar we rekening mee moeten houden?</p>
            <Toggle class="form-toggle" v-model="rsvp.has_allergies" />
          </div>
          <div v-if="rsvp.has_allergies">
            <textarea rows="2" v-model="rsvp.allergy_description"></textarea>
          </div>
          <div>
            <p><b>Blijf je overnachten?</b></p>
            <div class="radio-button-group">
              <label>
                <div><input type="radio" name="sleeping" value="vv-hotel-interesse" v-model="rsvp.sleeping"></div>
                <span>Ja, wij hebben interesse in een slaapplek op het terrein van de Vreemde Vogel of het nabije Ibis hotel</span>
              </label>
              <label>
                <div><input type="radio" name="sleeping" value="tent-interesse" v-model="rsvp.sleeping"></div>
                <span>Ja, wij slapen graag in een tentje bij de Vreemde Vogel</span>
              </label>
              <label>
                <div><input type="radio" name="sleeping" value="zelf-regelen" v-model="rsvp.sleeping"></div>
                <span>Ja, maar ik regel zelf een andere slaapplek</span>
              </label>
              <label>
                <div><input type="radio" name="sleeping" value="nee" v-model="rsvp.sleeping"></div>
                <span>Nee</span>
              </label>
            </div>
          </div>
          <hr />
        </div>

        <div>
          <p><b>Heb je nog vragen of opmerkingen?</b></p>
          <textarea rows="6" v-model="questions"></textarea>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>

import Toggle from '@vueform/toggle'
import Profile from '@/components/Profile.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'Program',
  components: {
    Card,
    Profile,
    Toggle
  },
  mounted() {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  },
  data() {
    return {
      dayGuest: window.location.hostname === 'robbertenmarjolein.nl',
      adultCount: 1,
      childCount: 0,
      adults: [{
        name: null
      }],
      children: [{
        name: null
      }],
      rsvp: {
        attends_day: false,
        attends_party: false,
        attends_breakfast: false,
        sleeping: 'no',
        has_allergies: false,
        allergy_description: ''
      },
      button: {
        title: 'Opsturen',
        page: '/thanks'
      },
      prevButton: {
        title: 'Locatie',
        page: '/location'
      },
      questions: null
    }
  },
  watch: {
    adultCount(val) {
      while (val < this.adults.length && val >= 1) {
        this.adults.pop()
      }
      while (val > this.adults.length) {
        this.adults.push({
          name: null
        })
      }
    },
    childCount(val) {
      while (val < this.children.length && val >= 0) {
        this.children.pop()
      }
      while (val > this.children.length) {
        this.children.push({
          name: null
        })
      }
    }
  }
}
</script>

<style src="@vueform/toggle/themes/default.css"></style>

<style scoped>
.rsvp {
  text-align: left;
  font-size: 18px;
}
@media screen and (min-width: 600px) {
  .question {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
@media screen and (max-width: 600px) {
  .question:first-of-type {
    margin-bottom: 25px;
  }
}
.toggle-container:focus {
  box-shadow: none;
}
.form-toggle {
  --toggle-bg-on: #41B883;
  --toggle-border-on: #41B883;
}
.toggle-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.toggle-group p {
  margin: 5px 0 5px 0;
}
.radio-button-group label {
  display: flex;
  align-items: center;
  margin: 5px 0 5px 0;
}
.radio-button-group label span {
  margin-left: 10px;
}
.radio-button-group {
  margin-bottom: 25px;
}
.warning {
  background-color: red;
  color: white;
  padding: 15px;
  border-radius: 10px;
}
input {
  height: 25px;
  padding: 5px;
}
input[type="radio"] {
  /* remove standard background appearance */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* create custom radiobutton appearance */
  display: inline-block;
  width: 15px;
  height: 15px;
  padding: 3px;
  /* background-color only for content */
  background-clip: content-box;
  border: 1px solid #BBBBBB;
  background-color: #E7E6E7;
  border-radius: 50%;
}
/* appearance for checked radiobutton */
input[type="radio"]:checked {
  background-color: #41B883;
  border: 1px solid #41B883;
}
hr {
  color: #BBBBBB;
}
textarea {
  width: 100%;
  font-size: 18px;
  text-align: left;
  padding: 10px;
}
</style>
