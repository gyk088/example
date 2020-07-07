<template>
  <div class="page-partners-switch">
    <div
      class="page-partners-switch-item"
      @click="onClickSwitch('active')"
    >
      <div class="page-partners-switch-item-title">
        Активные
      </div>
      <div
        v-show="type === 'active'"
        class="page-partners-switch-item-active"
      />
    </div>

    <div
      class="page-partners-switch-item"
      @click="onClickSwitch('blocked')"
    >
      <div class="page-partners-switch-item-title">
        Заблокированные
      </div>
      <div
        v-show="type === 'blocked'"
        class="page-partners-switch-item-active"
      />
    </div>

    <div
      class="page-partners-switch-item"
      @click="onClickSwitch('archive')"
    >
      <div class="page-partners-switch-item-title">
        Архив
      </div>
      <div
        v-show="type === 'archive'"
        class="page-partners-switch-item-active"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VuePagePartnersSwitch',
  data: () => ({
    type: 'active',
  }),

  methods: {
    onClickSwitch(type) {
      this.type = type;
    },
  },
};
</script>

<style lang="scss" scoped>
.page-partners-switch {
    width: 100%;
    border-bottom: solid 1px #8894b4;
    display: flex;
    margin-bottom: 30px;
    &-item {
        font-family: Roboto-Regular;
        font-size: 16px;
        margin-right: 40px;
        cursor: pointer;
        position: relative;

        &-active {
            width: 100%;
            height: 5px;
            border-radius: 3px;
            background-color: #4694dd;
            position: absolute;
            top: 22px;
        }

        &-title:hover {
            opacity: 0.6;
        }
    }
}
</style>
