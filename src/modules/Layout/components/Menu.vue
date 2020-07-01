<template>
  <transition name="fade">
    <div
      v-if="isShowMenu"
      class="layout-menu"
    >
      <div
        v-for="m in menu"
        :key="m.id"
        class="layout-menu-item"
        :class="{active: isActive(m.id) }"
        @click="goToUrl(m.url)"
      >
        <div
          class="layout-menu-item-icon"
          v-html="m.icon"
        />
        <div class="layout-menu-item-title">
          {{ m.title }}
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

import store from 'Layout/store';
import Module from 'Layout/module';
import { mapState } from 'vuex';

export default {
  name: 'VueLayoutMenu',
  store,
  props: {
    currentPage: String,
  },
  data: () => ({
    module: new Module(),
  }),
  computed: {
    ...mapState(['isShowMenu', 'menu']),
  },
  methods: {
    goToUrl(url) {
      this.module.$$rout({
        path: url,
      });
    },
    isActive(page) {
      return page === this.currentPage;
    },
  },
};
</script>

<style lang="scss" scoped>
.layout-menu {
    min-width: 270px;
    background-color: #FFF;
    height: calc(100vh - 60px);

    &-item {
        display: flex;
        height: 56px;
        align-items: center;
        color: #8894b4;
        cursor: pointer;

        &-icon {
            width: 24px;
            height: 24px;
            margin-left: 24px;
        }

        &-title {
            font-family: Roboto-Regular;
            font-size: 16px;
            margin-left: 24px;
        }
    }

    &-item:hover {
        background-color: #f7fafd;
        border-left: solid 3px #4694dd;
        color: #4694dd;

        .layout-menu-item-icon {
            margin-left: 21px;
        }
    }

    .active {
        background-color: #f7fafd;
        border-left: solid 3px #4694dd;
        color: #4694dd;
        .layout-menu-item-icon {
            margin-left: 21px;
        }
    }
}

.fade-enter-active, .fade-leave-active {
 transition: all .5s;
}

.fade-enter, .fade-leave-to {
  transform: translateX(-270px);
  opacity: 0.6;
}
</style>
