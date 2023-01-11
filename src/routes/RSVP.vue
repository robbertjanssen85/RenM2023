<template>
  <div class="container">
    <Profile image="4" />
    <Card
      title="RSVP"
      :button="button"
      :prevButton="prevButton"
      :people="people"
      :questions="questions"
    >
      <div class="rsvp">
        <div class="question">
          <p class="label">Met hoeveel mensen kom je?</p>
          <input type="number" v-model="headcount" />
        </div>
        <hr />
        <div v-for="(person, index) in people" :key="index">
          <div class="question">
            <p class="label"><b>Naam persoon #{{index + 1}}?</b></p>
            <input v-model="person.name" />
          </div>
          <div class="question">
            <p class="label"><b>Waar ben je bij?</b></p>
          </div>
          <div>
            <div class="toggle-group">
              <p>14:00 - 18:00&nbsp;&nbsp;&nbsp;Ceremonie + receptie</p>
              <Toggle class="form-toggle" v-model="person.attendsCeremony" />
            </div>
            <div class="toggle-group">
              <p>18:00 - 21:00&nbsp;&nbsp;&nbsp;Diner</p>
              <Toggle class="form-toggle" v-model="person.attendsDiner" />
            </div>
            <div class="toggle-group">
              <p>22:00 - 01:00&nbsp;&nbsp;&nbsp;Feest</p>
              <Toggle class="form-toggle" v-model="person.attendsParty" />
            </div>
            <div class="toggle-group">
              <p>10:00 - 11:00&nbsp;&nbsp;&nbsp;Ontbijt</p>
              <Toggle class="form-toggle" v-model="person.attendsBreakfast" />
            </div>
          </div>
          <div v-if="person.attendsDiner" style="display:flex;align-items:center;">
            <p style="max-width: 90%">Het diner is vegetarisch. Heb je allergiēn of dieetwensen waar we rekening mee moeten houden?</p>
            <Toggle class="form-toggle" v-model="person.hasAllergies" />
          </div>
          <div v-if="person.hasAllergies">
            <textarea rows="2" v-model="person.allergyDescription"></textarea>
          </div>
          <div>
            <p><b>Heb je een fiets nodig om bij het feest te komen?</b></p>
            <div class="radio-button-group">
              <label>
                <input type="radio" :name="`bike-${index}`" :value="false" v-model="person.needsBike">
                <span>Nee, ik neem zelf een fiets mee of ga met eigen vervoer</span>
              </label>
              <label>
                <input type="radio" :name="`bike-${index}`" :value="true" v-model="person.needsBike">
                <span>Ja (dan huren we er 1 voor je)</span>
              </label>
            </div>
          </div>
          <div>
            <p><b>Blijf je overnachten?</b></p>
            <div class="radio-button-group">
              <label>
                <input type="radio" :name="`sleeping-${index}`" value="camping" v-model="person.sleepsOver">
                <span>Ja, ik neem een tent mee en blijf kamperen</span>
              </label>
              <label>
                <input type="radio" :name="`sleeping-${index}`" value="hotel" v-model="person.sleepsOver">
                <span>Ja, maar ik regel zelf een andere slaapplek</span>
              </label>
              <label>
                <input type="radio" :name="`sleeping-${index}`" value="no" v-model="person.sleepsOver">
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
      headcount: 1,
      people: [{
        name: null,
        attendsCeremony: false,
        attendsDiner: false,
        attendsParty: false,
        attendsBreakfast: false,
        hasAllergies: false,
        allergyDescription: '',
        needsBike: false,
        sleepsOver: 'camping'
      }],
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
    headcount(val) {
      while (val < this.people.length && val >= 1) {
        this.people.pop()
      }
      while (val > this.people.length) {
        this.people.push({
          name: null,
          attendsCeremony: false,
          attendsDiner: false,
          attendsParty: false,
          attendsBreakfast: false,
          hasAllergies: false,
          allergyDescription: '',
          needsBike: false,
          sleepsOver: 'camping'
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
