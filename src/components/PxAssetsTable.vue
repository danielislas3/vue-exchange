<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th></th>
        <th>
          <span>Ranking</span>
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block"></td>
      </tr>
    </thead>
    <tbody>
      <tr
        class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100"
        v-for="coin in assets"
        :key="coin.id"
      >
        <td>
          <img
            class="w-6 h-6 hover:underline text-green-600"
            :src="
              `https://static.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`
            "
            :alt="coin.name"
          />
        </td>
        <td>
          <b>{{ coin.rank }}</b>
        </td>
        <td>
          <router-link :to="{ name: 'coin-detail', params: { id:coin.id } }">
            {{ coin.name }}
          </router-link>
        </td>
        <td>{{ coin.priceUsd | dolar }}</td>
        <td>{{ coin.marketCapUsd | dolar }}</td>
        <td :class="positiveColors(coin.changePercent24Hr)">
          {{ coin.changePercent24Hr | percent }}
        </td>

        <td></td>
        <td class="hidden sm:block"></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "PxAssetsTable",

  props: {
    assets: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    positiveColors(percentage) {
      return percentage.includes("-") ? "text-red-600" : "text-green-600";
    },
  },
};
</script>

<style scoped>
.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
