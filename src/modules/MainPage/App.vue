<template>
  <div id="content">
    <div class="main-page">
      <Block
        v-for="b in blocks"
        :key="b.id"
        :title="b.title"
        :items="b.items"
      />
    </div>
  </div>
</template>

<script>
import list1 from 'MainPage/images/list1.svg';
import list2 from 'MainPage/images/list2.svg';
import list3 from 'MainPage/images/list3.svg';
import list4 from 'MainPage/images/list4.svg';

import Block from 'MainPage/components/Block.vue';

export default {
  el: '#content',
  name: 'VueMainPage',
  components: {
    Block,
  },

  data: () => ({
    blocks: [
      {
        id: 1,
        title: 'Продажа страхового продукта',
        items: [
          {
            id: 1,
            title: 'Список продаж',
            icon: list4,
          },
          {
            id: 2,
            title: 'Инструкция по оформлению продажи',
            icon: list3,
          },
          {
            id: 3,
            title: 'Описание страховых продуктов',
            icon: list1,
          },
        ],
      },
      {
        id: 2,
        title: 'Страховое событие',
        items: [
          {
            id: 4,
            title: 'Список страховых событий',
            icon: list2,
          },
          {
            id: 5,
            title: 'Инструкция по оформлению страхового события',
            icon: list3,
          },
        ],
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.main-page {
    display: flex;
}
#content {
    width: 100%;
}
</style>
