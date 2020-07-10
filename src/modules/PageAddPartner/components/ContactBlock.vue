<template>
  <div class="page-block">
    <q-input
      v-model="vFullName"
      outlined
      label="ФИО контактное лицо*"
      class="page-block-input"
      dense
      :error="valid.full_name"
      @focus="updateValidate({full_name: false})"
    />
    <q-input
      v-model="vPhone"
      outlined
      label="Контактный телефон*"
      class="page-block-input"
      dense
      mask="+7(###) ###-##-##"
      :error="valid.phone"
      @focus="updateValidate({phone: false})"
    />
    <q-input
      v-model="vEmail"
      outlined
      label="E-mail*"
      class="page-block-input"
      dense
      :error="valid.email"
      @focus="updateValidate({email: false})"
    />
    <q-input
      v-model="vSiteUrl"
      outlined
      label="Сайт компании"
      class="page-block-input"
      dense
    />
    <q-input
      v-model="vWorkTime"
      outlined
      label="Режим работы"
      class="page-block-input"
      dense
    />
    <q-select
      v-model="vHaveEDM"
      outlined
      label="Наличие ЭДО*"
      class="page-block-input"
      dense
      :options="edm"
      :error="valid.have_EDM"
      @focus="updateValidate({have_EDM: false})"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import store from 'PageAddPartner/store';

export default {
  name: 'VuePageAddPartnerAddress',
  store,
  data: () => ({
    edm: [{ label: 'Дa', value: true }, { label: 'Нет', value: false }],
  }),
  computed: {
    ...mapState(['partner', 'valid']),
    vSiteUrl: {
      get() { return this.partner.site_url; },
      set(value) { this.update({ site_url: value }); },
    },
    vWorkTime: {
      get() { return this.partner.work_time; },
      set(value) { this.update({ work_time: value }); },
    },
    vHaveEDM: {
      get() { return this.partner.have_EDM; },
      set(option) { this.update({ have_EDM: option.value }); },
    },
    vFullName: {
      get() { return this.partner.full_name; },
      set(value) { this.update({ full_name: value }); },
    },
    vPhone: {
      get() { return this.partner.phone; },
      set(value) { this.update({ phone: value }); },
    },
    vEmail: {
      get() { return this.partner.email; },
      set(value) { this.update({ email: value }); },
    },
  },
  methods: {
    ...mapMutations({
      update: 'updatePartner',
      updateValidate: 'updateValidate',
    }),

    changeEDM(val) {
      console.log(val);
    },
  },
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
