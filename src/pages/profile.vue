<script lang='ts' setup>
</script>

<template>
  <div class='container'>
    <main class='main'>
      <profile-ui></profile-ui>
      <feed-ui></feed-ui>
    </main>
    <footer-ui/>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.main {
  width: 100%;
  height: calc(100vh - var(--footer-height));
  overflow-y: auto;
}
</style>
