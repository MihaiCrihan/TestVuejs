<template>
    <div>
      <h3> Suma =</h3>
      <v-text-field style="width: 200px; margin-left: 45%" type="text" v-model="messageFromStore"/>

    </div>
</template>

<script>

export default {
 name: 'Output',
 computed: {
   messageFromStore(){
    return (parseInt(this.$store.getters.getX) + parseInt(this.$store.getters.getY))
   }
 },
}
</script>

<style scoped>
</style>