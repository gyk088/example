<template>
  <div id="content">
    <div class="add-partner-page">
      <Header
        title="Добавление партнера"
        back
        @onBack="onBack"
      />
      <div class="add-partner-page-wrapper">
        <AddressBlock />
        <ContactBlock />
      </div>
      <div class="add-partner-page-footer">
        <q-btn
          unelevated
          color="primary"
          label="Сохранить"
          class="add-partner-page-footer-btn"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from 'Shared/PageHeader.vue';
import Module from 'PageAddPartner/module';
import AddressBlock from 'PageAddPartner/components/AddressBlock.vue';
import ContactBlock from 'PageAddPartner/components/ContactBlock.vue';

export default {
  el: '#content',
  name: 'VuePageAddPartner',
  components: {
    Header,
    AddressBlock,
    ContactBlock,
  },
  methods: {
    onBack() {
      const module = new Module();

      module.$$rout({
        path: '/partners',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.add-partner-page {
    padding: 40px;
    &-wrapper {
        display: flex;
    }

    &-footer {
        margin-top: 20px;
        display: flex;
        justify-content: flex-end;

        &-btn {
            padding: 10px 60px;
            font-size: 16px;
            font-family: Roboto-Regular;
            border-radius: 10px;
        }

    }

}
#content {
    width: 100%;
}
</style>
