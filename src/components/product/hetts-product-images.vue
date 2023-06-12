<template>
  <div class="row">
    <div class="col-2">
      <div>
        <img class=img-thumbnail :src="img" alt=""/>
      </div>
    </div>
    <div class="col-9">
        <img class="img-fluid" :src="img" alt=""/>
    </div>
  </div>
</template>

<script>
// import ProductZoomer from "vue-product-zoomer";

export default {
  name: "hetts-product-images",
  props: {
    img: {
      type: String
    }
  },

  components: {
    // ProductZoomer
  },

  data() {
    return {
      pictures: [
        {'pk': 1, picture: 'img/product-full-image.jpg'}
      ],

      loading: true,

      images: {
        'thumbs': [
          {'id': '1', 'url': 'https://res.cloudinary.com/olanetsoft/image/upload/v1647644758/h4-r2.jpg'},
          {'id': '2', 'url': 'https://res.cloudinary.com/olanetsoft/image/upload/v1647644758/h4-r2.jpg'},
        ],
        'normal_size': [
          {'id': '1', 'url': 'https://res.cloudinary.com/olanetsoft/image/upload/v1647644758/h4-r2.jpg'},
          {'id': '2', 'url': 'https://res.cloudinary.com/olanetsoft/image/upload/v1647644758/h4-r2.jpg'},
        ],
        'large_size': [
          {'id': '1', 'url': 'https://res.cloudinary.com/olanetsoft/image/upload/v1647644758/h4-r2.jpg'},
          {'id': '2', 'url': 'https://res.cloudinary.com/olanetsoft/image/upload/v1647644758/h4-r2.jpg'},
        ],
      },
      picToShow: 1,


      zoomerOptions: {
        zoomFactor: 3,
        pane: "pane",
        hoverDelay: 300,
        namespace: "zoomer-left",
        move_by_click: true,
        scroll_items: 4,
        choosed_thumb_border_color: "#dd2c00",
        scroller_position: "left",
        zoomer_pane_position: "right"
      }
    };
  },
};
</script>
