const eventsData = [
    {
      title: 'The Execution of Gol D. Roger',
      date: '1751-01-15',
      description: 'Gol D. Roger, the Pirate King, is executed. His last words before execution inspire the Great Pirate Era, initiating a massive search for his treasure, the One Piece.'
    },
    {
      title: 'Monkey D. Luffy\'s Encounter with Shanks',
      date: '1768-03-20',
      description: 'A young Monkey D. Luffy, inspired by Shanks and his crew, receives the Straw Hat and sets out to become a pirate, vowing to surpass Shanks as a great pirate.'
    },
    {
      title: 'Luffy Eating the Devil Fruit',
      date: '1768-03-21',
      description: 'Luffy accidentally consumes the Gomu Gomu no Mi (Gum-Gum Fruit), a Devil Fruit that grants him the ability to stretch his body like rubber but renders him unable to swim.'
    },
    {
      title: 'Formation of the Straw Hat Pirates',
      date: '1774-09-02 ',
      description: ' Luffy begins assembling his crew, starting with Zoro, a skilled swordsman, forming the initial core of the Straw Hat Pirates.'
    },
  ];
  
  Vue.component('Timeline', {
    template: `
      <div class="timeline">
        <div v-for="event in sortedEvents" :key="event.title" class="timeline-event">
          <div class="event-details">
              <h3>{{ event.title }}</h3>

              <p>{{ event.date }}</p>

              <p>{{ event.description }}</p>
          </div>
        </div>
      </div>
    `,
    props: ['events'],
    data() {
      return {
        sortedEvents: this.events.slice(),
      };
    }
  });
  
  new Vue({
    el: '#app',
    data: {
      events: eventsData
    }
  });
  