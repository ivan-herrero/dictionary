<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
html,
body {
  margin: 0;
  font-family: "Roboto", sans-serif;
}

h1 {
  margin: 0;
}

p {
  text-align: justify;
}

#app {
  height: 100vh;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
