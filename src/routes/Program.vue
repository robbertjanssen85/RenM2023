<template>
  <div class="container">
    <Profile image="7" />
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
          <span class="time">09:00 - 10:00</span>
          <span class="text">Ontbijt met verse jus, veel koffie en hopelijk croissantjes</span>
        </div>
        <br>
             
        <p class="more-info">
          
          <b>Ceremoniemeesters</b> 
        <p>We zijn onze eigen ceremoniemeesters en regelen zoveel mogelijk zelf.  
          Je kunt ons natuurlijk altijd bellen, een berichtje sturen of mailen.
        </p>
       <p>
        <ul>
            <li>Marjolein<br><a href="tel:0620556147">06 20 55 61 47</a><br><a href="mailto:robbert.en.marjolein@gmail.com">robbert.en.marjolein@gmail.com</a></li>
            <li>Robbert<br><a href="tel:0620275272">06 20 27 52 72</a><br><a href="mailto:robbert.en.marjolein@gmail.com">robbert.en.marjolein@gmail.com</a></li>
          </ul>
       </p>
        <p>
          Mocht je iets geheimzinnigs of een verrassing voor ons willen organiseren, dan kun je daarvoor even contact opnemen met Marjoleine:  
        </p>
        <ul>
            <li>Marjoleine 't Hart:<br><a href="tel:0610921148">06 10 92 11 48</a><br><a href="mailto:marjoleinethart@gmail.com">marjoleinethart@gmail.com</a></li>
          </ul>
        
        <br>
        <p><b>Dresscode: Festivalfrivool</b></p>
        <p>
          Festivalfrivool oftewel: iets waarin je je vrolijk, feestelijk en op je gemak voelt. Een fleurig jurkje of een korte broek: allemaal prima en alles beter dan een krijtstreeppak. Houd een beetje rekening met de weersvoorspellingen en dat het gras drassig kan zijn.  
        </p>  
        
        <p><b>Cadeauwensen</b></p>
        <p>
          We willen vooral graag een feestje met jullie vieren - dus jullie aanwezigheid is het belangrijkste. En verder hebben we genoeg vinkjes en geluk gehad in het leven om geen verdere wensen meer te hebben.
          Mocht je graag wat willen geven, dan zullen we zorgen dat er een paar dozen klaarstaan met verschillende bestemmingen om een bijdrage in te doen. 
        </p>              
               
        <p>
        <img class="image" src="@/assets/VV3.jpg" alt="Vreemde Vogel"/>
        </p>
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
      dayGuest: window.location.hostname === 'marjoleinenrobbert.nl',
      day: [
        {
          time: '15:00',
          text: 'Ontvangst',
          info: 'Vanaf dit tijdstip ben je welkom op de trouwlocatie. Als je wil overnachten kun je uiteraard eerder komen om in te checken in het hotel of je tentje op te zetten.'
           
        }, {
          time: '15:30 - 16:30',
          text: 'Ceremonie',
          info: 'Zou er nog iemand bezwaar maken? Met een beetje mazzel wordt er "Ja" gezegd!'  
        }, {
          time: '16:30 - 18:30',
          text: 'Borrel',
          info: 'Proost met ons, geniet van een hapje en een drankje en terg jezelf vooral niet door in een rij te gaan staan. Wij lopen een rondje om jullie allemaal te begroeten. De kinderen kunnen fikkie stoken en voor de grote mensen zijn er spelletjes en muziek van akoestisch duo Ori.'  
        }, {
          time: '18:30 - 20:30',
          text: 'Diner',
          info: 'Het diner is in festivalstijl. Woke en hipster-proof zonder dode dieren en met een taartje toe!' 
        }, {
          time: '20:30 - 00:30',
          text: 'Feest',
          info: 'Een dansje en een drankje! Feest lekker met ons mee. Met een optreden van de leukste feestband uit Rotterdam en omstreken: Rotterdam Centraal.'  
         }
      ],
      evening: [{
        time: '20:30 - 00:30',
        text: 'Feest',
        info: 'Een dansje en een drankje! Feest lekker met ons mee. Met een optreden van de leukste feestband uit Rotterdam en omstreken: Rotterdam Centraal.'  
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
.image {
  max-width: 100%;
  border-radius: 10px;
}
</style>
