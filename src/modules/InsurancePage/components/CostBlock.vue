<template>
  <div class="insurance-cost-block">
    <div class="insurance-cost-block-summ">
      <div class="insurance-cost-block-summ-lable">
        Страховая сумма (руб.)
      </div>
      <div class="insurance-cost-block-summ-items" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'InsuranceCostBlock',
  props: {
    title: String,
    items: Array,
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.insurance-cost-block {
    background-color: #FFF;
    width: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 40px;

    &-summ {
        &-lable {
            font-family: Roboto-Regular;
            font-size: 20px;
            line-height: 1.2;
            color: #8894b4;
        }
    }
}
</style>
