<template>
  <div class="home">
    <div class="call-to-action">
      <div class="bg-image"></div>
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <img src="../assets/new-logo-large.png" alt="AIED2020" title="" style="max-width:100%; margin-bottom:20px">
            <div class="data">
              <h2 class="pb-3">6th - 10th July 2020</h2>
              <h2 class="pb-3">Cyberspace</h2>

              <!-- <div class="actions">
                <router-link :to="{name:'program'}" class="btn btn-md btn-secondary">Conference Program</router-link>
                <router-link :to="{name:'general'}" class="btn btn-md btn-secondary">Call for Participation</router-link>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="cta">
      <div class="bg-image"></div>
      <div class="overlay"></div>
      <div class="data">
        <h1 class="pb-3">AIED 2020</h1>
        <img src="../assets/new-logo-large.png" alt="AIED2020" title="" style="max-width:100%; margin-bottom:20px">
        <h2 class="pb-3">The 21th International Conference on Artificial Intelligence in Education</h2>
        <h2 class="pb-3">6th - 10th July 2020</h2>
        <h2 class="pb-3"><del>Al Akhawayn University - Ifrane - Morocco</del></h2>
        <h2 class="pb-3">Cyberspace</h2>

        <div class="actions">
          <router-link :to="{name:'program'}" class="btn btn-md btn-secondary">Conference Program</router-link>
          <router-link :to="{name:'general'}" class="btn btn-md btn-secondary">Call for Participation</router-link>
        </div>
      </div>
    </div> -->
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
            <div class="head">Welcome to AIED 2020!</div>

            <p>Here is some essential information you need to know in order to make the most out of the conference.</p>

            <ol>
              <li>
                Our conference platform Whova is available as <b>both a mobile app and a web page</b>. We advise that you use your desktop to watch the conference content and your mobile app to engage with the community, ask questions and send messages.
                <ul>
                  <li>To access the web page, click <a href="https://whova.com/portal/webapp/aied_202007/" target="_blank">here</a></li>
                  <li>To download the mobile app, click <a href="https://whova.com/portal/aied_202007/?source=download_page">here</a></li>
                </ul>
                
                

              </li>
              <li>The web app is sensitive to which browser you use and <b>Whova strongly suggests you use Chrome</b>. We have trialled with both Safari and Firefox and live video streaming is glitchy. If you have the option to download Chrome, then it will greatly enhance your conference experience.</li>
              <li><b>If you need to get in touch with the organizers, please use the 'Ask Organizers Anything' channel on the app</b>. We will get back to you as soon as possible. Alternatively, please email us at <a href="mailto:maddi.goldin@gmail.com">maddi.goldin@gmail.com</a> and <a href="mailto:claudia@suklaa.org">claudia@suklaa.org</a>. </li>
              <li>The conference relies on two key functionalities, Zoom and Whova. We will be using Zoom for all live streaming content. Whova is where you will find all conference programme detail, ask questions and engage with the community. </li>
              <li><b>If you are participating in a session you need to be in Zoom and will have been sent an invitation. If you are watching a session you need to be in Whova. Essentially, Zoom is the stage and Whova is the audience</b>.</li>
              <li>Please do upload a picture and information to your profile - it will make the conference more human</li>
              <li>Paper and poster presenters, if you do not have all the information you need - please contact us immediately at <a href="mailto:Maddi.goldin@gmail.com">Maddi.goldin@gmail.com</a>. Please do check your junk folder to see if you have received an email from us.</li>
            </ol>

            <p>We wish you a terrific conference. Please do communicate with us and fellow attendees through the app. Any problems please get in touch: <a href="mailto:claudia@suklaa.org">claudia@suklaa.org</a>.</p>

            <p>With thanks</p>

            <p>
              AIED 2020<br />
              Organizer,<br />
              AIED 2020
            </p>
            
            

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
    // this.startTimer()
    // this.lockPage()
  },
  created() {
  }
}
</script>
