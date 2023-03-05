<template>
    <div class="bg-yellow-500 text-black text-xl p-5 mt-10 rounded-lg">{{ greeting }}</div>
</template>

<script lang="ts" setup>
import { ref, type Ref } from "vue";

const greeting: Ref<string> = ref("Hello world, from Vue!");
</script>