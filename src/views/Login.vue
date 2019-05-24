<template>
  <div class="login">
    <section class="container">
      <div class="manage_name">
        <span>用户登录</span>
      </div>
      <el-form :model="loginUser" :rules="rules" label-width="60px" label-position="left" ref="loginForm" class="loginForm">
      <el-form-item label="账号" prop="name">
        <el-input v-model="loginUser.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="loginUser.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="submit_but" @click="submitForm('loginForm')">提交</el-button>
      </el-form-item>
    </el-form>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  data () {
    return {
      loginUser: {
        name: '',
        pass: ''
      },
      rules: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { min: 2, max: 30, message: '长度在2到30个字符', trigger: 'blur' }
        ],
        pass: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 6, max: 30, message: '长度在6到30个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // element的验证方法
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.axios.get('/user/login', this.loginUser)
            .then(res => {
              if (res.status === 200) {
                const { userId, token } = res.data.user
                localStorage.setItem('token', token)
                localStorage.setItem('userId', userId)
                this.$message({
                  message: '登录成功',
                  center: true,
                  type: 'success'
                })
                // this.$router.push('/index')
              } else {
                console.log('error submit!!')
                return false
              }
            })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url('../assets/bg.jpg') no-repeat center center;
  background-size: 100% 100%;
  display: flex;
  display: -webkit-flex;
  align-items:center;
  justify-content:center;
}
.container {
  width: 360px;
  height: 240px;
  background: rgba(255, 255, 255, 0.705);
  border-radius: 5px;
  padding: 40px;
}
.manage_name {
  color: rgb(44, 58, 136);
  text-align: center;
  font-size: 20px;
  margin-bottom: 30px;
}
.submit_but {
  width: 100%;
}
</style>
