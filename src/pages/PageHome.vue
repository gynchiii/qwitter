<template>
  <q-page class="">
   
    <q-separator
      size="8px"
      class="separator-border"
      color="grey-3" />

    <Posts />
   
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Posts from '../components/Posts'

export default defineComponent({
  name: "PageHome",
  data() {
    return {
      newQweetContent: "",
    };
  },
  components: {
    Posts,
  }
});
</script>

<style lang="sass">
.new-qweet
  textarea
    font-size: 19px
    line-height: 1.4 !important
.separator-border
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
.qweet-content
  white-space: pre-line

</style>