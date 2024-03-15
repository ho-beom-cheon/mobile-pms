<template>
 <header class="GNB">
  <div class="gnb-logo">
    <a href="./PJTE8000" v-if="this.projId === '0000000001'">
      <img src="../assets/img/PE-icon/logo_Eyes.svg" alt="logo">
    </a>
    <a href="./PJTE9900" v-else-if="this.projId === '0000000003'">
      <img src="../assets/img/PE-icon/logo_Eyes.svg" alt="logo">
    </a>
    <a href="./PJTE9005" v-else-if="this.projId === '0000000004'">
      <img src="../assets/img/PE-icon/logo_Eyes.svg" alt="logo">
    </a>
    <a href="./PJTE1000" v-else>
      <img src="../assets/img/PE-icon/logo_Eyes.svg" alt="logo">
    </a>
  </div>
  <div class="gnb-con">
    <ul class="gnb-menu">
      <li class="active" v-if="this.projId ==='0000000001'"><a href="#">{{ this.current_menu }}</a></li>
      <li class="active" v-else-if="this.projId ==='0000000003'"><a href="#">{{ this.current_menu2 }}</a></li>
      <li class="active" v-else><a href="#">{{ this.current_menu }}</a></li>
      <li><a href="#"></a></li>
    </ul>
    <div class="gnb-etc">
      <a href="./PJTE9000">
        <div class="imgWrap">
          <img src="../assets/img/PE-icon/ic_profile.svg" alt="profile">
        </div>
        <span>{{ empnm }} 님</span>
      </a>
      <button class="btn logOut" @click="logout">로그아웃</button>
    </div>
  </div>
</header>
</template>

<script>
import { ref, onMounted } from 'vue';


export default {
  components: {
  },
  setup() {

    const current_menu = ref('');
    const current_menu2 = ref('');

    // Your menu_list and menu_list2 remain the same

    const logout = () => {
      // Your logout function remains the same
    };

    const fn_current_menu = () => {
      // Your fn_current_menu function remains the same
    };

    const fn_current_menu2 = () => {
      // Your fn_current_menu2 function remains the same
    };

    onMounted(() => {
      fn_current_menu();
      fn_current_menu2();
    });

    return {
      current_menu,
      current_menu2,
      logout,
      fn_current_menu,
      fn_current_menu2
    };
  }
};
</script>

<style>
/* Your styles remain the same */
</style>
