<template>
  <form>
    <label>Please select provider.</label>
    <br>
    <div v-for="row in checkboxData" :key="row.name">
      <input
        type="checkbox"
        :name="row.name"
        :value="row.value"
        @click="$emit('checkbox-clicked', $event)"
        :checked="checkBoxSelected.includes(row.value)"
      >
      <label>{{ row.label }}</label>
    </div>
  </form>
</template>

<script>
export default {
  name: "ProviderCheckbox",
  props: {
    checkboxData: {
      type: Array,
      required: true
    },
    checkBoxSelected: {
      type: Array,
      required: true
    }
  }
};
</script>