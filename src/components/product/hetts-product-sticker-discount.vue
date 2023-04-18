<template>
    <div class="product-item__badge">- {{ discount }}%</div>
</template>

<script>
    export default {
        props: [
            'price',
            'compare_at_price'
        ],

        data() {
            return {
                discount: 0
            }
        },

        mounted() {
            if (this.compare_at_price > this.price) {
                this.discount = parseInt(100 - ((this.price/this.compare_at_price) * 100))
            }
        }
    }
</script>
