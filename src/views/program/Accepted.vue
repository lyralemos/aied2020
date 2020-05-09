<template>
    <div class="general call">
        <section class="title">
            <div class="container">
                <div class="col-12">
                    <h1 class="documentTitle">Accepted Full Papers</h1>
                </div>
            </div>
        </section>

        <section class="body">
            <div class="container">
                <div class="col-12">
                    <div id="accordion">
                        <div class="card" v-for="(paper, key) in full" :key="key">
                            <div class="card-header">
                                <h5>
                                    <a class="paper" href="#" data-toggle="collapse" :data-target="`#collapse${key}`">
                                        {{paper.title}}
                                    </a>
                                </h5>
                                <b>Authors:</b> {{paper.authors}} <br />
                            </div>
                            <div :id="`collapse${key}`" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                <div class="card-body">
                                    <b>Abstract:</b>
                                    {{paper.abstract}}
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
import full from '@/data/full'

export default {
    name: 'Accepted',
    data() {
        return {
            full: full,
        }
    }
}
</script>