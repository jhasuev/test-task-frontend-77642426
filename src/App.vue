<template>
  <div class="container text-center py-3">
    <div class="row mb-4">
      <div class="col">
        <ClotheList
          remove
          :list="store.getters.getSelectedUserClothes"
          @remove="store.commit('UNSET_USER_CLOTHE', $event)"
        />
      </div>
      <div class="col">
        <ClotheList
          remove
          :list="store.getters.getSelectedChooseClothes"
          @remove="store.commit('UNSET_CHOOSE_CLOTHE', $event)"
        />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <ClotheList
          :select="store.getters.canAddUserClothe"
          :list="store.state.userClothes"
          @select="store.commit('SET_USER_CLOTHE', $event)"
        />
      </div>
      <div class="col">
        <ClotheList
          :select="store.getters.canAddChooseClothe"
          :list="store.state.chooseClothes"
          @select="store.commit('SET_CHOOSE_CLOTHE', $event)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import ClotheList from '@/components/clothe-list.vue';

const store = useStore();

</script>
