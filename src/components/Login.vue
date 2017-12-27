<<template>
  <div class = "login">
    <h3>Sign In</h3>
    <input type="text" v-model = "username"placeholder="Enter a username"><br>
    <input type="password" v-model = "pw" placeholder="Password"><br>
    
    <button v-on:click = "login" class="btn btn-success">Login</button>
    <p>You don't have any account? You can <router-link to="/signup">create one</router-link></p>
  </div>
</template>

<script>
  import firebase from 'firebase'
  export default{
      name: 'login',
      data: function(){
        return{
          username: '',
          pw: '',
          error: '',
        }
      },
      methods: {
        login: function(){
          firebase.auth().signInWithEmailAndPassword(this.username,this.pw).then(() => {
            this.$router.replace('hello')
          }).catch((error) => {
            if(error.code == "auth/user-not-found"){
                this.error = "wrong username or password"
            }else{
                 this.error = error.message
            }
           
            this.username = ''
            this.pw = ''

          })
        }
      }
  }
</script>

<style scoped>
.login{
    margin-top: 40px;
}
input{
    margin: 10px 0;
    width: 20%;
    padding: 15px;
}
button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
}
p{
    margin-top: 40px;
    font-size: 13px;
}
p a{
    text-decoration: underline;
    cursor: pointer;
}
.alert-danger{
  width: 40%;
  margin-left: auto;
  margin-right: auto;
}

</style>

