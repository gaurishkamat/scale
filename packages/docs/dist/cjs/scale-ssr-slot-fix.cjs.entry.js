'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index$2 = require('./index-b603b126.js');

const SsrSlotFix = class {
    constructor(hostRef) {
        index$2.registerInstance(this, hostRef);
    }
    render() {
        return (index$2.h(index$2.Host, null, index$2.h("slot", null)));
    }
};

exports.scale_ssr_slot_fix = SsrSlotFix;
