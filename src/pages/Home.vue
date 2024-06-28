<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css'
const onSwiper = (swiper) => {
    console.log(swiper);
}

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

</script>
<template>
    <div class="grid grid-cols-5 px-8 my-8 justify-between">
        <div class="col-span-3">
            <h1 class="mb-8 text-left ">Danh sách bàn</h1>
            <div class="flex flex-wrap gap-2">
                <div v-for="i in 20" :key="i">
                    <div
                        class="hover:bg-primary hover:text-white cursor-pointer w-40 h-40 border-2 rounded-lg flex justify-center items-center">
                        <p class="text-3xl font-bold">{{ i }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-2 grid grid-cols-3 gap-4">
            <div class="col-span-1">
                <h1 class="mb-8 text-left ">
                    Danh mục
                </h1>
                <div class="flex flex-col gap-2">
                    <div
                        class="h-20 text-white  bg-primary cursor-pointer hover:text-white  flex justify-center items-center rounded-lg w-full border-2">
                        Trà sữa
                    </div>
                    <div
                        class="h-20 hover:bg-primary cursor-pointer hover:text-white  flex justify-center items-center rounded-lg w-full border-2">
                        Nước ép
                    </div>
                    <div
                        class="h-20 hover:bg-primary cursor-pointer hover:text-white  flex justify-center items-center rounded-lg w-full border-2">
                        Sinh tố
                    </div>
                    <div
                        class="h-20 hover:bg-primary cursor-pointer hover:text-white  flex justify-center items-center rounded-lg w-full border-2">
                        Trà lạnh
                    </div>
                    <div
                        class="h-20 hover:bg-primary cursor-pointer hover:text-white  flex justify-center items-center rounded-lg w-full border-2">
                        Coffee
                    </div>
                    <div
                        class="h-20 hover:bg-primary cursor-pointer hover:text-white  flex justify-center items-center rounded-lg w-full border-2">
                        Khác
                    </div>
                </div>
            </div>
            <div class="col-span-2">
                <h1 class="mb-8 ">Order</h1>
                <div class=" h-full w-full">
                    <div class="border-2 rounded-lg h-2/5 overflow-y-scroll mb-4">
                        <div class="py-6 hover:bg-graybg cursor-pointer" v-for="product in products" :key="product.id">
                            <a href="">{{ product.name }}</a>
                        </div>
                    </div>
                    <div class="text-left border-2 rounded-lg px-4">
                        <h3 class="text-xl pt-2">Hóa đơn</h3>
                        <ul class=" border-b-1 border-gray-200 py-2">
                            <li class="flex items-end gap-8 ">
                                <p class="font-medium text-sm w-40">Nước ép cam</p>
                                <p class=" w-40">45.000đ</p>
                                <a
                                    class="font-medium cursor-pointer text-sm text-red-600 dark:text-red-500 hover:underline">Xóa</a>
                            </li>
                            <li class="flex items-end gap-8">
                                <p class="font-medium text-sm w-40">Nước ép dứa</p>
                                <p class=" w-40">40.000đ</p>
                                <a
                                    class="font-medium cursor-pointer text-sm text-red-600 dark:text-red-500 hover:underline">Xóa</a>
                            </li>
                            <li class="flex items-end gap-8">
                                <p class="font-medium text-sm w-40">Trà sữa đào</p>
                                <p class=" w-40">40.000đ</p>
                                <a
                                    class="font-medium cursor-pointer text-sm text-red-600 dark:text-red-500 hover:underline">Xóa</a>
                            </li>
                        </ul>
                        <div class="py-2">
                            <p>Tiền món: <span>125.000đ</span></p>
                            <p>Giảm giá: <span>0%</span></p>
                            <p>Tổng: <span>125.000đ</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>