<template>
  <!-- <div id="nav">
    <router-link to="/luna-nova">Luna Nova</router-link>
    <router-link to="/"><img src="@/assets/img/logo.png" alt="Logo"></router-link>
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view v-slot="{ Component }">
    <transition mode="out-in" name="fade">
      <component id="view" :is="Component"/>
    </transition>
  </router-view>
</template>

<script>
export default {
  mounted() {
    this.$i18n.locale = this.$cookies.get('locale') || 'en'
  }
}
</script>

<style lang="scss">
*,p  { margin: 0; padding: 0; }
html { background-color: #252525; }

@font-face {
  font-family: Spectral-Regular;
  src: url(./assets/fonts/Spectral-Regular.ttf);
}
@font-face {
  font-family: ClickerScript;
  src: url(./assets/fonts/ClickerScript-Regular.ttf);
}

@mixin text-shadow {
  text-shadow: -2px 2px 2px #000,
    2px 2px 2px #000,
    2px -2px 0 #000,
    -2px -2px 0 #000,
    -3px 3px 3px rgba(0,0,0,.5),
    3px 3px 3px rgba(0,0,0,.5),
    3px -3px 0 rgba(0,0,0,.5),
    -3px -3px 0 rgba(0,0,0,.5);
}

#app { // Main aPP styles
  font-family: Spectral-Regular, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f3f3f3;
  font-size: max(2vw, 20px);
  overflow: hidden;
  a { 
    @include text-shadow;
    color: white;
  }
  p {
    @include text-shadow;
    font-size: max(2vw, 20px);
    text-indent: 5vw;
    text-align: justify;
    margin: 5vw 10vw;
  }
  h1, h2 {
    font-family: ClickerScript;
    font-weight: normal;
    text-align: center;
		margin-bottom: -2vw;
    cursor: default;
		text-shadow: -3px 3px 3px #000,
			3px 3px 3px #000,
			3px -3px 0 #000,
			-3px -3px 0 #000,
			-5px 5px 5px rgba(0,0,0,.5),
			5px 5px 5px rgba(0,0,0,.5),
			5px -5px 0 rgba(0,0,0,.5),
			-5px -5px 0 rgba(0,0,0,.5);
	}
  h1 { font-size: max(9vw, 60px); }
  h2 { font-size: max(8vw, 60px); }
}

#nav { // Navbar
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,.5);
  z-index: 0;
  img {
    justify-content: center;
    margin-top: 2vh;
    height: 12vh;
  }
  a {
    text-align: center;
    width: 10vw;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 100vh;
  z-index: 0;
}

.bgimg { // Global ID for centering and scaling background images nicely
  position: fixed;
  object-fit: cover;
  height: 100vh;
  min-width: 100vw;
  transform: translate(calc(50vw - 50%));
  margin: 0 auto;
  filter: brightness(.5);
}

.f-row {
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.f-col {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

// body {
//   background-size: auto;
//   background-position: top;
//   background-repeat: repeat;
//   background-image: url("./assets/img/bg.jpg");
// }

body {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("./assets/img/bg-luna-2.jpg");
}

.fade-enter-active,
.fade-leave-active {
  transition: all .8s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>