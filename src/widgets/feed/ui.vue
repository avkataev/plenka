<script>
</script>

<template>

  <div class='feed'>
    <div class='feed-group'>
      <div
          v-for='(_, index) in 5'
          class='feed-group__item'
          :class='{"is-active": index === 0}'
          :key='"feed-group__item-"+index'
      >
        <ui-icon-photo class='feed-group__icon'/>
        <div>Все фото</div>
      </div>
    </div>
    <div class='photo-grid'>
      <post-preview-ui v-for='(_, index) in 8' :key='"photo-item-"+index'></post-preview-ui>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.feed-group {
  position: relative;
  display: flex;
  gap: 11px;
  padding: 11px;
  font-size: 9px;
  text-align: center;
  max-width: 100%;
  overflow-x: auto;
  color: #fff;
  &::after {
    content:'';
    display: block;
    width: 100%;
    height: 1px;
    background: #dadada;
    position: absolute;
    bottom: 11px;
    left: 0;
  }
  &__item {
    position: relative;
    padding-top: 9px;
    width: 52px;
    height: 52px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: #B4B4BB;
    flex-shrink: 0;
    &.is-active {
      z-index: 1;
      &::after {
        content: '';
        position: absolute;
        left: 23px; bottom: -3px;
        width: 6px;
        height: 7px;
        transform: rotate(45deg);
        background: inherit;
      }
    }
  }
  &__icon {}
}
.photo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  padding: 10px;
}
.mark {
  position: absolute;
  z-index: 1;
  top: 10px;
  width: 17px;
  height: 17px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0;
  &--pin {
    left: 10px;
    background: #C4413D;
  }
  &--carousel {
    right: 8px;
  }
}
</style>
