<template>
  <div class="container">
    <div class="chat-block" ref="chat">
      <ul>
        <li v-for="message in messages" :class="{you: user.id === message.id, friend: user.id !== message.id}">
          <p>{{message.text}}</p>
        </li>
      </ul>
    </div>
    <div class="control">
      <textarea v-model="text" @keyup.enter="sendMessage"></textarea>
      <input type="button" value="SEND" @click="sendMessage">
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "Chat",
  computed: mapState(['messages', 'user', 'friend']),
  created: function () {
    const chat = this.$fireStore.collection('all_chats')
      .doc(`user_${this.user.id}`).collection(this.friend.id)

    chat.onSnapshot(docSnapshot => {
      let data = []
      docSnapshot.forEach(doc => data.push(doc.data()))
      data.sort(function (a, b) {
        return a.date - b.date //сортировка сообщений по дате
      });
      this.$store.dispatch('getAllMessages', data);
    }, err => {
      console.log(`Encountered error: ${err}`)
    })
  },
  data() {
    return {
      text: ''
    }
  },
  updated: function () {
    this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight; // при любых действиях, перемещается вниз всех сообщений
  },
  methods: {
    async sendMessage() {
      if(!this.text) {
        alert('Пустое сообщение нельзя отправлять')
        return
      }
      let text = this.text
      this.text = ''
      const myMessages = this.$fireStore.collection('all_chats').doc(`user_${this.user.id}`).collection(this.friend.id)
      await myMessages.add({id: this.user.id, text: text, date: Date.now()})
      const myFMessages = this.$fireStore.collection('all_chats').doc(this.friend.id).collection(`user_${this.user.id}`)
      await myFMessages.add({id: this.user.id, text: text, date: Date.now()})
    }
  }
}
</script>

<style scoped>
.container {
  background-color: #35495e;
  padding: 15px;
}
.chat-block {
  background-color: #fff;
  min-height: 300px;
  max-height: 500px;
  text-align: right;
  overflow-y: scroll;
}
.control {
  margin-top: 10px;
  display: flex;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
li {
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 4px;
  max-width: 100%;
  word-break: break-all;
}
li p {
  margin: 0;
  font-size: 20px;
}
textarea {
  resize: none;
  width: 100%;
}
.control input {
  padding: 20px 20px;
}

.friend {
  align-self: flex-start;
}
.you {
  align-self: flex-end;
}
</style>
