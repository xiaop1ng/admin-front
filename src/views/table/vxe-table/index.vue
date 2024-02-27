<script setup>
import { getTableDataApi } from "@/api/table"
import { ref, watch , onMounted } from 'vue'
const tableData = ref()

const pageVo = ref({
  currentPage: 1,
  pageSize: 10,
  total: 0
})

function footerMethod({$table}) {
  let row = $table.context.attrs.row
  return [
      [
        '','','','','合计',
        row.totalWorkHours,
        row.totalDoneNumber,
        row.totalQualifNumber,
        row.totalDisQualifNumber,
        row.totalQualifRate
    ]
  ]
}

async function list() {
  let total = 0
  /** 接口需要的参数 */
  const params = {
    size: pageVo.value.pageSize,
    current: pageVo.value.currentPage
  }
  /** 调用接口 */
  let res = await getTableDataApi(params)
  console.info(res)
  tableData.value = res.data.records
  pageVo.value.total = res.data.total
}

function pageChange({ currentPage, pageSize }) {
  pageVo.value.currentPage = currentPage
  pageVo.value.pageSize = pageSize
  list()
}
onMounted(() => {
  console.info("mounted invoke!")
  list()
})

watch(pageVo, (n, o) => {
  console.info("pageVo change", n)

})

</script>

<template>
  <div class="app-container">
    <vxe-table border :data="tableData">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="expand" title="" width="45">
        <template #default="{ row, rowIndex }">

        </template>
        <template  #content="{ row, rowIndex }">
          <div class="expand-wrapper">
            <vxe-table 
              class="mytable-footer"
              border="inner"
              :show-footer="row.ticketDetailVoList && row.ticketDetailVoList.length > 0"
              :row-config="{isHover: true}"
              :footer-method="footerMethod"
              :row="row"
              :data="row.ticketDetailVoList">
              <vxe-column field="productSn" title="产品号"></vxe-column>
              <vxe-column field="planNumber" title="计划数量"></vxe-column>
              <vxe-column field="planMinutes" title="计划耗时(分钟)"></vxe-column>
              <vxe-column field="startTime" title="报工时间"></vxe-column>
              <vxe-column field="doneTime" title="完工时间"></vxe-column>
              <vxe-column field="workHours" title="工时(小时)"></vxe-column>
              <vxe-column field="doneNumber" title="完成数量"></vxe-column>
              <vxe-column field="qualifNumber" title="合格品"></vxe-column>
              <vxe-column field="disQualifNumber" title="不合格品"></vxe-column>
              <vxe-column field="qualifRate" title="合格率(%)"></vxe-column>
            </vxe-table>
          </div>
        </template>
      </vxe-column>
      <vxe-column field="createTime" title="日期"></vxe-column>
      <vxe-column field="deviceId" title="设备号"></vxe-column>
      <vxe-column field="totalPlanHours" title="总计划耗时(小时)"></vxe-column>
      <vxe-column field="runningHours" title="运行时长(小时)"></vxe-column>
      <vxe-column field="totalWorkHours" title="总工时(小时)"></vxe-column>
      <vxe-column field="useRate" title="设备利用率(%)"></vxe-column>
    </vxe-table>
    <vxe-pager v-model:current-page="pageVo.currentPage" v-model:page-size="pageVo.pageSize" :total="pageVo.total" 
      @page-change="pageChange" />
  </div>
</template>

<style>
.expand-wrapper {
  padding-left: 100px;
}
</style>