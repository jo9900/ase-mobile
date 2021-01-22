
<template>
  <div id="app" ref="box">
    <router-view />
     <service />
  </div>
</template>
<script>
import service from "@/components/service";
export default {
  name: "",
    metaInfo() {
        return {
            title: this.$t("message.492"),
            meta: [
                {
                    name: 'keyWords',
                    content: this.$t("message.493")
                },
                {
                    name: 'description',
                    content: this.$t("message.494")
                }
            ]
        }
    },
  components: { service },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    var el_ = this.$refs.box;
    this.$store.state.el_ = el_;
  },
};
</script>
<style>
.gobaket:hover {
  color: #104cff;
}
.m-picker .m-picker-header span:last-of-type {
  color: #104cff !important;
}
.el-select-dropdown__item {
  width: 300px !important;
}
.el-message-box {
  width: 80% !important;
}
</style>
