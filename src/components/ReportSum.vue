<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<template>
    <div class="p-8">
        <h1 class="my-8 text-left">Thống kê</h1>
        <div class="flex justify-between mb-8 w-full mx-auto">
            <form class="flex gap-2">
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
                <button class="printBtn bg-primary text-white">In</button>
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
        <div class="flex gap-8 mt-8 text-left">
            <div>
                <h3 class="text-xl mb-2">Thống kê theo hóa đơn</h3>


                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Mã hóa đơn
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Thời gian
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Thành tiền (VND)
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Chi tiết
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    HD01
                                </th>
                                <td class="px-6 py-4">
                                    20/12/2024 11:03:25 CH
                                </td>
                                <td class="px-6 py-4">
                                    230.000
                                </td>
                                <td class="px-6 py-4">
                                    Trà sữa chanh leo, trà xanh...
                                </td>
                            </tr>
                            <tr
                                class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    HD01
                                </th>
                                <td class="px-6 py-4">
                                    20/12/2024 11:03:25 CH
                                </td>
                                <td class="px-6 py-4">
                                    230.000
                                </td>
                                <td class="px-6 py-4">
                                    Trà sữa chanh leo, trà xanh...
                                </td>
                            </tr>
                            <tr
                                class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    HD01
                                </th>
                                <td class="px-6 py-4">
                                    20/12/2024 11:03:25 CH
                                </td>
                                <td class="px-6 py-4">
                                    230.000
                                </td>
                                <td class="px-6 py-4">
                                    Trà sữa chanh leo, trà xanh...
                                </td>
                            </tr>
                            <tr
                                class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    HD01
                                </th>
                                <td class="px-6 py-4">
                                    20/12/2024 11:03:25 CH
                                </td>
                                <td class="px-6 py-4">
                                    230.000
                                </td>
                                <td class="px-6 py-4">
                                    Trà sữa chanh leo, trà xanh...
                                </td>
                            </tr>
                            <tr
                                class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    HD01
                                </th>
                                <td class="px-6 py-4">
                                    20/12/2024 11:03:25 CH
                                </td>
                                <td class="px-6 py-4">
                                    230.000
                                </td>
                                <td class="px-6 py-4">
                                    Trà sữa chanh leo, trà xanh...
                                </td>
                            </tr>
                            <tr
                                class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    HD01
                                </th>
                                <td class="px-6 py-4">
                                    20/12/2024 11:03:25 CH
                                </td>
                                <td class="px-6 py-4">
                                    230.000
                                </td>
                                <td class="px-6 py-4">
                                    Trà sữa chanh leo, trà xanh...
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
            <div>
                <h3 class="text-xl mb-2">Thống kê theo món</h3>


                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">Mã món</th>
                                <th scope="col" class="px-6 py-3">Tên món</th>
                                <th scope="col" class="px-6 py-3">Đơn vị tính</th>
                                <th scope="col" class="px-6 py-3">Số lượng</th>
                                <th scope="col" class="px-6 py-3">Giá (VND)</th>
                                <th scope="col" class="px-6 py-3">Doanh thu (VND)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">001
                                </th>
                                <td class="px-6 py-4">Trà Sữa Trân Châu</td>
                                <td class="px-6 py-4">Ly</td>
                                <td class="px-6 py-4">50</td>
                                <td class="px-6 py-4">40.000</td>
                                <td class="px-6 py-4">2.000.000</td>
                            </tr>
                            <tr
                                class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">002
                                </th>
                                <td class="px-6 py-4">Nước Ép Cam</td>
                                <td class="px-6 py-4">Ly</td>
                                <td class="px-6 py-4">30</td>
                                <td class="px-6 py-4">35.000</td>
                                <td class="px-6 py-4">1.050.000</td>
                            </tr>
                            <tr
                                class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">003
                                </th>
                                <td class="px-6 py-4">Trà Đào</td>
                                <td class="px-6 py-4">Ly</td>
                                <td class="px-6 py-4">40</td>
                                <td class="px-6 py-4">45.000</td>
                                <td class="px-6 py-4">1.800.000</td>
                            </tr>
                            <tr
                                class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">004
                                </th>
                                <td class="px-6 py-4">Sinh Tố Bơ</td>
                                <td class="px-6 py-4">Ly</td>
                                <td class="px-6 py-4">20</td>
                                <td class="px-6 py-4">50.000</td>
                                <td class="px-6 py-4">1.000.000</td>
                            </tr>
                            <tr
                                class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">005
                                </th>
                                <td class="px-6 py-4">Cà Phê Đen</td>
                                <td class="px-6 py-4">Ly</td>
                                <td class="px-6 py-4">60</td>
                                <td class="px-6 py-4">30.000</td>
                                <td class="px-6 py-4">1.800.000</td>
                            </tr>
                            <tr
                                class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">006
                                </th>
                                <td class="px-6 py-4">Trà Sữa Thái Xanh</td>
                                <td class="px-6 py-4">Ly</td>
                                <td class="px-6 py-4">45</td>
                                <td class="px-6 py-4">45.000</td>
                                <td class="px-6 py-4">2.025.000</td>
                            </tr>
                            <tr
                                class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">007
                                </th>
                                <td class="px-6 py-4">Nước Ép Dứa</td>
                                <td class="px-6 py-4">Ly</td>
                                <td class="px-6 py-4">35</td>
                                <td class="px-6 py-4">35.000</td>
                                <td class="px-6 py-4">1.225.000</td>
                            </tr>
                            <tr
                                class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">008
                                </th>
                                <td class="px-6 py-4">Trà Sữa Matcha</td>
                                <td class="px-6 py-4">Ly</td>
                                <td class="px-6 py-4">25</td>
                                <td class="px-6 py-4">50.000</td>
                                <td class="px-6 py-4">1.250.000</td>
                            </tr>
                            <tr
                                class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">009
                                </th>
                                <td class="px-6 py-4">Sinh Tố Dâu</td>
                                <td class="px-6 py-4">Ly</td>
                                <td class="px-6 py-4">20</td>
                                <td class="px-6 py-4">55.000</td>
                                <td class="px-6 py-4">1.100.000</td>
                            </tr>
                            <tr
                                class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">010
                                </th>
                                <td class="px-6 py-4">Cà Phê Sữa</td>
                                <td class="px-6 py-4">Ly</td>
                                <td class="px-6 py-4">55</td>
                                <td class="px-6 py-4">35.000</td>
                                <td class="px-6 py-4">1.925.000</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>
        </div>

        <div class="text-left mt-4">
            <h3 class="text-lg">Tổng số hóa đơn đã thanh toán: <span class="text-primary">12</span></h3>
            <h3 class="text-lg">Tổng số món đã bán: <span class="text-primary">47</span></h3>
            <h3 class="text-lg">Tổng doanh thu: <span class="text-primary">24.000.000 VND</span> </h3>
        </div>
    </div>
</template>

<style scoped>
.printBtn {
    color: white !important;
}
</style>