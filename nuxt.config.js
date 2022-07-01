export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s ",
    title: "La Confrerie des Metalleux",
    htmlAttrs: {
      lang: "fr-FR"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "https://media.discordapp.net/attachments/743788851574734969/991784816871755877/unknown1.png" },
    {        rel: "stylesheet",        
    href: "https://fonts.googleapis.com/css2?family=Cinzel+Decorative&display=swap",
  },
  {  
  href: "https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&display=swap"
  },      
],
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/style.scss"],

  // Customize the progress-bar color
  loading: {
    color: "DodgerBlue",
    height: "5px",
    continuous: true,
    duration: 3000
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
 
 
    buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
    ],
    
  
  

  // Modules: https://go.nuxtjs.dev/config-modules
  
  modules: [
    ['@nuxtjs/firebase',
    {
        config: {
            apiKey: "AIzaSyCygGYTblI8RRjPWNkT8e6FDjqsfv_Gb18",

            authDomain: "laconf-4b4d3.firebaseapp.com",

            projectId: "laconf-4b4d3",

            storageBucket: "laconf-4b4d3.appspot.com",

            messagingSenderId: "7382443186",

            appId: "1:7382443186:web:098429d2468396314c55ab"
            


        },
        services: {
            auth: true, // Just as example. Can be any other service.
            firestore: true,
            //functions: true,
            storage: true
                /* database: true,
                messaging: true,
                performance: true,
                analytics: true,
                remoteConfig: true */
        }
    }
]
  ],


  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/scss/variables.scss"],
    optionsPath: "./vuetify.options.js",
    treeShake: true,
    options: {
      customProperties: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}

};
