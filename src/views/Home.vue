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
    <div class="shadow hide"></div>
    <div class="popup hide">
        <div class="head">Attention!</div>

        <p>Following the recent travel restrictions imposed by some governments due to the Covid-19 Coronavirus, the AIED organising committee have taken the unprecedented step of allowing papers submitted from affected areas to present remotely, should their paper be accepted. Accepted papers will be included in the proceedings.</p>
        <p><b>Please note, the AIED community thrives on our annual coming together to share ideas and learn from one another. This idea of remote presentation does not substitute from the substantial benefit of attending the conference in person - and does not set a precedent for the future. We urge those able to travel to still do so.</b></p>
        <p>If you are living in an area affected by a travel ban and intend to submit a paper, please email <a href="events@suklaa.org">events@suklaa.org</a> with names and places of residence of all authors included on your paper.</p>
        <p>There will be a lesser registration fee for remote presentation and inclusion in conference proceedings. Please check with your university that they will support the cost of your remote participation due to these extenuating circumstances.</p>
        <p><b>This will only apply if travel bans are still in place by April 22nd 2020.</b></p>

        <a href="#" class="btn btn-primary pull-right" @click="close()">Close</a>
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
        const hide = document.querySelectorAll(".popup, .shadow")
        hide.forEach(function (h) {
            h.classList.add('hide')
        })
        const body = document.getElementsByTagName('body')[0]
        body.style.overflow = ''
        localStorage.setItem('closed', true)
    },
    lockPage() {
        const closed = localStorage.getItem('closed')
        if (!closed) {
            const hide = document.querySelectorAll(".popup, .shadow")
            hide.forEach(function (h) {
                h.classList.remove('hide')
            })
            const body = document.getElementsByTagName('body')[0]
            body.style.overflow = 'hidden'
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

<style scoped>
.shadow{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000;
    top:0;
    z-index: 1899;
    opacity: .5;
}

.hide{display: none}

.popup{
    position: absolute;
    top:50%;
    left: 50%;
    background-color: #fff;
    padding: 15px;
    z-index: 1900;
    transform: translate(-50%, -50%);
}

.popup .head{
    background-color: #c1272d !important;
    color: #fff;
    padding: 10px;
    text-align: center;
    font-size: 20px;
    margin-bottom: 15px;
}
</style>
