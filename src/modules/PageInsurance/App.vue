<template>
  <div id="content">
    <div class="insurance-page">
      <Header
        title="Оформление страхового полиса"
        back
        @onBack="onBack"
      />
      <div class="insurance-page-wrapper">
        <CostBlock />
      </div>
    </div>
  </div>
</template>

<script>
import Header from 'Shared/PageHeader.vue';

import CostBlock from 'PageInsurance/components/CostBlock.vue';
import Module from 'PageInsurance/module';

export default {
  el: '#content',
  name: 'VuePageInsurance',
  components: {
    Header,
    CostBlock,
  },
  methods: {
    onBack() {
      const module = new Module();

      module.$$rout({
        path: '/mainpartner',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.insurance-page {
    padding: 40px;
    .wrapper {

    }

}
#content {
    width: 100%;
}
</style>
