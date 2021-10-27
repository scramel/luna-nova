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

#app { // Main aPP styles
  font-family: Spectral-Regular, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f3f3f3;
  font-size: 4vh;
  overflow: hidden;
  a { color: white; }
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
  position: absolute;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 0;
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

body {
  background-size: auto;
  background-position: top;
  background-repeat: repeat;
  background-image: url("./assets/img/bg.jpg");
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