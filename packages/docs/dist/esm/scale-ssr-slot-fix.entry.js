import { r as registerInstance, h, H as Host } from './index-c2e5d8cb.js';

const SsrSlotFix = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
};

export { SsrSlotFix as scale_ssr_slot_fix };
