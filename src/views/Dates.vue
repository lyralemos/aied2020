<template>
    <div class="dates">
        <section class="title">
            <div class="container">
                <div class="col-12">
                    <h1 class="documentTitle">Important Dates</h1>
                </div>
            </div>
        </section>

        <section class="body">
            <div class="container">
                <div class="col-12">
                    <h3>Submissions</h3>
                    <Dates />

                    <!-- <h3>Notification</h3>
                    <ul>
                        <li>Paper review (internal to reviewers): March 16, 2020</li>
                        <li>Papers & Posters acceptance/rejection: March 30, 2020</li>
                    </ul> -->
                </div>
            </div>
            
        </section>
    </div>
</template>

<script>
import Dates from '@/components/Dates'

export default {
    name: 'General',
    components: {Dates}
}
</script>