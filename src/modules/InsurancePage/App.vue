<template>
  <div id="content">
    <div class="insurance-page">
      <Back
        title="Оформление страхового полиса"
        @iconClick="back"
      />
      <div class="insurance-page-wrapper">
        <CostBlock />
      </div>
    </div>
  </div>
</template>

<script>
import Back from 'Shared/Back.vue';

import CostBlock from 'InsurancePage/components/CostBlock.vue';
import Module from 'InsurancePage/module';

export default {
  el: '#content',
  name: 'VueInsurancePage',
  components: {
    Back,
    CostBlock,
  },
  methods: {
    back() {
      const module = new Module();

      module.$$rout({
        path: '/mainPartner',
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
