<script setup>
import Staffinf from './Card/Staffinf.vue';
import { Icon } from '@iconify/vue';
import { ref } from "vue";

const addNewStaff = ref(false);

function showAddNewStaff() {
    addNewStaff.value = !addNewStaff.value;
}

function closeAddNewStaff() {
    addNewStaff.value = false;
}

function stopPropa(e) {
    e.stopPropagation();
}


</script>
<template>
    <div class="my-8 pb-10">
        <div class="flex mx-8 justify-between mb-8">
            <h1>Quản lý nhân viên</h1>
            <button @click="showAddNewStaff()" class="bg-green-500">Thêm nhân viên mới</button>
        </div>
        <div class="px-8">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">

                            </th>
                            <th scope="col" class="px-6 py-3">
                                Mã nhân viên
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Họ tên
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Ngày sinh
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Giới tính
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Chức vụ
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Thêm
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <Staffinf></Staffinf>
                        <Staffinf></Staffinf>
                        <Staffinf></Staffinf>
                        <Staffinf></Staffinf>
                        <Staffinf></Staffinf>
                        <Staffinf></Staffinf>
                        <Staffinf></Staffinf>
                        <Staffinf></Staffinf>
                    </tbody>
                </table>
            </div>

        </div>

        <div @click="closeAddNewStaff()" v-if="addNewStaff"
            class="createProduct flex justify-center items-center fixed z-[999] top-0 left-0 bottom-0 right-0 bg-opacity-30 bg-black">
            <div @click="stopPropa" class="flex justify-center items-center bg-white rounded-2xl">
                <div>
                    <div class="px-20 py-12 relative">
                        <h1 class="mb-8 mt-16">Thêm nhân viên mới</h1>
                        <form>
                            <div class="mb-4 flex flex-col text-left">
                                <label for="name" class="text-flat font-black mb-1">Họ tên</label>
                                <input placeholder="Huỳnh Kim Khánh"
                                    class="text-flat rounded-lg text-base px-4 py-3 border-1 border-solid border-gray-400"
                                    type="text" id="name">
                            </div>
                            <div class="flex flex-col text-left mb-4">
                                <label for="chuc_vu">Chức vụ</label>
                                <input placeholder="Phục vụ"
                                    class="text-flat rounded-lg text-base px-4 py-3 border-1 border-solid border-gray-400"
                                    type="text" name="" id="chuc_vu">
                            </div>
                            <div class="flex justify-between items-center pt-4 pb-6 ">
                                <div class="flex flex-col py-2 items-start gap-4 overflow-hidden rounded-md">
                                    <span class="text-center font-mono text-base font-black">Giới
                                        tính</span>
                                    <div class="flex items-center gap-4 px-2">
                                        <div class="relative flex h-[40px] w-[40px] items-center justify-center">
                                            <input type="radio" id="radio" name="gender" value="male"
                                                class="peer z-10 h-full w-full cursor-pointer opacity-0" />
                                            <div
                                                class="absolute h-full w-full rounded-full bg-blue-100 p-4 shadow-sm shadow-[#00000050] ring-blue-400 duration-300 peer-checked:scale-110 peer-checked:ring-2">
                                            </div>
                                            <div
                                                class="absolute -z-10 h-full w-full scale-0 rounded-full bg-blue-200 duration-500 peer-checked:scale-[500%]">
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px"
                                                viewBox="0 0 24 24" fill="none" class="absolute stroke-blue-400">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M15.5631 16.1199C14.871 16.81 13.9885 17.2774 13.0288 17.462C12.0617 17.6492 11.0607 17.5459 10.1523 17.165C8.29113 16.3858 7.07347 14.5723 7.05656 12.5547C7.04683 11.0715 7.70821 9.66348 8.8559 8.72397C10.0036 7.78445 11.5145 7.4142 12.9666 7.71668C13.9237 7.9338 14.7953 8.42902 15.4718 9.14008C16.4206 10.0503 16.9696 11.2996 16.9985 12.6141C17.008 13.9276 16.491 15.1903 15.5631 16.1199Z"
                                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                </path>
                                                <path
                                                    d="M14.9415 8.60977C14.6486 8.90266 14.6486 9.37754 14.9415 9.67043C15.2344 9.96332 15.7093 9.96332 16.0022 9.67043L14.9415 8.60977ZM18.9635 6.70907C19.2564 6.41617 19.2564 5.9413 18.9635 5.64841C18.6706 5.35551 18.1958 5.35551 17.9029 5.64841L18.9635 6.70907ZM16.0944 5.41461C15.6802 5.41211 15.3424 5.74586 15.3399 6.16007C15.3374 6.57428 15.6711 6.91208 16.0853 6.91458L16.0944 5.41461ZM18.4287 6.92872C18.8429 6.93122 19.1807 6.59747 19.1832 6.18326C19.1857 5.76906 18.8519 5.43125 18.4377 5.42875L18.4287 6.92872ZM19.1832 6.17421C19.1807 5.76001 18.8429 5.42625 18.4287 5.42875C18.0145 5.43125 17.6807 5.76906 17.6832 6.18326L19.1832 6.17421ZM17.6973 8.52662C17.6998 8.94082 18.0377 9.27458 18.4519 9.27208C18.8661 9.26958 19.1998 8.93177 19.1973 8.51756L17.6973 8.52662ZM16.0022 9.67043L18.9635 6.70907L17.9029 5.64841L14.9415 8.60977L16.0022 9.67043ZM16.0853 6.91458L18.4287 6.92872L18.4377 5.42875L16.0944 5.41461L16.0853 6.91458ZM17.6832 6.18326L17.6973 8.52662L19.1973 8.51756L19.1832 6.17421L17.6832 6.18326Z">
                                                </path>
                                            </svg>
                                        </div>
                                        <div class="relative flex h-[40px] w-[40px] items-center justify-center">
                                            <input type="radio" id="radio" name="gender" value="female"
                                                class="peer z-10 h-full w-full cursor-pointer opacity-0" />
                                            <div
                                                class="absolute h-full w-full rounded-full bg-pink-100 p-2 shadow-sm shadow-[#00000050] ring-pink-400 duration-300 peer-checked:scale-110 peer-checked:ring-2">
                                            </div>
                                            <div
                                                class="absolute -z-10 h-full w-full scale-0 rounded-full bg-pink-200 duration-500 peer-checked:scale-[500%]">
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px"
                                                viewBox="0 0 24 24" fill="none" class="absolute fill-pink-400">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M20 9C20 13.0803 16.9453 16.4471 12.9981 16.9383C12.9994 16.9587 13 16.9793 13 17V19H14C14.5523 19 15 19.4477 15 20C15 20.5523 14.5523 21 14 21H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V21H10C9.44772 21 9 20.5523 9 20C9 19.4477 9.44772 19 10 19H11V17C11 16.9793 11.0006 16.9587 11.0019 16.9383C7.05466 16.4471 4 13.0803 4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9ZM6.00365 9C6.00365 12.3117 8.68831 14.9963 12 14.9963C15.3117 14.9963 17.9963 12.3117 17.9963 9C17.9963 5.68831 15.3117 3.00365 12 3.00365C8.68831 3.00365 6.00365 5.68831 6.00365 9Z">
                                                </path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div class="mb-8 mt-8 flex flex-col text-left">
                                    <label class="mb-4 text-left font-mono text-base font-black" for="birth">Ngày
                                        sinh</label>
                                    <div>
                                        <input type="date" id="birth">
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button class=" w-full bg-primary">Thêm nhân viên</button>
                            </div>
                        </form>
                        <div @click="closeAddNewStaff()" class="cursor-pointer absolute right-8 top-8">
                            <Icon icon="rivet-icons:close" width="2em" height="2em" style="color: red" />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<style scoped>
button {
    color: white !important;
}
</style>