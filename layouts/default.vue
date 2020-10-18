<template>
  <div>
    <header>
      <div style="display: flex">
        <input type="button" class="btn btn-primary" v-show="showChat" value="Назад" @click="backToDialogs">
        <h2>Hello {{user.login}}!</h2>
      </div>
      <input type="button" class="btn btn-danger" v-show="registered" value="Выйти" @click="isLogOut">
    </header>
    <Nuxt />
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: mapState(['registered', 'user', 'showChat']),
  methods: {
    isLogOut () {
      this.$store.dispatch('isLogOut')
    },
    backToDialogs () {
      this.$store.dispatch('backToDialogs')
    }
  }
}
</script>

<style>
header {
  height: 60px;
  background-color: #3b8070;
  display: flex;
  justify-content: space-between;
}
h2 {
  float: left;
  margin: 10px;
}
</style>
