<template>
  <div>
    <px-assets-table :assets="assets"></px-assets-table>
  </div>
</template>

<script>
import PxAssetsTable from "@/components/PxAssetsTable";
import { getCriptos } from "@/utils/api.js";

export default {
  name: "Home",
  components: {
    PxAssetsTable
  },
  data() {
    return {
      limit: 10,
      assets: []
    };
  },
  mounted() {
    this.fetchCriptos();
  },
  methods: {
    fetchCriptos() {
      getCriptos(this.limit).then(res => (this.assets = res.data));
    }
  }
};

// eslint-disable-next-line
</script> 