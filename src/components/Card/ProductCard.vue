<script setup>
import { Icon } from '@iconify/vue';
import { defineProps } from "vue"

const props = defineProps({
    products: {
        type: Array,
        require: true,
    }
})

function getImageUrl(name) {
    return new URL(`${name}`, import.meta.url).href;
}

</script>
<template>
    <!-- <div v-for="product in products" key="product.id"
        class="mb-6 rounded-2xl overflow-hidden bg-gray-100 hover:scale-105 transition-transform cursor-pointer">
        <img class="" :src="getImageUrl(product.src)" alt="">
        <div class="my-4 text-left px-4">
            <h3 class="text-xl font-semibold mb-2">{{ product.name }}</h3>
            <div class=" flex justify-start mb-2">
                <Icon icon="fluent-emoji-flat:star" width="1.0em" height="1.0em" />
                <Icon icon="fluent-emoji-flat:star" width="1.0em" height="1.0em" />
                <Icon icon="fluent-emoji-flat:star" width="1.0em" height="1.0em" />
                <Icon icon="fluent-emoji-flat:star" width="1.0em" height="1.0em" />
                <Icon icon="fluent-emoji-flat:star" width="1.0em" height="1.0em" />
            </div>
            <p>{{ product.price }}</p>
            <div class="flex mt-6">
                <button class="flex justify-start mr-2 bg-green-500">
                    <Icon icon="akar-icons:edit" width="1.4em" height="1.4em" style="color: white" />
                    <p class="ml-1 text-white" href="">Chỉnh sửa</p>
                </button>
                <button class="hover:bg-primary cursor-pointer">
                    <Icon icon="mdi:trash" width="1.4em" height="1.4em" style="color: black" />
                </button>
            </div>
        </div>
    </div> -->


    <div v-for="product in products" key="product.id"
        class="w-full mb-4 bg-white border border-gray-200 hover:scale-[1.01] transition-transform cursor-pointer rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="mb-8 rounded-t-lg" :src="getImageUrl(product.src)" alt="product image" />
        </a>
        <div class="px-5 pb-5">
            <a href="#">
                <h5 class="text-xl text-left font-semibold tracking-tight text-gray-900 dark:text-white">{{ product.name
                    }}</h5>
            </a>
            <div class="flex items-center mt-2.5 mb-5">
                <div class="flex items-center space-x-1 rtl:space-x-reverse">
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 22 20">
                        <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 22 20">
                        <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 22 20">
                        <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 22 20">
                        <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path
                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                </div>
                <span
                    class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">{{ product.price }}đ</span>
                <a href="#"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Chỉnh
                    sửa</a>
            </div>
        </div>
    </div>

</template>