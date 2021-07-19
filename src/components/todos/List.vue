<template>
  <div class="listlayout">
    <!-- 추가 항목(반복문) -->
    <v-card
      :class="{ done: list.status === 'done' }"
      pa-3
      mb-3
      v-for="(list, index) in todoList"
      :key="index"
    >
      <p class="topic">할일 내용</p>
      <p class="content">{{ list.memo }}</p>
      <div class="btnarea">
        <v-btn v-if="list.status === 'create'" @click="$emit('statusControl', index, 'done')"
          >check</v-btn
        >
        <v-btn v-else @click="$emit('statusControl', index, 'create')">load</v-btn>
        <v-btn @click="$emit('listDelete', index, 'remove')">delete</v-btn>

        <v-btn v-if="list.status === 'create'" @click="listEdit(list.memo, index)">edit</v-btn>
      </div>
    </v-card>
  </div>
</template>
<script>
import { eventBus } from "../../main";

export default {
  data() {
    return { memo: null };
  },
  props: ["todoList"],
  methods: {
    listEdit(memo, index) {
      eventBus.listEdit(memo, index);
    },
  },
};
</script>
<style scoped>
.listlayout {
  width: 100%;
}
.done {
  background-color: rgba(0, 0, 0, 0.1);
}
.done p {
  text-decoration: line-through;
  color: rgba(0, 0, 0, 0.5);
}
.topic {
  text-align: left;
}
.content {
  background-color: azure;
  padding: 30px 0 30px 0;
}
.btnarea {
  text-align: right;
}
</style>
