<template>
  <div class="page-block">
    <q-input
      v-model="companyName"
      outlined
      label="Наименование организации*"
      class="page-block-input"
      dense
    />
    <q-input
      v-model="companyName"
      outlined
      label="Город*"
      class="page-block-input"
      dense
    />
    <q-input
      v-model="companyName"
      outlined
      label="Юр. адрес*"
      class="page-block-input"
      dense
    />
    <q-input
      v-model="companyName"
      outlined
      label="Фактический адрес*"
      class="page-block-input"
      dense
    />
    <div class="page-block-two-column">
      <q-input
        v-model="companyName"
        outlined
        label="ИНН*"
        class="page-block-two-column-input"
        dense
      />
      <q-input
        v-model="companyName"
        outlined
        label="КПП*"
        class="page-block-two-column-input"
        dense
      />
    </div>
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

    &-input {
        margin-bottom: 30px;
    }

    &-two-column{
        display: flex;

        &-input {
            width: 100%;
            margin-left: 20px;
        }

        &-input:first-child {
            margin-left: 0px;
        }
    }
}
</style>
