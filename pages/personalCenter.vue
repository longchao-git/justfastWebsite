<template>
    <div class="personal_center">
        <template>
            <div class="layout_aside">
                <div class="aside_item">{{ $t('personalCenter.navList')[0] }}</div>
                <div @click="handleClickNav(item)" class="aside_item" :class="{ active: active === item.value }" v-for="item in navList" :key="item.value">
                    {{ item.label }}
                </div>
            </div>
        </template>
        <template>
            <div class="layout_main">
                <components :is="enumComponents"></components>
                <!-- 个人信息 -->
                <!-- <Information></Information> -->
                <!-- 个人中心 -->
                <!-- <PersonalIndex></PersonalIndex> -->
            </div>
        </template>
    </div>
</template>

<script>
import config from '../config';
import { mapMutations } from 'vuex';
import Information from './information.vue';
import PersonalIndex from './personalIndex.vue';

export default {
    components: {
        Information,
        PersonalIndex,
    },
    data() {
        return {
            navList: [
                { label: this.$t('personalCenter.navList')[0], value: 'INFORMATION' },
                { label: this.$t('personalCenter.navList')[1], value: 'HOMEPAGE' },
                { label: this.$t('personalCenter.navList')[2], value: 'FOOTPRINT' },
                { label: this.$t('personalCenter.navList')[3], value: 'MESSAGE' },
                { label: this.$t('personalCenter.navList')[4], value: 'ACCOUNT' },
            ],
            active: 'INFORMATION',
        };
    },

    async fetch() {},
    computed: {
        enumComponents() {
            const comp = {
                INFORMATION: Information,
                HOMEPAGE: PersonalIndex,
            };
            return comp[this.active];
        },
    },
    methods: {
        handleClickNav(item) {
            if (item.value === 'ACCOUNT') {
                window.location.href = '/accountManagement';
            } else if(item.value === 'MESSAGE'){
                window.location.href = '/message';
            }else {
                this.active = item.value;
            }
        },
    },
    mounted() {},
};
</script>
<style>
.main-content {
    background-color: #f5f5f5;
    /* padding: 24px 0; */
}
</style>
<style scoped lang="scss">
.personal_center {
    width: 80%;
    margin: 0 auto;
    background-color: #ffffff;
    display: flex;
}
.layout_aside {
    width: 18%;
    height: 100%;

    flex-shrink: 0;
    .aside_item {
        padding: 16px;
        font-size: 18px;
        color: #232a35;
        display: flex;
        align-items: center;
        cursor: pointer;
        &::before {
            content: '';
            display: inline-block;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: #c5c5c5;
            margin-right: 16px;
            flex-shrink: 0;
        }
    }
    .aside_item.active {
        color: #09236c;
        &::before {
            background-color: #09236c;
        }
    }
    .aside_item:nth-child(1) {
        border-bottom: 1px solid #e7e7e7;
        color: #8b8b8b;
        &::before {
            content: '';
            display: none;
        }
    }
}
.layout_main {
    width: 82%;
    padding: 24px;
    border-left: 1px solid #e7e7e7;
}
/*中屏幕*/
@media screen and(max-width: $big-pc-width) {
    .personal_center {
        width: 90%;
        .layout_aside {
            width: 15%;
            height: 100%;
            border-right: 1px solid #e7e7e7;
            .aside_item {
                padding: 10px;
                font-size: 14px;
            }
            .aside_item.active {
                color: #09236c;
                &::before {
                    background-color: #09236c;
                }
            }
        }
        .layout_main {
            width: 85%;
        }
    }
}

@media screen and (max-width: $pad-max-width) {
    .personal_center {
        width: 90%;
        .layout_aside {
            width: 25%;
            height: 100%;
            border-right: 1px solid #e7e7e7;
            .aside_item {
                padding: 10px;
                font-size: 14px;
            }
            .aside_item.active {
                color: #09236c;
                &::before {
                    background-color: #09236c;
                }
            }
        }
        .layout_main {
            width: 75%;
        }
    }
}

@media screen and (max-width: $phone-max-width) {
    .personal_center {
        width: 100%;
        .layout_aside {
            width: 35%;
            height: 100%;
            border-right: 1px solid #e7e7e7;
            .aside_item {
                padding: 10px;
                font-size: 14px;
            }
            .aside_item.active {
                color: #09236c;
                &::before {
                    background-color: #09236c;
                }
            }
        }
        .layout_main {
            width: 65%;
            padding: 12px;
        }
    }
}
</style>
