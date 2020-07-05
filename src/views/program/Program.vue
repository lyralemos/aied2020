<template>
    <div class="general call">
        <section class="title">
            <div class="container">
                <div class="col-12">
                    <h1 class="documentTitle">Main conference program</h1>
                </div>
            </div>
        </section>

        <section class="body">
            <div class="container">
                <div class="col-12">
                    <p>
                        <b>
                            Please note this programme is showing in BST (London, UK time) and is for reference only. 
                            The conference platform and app will show everything in your local time and you will not 
                            need to convert any timings. We are aiming to have the conference platform available for 
                            you by Friday 26th June.
                        </b>
                    </p>
                    <div>
                        <div title="Whova event and conference app" id="whova-agendawidget">
                            <p id="whova-loading">Loading...</p>
                        </div>
                        <div id="whova-wrap">	
                            Powered By <a class="brandlink" target="_blank" href="https://whova.com"><b>Whova</b></a>
                            <div id="whova-mgm">
                                <a href="https://whova.com/virtual-conference-platform/" id="whova-emslink" target="_blank"> Virtual conference platform </a>
                            </div>
                        </div>
                        <img style="display:none" src="https://whova.com/xems/apis/get_whova_tracking_image/?event_id=aied_202007&track_id=agenda_webpage_added" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

export default {
    name: 'Program',
    mounted() {
        let script = document.createElement('script')
        script.setAttribute('src', 'https://whova.com/static/frontend/agenda_webpage/js/embedagenda.js?eid=aied_202007&host=https://whova.com')
        // script.async = true
        document.head.appendChild(script)

    }
}
</script>