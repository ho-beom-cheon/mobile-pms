<template>
  <div id="app">
    <router-view name="header"></router-view>
    <main>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </main>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const fade = ref('fade');
    return { fade };
  },
};
</script>

<style>
@import "./assets/bootstrap-5.1.3-dist/css/bootstrap.css";
@import "./assets/css/reset.css";
@import "./assets/css/theme.css";

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
