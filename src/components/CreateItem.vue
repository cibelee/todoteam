<template>
  <div style="height: 100%; background-color: #ffffff; text-align: center">
    <el-form
      :label-position="right"
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      style="width: 500px; margin: 0 auto"
    >
      <el-form-item label="任务 : " prop="item" style="padding-top: 20px">
        <el-input v-model="ruleForm.item"></el-input>
      </el-form-item>
      <el-form-item label="描述 : " prop="descript">
        <el-input
          v-model="ruleForm.descript"
          type="textarea"
          :rows="5"
        ></el-input>
      </el-form-item>
      <el-form-item label="开始时间 : " prop="starttime">
        <el-date-picker
          v-model="ruleForm.date"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions"
        >
        </el-date-picker>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import rules from "../ruler.js";
export default {
  name: "CreateItem",
  data() {
    return {
      input: "",
      ruleForm: {
        item: "",
        descript: "",
      },
      rules: rules,
    };
  },
  methods: {
    click: function () {
      alert(this.input);
    },
  },
};
</script>