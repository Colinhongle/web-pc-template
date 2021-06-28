<!--
 * @Author: wgj
 * @Date: 2021-03-22 10:26:34
 * @LastEditTime: 2021-06-28 18:20:20
 * @LastEditors: wgj
 * @Description: 
-->
<template>
  <div class="about">
    <h1 class="test_class">This is an about page</h1>
    <el-button type="primary" @click="exportExcel">导出</el-button>
    <span>{{ 'G12' | getGradeName }}</span>
    <svg-icon icon-class="icon-xls" />
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { getSchoolClass } from '@/api';
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
    };
  },
  methods: {
    exportExcel() {
      const tHeader = ['姓名', '日期', '地址'];
      const filterVal = ['name', 'date', 'address'];
      const data = this.formatJson(filterVal, this.tableData);
      // let data = this.tableData
      import('@/vendor/Export2Excel').then((excel) => {
        excel.export_json_to_excel({
          header: tHeader, //表头 必填
          data, //具体数据 必填
          filename: 'demo', //非必填
          autoWidth: true, //非必填
          bookType: 'xlsx', //非必填
        });
      });
    },
      formatJson(filterVal, jsonData) {
      // return jsonData.map((v) => filterVal.map((j) => v[j]));
      return jsonData.map((v) =>
        filterVal.map((j) => {
          if (v[j] == null || v[j] == '') return;
          if (j === 'bindDate' || j === 'unbindDate') {
            return this.$moment(v[j]).format('YYYY-MM-DD HH:mm:ss');
          }
          if (j === 'sex') {
            return v[j] == 'S01' ? '男' : '女';
          }
          if (j === 'statusCd') {
            return v[j] == 'S01' ? '有效' : '无效';
          } else {
            return v[j];
          }
        })
      );
    },
    // 查询班级筛选条件
    getBelongClassOptions(val) {
      let obj = {
        schoolId: 24,
      };
      let params = {
        requestJson: JSON.stringify(obj),
      };
      console.log(obj);
      getSchoolClass(params).then((r) => {
        if (r.totalNum > 0) {
          let arr = r.data[0].SchoolClassVo;
          console.log('arr', arr);
        }
      });
    },
  },
  mounted() {
    this.getBelongClassOptions();
    console.log('66');
  },
};
</script>
<style lang="scss" scoped>
h1 {
  // background: $common_blue;
}
</style>