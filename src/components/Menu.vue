<script setup>
import { Icon } from '@iconify/vue';
import { computed, ref, watch } from "vue"
import ProductCard from "./Card/ProductCard.vue"
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})

const products = [
    {
        id: 1,
        name: "Trà sữa chanh leo",
        searchName: "tra sua chanh leo",
        price: "25.000",
        src: "../../assets/images/menu/tra-sua-chanh-leo.jpg",
    },
    {
        id: 2,
        name: "Trà sữa bạc hà",
        searchName: "tra sua bac ha",
        price: "25.000",
        src: "../../assets/images/menu/tra-sua-bac-ha.jpg",
    },
    {
        id: 3,
        name: "Trà sữa đào",
        searchName: "tra sua dao",
        price: "35.000",
        src: "../../assets/images/menu/tra-sua-dao.jpg",
    },
    {
        id: 4,
        name: "Trà sữa hokkaido",
        searchName: "tra sua hokkaido",
        price: "40.000",
        src: "../../assets/images/menu/tra-sua-hokkaido.jpg",
    },
    {
        id: 5,
        name: "Trà sữa mộc hương",
        searchName: "tra sua moc huong",
        price: "20.000",
        src: "../../assets/images/menu/tra-sua-moc-huong.jpg",
    },
    {
        id: 6,
        name: "Trà sữa olong",
        searchName: "tra sua olong",
        price: "25.000",
        src: "../../assets/images/menu/tra-sua-olong.jpg",
    },
    {
        id: 7,
        name: "Trà xanh kem sữa",
        searchName: "tra xanh kem sua",
        price: "25.000",
        src: "../../assets/images/menu/tra-xanh--kem-sua.jpg",
    },
    {
        id: 8,
        name: "Trà sữa caramel",
        searchName: "tra sua caramel",
        price: "40.000",
        src: "../../assets/images/menu/tra-sua-caramel.jpg"
    }
]

const sortProducts = [];
const search = ref("");

const filteredProducts = computed(() => {
    return products.filter(product => {
        return product.searchName.toLowerCase().includes(search.value.toLowerCase());
    })
})


const addNewProduct = ref(false);

function showAddNewProduct() {
    return addNewProduct.value = !addNewProduct.value;
}

function closeAddNewProduct() {
    return addNewProduct.value = false;
}

function stopPropa(e) {
    e.stopPropagation();
}



</script>
<template>
    <div class="my-8 mx-8">
        <div class="flex flex-col items-start mb-8">
            <h1 class="mb-8">Danh sách món</h1>
            <div class="flex w-full items-center justify-between">
                <div class="flex items-center w-2/5">

                    <form class="w-full mx-auto">
                        <label for="default-search"
                            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input v-model="search" type="search" id="default-search"
                                class="block w-full p-4 pl-8 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Tìm món..." required />
                            <button type="submit"
                                class="searchBtn text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>

                </div>
                <button @click="showAddNewProduct()" class="newBtn bg-green-500">Thêm món mới</button>
            </div>
        </div>
        <div class="grid grid-cols-5 gap-x-4 ">
            <ProductCard :products="filteredProducts"></ProductCard>
        </div>
        <div @click="closeAddNewProduct()" v-if="addNewProduct"
            class="createProduct flex justify-center items-center fixed z-50 top-0 left-0 bottom-0 right-0 bg-opacity-30 bg-black">
            <div @click="stopPropa" class="flex justify-center items-center bg-white rounded-2xl">

                <div>
                    <div class="px-20 py-12 relative">
                        <h1 class="mb-8 mt-16">Thêm món mới</h1>
                        <form>
                            <div class="mb-4 flex flex-col text-left">
                                <label for="name" class="text-flat font-bold mb-1">Tên món</label>
                                <input placeholder="Trà sữa Hokkaido"
                                    class="text-flat rounded-lg text-base px-4 py-3 border-1 border-solid border-gray-400"
                                    type="text" id="name">
                            </div>
                            <div class="mb-8 flex flex-col text-left">
                                <label for="password" class="text-flat font-bold mb-1">Giá</label>
                                <input placeholder="30.000 VND"
                                    class="text-flat rounded-lg text-base px-4 py-3 border-1 border-solid border-gray-400"
                                    type="text" id="text">
                            </div>
                            <div>
                                <button class="newBtn w-full bg-primary">Thêm món mới</button>
                            </div>
                        </form>
                        <div @click="closeAddNewProduct()" class="cursor-pointer absolute right-8 top-8">
                            <Icon icon="rivet-icons:close" width="2em" height="2em" style="color: red" />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<style>
.searchBtn {
    padding: 6px !important;
    color: white !important;
}

.newBtn {
    color: white !important;
}
</style>