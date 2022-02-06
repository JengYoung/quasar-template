<template>
  <q-page>
    <div class="q-pa-md">
      <ul class="board__conatainer container">
        <li
          class="container__item"
          :key="content.id"
          v-for="content in contents.values"
        >
          <div class="item__title">{{ content.title }}</div>
          <div class="item__author">{{ content.body }}</div>
        </li>
      </ul>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

interface PostsInterface {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default defineComponent({
  setup() {
    const contents = ref<PostsInterface[]>([]);
    onMounted(async () => {
      const data = (await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      ).then((res) => res.json())) as PostsInterface[];

      contents.value = data;
    });

    return {
      contents,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  padding: 0 20rem;
  margin: 0 auto;
}
</style>
