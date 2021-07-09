<template>
  <div>
    <textarea
      outlined
      v-model="memo"
      placeholder="투두리스트 입력"
      value=""
      class="textarea"
    ></textarea>
    <v-btn @click="listAdd">리스트 추가</v-btn>
    <v-btn @click="listEdit">리스트 수정</v-btn>
  </div>
</template>
<script>
import { eventBus } from "../../main";

export default {
  data() {
    return {
      memo: null,
      index: null,
    };
  },
  created() {
    eventBus.$on("listEdit", (memo, index) => {
      this.memo = memo;
      this.index = index;
    });
  },
  methods: {
    listAdd() {
      console.log("list add ");
      if (this.memo === null) {
        alert("추가");
      } else {
        this.$emit("listAdd", this.memo);
        this.memo = null;
      }
    },
    listEdit() {
      if (this.memo === null) {
        alert("수정");
      } else {
        this.$emit("listEdit", this.memo, this.index);
        this.memo = null;
      }
    },
  },
};
</script>
<style>
.textarea {
  height: 120px;
  width: 100%;
  border: 1px solid;
}
</style>
