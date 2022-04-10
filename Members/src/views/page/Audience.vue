<template>
  <div class="p-grid p-nogutter data-table">
    <DataTable
      :value="tableData"
      :paginator="true"
      :rows="10"
      :scrollable="true"
      scrollHeight="calc(100vh - 238px)"
      v-model:selection="selectedTableData"
      selectionMode="single"
      dataKey="name"
      :rowClass="rowClass"
      responsiveLayout="scroll"
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
      currentPageReportTemplate="Showed {first} to {last} of {totalRecords} members"
      style="width: 100%"
    >
      <template #header>
        <div class="p-d-flex p-jc-between table-header">
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText type="text" v-model="value1" placeholder="Search" />
          </span>
          <Button v-on:click="addNewMember" icon="pi pi-plus" label="Add new audience" />
        </div>
      </template>
      <Column field="id" header="ID" class="id-col"></Column>
      <Column field="audienceName" header="Audience Name"></Column>
      <Column field="member" header="Members" class="thin-col"></Column>
      <Column field="dateOfCreate" header="Phone" class="thin-col"></Column>
      <Column class="action-col">
        <template #body>
          <img src="@/assets/images/edit.svg" class="p-mr-2" />
          <img src="@/assets/images/view.svg" />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script lang="ts">
import json from '@/assets/Utility/audience.json'
interface Data {
  status: string
}
export default {
  name: 'MembersTable',
  data(): unknown {
    return {
      tableData: json.tableData,
    }
  },
  methods: {
    rowClass(data: Data): string {
      return data.status === 'INACTIVE' ? 'inactive' : ''
    },
    addNewMember(): string {
      return this.$router.push('/app/addnewaudience')
    },
  },
}
</script>
<style>
.id-col {
  max-width: 75px;
}
.action-col {
  justify-content: flex-end !important;
}
</style>
