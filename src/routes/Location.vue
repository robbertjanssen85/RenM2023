<template>
  <div class="container">
    <Profile image="3" />
    <Card
      title="Locatie"
      :button="button"
      :prevButton="prevButton"
    >
      <div>
        
        
        <p><b>De Vreemde Vogel</b></p>
        <p>
          Het gehele programma inclusief de ceremonie vindt plaats bij de Vreemde Vogel in Vlaardingen.
        </p>
        <p>
          Bij mooi weer is een groot deel van het programma lekker buiten. De kinderen kunnen er fijn spelen in de speeltuin en naar de boerderijbeesten kijken. 
        </p>
        <p>
          <img class="image" src="@/assets/VV4.jpg" alt="Vreemde Vogel"/>
        </p>
        
        <p><b>Dresscode: Festivalfrivool</b></p>
        <p>
          Festivalfrivool oftewel: iets waarin je je vrolijk, feestelijk en op je gemak voelt. Een fleurig jurkje of een korte broek - alles beter dan een krijtstreeppak. Houd een beetje rekening met de weersvoorspellingen en dat het gras drassig kan zijn.  
        </p>                 
        
        <p><b>Bereikbaarbaarheid De Vreemde Vogel</b></p>
                      
        <p>
          Kom je per auto, dan is dit het adres en kun je parkeren op het terrein:<br>
          <a href="https://goo.gl/maps/eTCoMwNnuz9fpZpH8" target="_blank">Van Baerlestraat 252, 3132 EK Vlaardingen<br>(Google Maps)</a><br>
        </p>
        <p>
          Kom je met het OV, dan kun je met de metro reizen naar station Vlaardingen-West op 10 minuten lopen van de Vreemde Vogel. De metro rijdt tot ruim na middernacht terug naar Rotterdam Centraal. 
          <a href="https://goo.gl/maps/ga7MTwJG2oKEPAv88" target="_blank">Metrostration Vlaardingen-West<br>(Google Maps)</a><br>
          <p>
          Treinstations zitten niet echt in de buurt. Een OV-fiets vanaf Rotterdam Centraal of Schiedam Centrum is een prima workout of vraag iemand om je op te halen.          
          </p>
        </p>
        
        <p><b>Overnachten</b></p>
        <p>
          
        </p>
        <p>
          De feestfactor wordt nog een stuk hoger als je gezellig blijft overnachten! En dan zorgen wij voor een lekker ontbijtje de volgende ochtend. 
        </p>
          <p>De Vreemde Vogel is een <a href="https://www.devreemdevogel.nl/buitenhotel/" target="_blank">buitenhotel</a> met 10 bijzondere kamers zoals vogelhuisjes, pipowagens, een raket en struisvogels. 
          <br>En voor de avonturiers is er ook ruimte om een tentje op te zetten op het gras: pure festival vibes!
        </p>
        <p>
          Tijdens de registratie kun je aangeven of je interesse hebt in een overnachting. Wij verzamelen dat en laten je weten wat er mogelijk is in het buitenhotel van de Vreemde Vogel en het nabije <a href="https://all.accor.com/hotel/1195/index.nl.shtml" target="_blank">Ibis Rotterdam-Vlaardingen</a>.
        </p>

        <p>
        <img class="image" src="@/assets/VV5.jpg" alt="Vreemde Vogel Buitenhotel"/>
        </p>

      </div>
    </Card>
  </div>
</template>

<script>
import Profile from '@/components/Profile.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'Location',
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
      button: {
        title: 'Ben je erbij?',
        page: '/rsvp'
      },
      prevButton: {
        title: 'Programma',
        page: '/program'
      }
    }
  }
}
</script>

<style scoped>
.image {
  max-width: 100%;
  border-radius: 10px;
}
</style>
