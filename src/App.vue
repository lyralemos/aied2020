<template>
  <div id="app">
    <Menu />
    <div class="content">
      <router-view/>
    </div>
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-12">
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
export default {
  name: 'App',
  components:{Menu},
  created() {
    localStorage.clear()
  }
}
</script>