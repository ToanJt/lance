<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const modal = ref(false);

function showModal() {
    modal.value = !modal.value;
}

function stopPropa(e) {
    e.stopPropagation();
}

</script>

<template>
    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <div class="relative">
                <img class="w-10 h-10 rounded-full" src="https://i.ibb.co/0BpQTNK/user1.jpg" alt="">
                <span
                    class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
            </div>
        </th>
        <td class="px-6 py-4">
            NV01
        </td>
        <td class="px-6 py-4">
            Lê A
        </td>
        <td class="px-6 py-4">
            2/6/2000
        </td>
        <td class="px-6 py-4">
            Nữ
        </td>
        <td class="px-6 py-4">
            Phục vụ
        </td>
        <td class="flex justify-between px-6 py-4">
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Chỉnh
                sửa</a>
            <a @click="showModal()" data-modal-target="popup-modal" data-modal-toggle="popup-modal"
                class="font-medium cursor-pointer text-red-600 dark:text-red-500 hover:underline">Xóa</a>
        </td>

        <div @click="showModal()" v-if="modal"
            class="fixed left-0 top-0 right-0 bottom-0  flex justify-center items-center">
            <div id="popup-modal" class=" z-50 justify-center items-center max-h-full">
                <div class="relative p-4 w-full max-w-md max-h-full">
                    <div @click="stopPropa" class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <Icon @click="showModal()"
                            class="hover:bg-gray-300 rounded-md absolute cursor-pointer right-0 p-1 m-1"
                            icon="material-symbols:close" width="2em" height="2em" style="color: black" />
                        <div class="p-4 md:p-5 text-center">
                            <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Hãy xác nhận xóa nhân
                                viên? Bạn chắc chắn chứ?</h3>
                            <button @click="showModal()" data-modal-hide="popup-modal" type="button"
                                class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                                Có, tôi chắc chắn
                            </button>
                            <button @click="showModal()" data-modal-hide="popup-modal" type="button"
                                class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-gray-200 rounded-lg border border-gray-200 hover:bg-gray-400 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Không</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </tr>
</template>

<style scoped>
button {
    color: white !important;
}
</style>