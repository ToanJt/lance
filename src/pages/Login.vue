<script setup>
import { Icon } from '@iconify/vue';
import { useRouter } from "vue-router"

const router = useRouter();

function login() {
    router.push('/');
}

</script>

<template>
    <div class="grid grid-cols-9 w-11/12 relative left-[-5rem] bottom-1 gap-32">
        <div class=" col-span-5">
            <img class=" rounded-lg" src="../assets/images/login-bg.jpg" alt="">
        </div>
        <div class="col-span-4">
            <div class="mb-3 flex flex-col items-center">
                <h1 class="font-semibold textttt mb-1 font-logo">Lancetea.</h1>
                <h3 class="text-2xl font-bold mb-2">Good, Cool & Smile</h3>
                <div class="flex items-center text-flat text-md">
                    <div class="w-28 h-[2px] bg-gray-200"></div>
                    <p class="text-[15px] px-4">Sign In</p>
                    <div class="w-28 h-[2px] bg-gray-200"></div>
                </div>
            </div>
            <form>
                <div class="mb-4 flex flex-col text-left">
                    <label for="email" class="text-flat font-bold mb-1">Email Address</label>
                    <input placeholder="abc@gmail.com"
                        class="text-flat rounded-lg text-base px-4 py-3 border-1 border-solid border-gray-400"
                        type="email" id="email">
                </div>
                <div class="mb-8 flex flex-col text-left">
                    <label for="password" class="text-flat font-bold mb-1">Password</label>
                    <input placeholder="******"
                        class="text-flat rounded-lg text-base px-4 py-3 border-1 border-solid border-gray-400"
                        type="email" id="email">
                </div>
                <div class="flex items-center mb-8">
                    <div class="checkbox-wrapper-33">
                        <label class="checkbox">
                            <input class="checkbox__trigger visuallyhidden" type="checkbox" />
                            <span class="checkbox__symbol">
                                <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px"
                                    viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 14l8 7L24 7"></path>
                                </svg>
                            </span>
                            <p class="font-semibold text-flat checkbox__textwrapper">Remember my preference</p>
                        </label>
                    </div>
                </div>
                <div>
                    <button @click="login()" class="loginBtn w-full bg-primary">Sign Me In</button>
                </div>
            </form>

            <div class="flex flex-col items-center">
                <div class="my-4 flex items-center text-flat text-md">
                    <div class="w-28 h-[2px] bg-gray-200"></div>
                    <p class="px-4">Continue With</p>
                    <div class="w-28 h-[2px] bg-gray-200"></div>
                </div>
                <div class="grid grid-cols-3 gap-2">
                    <button class="flex justify-center items-center text-flat border-1 border-solid border-gray-300">
                        <Icon class="mr-1 " icon="logos:facebook" width="1.2em" height="1.2em" />
                        <p>Facebook</p>
                    </button>
                    <button class="flex justify-center items-center text-flat border-1 border-solid border-gray-300">
                        <Icon class="mr-1 " icon="flat-color-icons:google" width="1.2em" height="1.2em" />
                        <p>Google</p>
                    </button>
                    <button class="flex justify-center items-center text-flat border-1 border-solid border-gray-300">
                        <Icon class="mr-1 " icon="logos:linkedin-icon" width="1.2em" height="1.2em" />
                        <p>LinkedIn</p>
                    </button>
                </div>
                <p class="mt-3 text-flat">Don't have an account <span class="text-primary cursor-pointer">Sign up</span>
                </p>
            </div>
        </div>
    </div>
</template>

<style>
.textttt {
    font-size: 4rem !important;
}

button {
    border: 1px solid rgba(128, 128, 128, 0.321) !important;
}

.loginBtn {
    color: white !important;
    border: none;
}

.checkbox-wrapper-33 {
    --s-xsmall: 0.625em;
    --s-small: 1.2em;
    --border-width: 1px;
    --c-primary: #eb098d;
    --c-primary-20-percent-opacity: rgba(243, 5, 96, 0.2);
    --c-primary-10-percent-opacity: rgba(247, 0, 152, 0.1);
    --t-base: 0.4s;
    --t-fast: 0.2s;
    --e-in: ease-in;
    --e-out: cubic-bezier(.11, .29, .18, .98);
}

.checkbox-wrapper-33 .visuallyhidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.checkbox-wrapper-33 .checkbox {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.checkbox-wrapper-33 .checkbox+.checkbox {
    margin-top: var(--s-small);
}

.checkbox-wrapper-33 .checkbox__symbol {
    display: inline-block;
    display: flex;
    margin-right: calc(var(--s-small) * 0.7);
    border: var(--border-width) solid var(--c-primary);
    position: relative;
    border-radius: 0.1em;
    width: 1.5em;
    height: 1.5em;
    transition: box-shadow var(--t-base) var(--e-out), background-color var(--t-base);
    box-shadow: 0 0 0 0 var(--c-primary-10-percent-opacity);
}

.checkbox-wrapper-33 .checkbox__symbol:after {
    content: "";
    position: absolute;
    top: 0.5em;
    left: 0.5em;
    width: 0.25em;
    height: 0.25em;
    background-color: var(--c-primary-20-percent-opacity);
    opacity: 0;
    border-radius: 3em;
    transform: scale(1);
    transform-origin: 50% 50%;
}

.checkbox-wrapper-33 .checkbox .icon-checkbox {
    width: 1em;
    height: 1em;
    margin: auto;
    fill: none;
    stroke-width: 3;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
    color: var(--c-primary);
    display: inline-block;
}

.checkbox-wrapper-33 .checkbox .icon-checkbox path {
    transition: stroke-dashoffset var(--t-fast) var(--e-in);
    stroke-dasharray: 30px, 31px;
    stroke-dashoffset: 31px;
}

.checkbox-wrapper-33 .checkbox__textwrapper {
    margin: 0;
}

.checkbox-wrapper-33 .checkbox__trigger:checked+.checkbox__symbol:after {
    -webkit-animation: ripple-33 1.5s var(--e-out);
    animation: ripple-33 1.5s var(--e-out);
}

.checkbox-wrapper-33 .checkbox__trigger:checked+.checkbox__symbol .icon-checkbox path {
    transition: stroke-dashoffset var(--t-base) var(--e-out);
    stroke-dashoffset: 0px;
}

.checkbox-wrapper-33 .checkbox__trigger:focus+.checkbox__symbol {
    box-shadow: 0 0 0 0.25em var(--c-primary-20-percent-opacity);
}

@-webkit-keyframes ripple-33 {
    from {
        transform: scale(0);
        opacity: 1;
    }

    to {
        opacity: 0;
        transform: scale(20);
    }
}

@keyframes ripple-33 {
    from {
        transform: scale(0);
        opacity: 1;
    }

    to {
        opacity: 0;
        transform: scale(20);
    }
}
</style>