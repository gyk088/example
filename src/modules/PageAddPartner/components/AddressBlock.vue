<template>
  <div class="page-block">
    <q-input
      v-model="vCompanyName"
      outlined
      label="Наименование организации*"
      class="page-block-input"
      dense
      :error="valid.company_name"
      @focus="updateValidate({company_name: false})"
    />
    <q-input
      v-model="vCity"
      outlined
      label="Город*"
      class="page-block-input"
      dense
      :error="valid.city"
      @focus="updateValidate({city: false})"
    />
    <q-input
      v-model="vLegalAddress"
      outlined
      label="Юр. адрес*"
      class="page-block-input"
      dense
      :error="valid.legal_address"
      @focus="updateValidate({legal_address: false})"
    />
    <q-input
      v-model="vActualAddress"
      outlined
      label="Фактический адрес*"
      class="page-block-input"
      dense
      :error="valid.actual_address"
      @focus="updateValidate({actual_address: false})"
    />
    <div class="page-block-two-column">
      <q-input
        v-model="vITN"
        outlined
        label="ИНН*"
        class="page-block-two-column-input"
        dense
        :error="valid.ITN"
        @focus="updateValidate({ITN: false})"
      />
      <q-input
        v-model="vRRC"
        outlined
        label="КПП*"
        class="page-block-two-column-input"
        dense
        :error="valid.RRC"
        @focus="updateValidate({RRC: false})"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import store from 'PageAddPartner/store';

export default {
  name: 'VuePageAddPartnerAddress',
  store,
  computed: {
    ...mapState(['partner', 'valid']),
    vCompanyName: {
      get() { return this.partner.company_name; },
      set(value) { this.update({ company_name: value }); },
    },
    vCity: {
      get() { return this.partner.city; },
      set(value) { this.update({ city: value }); },
    },
    vLegalAddress: {
      get() { return this.partner.legal_address; },
      set(value) { this.update({ legal_address: value }); },
    },
    vActualAddress: {
      get() { return this.partner.actual_address; },
      set(value) { this.update({ actual_address: value }); },
    },
    vITN: {
      get() { return this.partner.ITN; },
      set(value) { this.update({ ITN: value }); },
    },
    vRRC: {
      get() { return this.partner.RRC; },
      set(value) { this.update({ RRC: value }); },
    },
  },
  methods: {
    ...mapMutations({
      update: 'updatePartner',
      updateValidate: 'updateValidate',
    }),
  },
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
