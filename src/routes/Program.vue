<template>
  <div class="container">
    <Profile image="2" />
    <Card
      title="Programma"
      :button="button"
      :prevButton="prevButton"
    >
      <div class="program">
        <p><b>3 september 2022</b></p>
        <div class="item-group" v-for="item of program" :key="item.time">
          <div class="item">
            <span class="time">{{item.time}}</span>
            <span class="text">{{item.text}}</span>
          </div>
          <div class="info" v-html="item.info"></div>

        </div>
        <p class="label">26 mei 2022</p>
        <div class="item">
          <span class="time">10:00 - 11:00</span>
          <span class="text">Ontbijt met verse jus, veel koffie en croissantjes</span>
        </div>
        <p class="more-info">
          Dit zijn onze ceremoniemeesters:
          <ul>
            <li>Jeroen van de Berge:<br><a href="tel:0683393621">06 83 39 36 21</a><br><a href="mailto:jcgvdb@gmail.com">jcgvdb@gmail.com</a></li>
            <li>Gabriëla Ververs:<br><a href="tel:0634259606">06 36 31 83 76</a><br><a href="mailto:gabrielaververs@gmail.com">gabrielaververs@gmail.com</a></li>
          </ul>
        </p>
      </div>
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
      program: [
        {
          time: '14:00',
          text: 'Ontvangst',
          info: 'Vanaf dit tijdstip ben je welkom op de trouwlocatie. Als je wilt ' +
                'blijven kamperen dan is dit een goed moment om je tentje op te zetten.'
        }, {
          time: '15:00 - 16:00',
          text: 'Ceremonie'
        }, {
          time: '16:00 - 18:00',
          text: 'Receptie'
        }, {
          time: '18:00 - 21:00',
          text: 'Diner'
        }, {
          time: '22:00 - 01:00',
          text: 'Feest',
          info: 'Superleuk als je een speech wilt geven, een verhaal wilt vertellen, ' +
                'of wat dan ook, het past vast ergens in het programma. Neem hierover ' +
                'even contact op met de ceremoniemeesters!'
        }
      ],
      button: {
        title: 'Bekijk de locatie',
        page: '/location'
      },
      prevButton: {
        title: 'Welkom',
        page: '/'
      }
    }
  }
}
</script>

<style scoped>
.program {
  display: flex;
  flex-direction: column;
  justify-content: left
}
.item {
  display: flex;
  text-align: left;
  margin-top: 5px;
}
.time {
  min-width: 130px;
}
.info {
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: left;
  font-style: italic;
}
.label {
  margin-top: 45px;
  font-weight: bold;
}
.more-info {
  text-align: left;
  margin-top: 45px;
}
.extra-info {
  margin-top: 10px;
}
ul {
  margin-left: -15px;
  text-align: left;
  list-style: disclosure-closed;
}
</style>
