import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useMoneyStore = defineStore("money", () => {
  const money = ref(0);

  const getMoney = computed(() => money.value);

  function resetMoney() {
    money.value = 0;
  }

  function changeMoneyByAmount(amount: number) {
    money.value += amount;
  }

  function setMoney(amount: number) {
    money.value = amount;
  }

  return {
    money,
    getMoney,
    resetMoney,
    changeMoneyByAmount,
    setMoney,
  };
});
