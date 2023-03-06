import { createStore } from 'vuex';
import dataJson from '@/assets/data.json';

const USER_SELECTED_MAX_ITEMS = 6;
const CHOOSE_SELECTED_MAX_ITEMS = 1;

const canAddUserClothe = (state) => state.selectedUserClothes.length < USER_SELECTED_MAX_ITEMS;

const canAddChooseClothe = (state) => (
  state.selectedChooseClothes.length < CHOOSE_SELECTED_MAX_ITEMS
);

export default createStore({
  state: {
    userClothes: dataJson.userClothes,
    selectedUserClothes: [],

    chooseClothes: dataJson.chooseClothes,
    selectedChooseClothes: [],
  },

  getters: {
    getSelectedUserClothes(state) {
      return state.userClothes.filter((item) => state.selectedUserClothes.includes(item.id));
    },

    canAddUserClothe(state) {
      return canAddUserClothe(state);
    },

    getSelectedChooseClothes(state) {
      return state.chooseClothes.filter((item) => state.selectedChooseClothes.includes(item.id));
    },

    canAddChooseClothe(state) {
      return canAddChooseClothe(state);
    },
  },

  mutations: {
    SET_USER_CLOTHE(state, id) {
      if (canAddUserClothe(state)) {
        state.selectedUserClothes.push(id);
        state.selectedUserClothes = [...new Set(state.selectedUserClothes)];
      }
    },
    UNSET_USER_CLOTHE(state, id) {
      state.selectedUserClothes = state.selectedUserClothes.filter((cid) => cid !== id);
    },

    SET_CHOOSE_CLOTHE(state, id) {
      if (canAddChooseClothe(state)) {
        state.selectedChooseClothes.push(id);
        state.selectedChooseClothes = [...new Set(state.selectedChooseClothes)];
      }
    },
    UNSET_CHOOSE_CLOTHE(state, id) {
      state.selectedChooseClothes = state.selectedChooseClothes.filter((cid) => cid !== id);
    },
  },
});
