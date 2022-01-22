<template>
  <div class="extras">
    <!-- Image displayer -->
    <transition mode="out-in" name="fade">
      <div v-if="img" class="full-view" @click="img=null">
        <img alt="Artwork" :src="require(`@/assets/img/art-${img}.png`)">
      </div>
    </transition>
    <!-- Page -->
    <div class="f-col">
      <h3>{{ $t('extras') }}</h3>
      <ul class="f-col">
				<img v-for="item in 5" :key="item" :alt="`Artwork ${item}`" :src="require(`@/assets/img/art-${item}.png`)" @click="img=item">
      </ul>
      <br>
      <router-link to="/">&lt; {{ $t('back') }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: null
    }
  }
}
</script>

<style lang="scss" scoped>
  .extras {
    flex-direction: row !important;
    font-size: max(1.5vw, 20px);
    // p {
    //   font-size: max(1.5vw, 20px) !important;
    //   margin: 0 5vw 0 0 !important;
    // }
    div {
      width: 100%;
      &.full-view {
        display: flex;
        position: absolute;
        background: rgb(0, 0, 0);
        height: 100vh;
        justify-content: center;
        align-content: center;
        cursor: pointer;
        z-index: 2;
        img {
          margin: auto;
          width: 100vw;
          max-width: 1280px;
        }
      }
    }
    a {
      text-decoration: none;
    }
    ul {
      width: 80%;
      @media (max-width: 768px) { width: 83%; }
      text-align: left;
      list-style-type: none;
      justify-content: flex-start;
      // flex-wrap: wrap;
      height: 55vh;
      overflow: auto;
      img {
        max-width: 50vw;
        transition: .2s;
        cursor: pointer;
        &:hover {
          transform: scale(1.05);
        }
      }
    }
  }
	// Transitions
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .3s !important;
	}
	.fade-enter-from,
	.fade-leave-to {
		opacity: 0 !important;
	}
</style>