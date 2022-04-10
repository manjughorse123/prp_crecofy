<template>
  <div class="p-grid p-nogutter card">
    <div class="p-col-4 p-r-15">
      <Card>
        <template #title>54</template>
        <template #content>Total Members</template>
      </Card>
    </div>
    <div class="p-col-4 p-r-15">
      <Card>
        <template #title><span class="card-title">67</span></template>
        <template #content>
          <div class="p-grid p-nogutter">
            <div class="p-col-5">New Members</div>
            <div class="p-col-7 date-content">
              <span class="per-val">+25%</span>
              from 21 jun 2021
            </div>
          </div>
        </template>
      </Card>
    </div>
    <div class="p-col-4">
      <Card>
        <template #title>789</template>
        <template #content class="card-content">Member Purchases</template>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MembersCard',
}
</script>
<style lang="scss" scoped>
.card:deep .p-card {
  font-family: Lexend;
  box-shadow: none;
}
.card:deep .p-card-body {
  padding: 32px 36px 32px 40px;
}
.card:deep .p-card-title {
  color: #5e66fa;
  font-weight: 600;
  font-size: 54px;
  line-height: 150%;
  margin: 0px;
}
.card:deep .p-card-content {
  padding: 0px;
  color: #3f3f40;
  font-weight: 300;
  font-size: 18px;
  line-height: 150%;
}
.card:deep .date-content {
  font-size: 15px;
  color: #aaabad;
  text-align: right;
}
.card:deep .date-content .per-val {
  color: #0bc984;
  font-weight: 500;
}

@media only screen and (width: 768px) {
  .card:deep .p-card-body {
    padding: 12px 14px 12px 16px !important;
  }
  .card:deep .p-card-title {
    font-size: 16px !important;
  }
  .card:deep .p-card-content {
    font-size: 9px !important;
  }
  .card:deep .date-content {
    font-size: 8px !important;
  }
}

@media only screen and (width: 1024px) {
  .card:deep .p-card-body {
    padding: 16px 18px 16px 20px !important;
  }
  .card:deep .p-card-title {
    font-size: 28px !important;
  }
  .card:deep .p-card-content {
    font-size: 13px !important;
  }
  .card:deep .date-content {
    font-size: 11px !important;
  }
}
@media only screen and (width: 1366px) {
  .card:deep .p-card-body {
    padding: 20px 20px 20px 24px !important;
  }
  .card:deep .p-card-title {
    font-size: 36px !important;
  }
  .card:deep .p-card-content {
    font-size: 18px !important;
  }
  .card:deep .date-content {
    font-size: 15px !important;
  }
}
</style>
