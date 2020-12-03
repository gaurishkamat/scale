<template>
  <scale-app-footer
    :claim-lang="claimLang"
    :footer-navigation="footerNavigation"
    :custom-class="customClass"
    :variant="variant"
  ></scale-app-footer>
</template>

<script>
export default {
  props: {
    claimLang: String,
    footerNavigation: String,
    customClass: String,
    variant: String
  }
};
</script>
