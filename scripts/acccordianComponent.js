// Vue component definition
Vue.component('Accordion', {
    template: `
      <div class="accordion">
        <div v-for="item in items" :key="item.name" class="accordion-item">
          <div @click="toggleAccordion(item)" class="accordion-header">
            {{ item.title }}
            <div v-show="item.expanded">&#65088;</div>
          </div>
          <div v-show="item.expanded" class="accordion-content">
            <slot :name="item.name" :expanded="item.expanded"></slot>
          </div>
        </div>
      </div>
    `,
    props: ['items'],
    methods: {
      toggleAccordion(item) {
        item.expanded = !item.expanded;
      }
    }
  });
  
  new Vue({
    el: '#app',
    data: {
      accordionItems: [
        { name: 'name1', title: '1st section' },
        { name: 'name2', title: '2nd section', expanded: true },
        { name: 'name3', title: '3rd section' },
        { name: 'name4', title: '4th section', expanded: true },
        { name: 'name5', title: '5th section', expanded: true },
        { name: 'name6', title: '6th section' },
        { name: 'name7', title: '7th section' },
        { name: 'name8', title: '8th section' },
        { name: 'name9', title: '9th section', expanded: true }
      ]
    }
  });
  