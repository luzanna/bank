<template>
  <div id="app">
      <div class="content menu">
        <Menu/>
      </div>
      <div class="content">
        <transition name="component-fade" mode="out-in">
          <router-view v-bind:onLearn="onLearn" v-bind:formData="formData" />
        </transition>
      </div>
    </div>

</template>

<script>

import Menu from './components/Menu.vue';

export default {
  name: 'App',

  components: {
    Menu,
  },
  data(){
    return {
      formData: {},
    }
  },
  methods:{

    // получение данных о транзакции из дочернего компонента Рау
    onLearn(data){
      return this.formData = data;
    }
  }
}
</script>

<style>

  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .component-fade-enter, .component-fade-leave-to
    /* .component-fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }


body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #080411;
  padding-top: 60px;
  padding-bottom: 60px;
  vertical-align: top;
}
  .content{
    display: inline-block;
    vertical-align: top;
  }
</style>
