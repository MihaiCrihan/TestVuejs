<template>
 <div >
  <v-app dark>
    <v-nav
      absolute
      :value="true"
      color="transparent"
    >
      <!-- Feed -->
      <router-link
        to="/"
       
      >
        <v-btn
          color="white"
          flat
          value="feed"
        >
          
          <v-icon>Home</v-icon>
        </v-btn>
      </router-link>
      
      <!-- Profile -->
      <router-link
        to="/Input"
      >
        <v-btn
          color="white"
          flat
          value="profile"
        >
          <v-icon>Input</v-icon>
        </v-btn>
      </router-link>
      <router-link
        to="/Output"
       
      >
        <v-btn
          color="white"
          flat
          value="feed"
        >
          
          <v-icon>Output</v-icon>
        </v-btn>
      </router-link>
     <router-link
        to="/Students"
      >
        <v-btn
          color="white"
          flat
          value="profile"
        >
          <v-icon>Students</v-icon>
        </v-btn>
      </router-link>
    </v-nav>
    <router-view></router-view>
  </v-app>
</div>
</template>

<script>
export default {
  name: 'Menu',
  data: () => ({
    items: [
      { title: 'Home',to : "/Home" },
      { title: 'Input' },
      { title: 'Output' },
      { title: 'Students' }
    ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
