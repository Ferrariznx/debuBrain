<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-title">登录</div>
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" 
          v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{ userErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" 
          v-model="passwordModel" placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{ passwordErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登录</a>
        </div>
      </div>
      <p>{{ errorText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      usernameModel: '',
      passwordModel: '',
      errorText: ''
    }
  },
  computed: {
    userErrors () {
      let errorText, status
      if (!/jj/g.test(this.usernameModel)) {
        status = false
        errorText = '没有jj'
      }
      else {
        status = true
        errorText = ''
      }
      if (!this.userFlag) {
        errorText = ''
        this.userFlag = true
      }
      return {
        status,
        errorText
      }
    },
    passwordErrors () {
      let errorText, status
      if (!/^\w{4,8}$/g.test(this.passwordModel)) {
        status = false
        errorText = '密码要在4-8位噢'
      }
      else {
        status = true
        errorText = ''
      }
      if (!this.passwordFlag) {
        errorText = ''
        this.passwordFlag = true
      }
      return {
        status,
        errorText
      }
    }
  },
  methods: {
    onLogin () {
        if(!this.userErrors.status|| !this.passwordErrors.status){
            this.errorText='请认真查看要求再注册！'
        }
        else{
            this.errorText=''
            this.$http.get('api/login').then((res) => {
                this.$emit('has-log',res.data)
            },(error) => {

            })
        }
      console.log(this.usernameModel)
      console.log(this.passwordModel)
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.g-title{
    margin-bottom: 22px;
    height: 30px;
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: #0099ED;
}
</style>
