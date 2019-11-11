<template>
  <div class="home">
    <div class="feedback" v-if="!entry">
      <span v-if="isSearching">Searching...</span>
      <span v-else-if="!hasSearched">Please, type in a word</span>
      <span v-else>Sorry! Couldn't find that word :(</span>
    </div>
    <SearchBar class="search-bar" @search="onSearch" />
    <DictionaryEntry v-if="entry" v-bind:entry="entry" />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import DictionaryEntry from "@/components/DictionaryEntry.vue";
import dictionaryApi from "@/api/dictionaryApi";

export default {
  name: "home",
  data() {
    return {
      entry: null,
      error: false,
      isSearching: false,
      hasSearched: false
    };
  },
  props: {
    word: String
  },
  created() {
    this.fetchEntriesByProps();
  },
  watch: {
    word() {
      this.fetchEntriesByProps();
    }
  },
  methods: {
    fetchEntriesByProps() {
      const word = this.word;
      if (word) {
        this.fetchEntries(word);
      }
    },
    async fetchEntries(word) {
      this.isSearching = true;
      const response = await dictionaryApi.getEntries(word);

      if (response.error) {
        this.error = true;
      } else {
        this.entry = response.data;
      }

      this.isSearching = false;
      this.hasSearched = true;
    },
    onSearch(word) {
      if (word) {
        this.setNavigationParam(word);
      }
    },
    setNavigationParam(word) {
      this.$router.push({ name: "home", params: { word } });
    }
  },
  components: {
    SearchBar,
    DictionaryEntry
  }
};
</script>

<style scoped>
.home {
  width: 100%;
  max-width: 400px;
}

.search-bar {
  margin: 30px 0;
}

.feedback {
  display: flex;
  justify-content: center;
}
</style>
