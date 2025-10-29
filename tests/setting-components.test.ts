import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import SettingInput from '../renderer_ui/src/components/SettingInput.vue';
import SettingNumber from '../renderer_ui/src/components/SettingNumber.vue';
import SettingSelect from '../renderer_ui/src/components/SettingSelect.vue';

// Provide a global AyayaApi stub for the components
beforeEach(() => {
  globalThis.AyayaApi = { changeSetting: vi.fn() } as any;
});

describe('Setting components', () => {
  it('SettingInput forwards value changes', () => {
    const setting = { text: 'name', value: 'foo', multiline: false };
    const wrapper = mount(SettingInput, { props: { setting, path: 'p', sid: 's' } });
    wrapper.vm.onChange('p', 's', setting);
    expect(globalThis.AyayaApi.changeSetting).toHaveBeenCalledWith('p', 's', 'foo');
  });

  it('SettingNumber forwards value changes', () => {
    const setting = { text: 'num', value: 1, min: 0, max: 10 };
    const wrapper = mount(SettingNumber, { props: { setting, path: 'p2', sid: 's2' } });
    wrapper.vm.onChange('p2', 's2', setting);
    expect(globalThis.AyayaApi.changeSetting).toHaveBeenCalledWith('p2', 's2', 1);
  });

  it('SettingSelect forwards value changes', () => {
    const setting = { text: 'sel', value: 'a', options: [{ text: 'A', value: 'a' }, { text: 'B', value: 'b' }] };
    const wrapper = mount(SettingSelect, { props: { setting, path: 'p3', sid: 's3' } });
    wrapper.vm.onChange('p3', 's3', setting);
    expect(globalThis.AyayaApi.changeSetting).toHaveBeenCalledWith('p3', 's3', 'a');
  });
});
