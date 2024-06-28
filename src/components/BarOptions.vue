<script setup>
import { Icon } from '@iconify/vue';
import { useRouter } from "vue-router"

const router = useRouter();

function logOut() {
    router.push("/login");
}


</script>
<template>
    <aside id="separator-sidebar"
        class="flex justify-between items-start py-10 bg-white bottom-0 border-r-1 border-gray-400 fixed top-10 w-64 left-0 z-40 h-screen"
        aria-label="Sidebar">
        <div class="flex flex-col justify-between h-full w-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">

            <ul class="space-y-2 font-medium">
                <li>
                    <router-link to="/">
                        <a href="#"
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                            <div class=" pl-6 py-4 flex cursor-pointer w-full items-center">
                                <Icon icon="tabler:home-filled" width="2em" height="2em" style="color: black" />
                                <p class="ml-2">Đơn hàng</p>
                            </div>

                        </a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/menu">
                        <a href="#"
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                            <div class=" pl-6 py-4 flex cursor-pointer w-full items-center">
                                <Icon icon="ep:goods-filled" width="2em" height="2em" style="color: black" />
                                <p class="ml-2">Sản Phẩm</p>
                            </div>

                        </a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/goods">
                        <a href="#"
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                            <div class=" pl-6 py-4 flex cursor-pointer w-full items-center">
                                <Icon icon="fa:cart-plus" width="2em" height="2em" style="color: black" />
                                <p class="ml-2">Hàng hóa</p>
                            </div>

                        </a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/staff">
                        <a href="#"
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                            <div class=" pl-6 py-4 flex cursor-pointer w-full items-center">
                                <Icon icon="heroicons:user-group-20-solid" width="2em" height="2em"
                                    style="color: black" />
                                <p class="ml-2">Nhân viên</p>
                            </div>

                        </a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/report">
                        <a href="#"
                            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                            <div class=" pl-6 py-4 flex cursor-pointer w-full items-center">
                                <Icon icon="clarity:analytics-solid" width="2em" height="2em" style="color: black" />
                                <p class="ml-2">Báo cáo & thống kê</p>
                            </div>

                        </a>
                    </router-link>
                </li>
            </ul>
            <div @click="logOut()" class=" pl-6 py-4 flex cursor-pointer w-full items-center">
                <Icon icon="solar:logout-2-bold" width="2em" height="2em" style="color: black" />
                <p class="ml-2">Đăng xuất</p>
            </div>
        </div>
    </aside>

</template>