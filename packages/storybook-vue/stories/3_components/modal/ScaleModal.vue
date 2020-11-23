<template>
  <scale-modal
    :custom-class="customClass"
    :transitions="transitions"
    :size="size"
    :header="header"
    :close="close"
    :opened="opened"
    :close-label="closeLabel"
    :styles="styles"
    @scaleClose="scaleClose"
  >
    <slot name="header"></slot>
    <slot name="close"></slot>
    <slot name="modal-actions"></slot>
    <slot>
      Today's your lucky day. Look around, kiddo - it's all yours. You are now
      the owner of this fine establishment. Free? Oh ladies, cover your ears.
      No... not free. Look, hey... this is a squeaky clean, highly profitable
      (at least potentially), local institution. Look the bottom with favor by
      the chamber of commerce, better business bureau at three-hundred and
      twelve thousand dollars, it's a steal. Don't you get it? On the outside
      it's a nail salon right, on the inside it's the best money laundering a
      growing boy could ask for. Wait, wait! Come back here. Sit. Come on, come
      on... humor me here for a second. You know you need to launder your money,
      right? Do you understand the basics of it - placement, layering,
      integration. Well, you wanna stay out of jail don't ya? You wanna keep
      your money and your freedom. Cause I got three little letters for ya, I -
      R - S. If they can get Capone, they can get you. Hey look, here's you
      right - pink... Pinkman, get it? Here's your cash. You're out on the town,
      yeah you're partying hardy, you're knocking boots with the chicky babes
      and aww! Who's this? It's the tax man and he's looking at you. And what
      does he see? He sees a young fella, big fancy house, unlimited cash supply
      and no job. Now what is the conclusion the tax man makes? Aaaaannnt!
      Wrong! Millions times worse - you're a tax cheat. What do they do? They
      take every penny and you go in the can for felony tax evasion. Ouch! What
      was your mistake? You didn't launder your money! Now, you give me your
      money, okay that's called placement. Hand me that little thing, bin. This
      is the nail salon, right. I take your dirty money and I slip it into the
      salon's nice clean cash flow - that's called layering. Final step -
      integration. The revenues from the salon go to the owner - that's you!
      Your filthy drug money has been transformed into nice clean taxable income
      brought to you by a savvy investment in a thriving business. Yeah and if
      you wanna stay a criminal and not become say a convict, then maybe you
      should grow up and listen to your lawyer.
    </slot>
  </scale-modal>
</template>

<script>
import { action } from "@storybook/addon-actions";

export default {
  props: {
    customClass: String,
    transitions: String,
    opened: Boolean,
    close: String,
    closeLabel: String,
    header: String,
    size: String,
    styles: { type: String },
  },
  methods: {
    scaleClose($event) {
      action("scaleClose");
      this.$emit("scaleClose", $event);
    }
  }
};
</script>
