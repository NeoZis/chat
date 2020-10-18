import {IS_AUTH, GET_ALL_MESSAGES, IS_LOG_OUT, IS_REGISTRATION, ON_CHAT, BACK_TO_DIALOGS} from './mutation-types'

export default  {
  async isAuth({commit}, data) {
    const usersRef = this.$fireStore.collection('users')
    const res = await usersRef.where('login', '==', data.login).where('password', '==', data.password).get()

    if(res.empty) {
      return alert('Такого пользователя не существует')
    } else {
    res.forEach(doc => commit(IS_AUTH, {...doc.data()}));
    }
  },
  isLogOut ({commit}) {
    commit(IS_LOG_OUT)
  },
  getAllMessages ({commit}, data) {
    commit(GET_ALL_MESSAGES, data)
  },
  async isRegistration({commit}, data) {
    const userDB = this.$fireStore.collection('users')
    const allChats = this.$fireStore.collection('all_chats')

    const checkUser = await userDB.where('login', '==', data.login).get()
    let newID;
    if (checkUser.empty) {
      const idValue = userDB.doc('idValue');
      const lastId = await idValue.get()
      if (!isNaN(lastId.data().ID)) {
        newID = lastId.data().ID + 1
      } else {
        return console.log('Ошибка ИД в базе данных')
      }
      const newUser = {id: newID, login: data.login, email: data.email, password: data.password}
      await userDB.doc(`user_${newID}`).set(newUser) // добавление нового пользователя
      await allChats.doc(`user_${newID}`).set({create: true}) // добавления пользователя в базу всех диалогов
      await idValue.set({ID: newID}) // установка последнего ИД
      commit(IS_REGISTRATION, newUser)
    } else return alert('Такой пользователь уже существует')
  },
  onChat({commit}, user) {
    commit(ON_CHAT, user)
  },
  backToDialogs({commit}) {
    commit(BACK_TO_DIALOGS)
  }
}
