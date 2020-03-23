<template>
  <div class="home">
    <div class="cta">
      <div class="overlay"></div>
      <div class="data">
        <!-- <h1 class="pb-3">AIED 2020</h1> -->
        <img src="../assets/aied2020-white.png" alt="AIED2020" title="" style="max-width:100%; margin-bottom:20px">
        <h2 class="pb-3">The 21th International Conference on Artificial Intelligence in Education</h2>
        <h2 class="pb-3">6th - 10th July 2020</h2>
        <h2 class="pb-3">Al Akhawayn University - Ifrane - Morocco</h2>

        <div class="actions">
          <router-link :to="{name:'program'}" class="btn btn-md btn-secondary">Conference Program</router-link>
          <router-link :to="{name:'general'}" class="btn btn-md btn-secondary">Call for Participation</router-link>
        </div>
      </div>
    </div>
    <div class="countdown">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="text-center">Augmented Intelligence to Empower Education</h1>
            <p>
              The AIED 2020 conference theme will be “Augmented Intelligence to Empower Education”. 
              As AI in Education systems get more mature and are implemented at scale in real-world 
              contexts, the value of using AI systems in the service of human decision making, rather 
              than automated personalisation, becomes more apparent than ever. While this paradigm 
              of augmented intelligence is not new to the field, solid theoretical and/or empirical 
              work in the area is limited. Further work is needed to understand the balance of human 
              and artificial aspects in intelligence systems that involve human and AI partnerships. 
              Developing and implementing AI-human hybrid systems requires new research and many 
              questions remain to be answered. In this conference, we invite the community to think 
              about intelligence augmentation opportunities that would empower key stakeholders of 
              education and provide innovative and creative solutions supported with empirical evidence.
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
    <div class="modal" id="modal-alert">
        <div class="modal-content">
            <div class="head">Attention!</div>

            <p>Considering the developing situation with regards to COVID-19, Coronavirus, we wanted to assure the AIED community that in some form, there will be a conference and proceedings for 2020. Here is what you need to know:</p>
            <ol>
              <li>
                Our first priority is to the health and safety of all in our community. 
                We are following the advice of the World Health Organisation and will 
                primarily make decisions based on this, rather than from individual 
                governments. 
                <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank">See Here</a>
              </li>
              <li>
                We will be delaying making registration “live” until the beginning of 
                April at the earliest, so that should we need to make an alternate plan, 
                no one has invested in full price registration
              </li>
              <li>
                We encourage you to not book flights to Fez until registration is live
              </li>
              <li>
                Should a physical conference be unsafe we will proceed with moving to an online model
              </li>
            </ol>
            <p>We have had 220 paper submissions this year from 260 abstract submissions. Thanks to everyone who submitted a paper.</p>

            <a href="#" class="btn btn-primary pull-right" @click="close()">Close</a>
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
      var countDownDate = new Date("Jul 7, 2020 00:00:00").getTime();

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
    },
    close() {
        let modal = document.getElementById("modal-alert")
        modal.style.display = "none"
        localStorage.setItem('closed', true)
    },
    lockPage() {
        const closed = localStorage.getItem('closed')
        if (!closed) {
            let modal = document.getElementById("modal-alert")
            modal.style.display = "block"
        }
    }
  },
  mounted() {
    this.startTimer()
    this.lockPage()
  },
  created() {
  }
}
</script>
