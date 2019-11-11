<template>
  <div class="search-bar">
    <input class="input" placeholder="Search" v-model="searchTerm" @input="onInput" />
    <FontAwesomeIcon class="icon" :icon="icon" />
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import debounce from "lodash.debounce";

const DEBOUNCE_WAIT = 250;

export default {
  name: "SearchBar",
  data() {
    return {
      searchTerm: "",
      icon: faSearch
    };
  },
  props: {
    msg: String
  },
  created() {
    this.onInput = debounce(this.onInput, DEBOUNCE_WAIT);
  },
  methods: {
    onInput() {
      this.$emit("search", this.searchTerm);
    }
  },
  components: {
    FontAwesomeIcon
  }
};
</script>

<style scoped>
.search-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.input {
  padding: 10px;
  width: 100%;
  background-color: transparent;
  border: 1px solid black;
}

.input:focus {
  outline: none;
}

.icon {
  position: absolute;
  right: 10px;
  z-index: -1;
}
</style>
