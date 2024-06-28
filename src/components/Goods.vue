<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})

</script>

<template>
    <div class="mx-8">
        <h1 class="my-8 text-left">Quản lý hàng hóa</h1>
        <div class="flex gap-4 mb-10">
            <button class="createBtn bg-green-500">Thêm hàng mới</button>
        </div>

        <div class="flex justify-between mb-8 w-full mx-auto">
            <form class="">
                <select id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Chọn tháng</option>
                    <option value="US">1</option>
                    <option value="CA">2</option>
                    <option value="FR">3</option>
                    <option value="DE">4</option>
                    <option value="DE">5</option>
                    <option value="DE">6</option>
                    <option value="DE">7</option>
                    <option value="DE">8</option>
                    <option value="DE">9</option>
                    <option value="DE">10</option>
                    <option value="DE">11</option>
                    <option value="DE">12</option>
                </select>
            </form>

            <div date-rangepicker="" id="dateRangePickerId" datepicker-orientation=" right bottom left"
                class="flex items-center underline">
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class=" w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <input name="start" type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
                        placeholder="Chọn ngày bắt đầu">
                </div>
                <span class="mx-4 text-gray-500">đến</span>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>

                    <input name="end" type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
                        placeholder="Chọn ngày kết thúc">
                </div>
            </div>

        </div>
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Mã hàng
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Tên hàng
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Đơn vị tính
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Số lượng tồn
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Số lượng nhập
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Số lượng xuất
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Thêm
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            MH01
                        </th>
                        <td class="px-6 py-4">
                            Cà phê trung nguyên
                        </td>
                        <td class="px-6 py-4">
                            Kg
                        </td>
                        <td class="px-6 py-4">
                            8
                        </td>
                        <td class="px-6 py-4">
                            20
                        </td>
                        <td class="px-6 py-4">
                            10
                        </td>
                        <td class="flex justify-between px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Chỉnh
                                sửa</a>
                            <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Xóa</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            MH01
                        </th>
                        <td class="px-6 py-4">
                            Cà phê trung nguyên
                        </td>
                        <td class="px-6 py-4">
                            Kg
                        </td>
                        <td class="px-6 py-4">
                            8
                        </td>
                        <td class="px-6 py-4">
                            20
                        </td>
                        <td class="px-6 py-4">
                            10
                        </td>
                        <td class="flex justify-between px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Chỉnh
                                sửa</a>
                            <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Xóa</a>
                        </td>

                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            MH01
                        </th>
                        <td class="px-6 py-4">
                            Cà phê trung nguyên
                        </td>
                        <td class="px-6 py-4">
                            Kg
                        </td>
                        <td class="px-6 py-4">
                            8
                        </td>
                        <td class="px-6 py-4">
                            20
                        </td>
                        <td class="px-6 py-4">
                            10
                        </td>
                        <td class="flex justify-between px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Chỉnh
                                sửa</a>
                            <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Xóa</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            MH01
                        </th>
                        <td class="px-6 py-4">
                            Cà phê trung nguyên
                        </td>
                        <td class="px-6 py-4">
                            Kg
                        </td>
                        <td class="px-6 py-4">
                            8
                        </td>
                        <td class="px-6 py-4">
                            20
                        </td>
                        <td class="px-6 py-4">
                            10
                        </td>
                        <td class="flex justify-between px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Chỉnh
                                sửa</a>
                            <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Xóa</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            MH01
                        </th>
                        <td class="px-6 py-4">
                            Cà phê trung nguyên
                        </td>
                        <td class="px-6 py-4">
                            Kg
                        </td>
                        <td class="px-6 py-4">
                            8
                        </td>
                        <td class="px-6 py-4">
                            20
                        </td>
                        <td class="px-6 py-4">
                            10
                        </td>
                        <td class="flex justify-between px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Chỉnh
                                sửa</a>
                            <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Xóa</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            MH01
                        </th>
                        <td class="px-6 py-4">
                            Cà phê trung nguyên
                        </td>
                        <td class="px-6 py-4">
                            Kg
                        </td>
                        <td class="px-6 py-4">
                            8
                        </td>
                        <td class="px-6 py-4">
                            20
                        </td>
                        <td class="px-6 py-4">
                            10
                        </td>
                        <td class="flex justify-between px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Chỉnh
                                sửa</a>
                            <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Xóa</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            MH01
                        </th>
                        <td class="px-6 py-4">
                            Cà phê trung nguyên
                        </td>
                        <td class="px-6 py-4">
                            Kg
                        </td>
                        <td class="px-6 py-4">
                            8
                        </td>
                        <td class="px-6 py-4">
                            20
                        </td>
                        <td class="px-6 py-4">
                            10
                        </td>
                        <td class="flex justify-between px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Chỉnh
                                sửa</a>
                            <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Xóa</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            MH01
                        </th>
                        <td class="px-6 py-4">
                            Cà phê trung nguyên
                        </td>
                        <td class="px-6 py-4">
                            Kg
                        </td>
                        <td class="px-6 py-4">
                            8
                        </td>
                        <td class="px-6 py-4">
                            20
                        </td>
                        <td class="px-6 py-4">
                            10
                        </td>
                        <td class="flex justify-between px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Chỉnh
                                sửa</a>
                            <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Xóa</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            MH01
                        </th>
                        <td class="px-6 py-4">
                            Cà phê trung nguyên
                        </td>
                        <td class="px-6 py-4">
                            Kg
                        </td>
                        <td class="px-6 py-4">
                            8
                        </td>
                        <td class="px-6 py-4">
                            20
                        </td>
                        <td class="px-6 py-4">
                            10
                        </td>
                        <td class="flex justify-between px-6 py-4">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Chỉnh
                                sửa</a>
                            <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Xóa</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


    </div>
</template>

<style>
td {
    padding: 0.5rem;
}

div button {
    color: black !important;
}

.createBtn,
.editBtn,
.delBtn {
    color: white !important;
}
</style>