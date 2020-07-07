<template>
  <div id="content">
    <div class="main-page">
      <Block
        v-for="b in blocks"
        :key="b.id"
        :title="b.title"
        :items="b.items"
        @cardClick="cardClick"
      />
    </div>
  </div>
</template>

<script>
import list1 from 'Images/icon/list1.svg';
import list2 from 'Images/icon/list2.svg';
import list3 from 'Images/icon/list3.svg';
import history from 'Images/icon/ic-history.svg';
import addSale from 'Images/icon/ic-add-sale.svg';
import addEvent from 'Images/icon/ic-add-insurance-event.svg';

import Block from 'Shared/CardBlock.vue';
import Module from 'PagePartnerMain/module';

export default {
  el: '#content',
  name: 'VuePagePartnerMain',
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
            title: 'Оформить продажу',
            icon: addSale,
            bold: true,
            url: '/insurance',
          },
          {
            id: 2,
            title: 'История продаж',
            icon: history,
          },
          {
            id: 3,
            title: 'Инструкция по оформлению продажи',
            icon: list3,
          },
          {
            id: 4,
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
            id: 5,
            title: 'Заявить о страховом событии',
            icon: addEvent,
            bold: true,
          },
          {
            id: 6,
            title: 'Список страховых событий',
            icon: list2,
          },
          {
            id: 7,
            title: 'Инструкция по оформлению страхового события',
            icon: list3,
          },
        ],
      },
    ],
  }),

  methods: {
    cardClick(item) {
      const module = new Module();
      if (item.url) {
        module.$$rout({
          path: item.url,
        });
      } else {
        module.$$gemit('notify', {
          text: `cтраница ${item.title} еще не готова`,
        });
      }
    },
  },
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
