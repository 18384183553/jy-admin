<template>
  <div class="sidebar-logo-container" :class="{'collapse':collapse}">
    <transition name="sidebarLogoFade">
      <router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" class="sidebar-logo">
        <h1 v-else class="sidebar-title">{{ title }} </h1>
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" class="sidebar-logo">
        <h1 class="sidebar-title">{{ title }} </h1>
        <i class="el-icon-arrow-right" @mouseover="show"></i>
        <div class="company-wrap" @mouseleave="hide" v-if="showCompany">
          <transition>
            <el-card>
              <div style="height:300px">
                <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
                  <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
                </ul>
              </div>
            </el-card>
          </transition>
        </div>
      </router-link>
    </transition>

  </div>
</template>

<script>
  export default {
    name: 'SidebarLogo',
    props: {
      collapse: {
        type: Boolean,
        required: true,
      }
    },
    data() {
      return {
        showCompany: false,
        count: 0,
        title: 'Admin',
        logo: 'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png'
      }
    },
    methods: {
      show(e) {
        this.showCompany = true
      },
      hide(e) {
        this.showCompany = false
      },
      load() {
        this.count += 2
      }
    }
  }

</script>

<style lang="scss" scoped>
  .sidebarLogoFade-enter-active {
    transition: opacity 1.5s;
  }

  .sidebarLogoFade-enter,
  .sidebarLogoFade-leave-to {
    opacity: 0;
  }

  .sidebar-logo-container {
    position: relative;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #2b2f3a;
    text-align: center;
    overflow: hidden;

    & .sidebar-logo-link {
      height: 100%;
      width: 100%;

      & .sidebar-logo {
        width: 32px;
        height: 32px;
        vertical-align: middle;
        margin-right: 12px;
      }

      & .sidebar-title {
        display: inline-block;
        margin: 0;
        color: #fff;
        font-weight: 600;
        line-height: 50px;
        font-size: 14px;
        font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
        vertical-align: middle;
      }
    }

    &.collapse {
      .sidebar-logo {
        margin-right: 0px;
      }
    }

    .el-icon-arrow-right {
      font-size: 20px;
      position: fixed;
      left: 180px;
      top: 15px;
      z-index: 100000;
      color: #eee;
    }

    .el-icon-arrow-right:hover {}

    .company-wrap {
      font-size: 20px;
      width: 300px;
      position: fixed;
      left: 200px;
      top: 15px;
      z-index: 100000;
      color: #eee;
    }
    .infinite-list{
      height: 100%;
      .infinite-list-item{

      }
    }
  }

</style>
