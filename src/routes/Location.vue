<template>
  <div class="container">
    <Profile image="3" />
    <Card
      title="Locatie"
      :button="button"
      :prevButton="prevButton"
    >
      <div>
        <p>
          We gaan trouwen in Vlaardingen bij De Vreemde Vogel.
        </p>
        <p><b>De Vreemde Vogel</b></p>
        <p>
          Het gehele programma inclusief de ceremonie vindt plaats bij De Vreemde Vogel!
        </p>
        <p>
          We zijn al jaren fan van de locatie. We hebben er geregeld gelunched en de kinderen kunnen er lekker spelen in de speeltuin en naar de boerderijbeesten kijken. 
        </p>
        <p>
          Er zijn ook wat slaapplaatsen/hotelkamers beschikbaar. En voor de avonturiers: 10 mensen mogen ook lekker kamperen in een tentje
        </p>
        
        <p>
          <img class="image" src="@/assets/VV4.jpg" alt="Vreemde Vogel"/>
        </p>

        <p><b>Bereikbaarbaarheid De Vreemde Vogel</b></p>
        <p>Het gehele programma inclusief de ceremoie vindt plaats bij De Vreemde Vogel!</p>
        
        
        <p>
          Kom je per auto, dan is dit het adres en kun je parkeren op het terrein:<br>
          <a href="https://goo.gl/maps/eTCoMwNnuz9fpZpH8" target="_blank">Van Baerlestraat 252, 3132 EK Vlaardingen<br>(Google Maps)</a><br>
        </p>
        <p>
          Kom je met het OV dan staat je enigszins een uitdaging te wachten. Er stopt een metro op loopafstand bij Vlaardingen-West. Treinstations zitten helaas niet in de buurt. Een OV-fiets vanaf Rotterdam Centraal is een prima aan te raden workout of vraag iemand of hij/zij je kan ophalen, vanaf hier:<br>
          <a href="https://goo.gl/maps/afSPWoYxyGSuRtxA6" target="_blank">Rotterdam Centraal<br>(Google Maps)</a>
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
