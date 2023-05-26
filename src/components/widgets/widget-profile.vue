<script lang='ts' setup>
import IconEdit from 'components/icon/icon-edit.vue';
import IconChart from 'components/icon/icon-chart.vue';
import IconShare from 'components/icon/icon-share.vue';
import IconDots from 'components/icon/icon-dots.vue';
</script>

<template>
    <div class='profile'>
        <div class='profile-title'>
            <span class='profile-title__name'>instasamets</span>
            <button class='profile-title__button'>
                <span>
                    <icon-dots/>
                </span>
            </button>
        </div>
        <div class='profile-header'>
            <div class='profile-avatar'>
                <img class='profile-avatar__img' src='https://dummyimage.com/71x71/9B5E56/fff' alt='avatar'>
            </div>
            <div class='profile-ctrl'>
                <div class='profile-stat'>
                    <div class='profile-stat__item'>
                        <div class='profile-stat__value'>550</div>
                        <div class='profile-stat__label'>Постов</div>
                    </div>
                    <div class='profile-stat__item'>
                        <div class='profile-stat__value'>550</div>
                        <div class='profile-stat__label'>Подписок</div>
                    </div>
                    <div class='profile-stat__item'>
                        <div class='profile-stat__value'>550</div>
                        <div class='profile-stat__label'>Подписчиков</div>
                    </div>
                </div>
                <div class='profile-button-group'>
                    <button class='profile-button'>
                        <span class='profile-button__icon'>
                            <IconEdit/>
                        </span>
                    </button>
                    <button class='profile-button'>
                        <span class='profile-button__icon'>
                            <IconChart/>
                        </span>
                    </button>
                    <button class='profile-button'>
                        <span class='profile-button__icon'>
                            <IconShare/>
                        </span>
                    </button>
                </div>
            </div>
        </div>
        <div class='profile-info'>
            <h4 class='profile-info__name'>Александр Лютейший</h4>
            <p class='profile-info__description'>
                Коуч по гроулу.<br>
                Батя троих опездолов.<br>
                Зарабатываю сидя на диване по нихуя в час
            </p>
        </div>
        <div class='profile-history'>
            <a href='#' class='profile-history__item' v-for='(_, index) in 5' :key='"history-" + index'>
                <div class='profile-history__preview'>
                    <img class='profile-history__img' src='https://dummyimage.com/52x52/9B5E56/fff' alt='icon'>
                </div>
                <div class='profile-history__text'>Хайлайт{{ index }}</div>
            </a>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.profile {
    padding-top: 20px;
    background: #322;
    color: #fff;
    &-title {
        width: 100%;
        background: rgba(0,0,0,.5);
        height: 34px;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
        &__name {
            font-size: 15px;
            font-weight: 700;
        }
        &__button {
            background: none;
            border: none;
        }
    }
    &-info {
        margin-top: 7px;
        padding: 0 20px;
        &-name {
            font-size: 14px;
            font-weight: 700;
        }
        &__description {
            font-size: 12px;
            opacity: .75;
            white-space: pre-wrap;
        }
    }
    &-stat {
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 10px;
        text-align: center;
        &__item {
            display: flex;
            flex-direction: column;
        }
        &__value {
            font-size: 18px;
            font-weight: 900;
        }
    }
    &-ctrl {
        width: 100%;
    }
    &-header {
        display: flex;
        gap: 30px;
        padding: 0 20px;
    }

    &-avatar {
        flex-shrink: 0;
        border: 2px solid #fff;
        border-radius: 50%;
        padding: 4px;
        width: 83px;
        height: 83px;

        &__img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            border-radius: inherit;
        }
    }

    &-history {
        display: flex;
        gap: 10px;
        padding: 12px 20px;
        max-width: 100%;
        overflow-x: auto;
        &__item {
            width: 68px;
            position: relative;
            display: block;
            text-align: center;
        }

        &__preview {
            width: 52px;
            height: 52px;
            border-radius: 50%;
            margin: 0 auto;
            overflow: hidden;
        }

        &__img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }

        &__text {
            margin-top: 4px;
            font-size: 10px;
        }
    }
    &-button-group {
        margin-top: 10px;
        display: flex;
        gap: 10px;
    }
    &-button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 34px;
        height: 34px;
        border-radius: 5px;
        background: none;
        position: relative;
        border: none;
        &::before {
            content:'';
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 100%;
            background: #000;
            border-radius: inherit;
            opacity: .5;
        }
        &__icon {
            position: relative;
            font-size: 0;
        }
    }
}
</style>
