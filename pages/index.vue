<template>
  <div>
    <div class="container text-center" v-show="!registered">
      <h1 :class="{welcome: !action}">Добро пожаловать в чат!</h1>
      <div>
        <input type="button" class="btn btn-success btn-lg" value="Авторизация" @click="action = 'signin'">
        <input type="button" class="btn btn-primary btn-lg" value="Регистрация" @click="action = 'signup'">
      </div>
      <Login v-show="action === 'signin'"/>
      <Registration v-show="action === 'signup'"/>
    </div>
    <Chats v-if="registered&&!showChat"/>
    <Chat v-if="showChat" />
  </div>
</template>

<script>
import Login from "@/components/Login";
import Chat from "@/components/Chat";
import Registration from "@/components/Registration";
import Chats from "@/components/Chats";
import {mapState} from 'vuex';

export default {
  data () {
    return {
      action: ''
    }
  },
  components: {
    Login, Chat, Registration, Chats
  },
  computed: mapState(['registered', 'showChat'])
}
</script>

<style scoped>
.welcome{
  margin: 50px;
}
</style>
