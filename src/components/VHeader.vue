<template>
  <header class="shadow w-screen ">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-blue-400 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <px-icon class="mr-2" />
          <span class="font-semibold text-xl tracking-tight">Vue-Exchange</span>
        </div>
        <div
          class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto"
        >
          <div class="text-sm lg:flex-grow"></div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import PxIcon from "@/components/PxIcon";

export default {
  name: "VHeader",

  components: { PxIcon }
};
</script>
