<template>
  <div class="container">
    <Profile image="2" />
    <Card
      title="Programma"
      :button="button"
      :prevButton="prevButton"
    >
      <div class="program">
        <p><b>26 mei 2023</b></p>
        <div v-if="dayGuest">
          <div class="item-group" v-for="item of day" :key="item.time">
            <div class="item">
              <span class="time">{{item.time}}</span>
              <span class="text">{{item.text}}</span>
            </div>
            <div class="info" v-html="item.info"></div>
          </div>
        </div>
        <div v-else>
          <div class="item-group" v-for="item of evening" :key="item.time">
            <div class="item">
              <span class="time">{{item.time}}</span>
              <span class="text">{{item.text}}</span>
            </div>
            <div class="info" v-html="item.info"></div>
          </div>
        </div>
        <p class="label">27 mei 2023</p>
        <div class="item">
          <span class="time">09:30 - 11:00</span>
          <span class="text">Ontbijt met verse jus, veel koffie en hopelijk croissantjes</span>
        </div>
        <b>Contact?</b> 
        <p>We zijn onze eigen ceremoniemeesters en regelen zoveel mogelijk lekker zelf. + 
          Je kunt ons natuurlijk bellen, app'en of mailen <a href="mailto:robbert.en.marjolein@gmail.com">robbert.en.marjolein@gmail.com</a>.
        </p>
        <p>
          Mocht je iets geheimzinnigs of een verrassing voor ons willen organiseren, dan kun je daarvoor even contact opnemen met onze feestmeesters Marjoleine of Leanne.  
        </p>
        <p class="more-info">
          Dit zijn onze feestmeesters:
          <ul>
            <li>Marjoleine 't Hart:<br><a href="tel:0610921148">06 10 92 11 48</a><br><a href="mailto:marjoleinethart@gmail.com">marjoleinethart@gmail.com</a></li>
            <li>Leanne Janssen:<br><a href="tel:0620722699">06 20 72 26 99</a><br><a href="mailto:leannejanssen@hotmail.com">leannejanssen@hotmail.com</a></li>
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
      dayGuest: window.location.hostname === 'robbertenmarjolein.nl',
      day: [
        {
          time: '15:00',
          text: 'Ontvangst',
          info: 'Vanaf dit tijdstip ben je welkom op de trouwlocatie. Als je wilt ' +
                'blijven slapen is dit een goed moment om je tentje op te zetten of in te checken in je hotelkamer.'
        }, {
          time: '15:30 - 16:30',
          text: 'Ceremonie'
        }, {
          time: '16:30 - 18:30',
          text: 'Borrel'
        }, {
          time: '18:30 - 20:30',
          text: 'Diner'
        }, {
          time: '20:30 - 00:30',
          text: 'Feest',
          info: 'Superleuk als je een speech wilt geven, een verhaal wilt vertellen, ' +
                'of wat dan ook, het past vast ergens in het programma. Neem hierover ' +
                'even contact op met ons of onze feestmeesters!'
        }
      ],
      evening: [{
        time: '20:30 - 00:30',
        text: 'Feest',
        info: 'Superleuk als je een speech wilt geven, een verhaal wilt vertellen, ' +
              'of wat dan ook, het past vast ergens in het programma. Neem hierover ' +
              'even contact op met de ceremoniemeesters!'
      }],
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
