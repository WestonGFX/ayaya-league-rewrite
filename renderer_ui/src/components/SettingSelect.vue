<template>
  <div class="setting-select">
    <div>{{ setting.text }}</div>
  <el-radio-group
    v-model="setting.value"
    size="large"
    @change="onChange(path, sid, setting)"
  >
      <el-radio-button v-for="e of setting.options" :value="e.value" :label="e.text">
        <i v-if="e.icon" :class="e.icon"></i>
        {{e.text}}
      </el-radio-button>
    </el-radio-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { SettingSelect } from "../../../src/models/renderer/SettingsGroup";

declare module AyayaApi {
  function changeSetting(path: string, key: string, value: any);
}

export default defineComponent({
  name: "SettingSelect",
  props: {
    setting: Object as PropType<SettingSelect>,
    path: String,
    sid: String,
  },
  methods: {
    onChange(path: string, sid: string, setting: SettingSelect) {
      try {
        AyayaApi.changeSetting(path, sid, setting.value);
      } catch (err) {
        console.error('onChange failed:', err);
      }
    },
  },
});
</script>

<style scoped>
.setting-select {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>