<template>
    <div class="dates">
        <section class="title">
            <div class="container">
                <div class="col-12">
                    <h1 class="documentTitle">Speakers</h1>
                </div>
            </div>
        </section>

        <section class="body">
            <div class="container">
                <div class="col-12">
                    <div class="text-center">
                        
                        <div>
                            <div title="Whova event and conference app" id="whova-speakerwidget">
                                <p id="whova-loading">Loading...</p>
                            </div>
                            <div id="whova-wrap">Powered By <a class="brandlink" target="_blank" href="https://www.whova.com"><b>Whova</b></a>
                                <div id="whova-mgm">
                                    <a href="https://whova.com/virtual-conference-platform/" id="whova-emslink" target="_blank">Virtual event</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    </div>
</template>

<script>

export default {
    name: 'Speakers',
    mounted() {
        let script = document.createElement('script')
        script.setAttribute('src', 'https://whova.com/static/frontend/xems/js/whova-speaker-widget.js?eid=aied_202007&host=https://whova.com')
        document.head.appendChild(script)
    },
}
</script>