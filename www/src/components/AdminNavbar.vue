<template>
  <div class="navbar">
    <div class="navbar-wrapper">
      <div class="container">
        <nav class="navbar navbar-inverse navbar-static-top">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <router-link to="/admindashboard" class="navbar-brand">Admin</router-link>
            </div>
            <div id="navbar" class="navbar-collapse collapse" style="font-size:20px;">
              <ul class="nav navbar-nav">
                <li>
                  <a class="toggles padding-right">|</a>
                </li>
                <li>
                  <a class="toggles padding-right" @click="toggleCards">Edit Cards</a>
                </li>
                <li>
                  <a class="toggles padding-right">|</a>
                </li>
                <li>
                  <a class="toggles padding-right" @click="toggleDungeons">Edit Dungeons</a>
                </li>
                <li>
                  <a class="toggles">|</a>
                </li>
                <li>
                  <a class="toggles padding-right">
                    <router-link :to="{ name: 'Dashboard' }" append>Dashboard</router-link>
                  </a>
                </li>
              </ul>
              <div id="navbar" class="navbar-collapse collapse" style="font-size:20px;">
                <div v-show="loggedIn">
                  <ul class="nav navbar-nav navbar-right padding-right">
                    <li>
                      <a class="capitalize">Hello, Admin!</a>
                    </li>
                    <li>
                      <a class="toggles" @click="logout(user)">Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'navbar',
  data() {
    return {}
  },
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn
    },
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    logout(user) {
      this.$store.dispatch('logout', user)
    },
    toggleDecks() {
      this.$store.dispatch('toggleDecks')
    },
    toggleInventory() {
      this.$store.dispatch('toggleInventory')
    },
    toggleDungeons() {
      this.$store.dispatch('toggleDungeons')
    }
  },
  components: {}
}
</script>


<style scoped>
.padding-right {
  padding-right: 25px;
}

#login-dp {
  min-width: 250px;
  padding: 14px 14px 0;
  overflow: hidden;
  background-color: rgba(255, 255, 255, .8);
}

#login-dp .help-block {
  font-size: 12px
}

#login-dp .bottom {
  background-color: rgba(255, 255, 255, .8);
  border-top: 1px solid #ddd;
  clear: both;
  padding: 14px;
}

#login-dp .social-buttons {
  margin: 12px 0
}

#login-dp .social-buttons a {
  width: 49%;
}

#login-dp .form-group {
  margin-bottom: 10px;
}

.btn-fb {
  color: #fff;
  background-color: #3b5998;
}

.btn-fb:hover {
  color: #fff;
  background-color: #496ebc
}

.btn-tw {
  color: #fff;
  background-color: #55acee;
}

.btn-tw:hover {
  color: #fff;
  background-color: #59b5fa;
}



/* @media(max-width:768px) {
  #login-dp {
    background-color: inherit;
    color: #fff;
  }
  #login-dp .bottom {
    background-color: inherit;
    border-top: 0 none;
  }
} */
</style>