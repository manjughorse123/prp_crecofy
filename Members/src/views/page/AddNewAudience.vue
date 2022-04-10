<template>
  <div class="p-grid p-nogutter audience-container">
    <div class="container p-col-8 p-p-3">
      <div class="audienceTitle">
        <img src="@/assets/images/user.svg" class="userIcon" />
        <span class="p-ml-2"> Audience details </span>
        <img src="@/assets/images/delete.svg" class="deleteIcon" />
      </div>

      <div class="p-mt-4 p-grid p-nogutter inputContainer">
        <div class="inputTitle p-mb-2">Name</div>
        <InputText type="text" v-model="value" />
      </div>

      <div class="p-grid p-nogutter p-mt-4 memberContent">
        <div class="p-col-4">
          <img src="@/assets/images/members.svg" class="userIcon" />
          <span class="membersTitle"> Members </span>
        </div>
        <div class="p-col-4">
          <span class="membersContent">
            Members selected:
            <span class="membersValue">(form 12669)</span>
          </span>
        </div>
        <div class="p-col-4 memberButton">
          <Button
            v-on:click="display = true"
            class="p-button-outlined"
            label="Add members manually"
          />
        </div>
      </div>

      <div class="p-grid p-nogutter p-mt-4">
        <div class="p-col-4">
          <div class="inputTitle p-mb-2">Gender</div>
          <Dropdown
            v-model="selectedGender"
            :options="gender"
            optionLabel="gender"
            placeholder="All"
          />
        </div>
        <div class="p-col-8 p-pl-2">
          <div class="inputTitle p-mb-2">Age</div>
          <div class="p-grid p-nogutter slider">
            <InputText type="text" v-model="sliderValue[0]" class="p-col-2" />
            <Slider v-model="sliderValue" :range="true" class="p-col-7 p-ml-3 p-mr-3" />
            <InputText type="text" v-model="sliderValue[1]" class="p-col-2" />
          </div>
        </div>
      </div>

      <div class="p-grid p-nogutter p-mt-4">
        <div class="p-col-12">
          <div class="inputTitle p-mb-2">Article perfernces</div>
          <Dropdown
            v-model="selectedArticle"
            :options="article"
            optionLabel="article"
            placeholder="Select Article"
          />
        </div>
      </div>
      <div class="p-grid p-nogutter p-mt-4 bottomBtn">
        <Button label="Cancel" class="p-button-outlined p-mr-3" />
        <Button label="Save" />
      </div>
    </div>
    <Sidebar v-model:visible="display" position="right">
      <template #header>
        <div class="audienceTitle">
          <img src="@/assets/images/user.svg" class="userIcon" />
          <span class="p-ml-2"> Add members manually </span>
        </div>
      </template>
      <div class="p-grid p-nogutter">
        <div class="p-col-6">
          <span class="p-input-icon-left searchInput">
            <i class="pi pi-search" />
            <InputText type="text" v-model="value1" placeholder="Search by the name of member ID" />
          </span>
        </div>
        <div class="p-col-6 tab-menu-sidebar">
          <TabMenu :model="tableTabs">
            <template #tableTabs="{ tableTabs }">
              <a :href="item.url">{{ tableTabs.label }}</a>
            </template>
          </TabMenu>
        </div>
      </div>
      <div class="p-grid data-table p-mt-3">
        <DataTable
          :value="tableData"
          :paginator="true"
          :rows="10"
          :scrollable="true"
          scrollHeight="calc(100vh - 280px)"
          v-model:selection="selectedTableData"
          dataKey="id"
          :rowClass="rowClass"
          responsiveLayout="scroll"
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
          currentPageReportTemplate="Showed {first} to {last} of {totalRecords} members"
          style="width: 100%"
        >
          <Column selectionMode="multiple" class="checkbox-col"></Column>
          <Column field="id" header="ID" class="id-col"></Column>
          <Column field="name" header="Name" :sortable="true" class="col-name"></Column>
          <Column field="gender" header="Gender" class="thin-col"></Column>
          <Column field="dateOfBirth" header="Date Of Birth" class="thin-col"></Column>
        </DataTable>
      </div>
      <div class="p-grid p-nogutter p-mt-4 bottomBtn">
        <Button label="Cancel" class="p-button-outlined p-mr-3" v-on:click="display = false" />
        <Button label="Save" />
      </div>
    </Sidebar>
  </div>
</template>
<script lang="ts">
import json from '@/assets/Utility/tableData.json'
export default {
  name: 'AddNewAudience',
  data(): unknown {
    return {
      selectedGender: null,
      selectedTableData: [],
      selectedArticle: null,
      gender: [{ gender: 'male' }, { gender: 'Female' }, { gender: 'Other' }],
      article: [{ article: 'Article 1' }, { article: 'Article 2' }, { article: 'Article 3' }],
      sliderValue: [0, 100],
      display: false,
      tableData: json.tableData,
      tableTabs: [{ label: 'All' }, { label: 'Selected' }, { label: 'Not Selected' }],
    }
  },
}
</script>
<style>
.container {
  background: #ffffff;
  font-family: Lexend;
  height: 100%;
}
.deleteIcon {
  margin-left: auto;
}

.membersTitle {
  font-weight: bold;
  font-size: 18px;
  color: #3f3f40;
}
.membersContent {
  font-weight: 300;
  font-size: 15px;
  color: #3f3f40;
}
.membersValue {
  color: rgb(168, 168, 168);
  font-weight: 200;
}
.memberContent {
  display: flex;
  align-items: center;
}
.memberButton {
  display: flex;
  justify-content: flex-end;
}

.memberButton .p-button.p-button-outlined {
  border: 1px solid #e8e9eb;
  height: 44px;
  border-radius: 4px;
  font-weight: 600;
  color: #5e66fa;
  font-size: 15px;
}

/* dialog css */
.dialog {
  width: 700px;
}
.searchInput {
  width: 100% !important;
  height: 100%;
}
.searchInput input {
  width: 100%;
  border: solid 1px #cacbcd;
  border-radius: 4px;
  font-size: 15px;
  color: #aaabad;
  font-weight: 400;
  height: 100%;
}
.checkbox-col {
  max-width: 25px;
}
.id-col {
  max-width: 75px;
}
.tab-menu-sidebar > div {
  margin-left: auto;
}
.slider {
  display: flex;
  align-items: center;
}
.slider .p-slider-range {
  background: #5e66fa !important;
}
.slider .p-slider-handle {
  height: 16px !important;
  width: 16px !important;
  border: none !important;
  background: #5e66fa !important;
}
.slider .p-inputtext {
  height: 44px;
  text-align: center;
  font-weight: 400;
  font-size: 15px;
  color: #3f3f40;
}
.audienceTitle {
  display: flex;
  align-items: center;
  flex-direction: row;
  font-size: 18px;
  font-weight: 700;
  color: #3f3f40;
}
.bottomBtn .p-button.p-button-outlined {
  height: 44px;
  border-color: #e8e9eb;
  color: #3f3f40;
  background-color: #fff;
  font-size: 15px;
}
.bottomBtn .p-button {
  height: 44px;
  background-color: #5e66fa;
  color: #fff;
  font-size: 15px;
}
</style>
