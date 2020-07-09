<template>
  <div class="layout-header">
    <div class="layout-header-start">
      <div
        class="layout-header-start-menu-icon"
        @click="showMenu()"
        v-html="isShowMenu ? iconMenuOpen : iconMenuClose"
      />
      <div
        class="layout-header-start-logo"
        @click="home"
        v-html="iconLogo"
      />
    </div>
    <div class="layout-header-end">
      <div
        class="layout-header-end-ava"
        @click="user"
        v-html="iconAva"
      />
      <div
        class="layout-header-end-exit"
        @click="exit"
        v-html="iconExit"
      />
    </div>
  </div>
</template>

<script>
import menuClose from 'Images/icon/menu-close.svg';
import menuOpened from 'Images/icon/menu-opened.svg';
import logo from 'Images/icon//logo.svg';
import ava from 'Images/icon/ava.svg';
import exit from 'Images/icon/exit.svg';

import store from 'Layout/store';

import { mapMutations, mapState } from 'vuex';
import Module from 'Layout/module';

export default {
  name: 'VueLayoutHeader',
  store,
  data: () => ({
    iconMenuOpen: menuOpened,
    iconMenuClose: menuClose,
    iconLogo: logo,
    iconAva: ava,
    iconExit: exit,
  }),
  computed: {
    ...mapState(['isShowMenu']),
  },
  methods: {
    ...mapMutations(['setState']),

    exit() {
      localStorage.removeItem('authentication_token');
      localStorage.removeItem('refresh_token');

      const module = new Module();
      module.$$rout({
        path: '/auth',
      });
    },

    home() {
      const module = new Module();
      module.$$rout({
        path: '/main',
      });
    },

    user() {
      const module = new Module();
      module.$$gemit('notify', {
        text: 'User',
      });
    },

    showMenu() {
      const module = new Module();
      module.$$emit('onShowMenu', !this.isShowMenu);
      this.setState({ name: 'isShowMenu', value: !this.isShowMenu });
    },
  },
};
</script>

<style lang="scss" scoped>
.layout-header{
    width: 100vw;
    height: 60px;
    background-color: #FFF;
    display: flex;

    &-start {
        width: 50%;
        display: flex;
        align-items: center;

        &-menu-icon {
            cursor: pointer;
            margin-left: 24px;
            width: 24px;
            height: 24px;
        }

        &-logo {
            cursor: pointer;
            margin-left: 24px;
            width: 179px;
            height: 36px;
        }

        &-menu-icon:hover, &-logo:hover{
            opacity: 0.6;
        }
    }

    &-end {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        &-ava {
            cursor: pointer;
            width: 33px;
            height: 33px;
            margin-right: 24px;
        }

        &-exit {
            cursor: pointer;
            width: 24px;
            height: 24px;
            margin-right: 24px;
        }

        &-ava:hover, &-exit:hover {
            opacity: 0.6;
        }
    }
}
</style>
