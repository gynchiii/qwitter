<template>
  <q-icon name="fas fa-dove" size="lg" class="q-pa-md" color="primary" />
      <q-list class="">

       <q-item
          to="/"
          exact
          clickable
          v-ripple
          class="q-mb-sm">
          <q-item-section avatar>
            <q-icon size="md" name="home" />
          </q-item-section>
          <q-item-section class="text-weight-bold text-h6">Home</q-item-section>
        </q-item>

        <q-item
          to="/about"
          exact
          clickable
          v-ripple
          class="q-mb-sm">
          <q-item-section avatar>
            <q-icon  size="md" name="info" />
          </q-item-section>
          <q-item-section class="text-weight-bold text-h6">About</q-item-section>
        </q-item>

        <q-item
           to=""
           exact
           clickable
           v-ripple
           class="q-mb-sm">
          <q-item-section avatar>
            <q-icon  size="md" name="account_circle" />
          </q-item-section>
          <q-item-section class="text-weight-bold text-h6">Account</q-item-section>
        </q-item>

        <q-item
           to=""
           exact
           clickable
           v-ripple
           class="q-mb-sm">
          <q-item-section avatar>
            <q-icon  size="md" name="help" />
          </q-item-section>
          <q-item-section class="text-weight-bold text-h6">Help</q-item-section>
        </q-item>
      </q-list>
</template>

<script>
export default {

}
</script>

<style>

</style>