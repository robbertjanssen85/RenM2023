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
          We gaan trouwen in de achtertuin van de oude sluiswachterswoning
          op het eiland Beneden Sas, gelegen aan de benedenloop van de Steenbergschse Vliet.
        </p>
        <p><b>Beneden Sas</b></p>
        <p>
          Het gehele programma, behalve het feest, vindt plaats op Beneden Sas!
        </p>
        <p>
          Kom je per auto, dan is dit het adres en kun je hier parkeren:<br>
          <a href="https://goo.gl/maps/6uwoKtdhzBvzz6Mo9" target="_blank">Benedensasweg 2-4, 4655 ST De Heen<br>(Google Maps)</a><br>
        </p>
        <p>
          Kom je per boot, dan kun je hier aanmeren en overnachten:<br>
          <a href="https://webapp.navionics.com/#boating@13&key=shbzHag~X" target="_blank">WSV Volkerak<br>(Navionics)</a>
        </p>
        <p>
          Kom je met het OV dan staat je enigszins een uitdaging te wachten. Vraag of iemand
          je kan ophalen, bijvoorbeeld hier:<br>
          <a href="https://goo.gl/maps/ECB55QNWhxTH8SZJ7" target="_blank">Bushalte Provincialeweg, De Heen<br>(Google Maps)</a>
        </p>
        <p><b>Akkermans</b></p>
        <p>
          Voor het feest stappen we 5 minuten op de fiets naar Akkermans (Leisure &amp; Golf), waar we herrie
          mogen maken ;).
        </p>
        <p>
          Aan het eind van het feest fietsen we terug en overnachten we bij
          Beneden Sas.
        </p>
        <p>
          Het adres van Akkermans is:<br>
          <a href="https://goo.gl/maps/GH3wqdp5v1S4SuXv8" target="_blank">Heense Molenweg 23, 4655 TB De Heen<br>(Google Maps)</a>
        </p>
        <p><b>
          Let op: Beneden Sas ligt in een natuurgebied en is daarom een stiltegebied.
          Alleen tijdens de ceremonie mogen we - bij uitzondering - versterkt geluid gebruiken!
        </b></p>
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

</style>
