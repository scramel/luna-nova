<template>
  <router-view v-slot="{ Component }">
    <transition mode="out-in" name="zoom">
      <component id="view" :is="Component"/>
    </transition>
  </router-view>
</template>

<script>
export default {
  mounted() { // Sets locale once mounted
    this.$i18n.locale = this.$cookies.get('locale') || 'en'
  }
}
</script>

<style lang="scss">
*,p  { margin: 0; padding: 0; }
html { background-color: #252525; }
body { // Page bg image
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("./assets/img/bg-luna-2.jpg");
}

// FONTS
@font-face {
  font-family: Spectral-Regular;
  src: url(./assets/fonts/Spectral-Regular.ttf);
}
@font-face {
  font-family: ClickerScript;
  src: url(./assets/fonts/ClickerScript-Regular.ttf);
}

// MIXINS
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

// Custom scrollbar
::-webkit-scrollbar {
  width: 5px;
  @media (max-width: 768px) { width: 3px; }
  &-track {
    background: rgba(0, 0, 0, .4); 
    border-radius: 10px;
  }
  &-thumb {
  border-radius: 10px;
  transition: .2s;
  background: rgb(255, 255, 255, .6); 
    &:hover {
      background: rgba(255, 255, 255, .8); 
    }
  }
}

#app { // Main app styles
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
    text-decoration: none;
    transition: .2s;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(1);
    }
    &.unavailable {
      cursor: not-allowed;
      filter: brightness(.5);
    }
  }
  p {
    @include text-shadow;
    font-size: max(2vw, 20px);
    text-indent: 5vw;
    text-align: justify;
    margin: 5vw 10vw;
  }
  h1, h2, h3, h4 {
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
  h3 { font-size: max(6vw, 60px);  margin: 0; }
  h4 { font-size: max(2vw, 26px);  margin: 0; font-family: spectral; }
}

#nav { // Navbar -unused-
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,.5);
  z-index: 0;
  a { // Navbar links
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

#view { // CSS for all views
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 100vh;
  z-index: 0;
}

.bgimg { // For centering and scaling background images nicely
  position: fixed;
  object-fit: cover;
  height: 100vh;
  min-width: 100vw;
  transform: translate(calc(50vw - 50%));
  margin: 0 auto;
  filter: brightness(.6);
  transition: .2s;
  &-1 {
    filter: hue-rotate(60deg) brightness(.6);
  }
}

.f-row { // Flex row
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.f-col { // Flex column
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

// TRANSITIONS
.zoom-enter-active,
.zoom-leave-active {
  transition: all .8s ease;
}
.zoom-enter-from,
.zoom-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>