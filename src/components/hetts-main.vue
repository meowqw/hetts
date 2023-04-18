<template>
    <hettsHomeHeader />
    <router-view> </router-view>
    <hettsHomeFooter />
    
  </template>
  
  <script>
  import hettsHomeHeader from "@/components/home/hetts-home-header.vue";
  import hettsHomeFooter from "@/components/home/hetts-home-footer.vue";

  export default {
    name: "hetts-main",
    data() {
      return {
        pageTitle: "",
        tokenStatus: false,
      };
    },
    components: {
    hettsHomeHeader,
    hettsHomeFooter,
    },
  };
  </script>