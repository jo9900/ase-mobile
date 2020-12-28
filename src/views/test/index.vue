<template>
  <div style="margin-top: 300px">
    <div class="picker" v-show="pickerIsshow">
      <van-picker
        title="标题"
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="onCancel"
        @change="onChange"
        class="vanpicker"
      />
    </div>
  </div>
</template>
<script>
import { Picker } from "vant";
import { Toast } from "vant";
export default {
  components: { vanPicker: Picker },
  data() {
    return {
      columns: ["杭州", "宁波", "温州", "绍兴", "湖州", "嘉兴", "金华", "衢州"],
      pickerIsshow: true,
    };
  },
  methods: {
    onConfirm(value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
      this.pickerIsshow = false;
    },
    onChange(value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel() {
      // Toast("取消");
      this.pickerIsshow = false;
    },
  },
};
</script>
<style scoped >
.picker {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
}
.vanpicker {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>