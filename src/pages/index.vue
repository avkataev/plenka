<script lang='ts' setup>
</script>

<template>
    <div class='container'>
        <main class='main'>
            <widget-profile></widget-profile>
            <div class='feed'>
                <div class='feed-group'>
                    <div
                        v-for='(_, index) in 5'
                        class='feed-group__item'
                        :class='{"is-active": index === 0}'
                        :key='"feed-group__item-"+index'
                    >
                        <icon-photo class='feed-group__icon'/>
                        <div>Все фото</div>
                    </div>
                </div>
                <div class='photo-grid'>
                    <div v-for='(_, index) in 8' class='photo-item' :key='"photo-item-"+index'>
                        <div class='photo-item__content'>
                            <div class='mark mark--pin' v-if='[0,1].includes(index)'>
                                <icon-pushpin/>
                            </div>
                            <div class='mark mark--carousel' v-if='[2,3].includes(index)'>
                                <icon-carousel/>
                            </div>
                            <div class='photo-item__img'>
                                <img src='https://dummyimage.com/120x120/995d56/fff' alt=''>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <widget-footer/>
    </div>
</template>

<style lang='scss' scoped>

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
.container {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
.header {
    display: flex;
    justify-content: space-between;
}
.photo-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    padding: 10px;
}
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
.main {
    width: 100%;
    height: calc(100vh - var(--footer-height));
    overflow-y: auto;
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
