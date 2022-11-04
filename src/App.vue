<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/Count">Count</router-link> |
    <router-link to="/Computed">computed</router-link> |
    <router-link to="/Conditional">Conditional</router-link> |
    <router-link to="/PostCode">PostCode</router-link>
  </nav>
  <router-view />
</template>



<!-- #1#
<script>
import Count from './components/Count.vue'
import HelloWorld from './components/HelloWorld.vue'

const routes = {
  '/': HelloWorld,
  '/count': Count
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  }
}
</script>

<template>
  <nav>
    <a href="#/">HelloWorld</a> |
    <a href="#/count">Count</a> |
    <a href="#/non-existent-path">잘못된 링크</a>
  </nav>
  <component :is="currentView" />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->
