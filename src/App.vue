<template>
  <div id="app">
    <provider-checkbox
      :checkboxData="checkboxData"
      :checkBoxSelected="checkBoxSelected"
      @checkbox-clicked="checkboxClicked($event)"
    />
    <br>
    <carriers-table
      :columnHeading="columnHeading"
      :tableData="tableData"
    />
  </div>
</template>

<script>
import CarriersTable from './components/CarriersTable.vue'
import ProviderCheckbox from './components/ProviderCheckbox.vue'
import * as CommonUtil from './utils/common-utils.js'

export default {
  name: 'app',
  components: {
    CarriersTable,
    ProviderCheckbox
  },
  data() {
    return {
      checkboxData: CommonUtil.getCheckboxData(),
      columnHeading: ['Name', 'Carrier', 'Provider'],
      fetchedData: CommonUtil.getCarriersData(),
      tableData: [],
      checkBoxSelected: []
    }
  },
  created() {
    this.tableData = this.fetchedData
  },
  methods: {
    checkboxClicked(event) {
      // check if checkbox is checked then add to array else remove.
      if(event.target.checked){
				this.checkBoxSelected.push(event.target.value)
			} else {
				const indexToRemove = this.checkBoxSelected.indexOf(event.target.value)
				if(indexToRemove > -1){
					this.checkBoxSelected.splice(indexToRemove, 1)
				}
			}
      this.filterTableData()
    },
    filterTableData() {
      if(this.checkBoxSelected.length > 0){
        // filter list when either of the selected provider is present in carrier list
        this.tableData = this.fetchedData.filter(tableRow => {
          return tableRow.provider.filter(val => this.checkBoxSelected.includes(val)).length > 0
        })
      } else {
        // reset table data if no checkbox is selected
        this.tableData = this.fetchedData;
      }
    }
  }
}
</script>
