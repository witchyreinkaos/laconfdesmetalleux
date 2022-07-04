<template>
  <div>
    <!-- -----------------------------------------------
          Start Header
    ----------------------------------------------- -->
    <v-toolbar app height="80px"
    style="margin-top:85px;"
    >
  <v-row
    align="bottom"
    justify="space-around"
    
  >

    <v-btn >
      Femmes
    </v-btn>
    <v-btn>
      Hommes
    </v-btn>
    <v-btn>
      Accessoires
    </v-btn>
    <v-btn>
      Vinyls/CD
    </v-btn>
  </v-row>
    </v-toolbar>
    <v-app-bar app absolute class="app-header" flat elevate-on-scroll color="black" style="font-family : 'Cinzel Decorative'">
      La Confrerie des Metalleux
      <v-container class="py-0 fill-height">
        <!-- Logo -->
        <Logo />
        
        <v-spacer></v-spacer>
        <v-btn class="logo" text @click="toggleClass()">
        </v-btn>
        <!-- Desktop view Navigation -->
        <div
          class="navigation"
          v-bind:class="[isActive ? 'd-block' : '']"
          @click="isActive = !isActive"
        >
          <ul class="navbar-nav">
            <li class="nav-item" text>
              <n-link class="nav-link" nuxt to="/"> Service Client </n-link>
            </li>
            <li class="nav-item">
              <!-- login-regiter -->
              <v-btn
                color="white"
                nuxt
                target="_blank"
                href=""
                elevation="0"
              >
                Connection 
              </v-btn>
            </li>
          </ul>
        </div>
      </v-container>
    </v-app-bar>

    <!-- -----------------------------------------------
          End Header
    ----------------------------------------------- -->

  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>

</div>
</template>


<script>
export default {
  name: "Header",

  components: {
    Logo: () => import("@/layouts/sections/Logo")
  },
  data() {
    return {
      //isActive: false
          items: [
          {
            src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LZ01M8UP5wRNxF4Dx4ph3QHaHa%26pid%3DApi&f=1',
          },
          {
            src: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmetalmerchtshirts.com%2Fwp-content%2Fuploads%2F2018%2F07%2FDeath-Angel-T-Shirt-Death-Angel-The-Evil-Divide-Cover-Tee-Shirt-1.jpg&f=1&nofb=1',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      
    };
    
  },
  methods: {
    toggleClass: function(event) {
      this.isActive = !this.isActive;
    }
  }
};
</script>
