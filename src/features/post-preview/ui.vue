<template>
  <div class='photo-item'>
    <div class='photo-item__content'>
      <div class='mark mark--pin' v-if='[0,1].includes(index)'>
        <ui-icon-pushpin/>
      </div>
      <div class='mark mark--carousel' v-if='[2,3].includes(index)'>
        <ui-icon-carousel/>
      </div>
      <div class='photo-item__img'>
        <img src='https://dummyimage.com/120x120/995d56/fff' alt=''>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ui"
}
</script>

<style lang="scss" scoped>
.photo-item {
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  &__content {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 4px;
  }
  &__img {
    width: 100%;
    height: 100%;
    background: #000;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
