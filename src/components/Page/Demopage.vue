<template>
  <v-container>
    <v-layout row wrap class="layout">
      <v-flex xs12 text-xs-center>
        <h1>투두 리스트</h1>
        <p>전체 할일 : {{ todoList.length }}/ 완료된일 : / 남은 일 :</p>
      </v-flex>
      <v-flex xs6 pa-2 class="bigarea">
        <List :todoList="todoList" @listDelete="listDelete" @statusControl="statusControl" />
      </v-flex>
      <v-flex xs6 pa-2>
        <ListAdd @listAdd="listAdd" @listEdit="listEdit" />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import List from "../todos/List.vue";
import ListAdd from "../todos/ListAdd.vue";

export default {
  components: {
    List,
    ListAdd,
  },
  data() {
    return {
      todoList: [],
    };
  },
  methods: {
    listAdd(memo) {
      console.log("들어왔습니다");
      this.todoList.push({ memo, status: "created" });
    },
    statusControl(index, status) {
      this.todoList[index].status = status;
    },
    listDelete(index) {
      this.todoList.splice(index, 1);
      console.log(index, "삭제되었습니다.");
    },
    listEdit(memo, index) {
      this.todoList[index].memo = memo;
      console.log(index, "수정하겠습니다");
    },
  },
};
</script>
<style>
.demo {
  padding: 50px 0 50px 0;
  width: 100%;
  background-color: blanchedalmond;
}
.layout {
  border: 1px solid;
  display: flex;
  align-content: center;
  justify-content: center;
}
.eachpart {
  width: 50%;
  display: flex;
  justify-content: center;
  align-content: center;
  background: cyan;
}
.bigarea {
}
</style>
