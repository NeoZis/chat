<template>
<div class="container text-center parent">
  <h1>Кому напишите?</h1>
  <div class="container dialogs">
    <div class="dialog" v-for="dialog in dialogs" @click="onChat(dialog)">
      <h3>{{dialog.login}}</h3>
    </div>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "Chats",
  computed: {...mapState(['user']),
  dialogs: function () {
    let users = this.data_users.filter(user => user.login !== this.user.login) // убирает из списка пользователей текущего пользователя
    return users
  }},
  created: async function () {
    const users = this.$fireStore.collection('users')
    const allUsers = await users.get()
    allUsers.forEach(doc => {
      if (doc.id !== 'idValue') {
        this.data_users.push({id: doc.id, login: doc.data().login})
      }
    })
  },
  data() {
    return {
      data_users: []
    }
  },
  methods: {
    onChat(user) {
      this.$store.dispatch('onChat', user)
    }
  }
}
</script>

<style scoped>
.parent {
  border: 1px solid black;
}
.dialogs {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: column;
}
.dialog {
  height: 100px;
  border: 1px solid black;
  margin: 20px;
  border-radius: 5px;
  cursor: pointer;
}
h3{
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

</style>
