new Vue({
  el: "#app",
  data: {
    title: "Becoming a Vue ninja",
    name: "Charles",
    url: "http://www.youtube.com"
  },
  methods: {
    greet(time) {
      return `Hello there and good ${time}, ${this.name}`;
    }
  }
});
