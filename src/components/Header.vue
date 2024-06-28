<script setup>
import { Icon } from '@iconify/vue';
</script>
<template>
    <div class="bg-primary flex z-50 justify-between items-center text-white fixed top-0 left-0 right-0">
        <div class="flex items-center">
            <img class="h-20" src="../assets/images/logo.png" alt="">
            <p class=" text-2xl font-logo font-bold">Lancetea.</p>
        </div>
        <div class="flex mr-8">
            <div class="flex items-end mr-4 p-2 rounded-md">
                <Icon icon="solar:user-outline" width="2em" height="2em" style="color: white" />
                <p class="ml-2">Lance</p>
            </div>
        </div>
    </div>




</template>