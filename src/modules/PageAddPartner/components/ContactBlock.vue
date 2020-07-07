<template>
  <div class="page-block">
    <q-input
      v-model="companyName"
      outlined
      label="ФИО контактное лицо*"
      class="page-block-input"
      dense
    />
    <q-input
      v-model="companyName"
      outlined
      label="Контактный телефон*"
      class="page-block-input"
      dense
    />
    <q-input
      v-model="companyName"
      outlined
      label="E-mail"
      class="page-block-input"
      dense
    />
    <q-input
      v-model="companyName"
      outlined
      label="Сайт компании"
      class="page-block-input"
      dense
    />
    <q-input
      v-model="companyName"
      outlined
      label="Режим работы"
      class="page-block-input"
      dense
    />
    <q-select
      v-model="companyName"
      outlined
      label="Наличие ЭДО*"
      class="page-block-input"
      dense
    />
  </div>
</template>

<script>
export default {
  el: '#content',
  name: 'VuePageAddPartnerAddress',
  data: () => ({
    companyName: null,
  }),
};
</script>

<style lang="scss" scoped>
.page-block {
    padding: 40px;
    width: 100%;
    background-color: #FFF;
    border-radius: 10px;
    margin-left: 40px;

    &-input {
        margin-bottom: 30px;
    }
}
</style>
