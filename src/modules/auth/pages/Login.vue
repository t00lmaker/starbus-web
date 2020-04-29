<template>
  <div class="container">
    <div class="row">
      <main>
        <center>
          <div class="row">
            <div class="blue-text z-depth-4 lighten-4 row container login-card">
              <div class="row">
                <div class="logo">
                  <img alt="Starbus logo" src="/logo.png">
                </div>
              </div>
              <div class="row">
                <div class="col s12 m12 l8 push-l2"> 
                  <h5> Entrar no Starbus</h5>
                  <span class="title">Suba a bordo!</span>
                </div>
                
              </div>
              <div class='row'>
                <div class='input-field col s12 m12 l8 push-l2'>
                  <i class="material-icons prefix icon-blue ">face</i>
                  <input class='validate' type="text" name='username' id='email' required />
                  <label for='email'>Username</label>
                </div>
              </div>
              <div class='row'>
                <div class='input-field col s12 m12 l8 push-l2'>
                  <i class="material-icons prefix icon-blue">lock_open</i>
                  <input class='validate ' type='password' name='password' id='password' required />
                  <label for='password'>Password</label>
                </div>
              </div>
              <br/>
              <div class='row'>
                <div class='input-field col s12 m8 l8 offset-m2 offset-l2 '>
                  <button type='submit' name='btn_login' class='btn blue'>Entrar</button>
                </div>
              </div>
              <div class="row">
                <center>
                  <div class="input-field col s6 m6 l3 push-l2  ">
                    <p class="margin medium-small"><a href="#">Registrar-se!</a></p>
                  </div>
                  <div class="input-field col s6 m6 l3 push-l4">
                      <p class="margin right-align medium-small "><a href="#">Recuperar senha?</a></p>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </center>
      </main>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  created (){
    this.ActionSetUser({ name: "Luan", email: "luanpontes2@gmail.com"})
  },
  methods: {
    ...mapActions('auth', ['ActionSetUser'])
  }
}
</script>

<style scoped>
.container {
  display: inline-block; 
  padding: 48px 48px 0px 48px; 
  border: 1px;
}

.login-card {
  background-color: white;
}

@media (max-width: 600px) 
{
  .container {
    margin: 7% 0;
    padding: 12px 12px 12px 12px; 
    border: 1px;
    width: 100%;
   }
}

/* label color */
.input-field label {
  color: #90caf9;
}

.input-field input[type=text] {
  border-bottom: 1px solid #64b5f6 ;
  box-shadow: 0 1px 0 0 #64b5f6 ;
}
.input-field input[type=password] {
  border-bottom: 1px solid #64b5f6 ;
  box-shadow: 0 1px 0 0 #64b5f6 ;
}

/* label underline focus color */
.input-field input[type=text]:focus {
  border-bottom: 1px solid #0d47a1;
  box-shadow: 0 1px 0 0 #0d47a1;
}
.input-field input[type=password]:focus {
  border-bottom: 1px solid #0d47a1;
  box-shadow: 0 1px 0 0 #0d47a1;
}

/* label focus color */
.input-field input[type=text]:focus + label {
  color: #0d47a1;
}
.input-field input[type=password]:focus + label {
  color: #0d47a1;
}


/* valid color */
.input-field input[type=text].valid {
  border-bottom: 1px solid #64b5f6 ;
  box-shadow: 0 1px 0 0 #64b5f6 ;
}
.input-field input[type=password].valid {
  border-bottom: 1px solid #64b5f6 ;
  box-shadow: 0 1px 0 0 #64b5f6 ;
}

.input-field input[type=text].valid {
  border-bottom: 1px solid #64b5f6 ;
  box-shadow: 0 1px 0 0 #64b5f6 ;
}
.input-field input[type=password].valid {
  border-bottom: 1px solid #64b5f6 ;
  box-shadow: 0 1px 0 0 #64b5f6 ;
}

/* invalid color */
.input-field input[type=text].invalid {
  border-bottom: 1px solid #e57373 ;
  box-shadow: 0 1px 0 0 #e57373 ;
}
.input-field input[type=password].invalid {
  border-bottom: 1px solid #e57373 ;
  box-shadow: 0 1px 0 0 #e57373 ;
}

/* icon prefix focus color */
.input-field .prefix.active {
  color: #0d47a1 ;
}

/* icon prefix focus color */
.input-field .prefix {
  color: #64b5f6  ;
}

</style>