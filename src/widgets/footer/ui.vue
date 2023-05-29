<script lang='ts' setup>
</script>

<template>
    <footer class='footer'>
        <button class='footer-button'>
            <span><ui-icon-home></ui-icon-home></span>
        </button>
        <button class='footer-button'>
            <span><ui-icon-search></ui-icon-search></span>
        </button>
        <button class='footer-button'>
            <span><ui-icon-reels></ui-icon-reels></span>
        </button>
        <button class='footer-button'>
            <span><ui-icon-shop></ui-icon-shop></span>
        </button>
        <div class='footer-avatar'>
            <img class='footer-avatar__img' src='https://dummyimage.com/20x20/9B5E56/fff' alt='avatar'>
        </div>
    </footer>
</template>

<style lang='scss' scoped>
.footer {
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    height: var(--footer-height);
    padding: 10px 30px 40px;
    border-top: 1px solid #DADADA;
    background: #fff;
    &-button {
        width: 26px;
        height: 26px;
        background: none;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &-avatar {
        flex-shrink: 0;
        border: 2px solid #000;
        border-radius: 50%;
        padding: 1px;
        width: 26px;
        height: 26px;

        &__img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            border-radius: inherit;
        }
    }
}
</style>
