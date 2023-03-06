<template>
  <div class="card">
    <button v-if="select" type="button" class="btn btn-light" @click="emit('select')">
      <img src="@/assets/icons/add.svg" alt="add svg icon">
    </button>
    <button v-if="remove" type="button" class="btn btn-danger" @click="emit('remove')">
      <img src="@/assets/icons/close.svg" alt="close svg icon">
    </button>

    <div class="card-body">
      <h6 class="card-title">{{ text }}</h6>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(['select', 'remove']);

defineProps({
  text: { type: String, default: '' },
  select: { type: Boolean, default: false },
  remove: { type: Boolean, default: false },
});

</script>
