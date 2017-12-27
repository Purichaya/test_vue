<template>
  <div class = "sign-up">
    <h3>Sign up</h3>
    <input type="text" v-model="name" placeholder="Enter a username"><br>
    <input type="password" v-model="pw" placeholder="Password"><br>
    <button v-on:click="doThis">SIGN UP</button>
    <p><a><router-link to="/login">back</router-link></a></p>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default{
      name: 'sign-up',
      data: function(){
        return{
            name : '',
            pw : ''
        }
      },
      methods: {
          doThis:function()
          {
              firebase.auth().createUserWithEmailAndPassword(this.name,this.pw).then(()=>{
                  this.$router.replace('hello')
              }).catch(function(error){
                  var errorCode = error.code
                  var errorMsg = error.message
                  console.log(errorMsg)
              })
          }
      }
  }
</script>

<style scoped>
.sign-up{
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

</style>
