<template>
    <div>
        <span> x </span>
        <v-text-field style="width: 200px; margin-left: 45%" type="text" v-model="xvar"/>
        <span> y </span>
        <v-text-field style="width: 200px; margin-left: 45%" type="text" v-model="yvar"/>   
        <v-flex xs12 sm6 d-flex>
          <v-select
            :items="items"
            label="Ceva ce inca nu lucreaza"
            outline
          ></v-select>
        </v-flex>    
    </div>
</template>

<script>

export default {
  name: 'Input',
  computed: {
    xvar : {
      get : function(){
        return this.$store.getters.getX
      },
      set : function(val){
        this.$store.commit("setX", val)
      }
    },
    yvar : {
      get : function(){
        return this.$store.getters.getY
      },
      set : function(val){
        this.$store.commit("setY", val)
    }
  }
  },
  data: () => ({
    items: ['Suma', 'Diferenta', 'Inmultire', 'Impartire']
  })
}
</script>

<style scoped>
</style>
