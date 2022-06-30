<template>
  <div>
    <!-- -----------------------------------------------
          Start Header
    ----------------------------------------------- -->
    <v-toolbar app height="150"
    >
  <v-row
    align="bottom"
    justify="space-around"
    
  >
    <v-btn>Normal</v-btn>
    <v-btn color="primary">
      Primary
    </v-btn>
    <v-btn color="error">
      Error
    </v-btn>
    <v-btn disabled>
      Disabled
    </v-btn>
  </v-row>
    </v-toolbar>
    <v-app-bar app absolute class="app-header" flat elevate-on-scroll color="black">
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
    <v-carousel v-model="model">
    <v-carousel-item
      v-for="(color, i) in colors"
      :key="color"
    >
      <v-sheet
        :color="color"
        height="100%"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2">
            Slide {{ i + 1 }}
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
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
      isActive: false
    };
  },
  methods: {
    toggleClass: function(event) {
      this.isActive = !this.isActive;
    }
  }
};
</script>
