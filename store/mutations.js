import {IS_AUTH, GET_ALL_MESSAGES, IS_LOG_OUT, IS_REGISTRATION, BACK_TO_DIALOGS, ON_CHAT} from "./mutation-types";

export default  {
  [IS_AUTH] (state, user) {
    state.user = {...user}
    state.registered = true
  },
  [GET_ALL_MESSAGES] (state, messages) {
    state.messages = messages;
  },
  [IS_LOG_OUT] (state) {
    state.user = {};
    state.registered = false
    state.users = []
    state.showChat = false
  },
  [IS_REGISTRATION] (state, newUser) {
    state.user = {...newUser}
    state.registered = true
  },
  [ON_CHAT](state, user) {
    state.showChat = true
    state.friend = user
  },
  [BACK_TO_DIALOGS](state) {
    state.showChat = false
  }
}
