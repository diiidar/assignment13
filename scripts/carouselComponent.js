// Vue component definition
Vue.component('Carousel', {
    template: `
      <div class="carousel">
        <div class="carousel-images">
          <img :src="currentItem.src" :alt="currentItem.alt" class="carousel-slide">
          <div v-if="currentItem.caption" class="caption">{{ currentItem.caption }}</div>
        </div>
        <div class="controls">
          <button @click="prevItem" class="prev">&#10094;</button>
          <button @click="nextItem" class="next">&#10095;</button>
        </div>
      </div>
    `,
    props: ['items'],
    data() {
      return {
        currentIndex: 0,
      };
    },
    computed: {
      currentItem() {
        return this.items[this.currentIndex];
      },
    },
    methods: {
      nextItem() {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
      },
      prevItem() {
        this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
      },
    },
  });
  
  new Vue({
    el: '#app',
    data: {
      carouselItems: [
        { src: 'https://cardotaku.com/cdn/shop/products/ST01-012_p1.png?v=1676106580&width=2048', alt: 'Image 1', caption: 'Monkey D. Luffy' },
        { src: 'https://en.onepiece-cardgame.com/images/cardlist/card/OP05-006.png?231031', alt: 'Image 2', caption: 'Koala' },
        { src: 'https://cardotaku.com/cdn/shop/products/OP01-025.png?v=1658122920&width=2048', alt: 'Image 3', caption: 'Roronoa Zoro' },
        { src: 'https://i.imgur.com/TQ1zlja.png', alt: 'Image 4', caption: 'Red Haired Shanks' },
        { src: 'https://i.imgur.com/TGpF8Ip.png', alt: 'Image 5', caption: 'KAIDO' },
        { src: 'https://en.onepiece-cardgame.com/images/cardlist/card/OP05-061.png?231031', alt: 'Image 6', caption: 'Uso-Hachi' },
      ],
    },
  });
  