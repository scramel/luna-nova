<template>
  <div class="home">
    <div class="chapters f-col">
      <h1>Luna Nova</h1>
      <router-link to="/story?act=1">Continue</router-link>
      <router-link to="/story?act=1" class="available">Act 1: Luna Nova</router-link>
      <router-link to="/story?act=2">Act 2: Stellar Fields</router-link>
      <router-link to="/story?act=3">Act 3: Pathway to Ataraxia</router-link>
      <router-link to="/story?act=4">Act 4: A Note For You</router-link>
      <router-link to="/story?act=5">Act 5: Weissmond</router-link>
      <br>
      <router-link to="/extras">Extras</router-link>
      <router-link to="/credits" class="available">Credits</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .home {
    .chapters {
      transition: .2s;
      margin: auto;
      a {
        filter: brightness(.5);
        text-decoration: none;
        transition: .2s;
        &:hover {
          transform: scale(1.1);
        }
        &.available {
          filter: brightness(1)
        }
      }
    }
  }
</style>