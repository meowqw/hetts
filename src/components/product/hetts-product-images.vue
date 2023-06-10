<template>
    <div class="row">
      <!-- Список фото -->
      <div class="col-md-6" style="width: 100px; height: 100px; margin-right: 0">
        <div id="grid">
          <div v-for="(picture, index) in pictures" :key="picture.pk" class="mb-3">
            <div @click="picToShow = index">
              <img class="img-thumbnail img-responsive" src="@/assets/images/product-full-image.jpg" alt="">
            </div>
          </div>
        </div>
      </div>

      <!-- Фото -->
      <div class="col" style="margin-left: 0">
        <div v-if="picToShow !== null" class="text-center">
          <img src="@/assets/images/product-full-image.jpg" alt=""/>
        </div>
      </div>
    </div>
</template>

<script>
// import ProductZoomer from "vue-product-zoomer";

export default {
  name: "hetts-product-images",
  props: [],

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
