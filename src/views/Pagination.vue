<template>
    <main>
         <div class="pagination">
                <div v-for="n in noPages" :key="n">{{ n }}</div>
            </div>
    </main>
</template> 

<script lang="ts">
import useTaskListStore from "@/store/tasks";
import { defineComponent } from "vue";

export default defineComponent({
    name: "Pagination",
    setup() {
        const {noPages} = useTaskListStore()
        return {noPages}
    }
});
</script>
<style lang="scss" scoped>

.pagination {
  display: flex;
  justify-content: center;
  div {
    border: solid black 1px;
    margin: 5px;
    padding: 5px;
  }
}

</style>
