<template>
  <div class="p-grid p-nogutter data-table p-t-15">
    <DataTable
      :value="tableData"
      :paginator="true"
      :rows="10"
      :scrollable="true"
      scrollHeight="calc(100vh - 430px)"
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
          <div class="p-grid p-nogutter">
            <div class="p-col-fixed">
              <InputText
                placeholder="Search by the name or member ID"
                v-model="value"
                class="input-search"
              />
            </div>
            <TabMenu :model="tableTabs">
              <template #tableTabs="{ tableTabs }">
                <a :href="item.url">{{ tableTabs.label }}</a>
              </template>
            </TabMenu>
          </div>
          <Button icon="pi pi-plus" label="Add new member" />
        </div>
      </template>
      <Column field="id" header="ID"></Column>
      <Column field="name" header="Name" :sortable="true"></Column>
      <Column field="email" header="Email" class="thin-col"></Column>
      <Column field="phone" header="Phone" class="thin-col"></Column>
      <Column field="gender" header="Gender" class="thin-col"></Column>
      <Column field="dateOfBirth" header="Date Of Birth" class="thin-col"></Column>
      <Column field="status" header="Status" filterMatchMode="equals" class="">
        <template #body="slotProps">
          <span :class="'customer-badge ' + slotProps.data.status">
            {{ slotProps.data.status }}
          </span>
        </template>
      </Column>
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
import json from '@/assets/Utility/tableData.json'
interface Data {
  status: string
}
export default {
  name: 'MembersTable',
  data(): unknown {
    return {
      tableData: json.tableData,
      tableTabs: json.tableTabs,
    }
  },
  methods: {
    rowClass(data: Data): string {
      return data.status === 'INACTIVE' ? 'inactive' : ''
    },
  },
}
</script>
<style>
.action-col {
  justify-content: flex-end !important;
}
</style>
