<template>
  <div class="dictionary-entry" v-if="entry">
    <div class="header">
      <h1 class="word">{{entry.word}}</h1>
      <span class="spelling-text">{{entry.pronunciations[0].phoneticSpelling}}</span>
      <FontAwesomeIcon class="spelling-audio" :icon="icon" @click="playAudio" />
      <audio ref="audioPlayer" v-bind:src="entry.pronunciations[0].audioFile"></audio>
    </div>
    <div class="subheader">
      <span>{{entry.lexicalCategory}}</span>
    </div>
    <div class="content">
      <div>
        <p
          class="definition"
          v-bind:key="definition"
          v-for="definition in entry.definitions"
        >{{ definition }}</p>
      </div>
      <div>
        <p
          class="example"
          v-bind:key="example.text"
          v-for="example in entry.examples"
        >{{ example.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "DictionaryEntry",
  data() {
    return {
      icon: faVolumeUp
    };
  },
  props: {
    entry: Object
  },
  methods: {
    playAudio() {
      this.$refs.audioPlayer.play();
    }
  },
  components: {
    FontAwesomeIcon
  }
};
</script>

<style scoped>
.dictionary-entry {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.header {
  display: flex;
  align-items: baseline;
}

.word {
  text-transform: capitalize;
  margin-right: 10px;
}

.spelling-text::before {
  content: "/";
}

.spelling-text::after {
  content: "/";
}

.spelling-audio {
  position: relative;
  bottom: 10px;
}

.spelling-audio:hover {
  cursor: pointer;
}

.definition::first-letter {
  text-transform: capitalize;
}

.example {
  color: #999696;
}

.example::first-letter {
  text-transform: capitalize;
}
</style>
