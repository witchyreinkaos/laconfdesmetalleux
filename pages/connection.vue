<template>
  <div>
    <!-- -----------------------------------------------
          Start Header
    ----------------------------------------------- -->

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
                href="http://localhost:3000/connection"
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
         
    };
    
  },
  methods: {
    toggleClass: function(event) {
      this.isActive = !this.isActive;
    }
  }
};
</script>