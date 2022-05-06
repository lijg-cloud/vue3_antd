<template>
  <div id="container">
    <a-layout style="min-height: 100vh">
      <a-layout-sider v-model:isCollapse="isCollapse" collapsible @collapse="onCollapse">
        <a-layout-header style="height: 50px; padding: 0; color: #fff; line-height: 50px; text-align: center">
          <!-- <img src="./assets/images/logo.png" alt="logo" width="18" height="18" style="margin-right: 5px"> -->
          <transition name="el-fade-in-linear">
            <span v-if="!isCollapse">vue3-antd</span>
          </transition>
        </a-layout-header>
        <a-menu
          v-model:openKeys="openKeys"
          v-model:selectedKeys="selectedKeys"
          ref="menuRef"
          background-color="#001529"
          text-color="#fff"
          active-text-color="#fff"
          theme="dark"
          :router="true"
          :openChange="onActiveMenu"
          mode="inline">
          <a-menu-item key="/home">
            <template #icon>
              <PieChartOutlined />
            </template>
            <router-link to="/home"></router-link>
            <span>Home</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <router-view />
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
  ConsoleSqlOutlined,
  FileSearchOutlined,
  FormOutlined
} from '@ant-design/icons-vue';
import { useMenuWithRoutr } from './composables/useElMenu'

export default defineComponent({
  name: 'App',
  components: {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
    ConsoleSqlOutlined,
    FileSearchOutlined,
    FormOutlined
  },
  setup() {
    const { isCollapse, onCollapse, onActiveMenu, menuRef, openKeys, selectedKeys } = useMenuWithRoutr()
    const isTest = process.env.CONFIG_ENV === 'test'
    return {
      isCollapse,
      onCollapse,
      onActiveMenu,
      menuRef,
      openKeys,
      selectedKeys,
      isTest
    }
  }
})
</script>

<style lang="less">

</style>>
