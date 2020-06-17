import { Component, h, Host } from '@stencil/core';
export class SsrSlotFix {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "scale-ssr-slot-fix"; }
}
