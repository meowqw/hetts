<script setup>
import ProductStickerDiscount from './hetts-product-sticker-discount.vue';
</script>
<template>
    <div class="product-item">
        <div class="product-item__image">
          <ProductStickerDiscount :price="100" :compare_at_price="200" />
          <img src="@/assets/images/product-full-image.jpg" />
        </div>
        <div class="product-item__price">
            <span>200 руб</span>
            100 руб

            <div class="like">
                <img src="@/assets/images/heart-icon.svg" />
            </div>
        </div>
        <div class="product-item__title">
            <a href="/">
                Свитер 001
            </a>
        </div>

        <div class="product-item__actions">
            <div class="product-item__actions__btn">
                <a href="/" class="button">Купить</a>
            </div>
        </div>
    </div>
</template>
