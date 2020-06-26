<template>
    <div class="general call">
        <section class="title">
            <div class="container">
                <div class="col-12">
                    <h1 class="documentTitle">Best Paper Nominations</h1>
                </div>
            </div>
        </section>

        <section class="body">
            <div class="container">
                <div class="col-12">
                    <div id="accordion">
                        <div class="card" v-for="(paper, key) in best" :key="key">
                            <div class="card-header">
                                <h5>
                                    {{paper.title}}
                                </h5>
                                <b>Authors:</b> {{paper.authors}} <br />
                            </div>
                        </div>
                    </div>

                    <h3>Committee</h3>
                    <ul>
                        <li>Gordon McCalla (University of Saskatchewan, Canada)</li>
                        <li>Vania Dimitrova (University of Leeds, UK)</li>
                        <li>Didith Rodrigo (Manila University, Philippines)</li>
                        <li>Didith Rodrigo (Manila University, Philippines)</li>
                        <li>Riichiro Mizoguchi (Japan Advanced Institute of Science and Technology, Japan)</li>
                        <li>Olga Santos (Universidad Nacional de Educación a Distancia, Spain)</li>
                        <li>Monique Grandbastien (Université de Lorraine, France)</li>
                        <li>Chad Lane (University of Illinois, USA)</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

export default {
    name: 'Best',
    data() {
        return {
            best: [
                {
                    title:'Robust Neural Automated Essay Scoring Using Item Response Theory',
                    authors: 'Masaki Uto and Masashi Okano',
                },
                {
                    title: 'Strategies for Deploying Unreliable AI Graders in High-Transparency High-Stakes Exams',
                    authors: 'Sushmita Azad, Binglin Chen, Maxwell Fowler, Matthew West and Craig Zilles',
                },
                {
                    title: 'Moodoo: Indoor Positioning Analytics for Characterising Classroom Teaching',
                    authors: 'Roberto Martinez-Maldonado, Vanessa Echeverria, Jurgen Schulte, Antonette Shibani, Katerina Mangaroska and Simon Buckingham Shum',
                },
                {
                    title: 'Far from success - Far from feedback acceptance(?) The influence of game performance on young students’ willingness to accept critical constructive feedback during play',
                    authors: 'Eva-Maria Ternblad and Betty Tärning',
                },
                {
                    title: 'Analysis of Task Difficulty Sequences in a Simulation-based POE Environment',
                    authors: 'Sadia Nawaz, Namrata Srivastava, Ji Hyun Yu, Ryan S. Baker, Gregor Kennedy and James Bailey',
                },
                {
                    title: 'Predicting Gaps in Usage in a Phone-Based Literacy Intervention System',
                    authors: 'Rishabh Chatterjee, Michael Madaio and Amy Ogan',
                },
                {
                    title: 'SoundHunters: Increasing Learner Phonological Awareness in Plains Cree',
                    authors: 'Delaney Lothian, Gokce Akcayir, Anaka Sparrow, Owen McLeod and Carrie Demmans Epp',
                }
            ]
        }
    }
}
</script>