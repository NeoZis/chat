<template>
<div class="container">
    <form action="" class="sign-in">
      <h2>Авторизация</h2>
      <p>Введите логин:</p>
      <input type="text" v-model="login">
      <p>Введите пароль:</p>
      <input type="password" v-model="password">
      <input type="submit" value="Войти" @click.prevent="isAuth">
    </form>
</div>
</template>

<script>
export default {
name: "Login",
  data () {
  return {
    login: '',
    password: ''
  }
  },
  methods: {
    isAuth () {
      this.$store.dispatch('isAuth', {login: this.login, password: this.password})
      this.login = ''
      this.password = ''
    }
  }}
</script>

<style scoped>
p{
  margin: 0;
}
.sign-in {
  margin: 50px auto;
  border: 1px solid #3b8070;
  width: 300px;
  height: 300px;
  text-align: center;
  padding: 50px 30px 0;
  display: flex;
  flex-direction: column;
}
input{
  margin-top: 10px;
}
</style>
