<template>
    <div class="committee">
        <section class="title">
            <div class="container">
                <div class="col-12">
                    <h1 class="documentTitle">Organizing Committee</h1>
                </div>
            </div>
        </section>

        <section class="body">
            <div class="container">
                <div class="col-12">
                    <Committee />
                </div>
            </div>
            
        </section>
    </div>
</template>

<script>
import Committee from '@/components/Committee'

export default {
    name: 'General',
    components: {Committee}
}
</script>