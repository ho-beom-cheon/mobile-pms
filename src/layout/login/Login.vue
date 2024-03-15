<template>
  <section class="login">
    <div class="loginBx">
      <div class="top">
        <img src="../../assets/img/PE-icon/logo_Eyes.svg" alt="logo">
      </div>
      <div class="body">
        <em>
          로그인
        </em>
        <h1>
          최초비밀번호를 변경해야 로그인할 수 있습니다. <br>
          비밀번호를 변경 후 다시 로그인하세요.
        </h1>
        <span class="info-msg">
          <i class="ic-info"></i>
          <p>최초비밀번호 : 사번 + 211111</p>
        </span>
        <table class="form-table">
          <tbody>
          <tr>
            <th>프로젝트</th>
            <td>
              <select v-model="pjt_selected" style="width: 300px;">
                <option
                    v-for   = "(pjt_list,idx) in pjt_list"
                    :key    ="idx"
                    v-text  ="pjt_list.text"
                    :value  ="pjt_list.value"
                ></option>
              </select>
            </td>
          </tr>
          <tr>
            <th>로그인 사번</th>
            <td>
              <div class="input-searchWrap">
                <input type="text"
                       placeholder="로그인 사번"
                       v-model="userId"
                       style="width: 300px;"
                       @keyup.enter="open_pjte9001(1)"
                >
                <button class="search-btn3"
                        @click="open_pjte9001(1)"
                ></button>
              </div>
              <h6 class="mt-1" style="color:red; font-size: small" v-if="idCheak">로그인 사번은 필수 입력 사항입니다.</h6>
            </td>
          </tr>
          <tr>
            <th>비밀번호</th>
            <td>
              <input type="password" placeholder="비밀번호" name="password"
                     id="password" v-model="password" style="width: 300px;"
                     @keyup.enter="login"
              >
              <p class="mt-1" style="color:red; font-size: small" v-if="pwCheak">비밀번호는 필수 입력 사항입니다.</p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="bottom">
        <base-button class="btn btn-primary" @click="login">로그인</base-button>
        <base-button class="btn btn-primary" @click="passwordChg">비밀번호변경</base-button>

      </div>
    </div>

  </section>
</template>
<script setup>

</script>

<style scoped>
@media (max-width: 768px) {
  .loginBx {
    width: 90%;
    margin: auto;
  }

  .form-table {
    width: 100%;
  }

  .form-table th, .form-table td {
    padding: 10px;
  }

  .form-table input, .form-table select {
    width: 100%;
  }

  .btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
