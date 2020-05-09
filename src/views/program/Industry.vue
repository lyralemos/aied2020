<template>
    <div class="general call">
        <section class="title">
            <div class="container">
                <div class="col-12">
                    <h1 class="documentTitle">Industry Track</h1>
                </div>
            </div>
        </section>

        <section class="body">
            <div class="container">
                <div class="col-12">
                    <div id="accordion">
                        <div class="card">
                            <div class="card-header">
                                <h5>
                                    <a class="paper" href="#" data-toggle="collapse" data-target="#collapse1">
                                        A Gamified Solution to the Cold-Start Problem of Intelligent Tutoring System
                                    </a>
                                </h5>
                                <b>Authors:</b> Yang Pian, Yu Lu, Yuqi Huang and Ig Bittencourt. <br />
                            </div>
                            <div id="collapse1" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                <div class="card-body">
                                    <b>Abstract:</b>
                                    Today's intelligent tutoring systems provide more intelligent but complex services to learners. These systems encounter two critical issues: 1) the initial lack of new learner's information for running complex services, and 2) new learners failing to actively interact with these complex services due to the initial unfamiliarity. We define such issues as the "cold-start" problem in today's intelligent tutoring systems, and propose a gamified solution to tackle it. By leveraging on the established MDA model, a three-layer framework with narrative elements and task-oriented elements is designed and implemented in an ITS for mathematics. The preliminary evaluations show its effectiveness, and the proposed solution is generally applicable to other ITS systems.
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                                <h5>
                                    <a class="paper" href="#" data-toggle="collapse" data-target="#collapse2">
                                        Bridging over from Learning Videos to Learning Resources through Automatic Keyword Extraction
                                    </a>
                                </h5>
                                <b>Authors:</b> 
                                 Cleo Schulten, Sven Manske, Angela Langner-Thiele and H. Ulrich Hoppe.
                                <br />
                            </div>
                            <div id="collapse2" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                <div class="card-body">
                                    <b>Abstract:</b>
                                    The presented system and approach facilitates intelligent, contextualized in-formation access for learners based on automatic learning video analysis. The underlying workflow starts with automatically extracting keywords from learning videos followed by the generation of recommendations of learning materials. The approach has been implemented and investigated in a user study in a in a real-world VET setting. The study investigated the acceptance, perceived quality and relevance of automatically extracted keywords and au-tomatically generated learning resource recommendations in the context of a set of learning videos related to chemistry and chemical engineering. The re-sults indicate that such extracted keywords are in line with user-generated keywords and summarize the content of videos quite well. Also, they can be used as search key to find relevant learning resources.
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                                <h5>
                                    <a class="paper" href="#" data-toggle="collapse" data-target="#collapse3">
                                        Identifying Beneficial Learning Behaviors From Large-Scale Interaction Data
                                    </a>
                                </h5>
                                <b>Authors:</b> 
                                Miruna Cristus, Oscar Täckström, Lingyi Tan and Valentino Pacifici.
                                <br />
                            </div>
                            <div id="collapse3" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                <div class="card-body">
                                    <b>Abstract:</b>
                                    Understanding the effect of learning behavior is fundamental to improving learning outcomes. In this paper, we perform a behavioral analysis based on data from a large high-stakes exam preparation platform. By measuring the importance of a set of candidate learning behaviors in predicting final exam outcomes, we identify a suite of beneficial behaviors. In particular, we find that breadth (wide coverage of content per week) and intensity together with consistency (frequent and equal-length practice for a limited period) are most predictive of final exam success rate, among eleven studied behaviors.
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                                <h5>
                                    <a class="paper" href="#" data-toggle="collapse" data-target="#collapse4">
                                        A Large-Scale, Open-Domain, Mixed-Interface Dialogue-Based ITS for STEM
                                    </a>
                                </h5>
                                <b>Authors:</b> 
                                 Iulian Vlad Serban, Varun Gupta, Ekaterina Kochmar, Dung D. Vu, Robert Belfer, Joelle Pineau, Aaron Courville, Laurent Charlin and Yoshua Bengio
                                <br />
                            </div>
                            <div id="collapse4" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                <div class="card-body">
                                    <b>Abstract:</b>
                                    We present Anonymized, a large-scale, open-domain, mixed-interface, dialogue-based intelligent tutoring system (ITS). Anonymized uses machine learning, natural language processing and reinforcement learning to provide interactive, personalized learning online. Anonymized has been designed to easily scale to thousands of subjects, by automating, standardizing and simplifying the content creation process. Unlike other ITS, a teacher can develop new learning modules for Anonymized in a matter of hours. To facilitate learning across a wide range of STEM subjects, Anonymized uses a mixed-interface, which includes videos, interactive dialogue-based exercises, question-answering, conceptual diagrams, mathematical exercises and gamification elements. Anonymized has been built to scale to millions of students, by utilizing a state-of-the-art cloud-based micro-service architecture. Anonymized launched its first course in 2019 on machine learning, and since then over 5,000 students have enrolled. Although Anonymized was designed to be open-domain and highly scalable, A/B testing experiments with real-world students demonstrate that both student learning outcomes and student motivation are substantially improved compared to typical online courses.
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
    name: 'Industry',
    data() {
        return {
            full: full,
        }
    }
}
</script>