<template>
  <div class="card">
    <div class="card-body">
      <div class="container text-center">
        <div class="row">
          <div
            v-for="item in list"
            :key="item.id"
            class="col-md-4 p-2"
          >
            <clothe-list-item
              :text="item.name"
              @select="emit('select', item.id)"
              @remove="emit('remove', item.id)"
              v-bind="{ select, remove }"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import ClotheListItem from './clothe-list-item.vue';

const emit = defineEmits(['select', 'remove']);

defineProps({
  list: { type: Array, default: () => [] },
  select: { type: Boolean, default: false },
  remove: { type: Boolean, default: false },
});

</script>
