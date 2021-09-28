<template>
  <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
    <div class="col">
      <q-input
        class="new-qweet"
        autogrow
        v-model="newQweetContent"
        label="O que está rolando?"
        counter
        bottom-slots
        maxlength="385"
      >
        <template v-slot:before>
          <q-avatar size="xl">
            <img
              src="https://lh3.googleusercontent.com/ogw/ADea4I64PuJ21nHejw7x6_4OWa28pNTGyhWjU4_ewGUWeGQ=s32-c-mo"
            />
          </q-avatar>
        </template>
      </q-input>
    </div>

    <div class="col col-shrink">
      <q-btn
        @click="addNewQweet"
        :disable="!newQweetContent"
        class="q-mb-lg"
        no-caps
        unelevated
        rounded
        color="primary"
        label="Qweet"
      />
    </div>
  </div>
  <q-separator size="4px" style="opacity: 0.3" color="primary" />
  <q-list separator>
    <transition-group
      appear
      enter-active-class="animated fadeInRight slow"
      leave-active-class="animated fadeOutLeft "
    >
      <q-item
        clickable
        draggable="true"
        v-for="qweet in qweets"
        :key="qweet.date"
        class="q-py-md qweet"
      >
        <q-item-section avatar top>
          <q-avatar size="xl">
            <img
              src="https://lh3.googleusercontent.com/ogw/ADea4I64PuJ21nHejw7x6_4OWa28pNTGyhWjU4_ewGUWeGQ=s32-c-mo"
            />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1">
            <strong>Joey Rafael</strong>
            <span class="text-grey-8 text-weight-light">
              <br class="gt-md" />
              @joeyrafaael &bull; {{ relativeDate(qweet) }} ago
            </span>
          </q-item-label>
          <q-item-label class="qweet-content text-body1">
            {{ qweet.content }}
          </q-item-label>
          <div class="row justify-between q-mt-sm qweet-icons">
            <q-btn
              flat
              round
              size="sm"
              style="opacity: 0.6"
              color="primary"
              icon="far fa-comment"
            />
            <q-btn
              flat
              round
              size="sm"
              style="opacity: 0.6"
              color="primary"
              icon="fas fa-retweet"
            />
            <q-btn
              flat
              round
              size="sm"
              style="opacity: 0.6"
              color="primary"
              icon="far fa-heart"
            />
            <q-btn
              @click="deleteQweet(qweet)"
              flat
              style="opacity: 0.7"
              round
              size="sm"
              color="primary"
              icon="fas fa-trash"
            />
          </div>
        </q-item-section>
      </q-item>
    </transition-group>
  </q-list>
</template>

<script>
import { formatDistance } from "date-fns";
import db from '/home/gynchiii/ALLTHINGS/qwitter/src/boot/firebase'

export default {
  data() {
    return {
      newQweetContent: "",
      qweets: [
        {
          content: "First qweet hahah! Lol ",
          date: 1632459158505,
        },
      ],
    };
  },
  // filters: {
  //     relativeDate(value) {
  //     formatDistance(value, new Date())
  //     }
  // },
  methods: {
    addNewQweet() {
      let newQweet = {
        content: this.newQweetContent,
        date: Date.now(),
      };
      this.qweets.unshift(newQweet);
      this.newQweetContent = "";
    },
    deleteQweet(qweet) {
      let dateToDelete = qweet.date;
      let index = this.qweets.findIndex((qweet) => qweet.date === dateToDelete);
      this.qweets.splice(index, 1);
      !important;
    },
    relativeDate({ date }) {
      let formatDate = new Date(date);
      return formatDistance(formatDate, new Date());
    },
  },
  mounted() {    
        db.collection('qweets').onSnapshot(snapashot => {
          snapshot.docChanges().forEach(change => {
            let qweetChange = change.doc.data()
        if (change.type === "added") {
          console.log("New qweet: ", qweetChange);
          this.qweets.unshift(qweetChange)
        }
        if (change.type === "modified") {
          console.log("Modified qweet: ", qweetChange);
        }
        if (change.type === "removed") {
          console.log("Removed qweet: ", qweetChange);
        }
      });
    });
  },
};
</script>

<style lang="sass">
.qweet-icons
  margin-left: -5px
</style>