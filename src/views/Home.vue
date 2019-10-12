<template>
  <div class="home">
    <div class="cta">
      <div class="overlay"></div>
      <div class="data">
        <h1 class="pb-3">AIED 2020</h1>
        <h2 class="pb-3">The 20th International Conference on Artificial Intelligence in Education</h2>
        <h2 class="pb-3">July 7th - 10th 2020, Ifrane, Marocco</h2>

        <div class="actions">
          <a href="" class="btn btn-md btn-secondary">Conference Program</a>
          <a href="" class="btn btn-md btn-secondary">Call for Participation</a>
        </div>
      </div>
    </div>
    <div class="countdown">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="text-center">Education for All in the XXI Century</h1>
            <p>
              The AIED 2020 conference theme will be “Education for All in the XXI Century”. 
              Inequity within and between countries continues to grow in the industrial age. 
              Intelligent information technologies have been proposed to reduce this difference, 
              but may instead increase the digital divide if applied without reflection. 
              Education plays a central role in this problem, as it is one of the key approaches 
              that could help to reduce this difference. However, further work is needed to 
              understand how to provide equitable education for all, and many questions remain 
              to be answered. What are the main barriers to providing educational opportunities 
              to underserved teachers and learners? How can AI and advanced technologies help 
              overcome these difficulties? How can this work be done ethically? In this conference 
              we gather the collective intelligence of the community to think about this problem 
              and provide innovative and creative solutions.
            </p>
          </div>
        </div>
      </div>
      <div class="container countdown-cont">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-3">
            <span class="number-wrap">
              <span class="number display-2">{{days}}</span>
              <span mbr-text="" class="period display-7">Days</span>
              <span class="dot">:</span>
            </span>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-3">
            <span class="number-wrap">
              <span class="number display-2">{{hours}}</span>
              <span mbr-text="" class="period display-7">Hours</span>
              <span class="dot">:</span>
            </span>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-3">
            <span class="number-wrap">
              <span class="number display-2">{{minutes}}</span>
              <span mbr-text="" class="period display-7">Minutes</span>
              <span class="dot">:</span>
            </span>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-3">
            <span class="number-wrap">
              <span class="number display-2">{{seconds}}</span>
              <span mbr-text="" class="period display-7">Seconds</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data: function() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  methods: {
    startTimer() {
      var self = this
      var countDownDate = new Date("Jan 7, 2020 00:00:00").getTime();

      var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        self.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        self.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        self.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        self.seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
        }
      }, 1000);
    }
  },
  mounted() {
    this.startTimer()
  }
}
</script>
