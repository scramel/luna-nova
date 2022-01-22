<template>
  <div class="credits">
    <div class="f-col">
      <h3>{{ $t('credits') }}</h3>
      <ul class="f-col">
        <!-- contributors -->
        <div v-for="(credit, index) in credits" :key="index">
          <img alt="pfp" :src="require(`@/assets/img/logos/${credit.img}.png`)">
          <li><b>
            {{ credit.name }}
            <abbr v-for="(link, index) in credit.links" :key="index" :title="link.icon.toUpperCase()">
              <img alt="media link" :src="require(`@/assets/img/icons/${link.icon}.png`)" @click="goTo(link.url)">
            </abbr>
          </b>{{ credit.role }}.</li>
        </div>
        <!-- album -->
        <br>
        <p>{{ $t('thanks') }}</p>
        <br>
        <iframe 
          seamless
          style="border: 0; width: auto; min-height: 470px;"
          src="https://bandcamp.com/EmbeddedPlayer/album=3050171377/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/">
            <a href="https://scramel.bandcamp.com/album/luna-nova">Luna Nova by Scramel &amp; SCAR</a>
          </iframe>
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
      credits: [{
        name: 'Scramel',
        role: this.$t('credit.scramel'),
        img: 'scramel',
        links: [{
          url: 'https://www.youtube.com/c/Scramel',
          icon: 'youtube'
        }, {
          url: 'https://soundcloud.com/scramel',
          icon: 'soundcloud'
        }, {
          url: 'https://twitter.com/scramelworks',
          icon: 'twitter'
        }, {
          url: 'https://open.spotify.com/artist/5tb0TchU1DOGgRwd0RDZTT',
          icon: 'spotify'
        }, {
          url: 'https://github.com/scramel',
          icon: 'github'
        }]
      }, {
        name: 'SCAR',
        role: this.$t('credit.scar'),
        img: 'scar',
        links: [{
          url: 'https://www.youtube.com/c/SCARTRACKS',
          icon: 'youtube'
        }, {
          url: 'https://soundcloud.com/scartracks',
          icon: 'soundcloud'
        }, {
          url: 'https://twitter.com/scar_tracks',
          icon: 'twitter'
        }, {
          url: 'https://open.spotify.com/artist/6mijCNHuRiVBRKP8mjDUSy',
          icon: 'spotify'
        }]
      }, {
        name: 'Walker',
        role: this.$t('credit.walker'),
        img: 'default'
      }, {
        name: 'Lord I.',
        role: this.$t('credit.lordi'),
        img: 'lordi'
      }, {
        name: 'KennyPyro',
        role: this.$t('credit.kennypyro'),
        img: 'kennypyro',
        links: [{
          url: 'https://toyhou.se/KennyPyro',
          icon: 'toyhouse'
        }, {
          url: 'https://twitter.com/kenny_pyro',
          icon: 'twitter'
        }]
      }, {
        name: 'Neato Firebird',
        role: this.$t('credit.neatofirebird'),
        img: 'neatofirebird'
      }, {
        name: 'Medu',
        role: 'Proofreader',
        img: 'default'
      }, {
        name: 'KeensBakery',
        role: this.$t('credit.keensbakery'),
        img: 'keensbakery',
        links: [{
          url: 'https://twitter.com/KeensBakery',
        role: this.$t('credit.medu'),
          icon: 'twitter'
        }]
      }]
    }
  },
  methods: {
    goTo(url) {
      window.open(url)
    }
  }
}
</script>

<style lang="scss" scoped>
  .credits { // html and css are a bit messy in this component, I'll have to remake it eventually.
    flex-direction: row !important;
    font-size: max(1.5vw, 20px);
    p {
      font-size: max(1.5vw, 20px) !important;
      margin: 0 5vw 0 0 !important;
    }
    div {
      width: 100%;
      // width: 46%
    }
    b {
        border-radius: 25px;
        background: #0000007c;
        display: flex;
        align-items: center;
        // padding: 0 1vw;
        img {
          margin-left: 1vw;
          height: max(1vw, 18px) !important;
          border-radius: 0 !important;
          transition: .2s;
          cursor: pointer;
          &:hover {
            transform: scale(1.2);
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
      height: 50vh;
      overflow: auto;
      div {
        // width: 40%;
        display: flex;
        align-items: center;
        &:not(:last-child) { margin-bottom: 1vh; }
        img {
          height: max(4vw, 50px);
          border-radius: 100px;
        }
      }
      li {
        display: flex;
        flex-direction: column;
        padding: 0 1vw;
        width: 100%;
      }
    }
  }
</style>