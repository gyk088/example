<template>
  <div id="content">
    <div
      id="PagePartner"
      class="page-partners"
    >
      <Header title="Партнеры">
        <template #end>
          <q-btn
            unelevated
            rounded
            color="primary"
            label="Добавить партнера"
            class="page-partners-btn"
            @click="addPartner"
          />
          <q-btn
            unelevated
            outline
            rounded
            color="primary"
            class="page-partners-btn"
          >
            <template #default>
              <span
                class="page-partners-btn-icon"
                v-html="iconExport"
              />
              <span>Экспорт в excel</span>
            </template>
          </q-btn>
        </template>
      </Header>
      <Switched />
      <div id="EmbedPartnersTbl" />
    </div>
  </div>
</template>

<script>
import iexport from 'Images/icon/ic-export.svg';
import Header from 'Shared/PageHeader.vue';
import Switched from 'PagePartners/components/Switch.vue';
import Module from 'PagePartners/module';

export default {
  el: '#content',
  name: 'VuePagePartners',
  components: {
    Header,
    Switched,
  },

  data: () => ({
    iconExport: iexport,
  }),

  methods: {
    addPartner() {
      const module = new Module();

      module.$$rout({
        path: '/addpartner',
      });
    },
  },

};
</script>

<style lang="scss" scoped>
.page-partners {
    padding: 40px;

    &-btn {
        margin: 0 10px;

        &-icon {
            width: 24px;
            height: 24px;
            margin-right: 5px;
        }
    }

    &-switch {
        width: 100%;
        border-bottom: solid 1px #8894b4;
        display: flex;
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
}
#content {
    width: 100%;
}
</style>
