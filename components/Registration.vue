<template>
  <div class="container">
    <form action="" class="sign-up">
      <h2>Регистрация</h2>
      <p v-show="is_validate" :class="[is_validate ? class_validate: '']">Одно из полей не заполнено!</p>
      <p>Введите логин:</p>
      <input type="text" v-model="login">
      <p>Введите емейл:</p>
      <input type="text" v-model="email">
      <p>Введите пароль:</p>
      <input type="password" v-model="password">
      <input type="submit" value="Зарегистрироваться" @click.prevent="isRegistration">
    </form>
  </div>
</template>

<script>
export default {
  name: "Registration",
  data () {
    return {
      login: '',
      email: '',
      password: '',
      class_validate: 'badge badge-pill badge-danger',
      is_validate: false
    }
  },
  methods: {
    isRegistration () {
      if (!(this.login&&this.email&&this.password)) {
        return this.is_validate = true
      } else {
        this.is_validate = false;
      }
      this.$store.dispatch('isRegistration', {login: this.login, email: this.email, password: this.password})
      this.login = ''
      this.email = ''
      this.password = ''
    }
  }
}
</script>

<style scoped>
p{
  margin: 0;
}
.sign-up {
  margin: 50px auto;
  border: 1px solid #3b8070;
  text-align: center;
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
}
input{
  margin: 10px 0;
}
</style>
