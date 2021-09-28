<template>
  <q-footer bordered class="lt-sm border-class bg-white text-grey-10 small-screen-only" >
      <q-tabs
        active-color="primary"
        indicator-color="transparent"
        dense
        class="text-black q-pa-sm text-weight-bold"
      >
        <q-route-tab exact to="/" name="Home" no-caps label="Home" icon="home" />
        <q-route-tab exact to="/" name="Account" label="Account" no-caps icon="account_circle" />
        <q-route-tab exact to="/" name="Help" label="Help" no-caps icon="help" />
        <q-route-tab exact to="/about" name="About" label="About" no-caps icon="info" />
      </q-tabs>
    </q-footer>
</template>

<script>
export default {}
</script>

<style lang="sass">
.border-class
  border-top: 1.5px solid
  border-top-color: $primary
</style>