# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0-beta.0](https://gitlab.com/scale-ds/scale-telekom/compare/v1.2.0...v2.0.0-beta.0) (2021-03-09)


### Bug Fixes

* **components:** small typos to wrap up CSS refactor (step 1) ([91bec31](https://gitlab.com/scale-ds/scale-telekom/commit/91bec3139deb164a3324bfa5815b6b586a8569cc))
* **design-tokens:** font weight thin is 200 (update storybook too) ([550cd7b](https://gitlab.com/scale-ds/scale-telekom/commit/550cd7bc896e5bdb6a35e1c5377956fc61daa9bf))
* **textarea:** get rid of white background in transparent mode ([1e8f6e4](https://gitlab.com/scale-ds/scale-telekom/commit/1e8f6e4e68fdff73745536a4a8b68650a8ce3534))
* a11y own stylesheet for buttons in shadow with all=inherit ([01b4945](https://gitlab.com/scale-ds/scale-telekom/commit/01b4945627d92fd684ba4b72c00e467d85891383))
* add aria-label back, add missing attributes, finally use button element again ([05d9cf7](https://gitlab.com/scale-ds/scale-telekom/commit/05d9cf732d738acd905f2eac52e3bdc59ef5f385))
* add sr-only class ([daefa2d](https://gitlab.com/scale-ds/scale-telekom/commit/daefa2d7fd1940905ae3d3c845362bbaf049eb0d))
* **components:** typo in 14px font-size token ([0359695](https://gitlab.com/scale-ds/scale-telekom/commit/035969537ca4acefb91f2989ec6bcc276697ea2e))
* add missing active state for screen-readers ([2b4413f](https://gitlab.com/scale-ds/scale-telekom/commit/2b4413f67b863cb0bd7bff661d56bf32dd55bc3a))
* add role=region and aria-labelledby to collapsible ([e110981](https://gitlab.com/scale-ds/scale-telekom/commit/e1109811cbc7550562ccefc65ad9de68c79af96b))
* add transparent border back (HCM) in scale-collapsible ([a905f5e](https://gitlab.com/scale-ds/scale-telekom/commit/a905f5e2f6ab2e37adfff242a6e9c99171ae9a79))
* add transparent border for active state in sidebar-nav (a11y) ([dac4540](https://gitlab.com/scale-ds/scale-telekom/commit/dac454073bf8033fa446cb6456a76cda325194e1))
* button color in primary variant (iOS 12) ([5a7dfae](https://gitlab.com/scale-ds/scale-telekom/commit/5a7dfae54c88c48fff10abac890a61bbc762f136))
* card focus state and a11y ([57f9731](https://gitlab.com/scale-ds/scale-telekom/commit/57f9731679068baceb4bb64ea71d4f6f49c71153))
* click handler behaviour ([be85a2e](https://gitlab.com/scale-ds/scale-telekom/commit/be85a2e4a49db2f4b07b54324d5c752a8623a73a))
* ensure button form hack includes type attribute ([0e06548](https://gitlab.com/scale-ds/scale-telekom/commit/0e065482b4fce3d27ceeca46fcf454a7cfdc3b45))
* explicit aria attributes and less border-bottom transparent ([27cdb8f](https://gitlab.com/scale-ds/scale-telekom/commit/27cdb8fa5b278636f4be11eff97e54ac74f7d3fe))
* format ([49dfe3d](https://gitlab.com/scale-ds/scale-telekom/commit/49dfe3d73e13fe8454208909edd55c7294e216c2))
* grid template for safari ([78ec8a7](https://gitlab.com/scale-ds/scale-telekom/commit/78ec8a78a787952f78e25b0a20079201f2b62151))
* harmonize transitions ([cffaa2e](https://gitlab.com/scale-ds/scale-telekom/commit/cffaa2e798dc4f95196fe878cb3cee7e450790fe))
* HCM border for button (bad selector) ([cd87c7d](https://gitlab.com/scale-ds/scale-telekom/commit/cd87c7d81d085f4035fea560368d963d64520306))
* HCM transparent border for active state in sidebar-nav-* ([506848e](https://gitlab.com/scale-ds/scale-telekom/commit/506848e61ecff196fe551e4ae0e3d3f4e1f47cbd))
* header z-index and brandTitle rename and font fix ([2de7e77](https://gitlab.com/scale-ds/scale-telekom/commit/2de7e771a46f2bffd93ff4f7fc9e84691a05af6c))
* hover jump on FF and minimal nav font weight ([9f64965](https://gitlab.com/scale-ds/scale-telekom/commit/9f64965955c5053788203546e08fffdf442a7721))
* icon colors in input select ([576903f](https://gitlab.com/scale-ds/scale-telekom/commit/576903f9bdf70cc1794365527670d1159184d0c0))
* make border 1px ([41b3538](https://gitlab.com/scale-ds/scale-telekom/commit/41b3538644cc1119508b63766b83b801037785b5))
* make it actually transparent :) ([c04a0e6](https://gitlab.com/scale-ds/scale-telekom/commit/c04a0e6500b8ce52655c1eb21cff88218093973b))
* make label floating also when value is number 0 ([3661148](https://gitlab.com/scale-ds/scale-telekom/commit/3661148bb02333785d2f69ac3d69e2582697b31d))
* make sure content is accessible in small mobile/landscape views and improve HCM border in modal ([8093737](https://gitlab.com/scale-ds/scale-telekom/commit/8093737e8f51c8a9f6794313f39a68d8630d6af3))
* mega menu visible state ([a5e5c56](https://gitlab.com/scale-ds/scale-telekom/commit/a5e5c56fd53e3c55ec9bc5076fa493bb651faad9))
* remove extra level of list ([4c7cf17](https://gitlab.com/scale-ds/scale-telekom/commit/4c7cf1770e3cc1f644083d5753b4fa04f043cbe6))
* remove tabindex ([ca185eb](https://gitlab.com/scale-ds/scale-telekom/commit/ca185eb9ed53a5c660f0c10c14927199868da8a7))
* remove type.family in favor of inherit for fontFamily, in button styles ([d7e83e5](https://gitlab.com/scale-ds/scale-telekom/commit/d7e83e5f14d49dbd365d7ca73d43a141830e18a2))
* scrolling modal alignment (Safari 13) ([852ca4d](https://gitlab.com/scale-ds/scale-telekom/commit/852ca4de8ba344e82c7f04193a723d602ce8afaa))
* sketch component style deltas ([74a46ee](https://gitlab.com/scale-ds/scale-telekom/commit/74a46eec0139efd547ab4fc3cb45f1dfac0dbe2d))
* spec errors ([517d932](https://gitlab.com/scale-ds/scale-telekom/commit/517d9324b364d137ba6f4076332b3b7f25682cce))
* switch styles ([218c56e](https://gitlab.com/scale-ds/scale-telekom/commit/218c56ed8183783f88930f6d1643c219ff2fa17e))
* switch styles ([2285a44](https://gitlab.com/scale-ds/scale-telekom/commit/2285a4464ebef7beefd56b6c4d74ca7e56185906))
* **breadcrumb:** add fallback value for padding ([3f7fb94](https://gitlab.com/scale-ds/scale-telekom/commit/3f7fb94f74bcf2e44d0e4fcc2bfe64644eb05ce9))
* **card:** add border for a11y ([7a73517](https://gitlab.com/scale-ds/scale-telekom/commit/7a735171f526a79083cec5bd0068800e86d4c79f))
* **card:** white background ([f83cb64](https://gitlab.com/scale-ds/scale-telekom/commit/f83cb643ef7c5c899d5b7448d6070b0c5753cdb6))
* **components:** add missing touch support for slider ([08282cf](https://gitlab.com/scale-ds/scale-telekom/commit/08282cfe3188992427856dc02d29dcf6fc49c526))
* **components:** alignment for ordered nested list-item marker ([c268ad6](https://gitlab.com/scale-ds/scale-telekom/commit/c268ad6eb5505e6e0da559b1ba674bf4eabf46d1))
* **components:** avoid typeerror when missing header element in modal ([e0c9236](https://gitlab.com/scale-ds/scale-telekom/commit/e0c92367f57f54c47c7020388c9a139f0d06e837))
* **components:** update snapshots, fix some unit tests, fix classnames typos ([154b2e6](https://gitlab.com/scale-ds/scale-telekom/commit/154b2e64a41af068ed30f25a3855476d64708055))
* **divider:** add missing css reference ([1a26ae4](https://gitlab.com/scale-ds/scale-telekom/commit/1a26ae48cdcd1e5b8d0aebd1ebd2d6e23a64f887))
* **divider:** style override in storybook ([c6a46d4](https://gitlab.com/scale-ds/scale-telekom/commit/c6a46d44189be958e962ea8b95a4405fb858fffb))
* **header:** prevent type errors ([0907ce3](https://gitlab.com/scale-ds/scale-telekom/commit/0907ce35066309dd3009cf54ceeb4ce7a596ae7c))
* **link:** a11y ([a498ffd](https://gitlab.com/scale-ds/scale-telekom/commit/a498ffdb74d246504739e575fc73a78b78c97354))
* **link:** always underline and add aria-disabled ([049a140](https://gitlab.com/scale-ds/scale-telekom/commit/049a1400dc2d4ba21e0c85522f6cbcd99763164e))
* **link:** disabled state ([2aee6a3](https://gitlab.com/scale-ds/scale-telekom/commit/2aee6a336a5c841e18b1a5f2668c680e2c6332c3))
* **list:** HCM border ([bd9b70e](https://gitlab.com/scale-ds/scale-telekom/commit/bd9b70eb144add4a9e7939b2fb88127e5a5254e8))
* **list-item:** resolve spacing diff ([3a233df](https://gitlab.com/scale-ds/scale-telekom/commit/3a233dfce1b03faae37a885a88e1fdee36ca5025))
* **table:** fix ascending/descending mix-up ([9978e8d](https://gitlab.com/scale-ds/scale-telekom/commit/9978e8d14b0d2bcf1dc8f67e4b9e6e47f6a3b641))
* **tag:** use correct fallback color for background ([95e800b](https://gitlab.com/scale-ds/scale-telekom/commit/95e800bb4dcd42343321b94421aa57dfb882113f))
* add _close-label_ prop in modal ([f66e2d3](https://gitlab.com/scale-ds/scale-telekom/commit/f66e2d3231e9ff323f3b9b0274e2786a95e7458e))
* add aria-label prop to scale-icon ([a6033ad](https://gitlab.com/scale-ds/scale-telekom/commit/a6033ad9d5983eb5eb4f55a85e4d3b30d3edb1f9))
* add helper text to radio and checkbox, improve stories ([9e59ab4](https://gitlab.com/scale-ds/scale-telekom/commit/9e59ab4613559743b52932c60f4577f9649e4401))
* add max-width to logo ([eea3f54](https://gitlab.com/scale-ds/scale-telekom/commit/eea3f540f0e03a229f8b80574dabe043dec9e892))
* add resize=vertical to textarea to allow resizing only vertically ([b9ec824](https://gitlab.com/scale-ds/scale-telekom/commit/b9ec82456cb7029ff171f75942bc8bc244c0a0ce))
* add solid background to textarea label (a11y) ([81f05a1](https://gitlab.com/scale-ds/scale-telekom/commit/81f05a1a5e43a15e6d3b5f4f750fd1ff43c06572))
* add tslint ignore comment in tokens.ts (snake case) ([5ea04fa](https://gitlab.com/scale-ds/scale-telekom/commit/5ea04fa78cb7bf3f108975b82f21a2052dd9dfa3))
* adjust some values in Slider (QA) ([7d8fc07](https://gitlab.com/scale-ds/scale-telekom/commit/7d8fc0773f53becaa8ce855cbcdf51c0508a2e0d))
* casing typo in tokens.ts ([dd5a41c](https://gitlab.com/scale-ds/scale-telekom/commit/dd5a41c8c6afecddf89090e162236b08738bf103))
* checked state ([e02d964](https://gitlab.com/scale-ds/scale-telekom/commit/e02d964db208b1f1e2f33820fa6c354d1af5f7b0))
* collapsible styles ([98c70e1](https://gitlab.com/scale-ds/scale-telekom/commit/98c70e11456b7dd5d9190ed2572ca48526efc6b6))
* emit scaleKeyDown event in scale-input ([37fa86c](https://gitlab.com/scale-ds/scale-telekom/commit/37fa86c3088eb7702261892203dd7dc0c45a917b))
* focus close button after opening modal ([f1caad9](https://gitlab.com/scale-ds/scale-telekom/commit/f1caad9c6380011db2068207e656e28e8a145e97))
* input colors ([c08d0df](https://gitlab.com/scale-ds/scale-telekom/commit/c08d0df727355508b4c806b72a661d14b792e7d4))
* keep label black when checked for switch ([39e4b43](https://gitlab.com/scale-ds/scale-telekom/commit/39e4b43c2d9d008b4f4066a7c25473a07d9e7575))
* live area should not be aria-hidden ([ebdcaf1](https://gitlab.com/scale-ds/scale-telekom/commit/ebdcaf1ea3986dd68f6e1556c8571982b69c8c26))
* load fonts using font-weight and font-style CSS prop names ([0a8ca2a](https://gitlab.com/scale-ds/scale-telekom/commit/0a8ca2a25ec37d3a9f79d9c186760401790d13fe))
* load fonts using font-weight and font-style CSS prop names ([d1e87c6](https://gitlab.com/scale-ds/scale-telekom/commit/d1e87c694200f510ede0a2f67dfea61707015d3e))
* make logo responsive ([036eb98](https://gitlab.com/scale-ds/scale-telekom/commit/036eb983461c237faab510638a5b7fb7119c38c3))
* make sure modal content is visible in mobile-landscape ([31cfb13](https://gitlab.com/scale-ds/scale-telekom/commit/31cfb131c71badbab3aa08e040c2b62337e2394a))
* more header a11y ([d50c627](https://gitlab.com/scale-ds/scale-telekom/commit/d50c627ab1bd706a5ebbe655e0f90f85a09d49d6))
* mouse cursor and hover for disabled state in checkbox/radio ([b8f679c](https://gitlab.com/scale-ds/scale-telekom/commit/b8f679c09c5e8af7b087ac8846878c8ded4cb5cb))
* prevent jump on hover in firefox ([dd82c27](https://gitlab.com/scale-ds/scale-telekom/commit/dd82c27a040bd149fcea2e3f80f5514d5e2fa57d))
* remove build:prod script in package.json ([fd18384](https://gitlab.com/scale-ds/scale-telekom/commit/fd18384e16bd06db607d37eb4e3358c5c58d84b5))
* remove duplicate Element() in Modal ([2670943](https://gitlab.com/scale-ds/scale-telekom/commit/267094345b5d80665fc69009b3188bd10df47c22))
* remove extra ul nesting ([aba9d94](https://gitlab.com/scale-ds/scale-telekom/commit/aba9d9401a59f1e1d027cf9b74e16b54f0890ff6))
* remove inline styles from scale-icon (icon.tsx) ([10db081](https://gitlab.com/scale-ds/scale-telekom/commit/10db0818b14b9b29be228958687d3f808ea47460))
* remove px values for fontSize and lineHeight, use tokens (except for Input) ([febde1e](https://gitlab.com/scale-ds/scale-telekom/commit/febde1e2133d3152729a428675118f7978957c3c))
* remove scroll for legend ([6182d8f](https://gitlab.com/scale-ds/scale-telekom/commit/6182d8ff180f159c671d126f568b6d76e23407e0))
* remove unneeded _role_ prop from scale-button (a11y) ([d3adb86](https://gitlab.com/scale-ds/scale-telekom/commit/d3adb86319ac33896f3839f71c1d9c7444e7ba6f))
* remove unwanted outline from textarea ([de47cf0](https://gitlab.com/scale-ds/scale-telekom/commit/de47cf07421d8de0c588bc4278fd4fc44783c913))
* rename FontVariant to TypeVariant and remove Camel for better consistency ([8db6ce5](https://gitlab.com/scale-ds/scale-telekom/commit/8db6ce5900b9ebe96604788260887e7c529431a0))
* rename typeVariants to type_variants ([f38b823](https://gitlab.com/scale-ds/scale-telekom/commit/f38b823125204834db12577347e0e9e090b7a321))
* render the checkbox checked icon only when checked ([84895f3](https://gitlab.com/scale-ds/scale-telekom/commit/84895f33bcf56d3fe18138c2c8a4f1ff2ec8c48a))
* rounded corner ([6551d2c](https://gitlab.com/scale-ds/scale-telekom/commit/6551d2c879766c4963eba8410f61817d18fbc3e0))
* switch order of label/input in input.tsx (label first) ([6799860](https://gitlab.com/scale-ds/scale-telekom/commit/679986096634533db75657dc9ec208e7f866c811))
* textarea solid label background in disabled state ([a5aaf89](https://gitlab.com/scale-ds/scale-telekom/commit/a5aaf892154c57ccf68ee9fa73ed62083ed67a77))
* type_variants values in component styles ([f05c409](https://gitlab.com/scale-ds/scale-telekom/commit/f05c4098954afd7384b845a29f6fbe0923a3b07d))
* typeVariants to type_variants in text.tsx ([ebf7927](https://gitlab.com/scale-ds/scale-telekom/commit/ebf79278b722b5de6ff8afe01805f9ca05429b5a))
* update line-height for list ([f6a6a07](https://gitlab.com/scale-ds/scale-telekom/commit/f6a6a077c8bf3605986b53ca42a15871943f3613))
* update TypeVariant interface to fix theming and add perf optimization for scale-text ([0a3fe9e](https://gitlab.com/scale-ds/scale-telekom/commit/0a3fe9eccc4f75fc3e5a1ffffdaa912282405033))
* **chart-stack-card:** safari linear-gradient color ([7537ab8](https://gitlab.com/scale-ds/scale-telekom/commit/7537ab84d909e57591a1832edd5809b58023f66d))
* **components:** a bit of QA for Input (radio) ([931a775](https://gitlab.com/scale-ds/scale-telekom/commit/931a77514e753fa7df0705d137e4596702b3be88))
* **components:** add missing name attribute to input select, closes [#12](https://gitlab.com/scale-ds/scale-telekom/issues/12) ([be3b48a](https://gitlab.com/scale-ds/scale-telekom/commit/be3b48a477207a4d90f05bc50e8c8722b45e44b1))
* **components:** adjust styles for Checkbox (QA), improve clicking-on-label ([ad21a69](https://gitlab.com/scale-ds/scale-telekom/commit/ad21a69d0ddb487915ded75fb7a440abffe479dc))
* **components:** apply QA in Button, no full tokens yet ([d7f5155](https://gitlab.com/scale-ds/scale-telekom/commit/d7f51552d4f9af0a60c584a5a7043a15ff67e2b9))
* **components:** checkbox not being checked when icon clicked ([97090f9](https://gitlab.com/scale-ds/scale-telekom/commit/97090f9e7b73b3713ffd1df410a0f6b2aca8a9ea))
* **components:** make border 2px for error status for input text and textarea ([72d46fd](https://gitlab.com/scale-ds/scale-telekom/commit/72d46fdc9dc9316faf26e68e90ca3d470067ea01))
* **components:** make border 2px/red for error status for input select ([48b4b85](https://gitlab.com/scale-ds/scale-telekom/commit/48b4b859a2dc8913832ee7a7618b0666b52164de))
* **components:** make border 2px/red, update label color and states for error status for input radio and checkbox ([32c8dca](https://gitlab.com/scale-ds/scale-telekom/commit/32c8dca427195376a77d9d15f3326451289e53a9))
* **components:** pass value to input checkbox, closes [#11](https://gitlab.com/scale-ds/scale-telekom/issues/11) ([b10c8e1](https://gitlab.com/scale-ds/scale-telekom/commit/b10c8e12ea6cde35082e31e80f1637db146a2dd8))
* update GRAY_3 token (6C6C6C to 6B6B6B) ([e100874](https://gitlab.com/scale-ds/scale-telekom/commit/e100874383586cca1367edeb4ea20eeacd0a4b6c))
* **components:** remove icon package import and dep ([aa2fd02](https://gitlab.com/scale-ds/scale-telekom/commit/aa2fd025b01348b60f82d4649781d2d8a941ceca))
* **components:** remove px values for fontSize and lineHeight in Input ([fc9369d](https://gitlab.com/scale-ds/scale-telekom/commit/fc9369dd4783524538e0bc61a74136012d72b558))
* table QA again ([75084a0](https://gitlab.com/scale-ds/scale-telekom/commit/75084a09ab8deeaebf25246817107c8c0eba3a2c))
* table QA again ([18389c1](https://gitlab.com/scale-ds/scale-telekom/commit/18389c1dcf9b3a6cb289e61a749673cc50408eb1))
* use correct package name ([baf8857](https://gitlab.com/scale-ds/scale-telekom/commit/baf8857417200b324e8589c5091a324e8a8f1182))
* white color definition ([cb71d77](https://gitlab.com/scale-ds/scale-telekom/commit/cb71d776ba6ac3ffae4b1d61075bb4658168481e))
* **components:** styles for current state in breadcrumb component ([d23dedf](https://gitlab.com/scale-ds/scale-telekom/commit/d23dedf9dff9a645d5bd59866b68184f2f635a9d))
* **components:** try and improve how icons get imported and used (WIP) ([2f7a1b9](https://gitlab.com/scale-ds/scale-telekom/commit/2f7a1b9295a64580c236d77bd54cf81fe91bfcd8))
* **components|storybook-vue:** a bit of theming QA for Sidebar nav ([6e2fe79](https://gitlab.com/scale-ds/scale-telekom/commit/6e2fe79ff85c62a7a6786e20f42b4b8b68a77d04))


### Features

* card link click handler and custom checkbox slot ([28d11b3](https://gitlab.com/scale-ds/scale-telekom/commit/28d11b34eceec8e1944b5ba471390ba1f3b89c71))
* **footer:** add angular variant and background token ([ef6717c](https://gitlab.com/scale-ds/scale-telekom/commit/ef6717c5220c72d839852c7f238cf492e715673b))
* custom header ([f08a510](https://gitlab.com/scale-ds/scale-telekom/commit/f08a510a873325367ddd7c8c986516037d4686fa))
* **components:** use new tokens (CSS variables) in input component ([8a4a785](https://gitlab.com/scale-ds/scale-telekom/commit/8a4a785de0f44f81341d65632cb2216a007d5f45))
* **components:** use new tokens (CSS variables) in input component ([a151ee2](https://gitlab.com/scale-ds/scale-telekom/commit/a151ee20c619f2beb0749860fd5e2b51b922b73d))
* add _controlled_ attribute and behavior to input select ([8b5ad7e](https://gitlab.com/scale-ds/scale-telekom/commit/8b5ad7eceb00a6c5851122c16e866840293ac843))
* add claim lang usage example ([80b2afe](https://gitlab.com/scale-ds/scale-telekom/commit/80b2afe6617938ed28174773bc0179ce7dcf137e))
* add HCM border to modal ([cef3a40](https://gitlab.com/scale-ds/scale-telekom/commit/cef3a4002d639a9723bacfc9667facb21b8b8118))
* add HCM transparent border for scale-button ([2bc5433](https://gitlab.com/scale-ds/scale-telekom/commit/2bc54339f0d1349f528daec8970d13e7794a066c))
* add HCM transparent border to tab-header ([498ff06](https://gitlab.com/scale-ds/scale-telekom/commit/498ff06bd751f0d0c93a41189bd09d000e135941))
* add iife-like optimization to scale-text (thank you Nathan) ([dab91db](https://gitlab.com/scale-ds/scale-telekom/commit/dab91db4dc6e9ce48a96b7b0ff7e4a1190a25293))
* add shadow parts to sidebar nav (WIP) ([68e0052](https://gitlab.com/scale-ds/scale-telekom/commit/68e005273e150b5138bab5eb1c2dc137d5b4aa87))
* add simple footer ([017418d](https://gitlab.com/scale-ds/scale-telekom/commit/017418dbef4dd0f3bda941fcc5d4e80ccf16178b))
* add styles for tab-nav (icons missing) ([c6b4537](https://gitlab.com/scale-ds/scale-telekom/commit/c6b45370467154b0ac18409ebd6d745efb1eaef9))
* add transparent border for minimal version ([33b0386](https://gitlab.com/scale-ds/scale-telekom/commit/33b038667dc4e667b38ec9f233d9fdb06e302595))
* add transparent border for modal (HCM) ([70d7acc](https://gitlab.com/scale-ds/scale-telekom/commit/70d7accbdd15c4a6530a09c8eb7e8369aa3c2567))
* better underline ([e9104c0](https://gitlab.com/scale-ds/scale-telekom/commit/e9104c07bcd38b991a43db62b7b31ed7aae9593a))
* card a11y ([fdbafa3](https://gitlab.com/scale-ds/scale-telekom/commit/fdbafa36242cf69b5ea4497d0ae2b913c450c6b4))
* date picker ([ac5b950](https://gitlab.com/scale-ds/scale-telekom/commit/ac5b95043352508c3ff9923d7a65cbb690ac206c))
* date picker localization ([7648684](https://gitlab.com/scale-ds/scale-telekom/commit/764868446d05a894be7ff84b2debd285b0b20809))
* desktop active state underline ([f05712f](https://gitlab.com/scale-ds/scale-telekom/commit/f05712f308459dbbf81f52b4d7c41568a265a60b))
* focus and active states ([16246fb](https://gitlab.com/scale-ds/scale-telekom/commit/16246fb6ba34f5580fde75d1de6c147bf84df618))
* make entire sidebar nav collapsible for small screens ([def7963](https://gitlab.com/scale-ds/scale-telekom/commit/def796375c2b8fa1c4e806457dca3d309a787fa8))
* make header take slots ([f90d5cc](https://gitlab.com/scale-ds/scale-telekom/commit/f90d5cc800be28b0abbf71aa0db10955b3521639))
* minimal variant ([1429df1](https://gitlab.com/scale-ds/scale-telekom/commit/1429df1a204cdc2a92ca953c79e85e72a0e365dd))
* mobile active state underline ([6694baa](https://gitlab.com/scale-ds/scale-telekom/commit/6694baa4d7295ec2c35efebe22a2db8766e5a083))
* more header accessibility ([62e91d1](https://gitlab.com/scale-ds/scale-telekom/commit/62e91d1b426690705d18c5caa0a4b30bffbc98b0))
* new brand-header visual tests ([0f66336](https://gitlab.com/scale-ds/scale-telekom/commit/0f6633634754796e4eed8f594fd6fbd4e0814ca0))
* progress-bar accessibility ([21110d2](https://gitlab.com/scale-ds/scale-telekom/commit/21110d221d4062130f8ff0883d52aaa093096fc4))
* sync _active_ and _current_ attrs in sidebar-nav-item ([ffe535d](https://gitlab.com/scale-ds/scale-telekom/commit/ffe535d9138bea82bc8c10d22884f7c6367efc79))
* table a11y ([47b4531](https://gitlab.com/scale-ds/scale-telekom/commit/47b45317d782f618b48e7d3cfc88072d10c95c8a))
* **date-picker:** more configuration options ([b51d943](https://gitlab.com/scale-ds/scale-telekom/commit/b51d943573f70eee100070786c9fa4ebe85af4f3))
* **date-picker:** telekom theme, better listener binding ([3110abb](https://gitlab.com/scale-ds/scale-telekom/commit/3110abbb0c58a53312e961bb70ab8f7bae7907df))
* load icons properly in global.ts, no more funky proxies ([834f81a](https://gitlab.com/scale-ds/scale-telekom/commit/834f81a0e279c905e306f7395d1421e2b49136af))
* rounded corner ([076acb5](https://gitlab.com/scale-ds/scale-telekom/commit/076acb5b140538ee226a6d9f63b8d4e9a0c9c949))
* support icons and fix some styles in tab-nav (refactor) ([dc2f319](https://gitlab.com/scale-ds/scale-telekom/commit/dc2f319f09e8173179060eb90cabb3b69310b087))
* tab header QA ([fb9b8de](https://gitlab.com/scale-ds/scale-telekom/commit/fb9b8deb6289bf6c2cdcac1d6cbcb8940ad73b88))
* table ([ee6b431](https://gitlab.com/scale-ds/scale-telekom/commit/ee6b4314a7ed236648ebd10d0bc01c05bfefd45a))
* table QA ([7e88139](https://gitlab.com/scale-ds/scale-telekom/commit/7e881397730cb01abe53c65aed3704a9dbd27fb2))
* tag QA ([3e4a408](https://gitlab.com/scale-ds/scale-telekom/commit/3e4a408341a0b10cb8f420a323ff1071d4c97bbb))
* underlines ([b2deb98](https://gitlab.com/scale-ds/scale-telekom/commit/b2deb98fa7e8047ea477a397a9d6880ac28c751a))
* use aria for improving helper/error messages (input.tsx) ([fd979e1](https://gitlab.com/scale-ds/scale-telekom/commit/fd979e1bebdb5e81e67c135cf34f217d760bf22a))
* **brand-header:** add brandTitle prop ([e7a9522](https://gitlab.com/scale-ds/scale-telekom/commit/e7a9522cbd29534ff8d2bd6815055c16a32337e6))
* **brand-header:** add claimLang config property ([fb21d23](https://gitlab.com/scale-ds/scale-telekom/commit/fb21d23ed6da1aa5cd114088ec77a924d1e41fb0))
* **components:** add missing typography tokens ([509cb52](https://gitlab.com/scale-ds/scale-telekom/commit/509cb52dad632861b0363836843c7c6a3363455e))
* button QA ([00e0a9a](https://gitlab.com/scale-ds/scale-telekom/commit/00e0a9acb542e48557043b968e757a20c34d3b04))
* checkbox checked state ([455667d](https://gitlab.com/scale-ds/scale-telekom/commit/455667d2e2752d29eefe5a053ff2aed0003bf655))
* checkbox QA ([8505222](https://gitlab.com/scale-ds/scale-telekom/commit/8505222ebf16677b6173173a68767be7a1a239e3))
* modal QA ([c41f677](https://gitlab.com/scale-ds/scale-telekom/commit/c41f677e0b78695de4e4e756831f2b0da5bcf3b8))
* progress-bar QA ([cb767a8](https://gitlab.com/scale-ds/scale-telekom/commit/cb767a8849bda848c990c079a16f7437922ea5ee))
* radio & checkbox QA ([378b286](https://gitlab.com/scale-ds/scale-telekom/commit/378b286419e937ae60ab0fa021bc08b44a657b5e))
* slider QA ([f29abdc](https://gitlab.com/scale-ds/scale-telekom/commit/f29abdc8ede7e3c609686f9ad59e9382ab200172))
* switch QA ([47bc972](https://gitlab.com/scale-ds/scale-telekom/commit/47bc9725c6c42204f72bf9c42d84a9bd2e0951d8))
* switch QA ([aa0b4de](https://gitlab.com/scale-ds/scale-telekom/commit/aa0b4dea0effeefce23765f1d38ca1f8128083ca))
* **components:** add first batch of tokens in theme/tokens.ts, fonts missing (wip) ([a7ca221](https://gitlab.com/scale-ds/scale-telekom/commit/a7ca221e06a5c919edbaa8c5968fbaddab14df0f))
* **components:** apply some theming QA to Modal (wip) ([fdc64f1](https://gitlab.com/scale-ds/scale-telekom/commit/fdc64f14aad658c9d37ed4e9f3e704a289721838))
* **components:** apply some theming QA to Progress ([4f1d293](https://gitlab.com/scale-ds/scale-telekom/commit/4f1d293b9af54d61b0a2b1665ea2335379412295))
* **components:** apply theming QA to Tab nav ([d116552](https://gitlab.com/scale-ds/scale-telekom/commit/d116552d1f1b52a552401dcdf35af4e8205c07f8))
* **components:** improve theming (QA) for Input (text) ([25ae22b](https://gitlab.com/scale-ds/scale-telekom/commit/25ae22b846185a6735131da50b6e72272f52c00b))
* **components:** use icon from library as default separator in Breadcrumb ([7bec92b](https://gitlab.com/scale-ds/scale-telekom/commit/7bec92b1fe991d9566fcfa48cffb3f0a67c2dbd9))
* **components:** use tokens in Accordion/Collapsible ([f10856b](https://gitlab.com/scale-ds/scale-telekom/commit/f10856be0266ea77945aaba38988e749cdc8989a))
* **components:** use tokens in Breadcrumb ([4210f5b](https://gitlab.com/scale-ds/scale-telekom/commit/4210f5bb01d8d6548cacd3ed2e5408e721836463))
* **components:** use tokens in Card, fix focus outline and add no-padding attr ([f7c70ea](https://gitlab.com/scale-ds/scale-telekom/commit/f7c70ea691512256f193dda1732a48fa05d0eba3))
* **components:** use tokens in Divider ([5e91700](https://gitlab.com/scale-ds/scale-telekom/commit/5e9170086d5b2e6be32da5a37fa36963aa62b3b8))
* **components:** use tokens in Link ([5c8185c](https://gitlab.com/scale-ds/scale-telekom/commit/5c8185c5cc974fa7672de3d6941f5a7c6fc8abc0))
* **components:** use tokens in List (WIP) ([1a8d5b2](https://gitlab.com/scale-ds/scale-telekom/commit/1a8d5b2a5eb72a6f7ba71a2f18048aebf6a8562d))
* **components|storybook-vue:** apply theming QA to Slider ([2f2639b](https://gitlab.com/scale-ds/scale-telekom/commit/2f2639b6db37a00c2b0cce661e6217d9edfa6c39))
* **header:** add documentation ([efcb338](https://gitlab.com/scale-ds/scale-telekom/commit/efcb3384205730705b494603e558cbddce603443))
* **header:** arrows for items with children only ([adbb28f](https://gitlab.com/scale-ds/scale-telekom/commit/adbb28f5065f69b7fc544d2f41d9e612f4aedc4f))
* **header:** better click behaviour ([395b12c](https://gitlab.com/scale-ds/scale-telekom/commit/395b12cb440ea19efb23c3400b5fa6100f93edfd))
* **header:** box shadow, cosmetics ([a8bdc9d](https://gitlab.com/scale-ds/scale-telekom/commit/a8bdc9d9f40055a41718d547ab518fc469574205))
* **header:** build ([893ad9e](https://gitlab.com/scale-ds/scale-telekom/commit/893ad9eaba7eaca27b650fda44b4e2b2172c8a1b))
* **header:** extend example ([1b3e4df](https://gitlab.com/scale-ds/scale-telekom/commit/1b3e4df8b452fe4596a54d26f10590831e517520))
* **header:** make active sector configurable ([540e77f](https://gitlab.com/scale-ds/scale-telekom/commit/540e77f0a12b9c1b12d5cbc07d3f7517995fa4a3))
* **header:** more styles ([c027e67](https://gitlab.com/scale-ds/scale-telekom/commit/c027e67363dcece30516f3700f329d96e988dd5e))
* **header:** prettify ([eaf6f0c](https://gitlab.com/scale-ds/scale-telekom/commit/eaf6f0ccb0f77fe98b1f1173886fb70abfb37643))
* **header:** use new svg ([8b91ef8](https://gitlab.com/scale-ds/scale-telekom/commit/8b91ef8b0b54eeb365dd0c107bf728a9a2ebc638))
* add sidebar-nav stories, fix bold styles in component ([f603c4d](https://gitlab.com/scale-ds/scale-telekom/commit/f603c4d363c1ff3dcd62f420b95ec0b50e6b69ca))
* adds stories for Tab-navigation: default, with icon, icon only; minor style fixes in tab header ([bada7d5](https://gitlab.com/scale-ds/scale-telekom/commit/bada7d5511a1e581b24aa750739570bf436a4942))
* breadcrumb ([b634153](https://gitlab.com/scale-ds/scale-telekom/commit/b6341537166da2b5b9f47da65c3c52682b5c1ec0))
* button ([4ed65a8](https://gitlab.com/scale-ds/scale-telekom/commit/4ed65a855fe3326961be55ec2eb23e56cddb1e8e))
* card ([b8ce119](https://gitlab.com/scale-ds/scale-telekom/commit/b8ce11952786835b6d11ee716023cbfe28a032b3))
* custom header slot ([f51a0ea](https://gitlab.com/scale-ds/scale-telekom/commit/f51a0ea7f9ea2501fb1871a9fb8476a58a8cda42))
* input ([0cb26ca](https://gitlab.com/scale-ds/scale-telekom/commit/0cb26cab8b191a5a79ef0c54d6123a4f482ab1a7))
* link ([a33cff7](https://gitlab.com/scale-ds/scale-telekom/commit/a33cff7312706bff0aea1053367cb104aa218f70))
* stories for icon and improved inline docs ([f66335f](https://gitlab.com/scale-ds/scale-telekom/commit/f66335fc2c759155699a677e3f35e74996ccb53b))
* tag ([0f8898b](https://gitlab.com/scale-ds/scale-telekom/commit/0f8898b8d633fba844bab2b37c0db6a9f66d18ba))
* vue routing example ([93fb02d](https://gitlab.com/scale-ds/scale-telekom/commit/93fb02d25a6d450b47cd43147d18eb7ef2ec496a))
* **storybook-vue:** create custom theme ([567a97c](https://gitlab.com/scale-ds/scale-telekom/commit/567a97c79afc5170a1cee2d2746a49492a23d4b1))





# [1.15.0](https://gitlab.com/scale-ds/scale-telekom/compare/v1.14.0...v1.15.0) (2020-12-18)


### Bug Fixes

* icon colors in input select ([576903f](https://gitlab.com/scale-ds/scale-telekom/commit/576903f9bdf70cc1794365527670d1159184d0c0))
* make label floating also when value is number 0 ([3661148](https://gitlab.com/scale-ds/scale-telekom/commit/3661148bb02333785d2f69ac3d69e2582697b31d))
* **components:** avoid typeerror when missing header element in modal ([e0c9236](https://gitlab.com/scale-ds/scale-telekom/commit/e0c92367f57f54c47c7020388c9a139f0d06e837))
* add missing active state for screen-readers ([2b4413f](https://gitlab.com/scale-ds/scale-telekom/commit/2b4413f67b863cb0bd7bff661d56bf32dd55bc3a))
* remove extra level of list ([4c7cf17](https://gitlab.com/scale-ds/scale-telekom/commit/4c7cf1770e3cc1f644083d5753b4fa04f043cbe6))


### Features

* add _controlled_ attribute and behavior to input select ([8b5ad7e](https://gitlab.com/scale-ds/scale-telekom/commit/8b5ad7eceb00a6c5851122c16e866840293ac843))
* underlines ([b2deb98](https://gitlab.com/scale-ds/scale-telekom/commit/b2deb98fa7e8047ea477a397a9d6880ac28c751a))





# [1.14.0](https://gitlab.com/scale-ds/scale-telekom/compare/v1.13.1...v1.14.0) (2020-12-08)


### Bug Fixes

* format ([49dfe3d](https://gitlab.com/scale-ds/scale-telekom/commit/49dfe3d73e13fe8454208909edd55c7294e216c2))
* hover jump on FF and minimal nav font weight ([9f64965](https://gitlab.com/scale-ds/scale-telekom/commit/9f64965955c5053788203546e08fffdf442a7721))


### Features

* add simple footer ([017418d](https://gitlab.com/scale-ds/scale-telekom/commit/017418dbef4dd0f3bda941fcc5d4e80ccf16178b))
* add transparent border for minimal version ([33b0386](https://gitlab.com/scale-ds/scale-telekom/commit/33b038667dc4e667b38ec9f233d9fdb06e302595))
* better underline ([e9104c0](https://gitlab.com/scale-ds/scale-telekom/commit/e9104c07bcd38b991a43db62b7b31ed7aae9593a))
* focus and active states ([16246fb](https://gitlab.com/scale-ds/scale-telekom/commit/16246fb6ba34f5580fde75d1de6c147bf84df618))
* minimal variant ([1429df1](https://gitlab.com/scale-ds/scale-telekom/commit/1429df1a204cdc2a92ca953c79e85e72a0e365dd))
* rounded corner ([076acb5](https://gitlab.com/scale-ds/scale-telekom/commit/076acb5b140538ee226a6d9f63b8d4e9a0c9c949))





## [1.13.1](https://gitlab.com/scale-ds/scale-telekom/compare/v1.13.0...v1.13.1) (2020-12-02)


### Bug Fixes

* ensure button form hack includes type attribute ([0e06548](https://gitlab.com/scale-ds/scale-telekom/commit/0e065482b4fce3d27ceeca46fcf454a7cfdc3b45))
* header z-index and brandTitle rename and font fix ([2de7e77](https://gitlab.com/scale-ds/scale-telekom/commit/2de7e771a46f2bffd93ff4f7fc9e84691a05af6c))





# [1.13.0](https://gitlab.com/scale-ds/scale-telekom/compare/v1.12.2...v1.13.0) (2020-11-23)


### Bug Fixes

* type_variants values in component styles ([f05c409](https://gitlab.com/scale-ds/scale-telekom/commit/f05c4098954afd7384b845a29f6fbe0923a3b07d))
* update TypeVariant interface to fix theming and add perf optimization for scale-text ([0a3fe9e](https://gitlab.com/scale-ds/scale-telekom/commit/0a3fe9eccc4f75fc3e5a1ffffdaa912282405033))


### Features

* add iife-like optimization to scale-text (thank you Nathan) ([dab91db](https://gitlab.com/scale-ds/scale-telekom/commit/dab91db4dc6e9ce48a96b7b0ff7e4a1190a25293))
* more header accessibility ([62e91d1](https://gitlab.com/scale-ds/scale-telekom/commit/62e91d1b426690705d18c5caa0a4b30bffbc98b0))





## [1.12.2](https://gitlab.com/scale-ds/scale-telekom/compare/v1.12.1...v1.12.2) (2020-11-18)


### Bug Fixes

* add max-width to logo ([eea3f54](https://gitlab.com/scale-ds/scale-telekom/commit/eea3f540f0e03a229f8b80574dabe043dec9e892))
* typeVariants to type_variants in text.tsx ([ebf7927](https://gitlab.com/scale-ds/scale-telekom/commit/ebf79278b722b5de6ff8afe01805f9ca05429b5a))





## [1.12.1](https://gitlab.com/scale-ds/scale-telekom/compare/v1.12.0...v1.12.1) (2020-11-17)


### Bug Fixes

* **components:** add missing name attribute to input select, closes [#12](https://gitlab.com/scale-ds/scale-telekom/issues/12) ([be3b48a](https://gitlab.com/scale-ds/scale-telekom/commit/be3b48a477207a4d90f05bc50e8c8722b45e44b1))
* add solid background to textarea label (a11y) ([81f05a1](https://gitlab.com/scale-ds/scale-telekom/commit/81f05a1a5e43a15e6d3b5f4f750fd1ff43c06572))
* add tslint ignore comment in tokens.ts (snake case) ([5ea04fa](https://gitlab.com/scale-ds/scale-telekom/commit/5ea04fa78cb7bf3f108975b82f21a2052dd9dfa3))
* checked state ([e02d964](https://gitlab.com/scale-ds/scale-telekom/commit/e02d964db208b1f1e2f33820fa6c354d1af5f7b0))
* load fonts using font-weight and font-style CSS prop names ([0a8ca2a](https://gitlab.com/scale-ds/scale-telekom/commit/0a8ca2a25ec37d3a9f79d9c186760401790d13fe))
* load fonts using font-weight and font-style CSS prop names ([d1e87c6](https://gitlab.com/scale-ds/scale-telekom/commit/d1e87c694200f510ede0a2f67dfea61707015d3e))
* mouse cursor and hover for disabled state in checkbox/radio ([b8f679c](https://gitlab.com/scale-ds/scale-telekom/commit/b8f679c09c5e8af7b087ac8846878c8ded4cb5cb))
* remove inline styles from scale-icon (icon.tsx) ([10db081](https://gitlab.com/scale-ds/scale-telekom/commit/10db0818b14b9b29be228958687d3f808ea47460))
* remove px values for fontSize and lineHeight, use tokens (except for Input) ([febde1e](https://gitlab.com/scale-ds/scale-telekom/commit/febde1e2133d3152729a428675118f7978957c3c))
* remove unwanted outline from textarea ([de47cf0](https://gitlab.com/scale-ds/scale-telekom/commit/de47cf07421d8de0c588bc4278fd4fc44783c913))
* rename FontVariant to TypeVariant and remove Camel for better consistency ([8db6ce5](https://gitlab.com/scale-ds/scale-telekom/commit/8db6ce5900b9ebe96604788260887e7c529431a0))
* render the checkbox checked icon only when checked ([84895f3](https://gitlab.com/scale-ds/scale-telekom/commit/84895f33bcf56d3fe18138c2c8a4f1ff2ec8c48a))
* switch order of label/input in input.tsx (label first) ([6799860](https://gitlab.com/scale-ds/scale-telekom/commit/679986096634533db75657dc9ec208e7f866c811))
* textarea solid label background in disabled state ([a5aaf89](https://gitlab.com/scale-ds/scale-telekom/commit/a5aaf892154c57ccf68ee9fa73ed62083ed67a77))
* **components:** make border 2px for error status for input text and textarea ([72d46fd](https://gitlab.com/scale-ds/scale-telekom/commit/72d46fdc9dc9316faf26e68e90ca3d470067ea01))
* **components:** make border 2px/red for error status for input select ([48b4b85](https://gitlab.com/scale-ds/scale-telekom/commit/48b4b859a2dc8913832ee7a7618b0666b52164de))
* **components:** make border 2px/red, update label color and states for error status for input radio and checkbox ([32c8dca](https://gitlab.com/scale-ds/scale-telekom/commit/32c8dca427195376a77d9d15f3326451289e53a9))
* rename typeVariants to type_variants ([f38b823](https://gitlab.com/scale-ds/scale-telekom/commit/f38b823125204834db12577347e0e9e090b7a321))
* update GRAY_3 token (6C6C6C to 6B6B6B) ([e100874](https://gitlab.com/scale-ds/scale-telekom/commit/e100874383586cca1367edeb4ea20eeacd0a4b6c))
* **components:** remove px values for fontSize and lineHeight in Input ([fc9369d](https://gitlab.com/scale-ds/scale-telekom/commit/fc9369dd4783524538e0bc61a74136012d72b558))


### Features

* use aria for improving helper/error messages (input.tsx) ([fd979e1](https://gitlab.com/scale-ds/scale-telekom/commit/fd979e1bebdb5e81e67c135cf34f217d760bf22a))
* **components:** add missing typography tokens ([509cb52](https://gitlab.com/scale-ds/scale-telekom/commit/509cb52dad632861b0363836843c7c6a3363455e))





# [1.12.0](https://gitlab.com/scale-ds/scale-telekom/compare/v1.11.2...v1.12.0) (2020-11-12)


### Bug Fixes

* **components:** pass value to input checkbox, closes [#11](https://gitlab.com/scale-ds/scale-telekom/issues/11) ([b10c8e1](https://gitlab.com/scale-ds/scale-telekom/commit/b10c8e12ea6cde35082e31e80f1637db146a2dd8))
* make logo responsive ([036eb98](https://gitlab.com/scale-ds/scale-telekom/commit/036eb983461c237faab510638a5b7fb7119c38c3))


### Features

* add claim lang usage example ([80b2afe](https://gitlab.com/scale-ds/scale-telekom/commit/80b2afe6617938ed28174773bc0179ce7dcf137e))
* **brand-header:** add claimLang config property ([fb21d23](https://gitlab.com/scale-ds/scale-telekom/commit/fb21d23ed6da1aa5cd114088ec77a924d1e41fb0))





## [1.11.2](https://gitlab.com/scale-ds/scale-telekom/compare/v1.11.1...v1.11.2) (2020-10-20)


### Bug Fixes

* **chart-stack-card:** safari linear-gradient color ([7537ab8](https://gitlab.com/scale-ds/scale-telekom/commit/7537ab84d909e57591a1832edd5809b58023f66d))





## [1.11.1](https://gitlab.com/scale-ds/scale-telekom/compare/v1.11.0...v1.11.1) (2020-10-12)

**Note:** Version bump only for package @scaleds/components-telekom





# [1.11.0](https://gitlab.com/scale-ds/scale-telekom/compare/v1.10.1...v1.11.0) (2020-10-08)


### Features

* **brand-header:** add brandTitle prop ([e7a9522](https://gitlab.com/scale-ds/scale-telekom/commit/e7a9522cbd29534ff8d2bd6815055c16a32337e6))





## [1.10.1](https://gitlab.com/scale-ds/scale-telekom/compare/v1.10.0...v1.10.1) (2020-10-07)


### Bug Fixes

* **components:** checkbox not being checked when icon clicked ([97090f9](https://gitlab.com/scale-ds/scale-telekom/commit/97090f9e7b73b3713ffd1df410a0f6b2aca8a9ea))





# [1.10.0](https://gitlab.com/scale-ds/scale-telekom/compare/v1.2.0...v1.10.0) (2020-10-05)


### Bug Fixes

* remove scroll for legend ([6182d8f](https://gitlab.com/scale-ds/scale-telekom/commit/6182d8ff180f159c671d126f568b6d76e23407e0))
* **components:** remove icon package import and dep ([aa2fd02](https://gitlab.com/scale-ds/scale-telekom/commit/aa2fd025b01348b60f82d4649781d2d8a941ceca))
* adjust some values in Slider (QA) ([7d8fc07](https://gitlab.com/scale-ds/scale-telekom/commit/7d8fc0773f53becaa8ce855cbcdf51c0508a2e0d))
* collapsible styles ([98c70e1](https://gitlab.com/scale-ds/scale-telekom/commit/98c70e11456b7dd5d9190ed2572ca48526efc6b6))
* emit scaleKeyDown event in scale-input ([37fa86c](https://gitlab.com/scale-ds/scale-telekom/commit/37fa86c3088eb7702261892203dd7dc0c45a917b))
* input colors ([c08d0df](https://gitlab.com/scale-ds/scale-telekom/commit/c08d0df727355508b4c806b72a661d14b792e7d4))
* prevent jump on hover in firefox ([dd82c27](https://gitlab.com/scale-ds/scale-telekom/commit/dd82c27a040bd149fcea2e3f80f5514d5e2fa57d))
* remove build:prod script in package.json ([fd18384](https://gitlab.com/scale-ds/scale-telekom/commit/fd18384e16bd06db607d37eb4e3358c5c58d84b5))
* remove duplicate Element() in Modal ([2670943](https://gitlab.com/scale-ds/scale-telekom/commit/267094345b5d80665fc69009b3188bd10df47c22))
* table QA again ([75084a0](https://gitlab.com/scale-ds/scale-telekom/commit/75084a09ab8deeaebf25246817107c8c0eba3a2c))
* table QA again ([18389c1](https://gitlab.com/scale-ds/scale-telekom/commit/18389c1dcf9b3a6cb289e61a749673cc50408eb1))
* white color definition ([cb71d77](https://gitlab.com/scale-ds/scale-telekom/commit/cb71d776ba6ac3ffae4b1d61075bb4658168481e))
* **components:** a bit of QA for Input (radio) ([931a775](https://gitlab.com/scale-ds/scale-telekom/commit/931a77514e753fa7df0705d137e4596702b3be88))
* **components:** adjust styles for Checkbox (QA), improve clicking-on-label ([ad21a69](https://gitlab.com/scale-ds/scale-telekom/commit/ad21a69d0ddb487915ded75fb7a440abffe479dc))
* **components:** apply QA in Button, no full tokens yet ([d7f5155](https://gitlab.com/scale-ds/scale-telekom/commit/d7f51552d4f9af0a60c584a5a7043a15ff67e2b9))
* **components:** styles for current state in breadcrumb component ([d23dedf](https://gitlab.com/scale-ds/scale-telekom/commit/d23dedf9dff9a645d5bd59866b68184f2f635a9d))
* **components:** try and improve how icons get imported and used (WIP) ([2f7a1b9](https://gitlab.com/scale-ds/scale-telekom/commit/2f7a1b9295a64580c236d77bd54cf81fe91bfcd8))
* **components|storybook-vue:** a bit of theming QA for Sidebar nav ([6e2fe79](https://gitlab.com/scale-ds/scale-telekom/commit/6e2fe79ff85c62a7a6786e20f42b4b8b68a77d04))
* use correct package name ([baf8857](https://gitlab.com/scale-ds/scale-telekom/commit/baf8857417200b324e8589c5091a324e8a8f1182))


### Features

* button QA ([00e0a9a](https://gitlab.com/scale-ds/scale-telekom/commit/00e0a9acb542e48557043b968e757a20c34d3b04))
* checkbox checked state ([455667d](https://gitlab.com/scale-ds/scale-telekom/commit/455667d2e2752d29eefe5a053ff2aed0003bf655))
* checkbox QA ([8505222](https://gitlab.com/scale-ds/scale-telekom/commit/8505222ebf16677b6173173a68767be7a1a239e3))
* load icons properly in global.ts, no more funky proxies ([834f81a](https://gitlab.com/scale-ds/scale-telekom/commit/834f81a0e279c905e306f7395d1421e2b49136af))
* modal QA ([c41f677](https://gitlab.com/scale-ds/scale-telekom/commit/c41f677e0b78695de4e4e756831f2b0da5bcf3b8))
* progress-bar QA ([cb767a8](https://gitlab.com/scale-ds/scale-telekom/commit/cb767a8849bda848c990c079a16f7437922ea5ee))
* radio & checkbox QA ([378b286](https://gitlab.com/scale-ds/scale-telekom/commit/378b286419e937ae60ab0fa021bc08b44a657b5e))
* slider QA ([f29abdc](https://gitlab.com/scale-ds/scale-telekom/commit/f29abdc8ede7e3c609686f9ad59e9382ab200172))
* switch QA ([47bc972](https://gitlab.com/scale-ds/scale-telekom/commit/47bc9725c6c42204f72bf9c42d84a9bd2e0951d8))
* switch QA ([aa0b4de](https://gitlab.com/scale-ds/scale-telekom/commit/aa0b4dea0effeefce23765f1d38ca1f8128083ca))
* tab header QA ([fb9b8de](https://gitlab.com/scale-ds/scale-telekom/commit/fb9b8deb6289bf6c2cdcac1d6cbcb8940ad73b88))
* table QA ([7e88139](https://gitlab.com/scale-ds/scale-telekom/commit/7e881397730cb01abe53c65aed3704a9dbd27fb2))
* tag QA ([3e4a408](https://gitlab.com/scale-ds/scale-telekom/commit/3e4a408341a0b10cb8f420a323ff1071d4c97bbb))
* **components:** add first batch of tokens in theme/tokens.ts, fonts missing (wip) ([a7ca221](https://gitlab.com/scale-ds/scale-telekom/commit/a7ca221e06a5c919edbaa8c5968fbaddab14df0f))
* **components:** apply some theming QA to Modal (wip) ([fdc64f1](https://gitlab.com/scale-ds/scale-telekom/commit/fdc64f14aad658c9d37ed4e9f3e704a289721838))
* **components:** apply some theming QA to Progress ([4f1d293](https://gitlab.com/scale-ds/scale-telekom/commit/4f1d293b9af54d61b0a2b1665ea2335379412295))
* **components:** apply theming QA to Tab nav ([d116552](https://gitlab.com/scale-ds/scale-telekom/commit/d116552d1f1b52a552401dcdf35af4e8205c07f8))
* **components:** improve theming (QA) for Input (text) ([25ae22b](https://gitlab.com/scale-ds/scale-telekom/commit/25ae22b846185a6735131da50b6e72272f52c00b))
* **components:** use icon from library as default separator in Breadcrumb ([7bec92b](https://gitlab.com/scale-ds/scale-telekom/commit/7bec92b1fe991d9566fcfa48cffb3f0a67c2dbd9))
* **components:** use tokens in Accordion/Collapsible ([f10856b](https://gitlab.com/scale-ds/scale-telekom/commit/f10856be0266ea77945aaba38988e749cdc8989a))
* **components:** use tokens in Breadcrumb ([4210f5b](https://gitlab.com/scale-ds/scale-telekom/commit/4210f5bb01d8d6548cacd3ed2e5408e721836463))
* **components:** use tokens in Card, fix focus outline and add no-padding attr ([f7c70ea](https://gitlab.com/scale-ds/scale-telekom/commit/f7c70ea691512256f193dda1732a48fa05d0eba3))
* **components:** use tokens in Divider ([5e91700](https://gitlab.com/scale-ds/scale-telekom/commit/5e9170086d5b2e6be32da5a37fa36963aa62b3b8))
* **components:** use tokens in Link ([5c8185c](https://gitlab.com/scale-ds/scale-telekom/commit/5c8185c5cc974fa7672de3d6941f5a7c6fc8abc0))
* **components:** use tokens in List (WIP) ([1a8d5b2](https://gitlab.com/scale-ds/scale-telekom/commit/1a8d5b2a5eb72a6f7ba71a2f18048aebf6a8562d))
* **components|storybook-vue:** apply theming QA to Slider ([2f2639b](https://gitlab.com/scale-ds/scale-telekom/commit/2f2639b6db37a00c2b0cce661e6217d9edfa6c39))
* **header:** add documentation ([efcb338](https://gitlab.com/scale-ds/scale-telekom/commit/efcb3384205730705b494603e558cbddce603443))
* **header:** arrows for items with children only ([adbb28f](https://gitlab.com/scale-ds/scale-telekom/commit/adbb28f5065f69b7fc544d2f41d9e612f4aedc4f))
* **header:** better click behaviour ([395b12c](https://gitlab.com/scale-ds/scale-telekom/commit/395b12cb440ea19efb23c3400b5fa6100f93edfd))
* **header:** box shadow, cosmetics ([a8bdc9d](https://gitlab.com/scale-ds/scale-telekom/commit/a8bdc9d9f40055a41718d547ab518fc469574205))
* **header:** build ([893ad9e](https://gitlab.com/scale-ds/scale-telekom/commit/893ad9eaba7eaca27b650fda44b4e2b2172c8a1b))
* **header:** extend example ([1b3e4df](https://gitlab.com/scale-ds/scale-telekom/commit/1b3e4df8b452fe4596a54d26f10590831e517520))
* **header:** make active sector configurable ([540e77f](https://gitlab.com/scale-ds/scale-telekom/commit/540e77f0a12b9c1b12d5cbc07d3f7517995fa4a3))
* **header:** more styles ([c027e67](https://gitlab.com/scale-ds/scale-telekom/commit/c027e67363dcece30516f3700f329d96e988dd5e))
* **header:** prettify ([eaf6f0c](https://gitlab.com/scale-ds/scale-telekom/commit/eaf6f0ccb0f77fe98b1f1173886fb70abfb37643))
* **header:** use new svg ([8b91ef8](https://gitlab.com/scale-ds/scale-telekom/commit/8b91ef8b0b54eeb365dd0c107bf728a9a2ebc638))
* add sidebar-nav stories, fix bold styles in component ([f603c4d](https://gitlab.com/scale-ds/scale-telekom/commit/f603c4d363c1ff3dcd62f420b95ec0b50e6b69ca))
* adds stories for Tab-navigation: default, with icon, icon only; minor style fixes in tab header ([bada7d5](https://gitlab.com/scale-ds/scale-telekom/commit/bada7d5511a1e581b24aa750739570bf436a4942))
* breadcrumb ([b634153](https://gitlab.com/scale-ds/scale-telekom/commit/b6341537166da2b5b9f47da65c3c52682b5c1ec0))
* button ([4ed65a8](https://gitlab.com/scale-ds/scale-telekom/commit/4ed65a855fe3326961be55ec2eb23e56cddb1e8e))
* card ([b8ce119](https://gitlab.com/scale-ds/scale-telekom/commit/b8ce11952786835b6d11ee716023cbfe28a032b3))
* custom header slot ([f51a0ea](https://gitlab.com/scale-ds/scale-telekom/commit/f51a0ea7f9ea2501fb1871a9fb8476a58a8cda42))
* input ([0cb26ca](https://gitlab.com/scale-ds/scale-telekom/commit/0cb26cab8b191a5a79ef0c54d6123a4f482ab1a7))
* link ([a33cff7](https://gitlab.com/scale-ds/scale-telekom/commit/a33cff7312706bff0aea1053367cb104aa218f70))
* stories for icon and improved inline docs ([f66335f](https://gitlab.com/scale-ds/scale-telekom/commit/f66335fc2c759155699a677e3f35e74996ccb53b))
* tag ([0f8898b](https://gitlab.com/scale-ds/scale-telekom/commit/0f8898b8d633fba844bab2b37c0db6a9f66d18ba))
* vue routing example ([93fb02d](https://gitlab.com/scale-ds/scale-telekom/commit/93fb02d25a6d450b47cd43147d18eb7ef2ec496a))
* **storybook-vue:** create custom theme ([567a97c](https://gitlab.com/scale-ds/scale-telekom/commit/567a97c79afc5170a1cee2d2746a49492a23d4b1))





# [1.9.0](https://gitlab.com/scale-ds/scale-telekom/compare/v1.8.0...v1.9.0) (2020-09-28)


### Bug Fixes

* **components:** remove icon package import and dep ([aa2fd02](https://gitlab.com/scale-ds/scale-telekom/commit/aa2fd025b01348b60f82d4649781d2d8a941ceca))
* table QA again ([75084a0](https://gitlab.com/scale-ds/scale-telekom/commit/75084a09ab8deeaebf25246817107c8c0eba3a2c))
* table QA again ([18389c1](https://gitlab.com/scale-ds/scale-telekom/commit/18389c1dcf9b3a6cb289e61a749673cc50408eb1))


### Features

* button QA ([00e0a9a](https://gitlab.com/scale-ds/scale-telekom/commit/00e0a9acb542e48557043b968e757a20c34d3b04))
* checkbox checked state ([455667d](https://gitlab.com/scale-ds/scale-telekom/commit/455667d2e2752d29eefe5a053ff2aed0003bf655))
* checkbox QA ([8505222](https://gitlab.com/scale-ds/scale-telekom/commit/8505222ebf16677b6173173a68767be7a1a239e3))
* load icons properly in global.ts, no more funky proxies ([834f81a](https://gitlab.com/scale-ds/scale-telekom/commit/834f81a0e279c905e306f7395d1421e2b49136af))
* modal QA ([c41f677](https://gitlab.com/scale-ds/scale-telekom/commit/c41f677e0b78695de4e4e756831f2b0da5bcf3b8))
* progress-bar QA ([cb767a8](https://gitlab.com/scale-ds/scale-telekom/commit/cb767a8849bda848c990c079a16f7437922ea5ee))
* radio & checkbox QA ([378b286](https://gitlab.com/scale-ds/scale-telekom/commit/378b286419e937ae60ab0fa021bc08b44a657b5e))
* slider QA ([f29abdc](https://gitlab.com/scale-ds/scale-telekom/commit/f29abdc8ede7e3c609686f9ad59e9382ab200172))
* switch QA ([47bc972](https://gitlab.com/scale-ds/scale-telekom/commit/47bc9725c6c42204f72bf9c42d84a9bd2e0951d8))
* switch QA ([aa0b4de](https://gitlab.com/scale-ds/scale-telekom/commit/aa0b4dea0effeefce23765f1d38ca1f8128083ca))
* tab header QA ([fb9b8de](https://gitlab.com/scale-ds/scale-telekom/commit/fb9b8deb6289bf6c2cdcac1d6cbcb8940ad73b88))
* table QA ([7e88139](https://gitlab.com/scale-ds/scale-telekom/commit/7e881397730cb01abe53c65aed3704a9dbd27fb2))
* tag QA ([3e4a408](https://gitlab.com/scale-ds/scale-telekom/commit/3e4a408341a0b10cb8f420a323ff1071d4c97bbb))





# [1.8.0](https://gitlab.com/scale-ds/scale-telekom/compare/v1.7.1...v1.8.0) (2020-09-24)


### Bug Fixes

* adjust some values in Slider (QA) ([7d8fc07](https://gitlab.com/scale-ds/scale-telekom/commit/7d8fc0773f53becaa8ce855cbcdf51c0508a2e0d))
* white color definition ([cb71d77](https://gitlab.com/scale-ds/scale-telekom/commit/cb71d776ba6ac3ffae4b1d61075bb4658168481e))


### Features

* **components:** apply theming QA to Tab nav ([d116552](https://gitlab.com/scale-ds/scale-telekom/commit/d116552d1f1b52a552401dcdf35af4e8205c07f8))
* **components|storybook-vue:** apply theming QA to Slider ([2f2639b](https://gitlab.com/scale-ds/scale-telekom/commit/2f2639b6db37a00c2b0cce661e6217d9edfa6c39))





## [1.7.1](https://gitlab.com/scale-ds/scale-telekom/compare/v1.7.0...v1.7.1) (2020-09-23)


### Bug Fixes

* remove duplicate Element() in Modal ([2670943](https://gitlab.com/scale-ds/scale-telekom/commit/267094345b5d80665fc69009b3188bd10df47c22))





# [1.7.0](https://gitlab.com/scale-ds/scale-telekom/compare/v1.6.1...v1.7.0) (2020-09-22)


### Bug Fixes

* **components:** a bit of QA for Input (radio) ([931a775](https://gitlab.com/scale-ds/scale-telekom/commit/931a77514e753fa7df0705d137e4596702b3be88))
* **components:** adjust styles for Checkbox (QA), improve clicking-on-label ([ad21a69](https://gitlab.com/scale-ds/scale-telekom/commit/ad21a69d0ddb487915ded75fb7a440abffe479dc))
* **components:** apply QA in Button, no full tokens yet ([d7f5155](https://gitlab.com/scale-ds/scale-telekom/commit/d7f51552d4f9af0a60c584a5a7043a15ff67e2b9))
* **components:** try and improve how icons get imported and used (WIP) ([2f7a1b9](https://gitlab.com/scale-ds/scale-telekom/commit/2f7a1b9295a64580c236d77bd54cf81fe91bfcd8))
* **components|storybook-vue:** a bit of theming QA for Sidebar nav ([6e2fe79](https://gitlab.com/scale-ds/scale-telekom/commit/6e2fe79ff85c62a7a6786e20f42b4b8b68a77d04))
* prevent jump on hover in firefox ([dd82c27](https://gitlab.com/scale-ds/scale-telekom/commit/dd82c27a040bd149fcea2e3f80f5514d5e2fa57d))


### Features

* **components:** add first batch of tokens in theme/tokens.ts, fonts missing (wip) ([a7ca221](https://gitlab.com/scale-ds/scale-telekom/commit/a7ca221e06a5c919edbaa8c5968fbaddab14df0f))
* **components:** apply some theming QA to Modal (wip) ([fdc64f1](https://gitlab.com/scale-ds/scale-telekom/commit/fdc64f14aad658c9d37ed4e9f3e704a289721838))
* **components:** apply some theming QA to Progress ([4f1d293](https://gitlab.com/scale-ds/scale-telekom/commit/4f1d293b9af54d61b0a2b1665ea2335379412295))
* **components:** improve theming (QA) for Input (text) ([25ae22b](https://gitlab.com/scale-ds/scale-telekom/commit/25ae22b846185a6735131da50b6e72272f52c00b))
* **components:** use icon from library as default separator in Breadcrumb ([7bec92b](https://gitlab.com/scale-ds/scale-telekom/commit/7bec92b1fe991d9566fcfa48cffb3f0a67c2dbd9))
* **components:** use tokens in Accordion/Collapsible ([f10856b](https://gitlab.com/scale-ds/scale-telekom/commit/f10856be0266ea77945aaba38988e749cdc8989a))
* **components:** use tokens in Breadcrumb ([4210f5b](https://gitlab.com/scale-ds/scale-telekom/commit/4210f5bb01d8d6548cacd3ed2e5408e721836463))
* **components:** use tokens in Card, fix focus outline and add no-padding attr ([f7c70ea](https://gitlab.com/scale-ds/scale-telekom/commit/f7c70ea691512256f193dda1732a48fa05d0eba3))
* **components:** use tokens in Divider ([5e91700](https://gitlab.com/scale-ds/scale-telekom/commit/5e9170086d5b2e6be32da5a37fa36963aa62b3b8))
* **components:** use tokens in Link ([5c8185c](https://gitlab.com/scale-ds/scale-telekom/commit/5c8185c5cc974fa7672de3d6941f5a7c6fc8abc0))
* **components:** use tokens in List (WIP) ([1a8d5b2](https://gitlab.com/scale-ds/scale-telekom/commit/1a8d5b2a5eb72a6f7ba71a2f18048aebf6a8562d))





## [1.6.1](https://gitlab.com/scale-ds/scale-telekom/compare/v1.6.0...v1.6.1) (2020-09-20)

**Note:** Version bump only for package @scaleds/components-telekom





# [1.6.0](https://gitlab.com/scale-ds/scale-telekom/compare/v1.5.1...v1.6.0) (2020-09-18)


### Bug Fixes

* emit scaleKeyDown event in scale-input ([37fa86c](https://gitlab.com/scale-ds/scale-telekom/commit/37fa86c3088eb7702261892203dd7dc0c45a917b))


### Features

* **header:** add documentation ([efcb338](https://gitlab.com/scale-ds/scale-telekom/commit/efcb3384205730705b494603e558cbddce603443))
* **header:** arrows for items with children only ([adbb28f](https://gitlab.com/scale-ds/scale-telekom/commit/adbb28f5065f69b7fc544d2f41d9e612f4aedc4f))
* **header:** better click behaviour ([395b12c](https://gitlab.com/scale-ds/scale-telekom/commit/395b12cb440ea19efb23c3400b5fa6100f93edfd))
* **header:** box shadow, cosmetics ([a8bdc9d](https://gitlab.com/scale-ds/scale-telekom/commit/a8bdc9d9f40055a41718d547ab518fc469574205))
* **header:** build ([893ad9e](https://gitlab.com/scale-ds/scale-telekom/commit/893ad9eaba7eaca27b650fda44b4e2b2172c8a1b))
* **header:** extend example ([1b3e4df](https://gitlab.com/scale-ds/scale-telekom/commit/1b3e4df8b452fe4596a54d26f10590831e517520))
* **header:** make active sector configurable ([540e77f](https://gitlab.com/scale-ds/scale-telekom/commit/540e77f0a12b9c1b12d5cbc07d3f7517995fa4a3))
* **header:** more styles ([c027e67](https://gitlab.com/scale-ds/scale-telekom/commit/c027e67363dcece30516f3700f329d96e988dd5e))
* **header:** prettify ([eaf6f0c](https://gitlab.com/scale-ds/scale-telekom/commit/eaf6f0ccb0f77fe98b1f1173886fb70abfb37643))
* **header:** use new svg ([8b91ef8](https://gitlab.com/scale-ds/scale-telekom/commit/8b91ef8b0b54eeb365dd0c107bf728a9a2ebc638))
* breadcrumb ([b634153](https://gitlab.com/scale-ds/scale-telekom/commit/b6341537166da2b5b9f47da65c3c52682b5c1ec0))
* button ([4ed65a8](https://gitlab.com/scale-ds/scale-telekom/commit/4ed65a855fe3326961be55ec2eb23e56cddb1e8e))
* card ([b8ce119](https://gitlab.com/scale-ds/scale-telekom/commit/b8ce11952786835b6d11ee716023cbfe28a032b3))
* custom header slot ([f51a0ea](https://gitlab.com/scale-ds/scale-telekom/commit/f51a0ea7f9ea2501fb1871a9fb8476a58a8cda42))
* input ([0cb26ca](https://gitlab.com/scale-ds/scale-telekom/commit/0cb26cab8b191a5a79ef0c54d6123a4f482ab1a7))
* link ([a33cff7](https://gitlab.com/scale-ds/scale-telekom/commit/a33cff7312706bff0aea1053367cb104aa218f70))
* tag ([0f8898b](https://gitlab.com/scale-ds/scale-telekom/commit/0f8898b8d633fba844bab2b37c0db6a9f66d18ba))





## [1.5.1](https://gitlab.com/scale-ds/scale-telekom/compare/v1.5.0...v1.5.1) (2020-09-03)

**Note:** Version bump only for package @scaleds/components-telekom





# [1.5.0](https://gitlab.com/scale-ds/scale-telekom/compare/v1.2.0...v1.5.0) (2020-09-03)


### Bug Fixes

* collapsible styles ([98c70e1](https://gitlab.com/scale-ds/scale-telekom/commit/98c70e11456b7dd5d9190ed2572ca48526efc6b6))
* input colors ([c08d0df](https://gitlab.com/scale-ds/scale-telekom/commit/c08d0df727355508b4c806b72a661d14b792e7d4))
* remove build:prod script in package.json ([fd18384](https://gitlab.com/scale-ds/scale-telekom/commit/fd18384e16bd06db607d37eb4e3358c5c58d84b5))
* use correct package name ([baf8857](https://gitlab.com/scale-ds/scale-telekom/commit/baf8857417200b324e8589c5091a324e8a8f1182))
* **components:** styles for current state in breadcrumb component ([d23dedf](https://gitlab.com/scale-ds/scale-telekom/commit/d23dedf9dff9a645d5bd59866b68184f2f635a9d))


### Features

* add sidebar-nav stories, fix bold styles in component ([f603c4d](https://gitlab.com/scale-ds/scale-telekom/commit/f603c4d363c1ff3dcd62f420b95ec0b50e6b69ca))
* adds stories for Tab-navigation: default, with icon, icon only; minor style fixes in tab header ([bada7d5](https://gitlab.com/scale-ds/scale-telekom/commit/bada7d5511a1e581b24aa750739570bf436a4942))
* stories for icon and improved inline docs ([f66335f](https://gitlab.com/scale-ds/scale-telekom/commit/f66335fc2c759155699a677e3f35e74996ccb53b))
* vue routing example ([93fb02d](https://gitlab.com/scale-ds/scale-telekom/commit/93fb02d25a6d450b47cd43147d18eb7ef2ec496a))
* **storybook-vue:** create custom theme ([567a97c](https://gitlab.com/scale-ds/scale-telekom/commit/567a97c79afc5170a1cee2d2746a49492a23d4b1))





# [1.4.0](https://gitlab.com/scale-ds/scale-telekom/compare/v1.3.0...v1.4.0) (2020-08-14)


### Bug Fixes

* collapsible styles ([98c70e1](https://gitlab.com/scale-ds/scale-telekom/commit/98c70e11456b7dd5d9190ed2572ca48526efc6b6))





# [1.3.0](https://gitlab.com/scale-ds/scale-telekom/compare/v1.2.0...v1.3.0) (2020-08-14)


### Bug Fixes

* remove build:prod script in package.json ([fd18384](https://gitlab.com/scale-ds/scale-telekom/commit/fd18384e16bd06db607d37eb4e3358c5c58d84b5))
* **components:** styles for current state in breadcrumb component ([d23dedf](https://gitlab.com/scale-ds/scale-telekom/commit/d23dedf9dff9a645d5bd59866b68184f2f635a9d))


### Features

* add sidebar-nav stories, fix bold styles in component ([f603c4d](https://gitlab.com/scale-ds/scale-telekom/commit/f603c4d363c1ff3dcd62f420b95ec0b50e6b69ca))
* adds stories for Tab-navigation: default, with icon, icon only; minor style fixes in tab header ([bada7d5](https://gitlab.com/scale-ds/scale-telekom/commit/bada7d5511a1e581b24aa750739570bf436a4942))
* **storybook-vue:** create custom theme ([567a97c](https://gitlab.com/scale-ds/scale-telekom/commit/567a97c79afc5170a1cee2d2746a49492a23d4b1))
* stories for icon and improved inline docs ([f66335f](https://gitlab.com/scale-ds/scale-telekom/commit/f66335fc2c759155699a677e3f35e74996ccb53b))





# [1.2.0](https://gitlab.com/scale-ds/scale-telekom/compare/v0.1.13...v1.2.0) (2020-07-29)


### Bug Fixes

* add cloneNodeFix ([2d56242](https://gitlab.com/scale-ds/scale-telekom/commit/2d5624248f9b3f16351fe8195cad8a4642191e99))
* apparently resolve issue with duplication of slots within header-nav ([0b51e22](https://gitlab.com/scale-ds/scale-telekom/commit/0b51e22b130a39722aa3cd6974490de03e5b4317))
* button visual tests ([8490e94](https://gitlab.com/scale-ds/scale-telekom/commit/8490e9484efe74767fc5ff407a42ac43ceeb0101))
* correct condition ([7ac220f](https://gitlab.com/scale-ds/scale-telekom/commit/7ac220fa880a56e797be328c988c4768a2204db3))
* do not polyfill animations while SSR ([bff7bed](https://gitlab.com/scale-ds/scale-telekom/commit/bff7bed588d4c67e0dd0c277c530801001076bd7))
* do not polyfill web animations SSR ([e67a028](https://gitlab.com/scale-ds/scale-telekom/commit/e67a02823bbcb30b919ac2874b8f663c4250f5d3))
* downgrade storybook ([d125629](https://gitlab.com/scale-ds/scale-telekom/commit/d1256299c1c7db6093ba4a6f47c95ad590488e4f))
* Duplicate function implementation ([1377800](https://gitlab.com/scale-ds/scale-telekom/commit/1377800ae1b37de733339335a7787d55a33b653c))
* fixes underline prop with stringify trick. feat: adds different sections for setup and styling documentation. chore: renames stories and stories folder structure for arrangement of the different sections ([fb4763b](https://gitlab.com/scale-ds/scale-telekom/commit/fb4763b544a2901a335a5dc28d0ecf20818a75ef))
* flip condition ([9d75df5](https://gitlab.com/scale-ds/scale-telekom/commit/9d75df58859bc3822798eadba4140cfff8ef6ebd))
* format ([4e01365](https://gitlab.com/scale-ds/scale-telekom/commit/4e01365dc4ec741456369e74877ec7c65cd9d90c))
* format ([faf8646](https://gitlab.com/scale-ds/scale-telekom/commit/faf8646b547fc98a95bf52198d798148c16492c0))
* make sure jss callbacks are executed before adding to SheetRegistry ([d7e5c62](https://gitlab.com/scale-ds/scale-telekom/commit/d7e5c62d113eaccb792b0409a4672f4e3b77922a))
* move storybook a11y addon config to preview.js ([a313200](https://gitlab.com/scale-ds/scale-telekom/commit/a3132009373d539dade997ae3a7b9c6bff516370))
* remove addRule and use style resize ([6005c02](https://gitlab.com/scale-ds/scale-telekom/commit/6005c021d323c5b8a544fccc1492049ba408481e))
* rollup version issue ([6829cb1](https://gitlab.com/scale-ds/scale-telekom/commit/6829cb162806ffc585cb447e880e811313c83ea1))
* safe-guard require statement ([e7bd178](https://gitlab.com/scale-ds/scale-telekom/commit/e7bd1787c0de0b2d826cac0392ad731b22a66fc1))
* typo ([0361ff8](https://gitlab.com/scale-ds/scale-telekom/commit/0361ff8a62732202b7cce6b967c060599d5991e1))
* use id in <label> for attribute in the input of type checkbox ([db26980](https://gitlab.com/scale-ds/scale-telekom/commit/db26980afac0e01108d74b6c65f59691bce1a9cd))


### Features

* add stories for input component ([5e00a6f](https://gitlab.com/scale-ds/scale-telekom/commit/5e00a6f970c5fd87805eb41e925f30c1c5276384))
* add stories to list component ([8d0abaa](https://gitlab.com/scale-ds/scale-telekom/commit/8d0abaa96a43742026ca174f052257b43db0f2ee))
* adds docs addon. exclude animation components from vue proxie build. WIP fixing MDX issue ([cd2ed65](https://gitlab.com/scale-ds/scale-telekom/commit/cd2ed65f1e1a61d5726ec114214cb60f8779a31a))
* adds logic for tabs ([105006d](https://gitlab.com/scale-ds/scale-telekom/commit/105006d913f0fc1777d4f559dcc46a51b9edf5d5))
* adds logic for tabs ([a43ec6a](https://gitlab.com/scale-ds/scale-telekom/commit/a43ec6a531a102e298a55228a41410dff8cdf37e))
* Adds Storybook to the project. Adds Button Stories ([82a1d3d](https://gitlab.com/scale-ds/scale-telekom/commit/82a1d3d92e59bc44ae0a1c26bce7fee226d0c84f))
* cleans up lerna.json and package.json to consider anything inside the packages folder a package. Also upgrades storybook version to rc5. Adds configuration to stencil.config.js to generate the customelements.json file needed in storybook for controls and automatic props table generation to work. ([2782667](https://gitlab.com/scale-ds/scale-telekom/commit/2782667955d683d9af0fd58fd2b06bd380c5b8c5))
* create render-icon utility to handle conditional rendering ([463fcfa](https://gitlab.com/scale-ds/scale-telekom/commit/463fcfa812a1a44e32a028d2c1bb95ff9abc268d))
* create stories for card ([ed16458](https://gitlab.com/scale-ds/scale-telekom/commit/ed16458219eb4451f87a2baa481e970f313559b5))
* fonts in theme ([5677a64](https://gitlab.com/scale-ds/scale-telekom/commit/5677a64569ccbd97e2ec185ab8787fc68fe6e2fb))
* implement accordion and collapsible ([126917d](https://gitlab.com/scale-ds/scale-telekom/commit/126917ddab122b53cffb6ca29b2b6878e35b274f))
* implement progress bar component ([2f724e8](https://gitlab.com/scale-ds/scale-telekom/commit/2f724e87c297a3b32f2fd195a46b494cd9db1730))
* implement select box ([62b6d73](https://gitlab.com/scale-ds/scale-telekom/commit/62b6d73256b39967c28e36945ccaea425913828c))
* improve scale-icon, remove app-icon ([9e90150](https://gitlab.com/scale-ds/scale-telekom/commit/9e90150385faa4acd69c2d69b4fd6bad1eb9cc7e))
* modal ([4beae35](https://gitlab.com/scale-ds/scale-telekom/commit/4beae35ea0128c697ef7d2027ba98c2ba1ee99d8))
* polyfill animations ([a328947](https://gitlab.com/scale-ds/scale-telekom/commit/a328947b78b181fe5ea1bf0b5c3b0f21d2b600ec))
* pumps up storybook and addons version to 6rc3 ([9ab4b0a](https://gitlab.com/scale-ds/scale-telekom/commit/9ab4b0a293ef5d2cf404117085714ebb2b832b18))
* start work on story for scale-input ([2fe6bab](https://gitlab.com/scale-ds/scale-telekom/commit/2fe6babbc3b3f11b39d74d862401cfc0b5eccd09))
* stories for collapsible ([7b9a110](https://gitlab.com/scale-ds/scale-telekom/commit/7b9a110b211eeaecc4ce3b9dfbaff86f85da20bd))


### Reverts

* Revert "fix: use scale button and disable shadow dom  of button component" ([0de27a9](https://gitlab.com/scale-ds/scale-telekom/commit/0de27a9fe0ed5e3025469f6b44096698128a56a8))
* Revert "fix: use scale button and disable shadow dom  of button component" ([30f314b](https://gitlab.com/scale-ds/scale-telekom/commit/30f314b2fc0bc8c6e26fa12f9f2c7aa1bf98ff51))





# [1.1.0](https://gitlab.com/scale-ds/scale-telekom/compare/v0.1.13...v1.1.0) (2020-07-28)


### Bug Fixes

* add cloneNodeFix ([2d56242](https://gitlab.com/scale-ds/scale-telekom/commit/2d5624248f9b3f16351fe8195cad8a4642191e99))
* apparently resolve issue with duplication of slots within header-nav ([0b51e22](https://gitlab.com/scale-ds/scale-telekom/commit/0b51e22b130a39722aa3cd6974490de03e5b4317))
* button visual tests ([8490e94](https://gitlab.com/scale-ds/scale-telekom/commit/8490e9484efe74767fc5ff407a42ac43ceeb0101))
* correct condition ([7ac220f](https://gitlab.com/scale-ds/scale-telekom/commit/7ac220fa880a56e797be328c988c4768a2204db3))
* do not polyfill animations while SSR ([bff7bed](https://gitlab.com/scale-ds/scale-telekom/commit/bff7bed588d4c67e0dd0c277c530801001076bd7))
* do not polyfill web animations SSR ([e67a028](https://gitlab.com/scale-ds/scale-telekom/commit/e67a02823bbcb30b919ac2874b8f663c4250f5d3))
* downgrade storybook ([d125629](https://gitlab.com/scale-ds/scale-telekom/commit/d1256299c1c7db6093ba4a6f47c95ad590488e4f))
* Duplicate function implementation ([1377800](https://gitlab.com/scale-ds/scale-telekom/commit/1377800ae1b37de733339335a7787d55a33b653c))
* fixes underline prop with stringify trick. feat: adds different sections for setup and styling documentation. chore: renames stories and stories folder structure for arrangement of the different sections ([fb4763b](https://gitlab.com/scale-ds/scale-telekom/commit/fb4763b544a2901a335a5dc28d0ecf20818a75ef))
* flip condition ([9d75df5](https://gitlab.com/scale-ds/scale-telekom/commit/9d75df58859bc3822798eadba4140cfff8ef6ebd))
* format ([4e01365](https://gitlab.com/scale-ds/scale-telekom/commit/4e01365dc4ec741456369e74877ec7c65cd9d90c))
* format ([faf8646](https://gitlab.com/scale-ds/scale-telekom/commit/faf8646b547fc98a95bf52198d798148c16492c0))
* make sure jss callbacks are executed before adding to SheetRegistry ([d7e5c62](https://gitlab.com/scale-ds/scale-telekom/commit/d7e5c62d113eaccb792b0409a4672f4e3b77922a))
* move storybook a11y addon config to preview.js ([a313200](https://gitlab.com/scale-ds/scale-telekom/commit/a3132009373d539dade997ae3a7b9c6bff516370))
* remove addRule and use style resize ([6005c02](https://gitlab.com/scale-ds/scale-telekom/commit/6005c021d323c5b8a544fccc1492049ba408481e))
* rollup version issue ([6829cb1](https://gitlab.com/scale-ds/scale-telekom/commit/6829cb162806ffc585cb447e880e811313c83ea1))
* safe-guard require statement ([e7bd178](https://gitlab.com/scale-ds/scale-telekom/commit/e7bd1787c0de0b2d826cac0392ad731b22a66fc1))
* typo ([0361ff8](https://gitlab.com/scale-ds/scale-telekom/commit/0361ff8a62732202b7cce6b967c060599d5991e1))
* use id in <label> for attribute in the input of type checkbox ([db26980](https://gitlab.com/scale-ds/scale-telekom/commit/db26980afac0e01108d74b6c65f59691bce1a9cd))


### Features

* add stories for input component ([5e00a6f](https://gitlab.com/scale-ds/scale-telekom/commit/5e00a6f970c5fd87805eb41e925f30c1c5276384))
* adds docs addon. exclude animation components from vue proxie build. WIP fixing MDX issue ([cd2ed65](https://gitlab.com/scale-ds/scale-telekom/commit/cd2ed65f1e1a61d5726ec114214cb60f8779a31a))
* adds logic for tabs ([105006d](https://gitlab.com/scale-ds/scale-telekom/commit/105006d913f0fc1777d4f559dcc46a51b9edf5d5))
* adds logic for tabs ([a43ec6a](https://gitlab.com/scale-ds/scale-telekom/commit/a43ec6a531a102e298a55228a41410dff8cdf37e))
* Adds Storybook to the project. Adds Button Stories ([82a1d3d](https://gitlab.com/scale-ds/scale-telekom/commit/82a1d3d92e59bc44ae0a1c26bce7fee226d0c84f))
* cleans up lerna.json and package.json to consider anything inside the packages folder a package. Also upgrades storybook version to rc5. Adds configuration to stencil.config.js to generate the customelements.json file needed in storybook for controls and automatic props table generation to work. ([2782667](https://gitlab.com/scale-ds/scale-telekom/commit/2782667955d683d9af0fd58fd2b06bd380c5b8c5))
* create render-icon utility to handle conditional rendering ([463fcfa](https://gitlab.com/scale-ds/scale-telekom/commit/463fcfa812a1a44e32a028d2c1bb95ff9abc268d))
* create stories for card ([ed16458](https://gitlab.com/scale-ds/scale-telekom/commit/ed16458219eb4451f87a2baa481e970f313559b5))
* fonts in theme ([5677a64](https://gitlab.com/scale-ds/scale-telekom/commit/5677a64569ccbd97e2ec185ab8787fc68fe6e2fb))
* implement accordion and collapsible ([126917d](https://gitlab.com/scale-ds/scale-telekom/commit/126917ddab122b53cffb6ca29b2b6878e35b274f))
* implement progress bar component ([2f724e8](https://gitlab.com/scale-ds/scale-telekom/commit/2f724e87c297a3b32f2fd195a46b494cd9db1730))
* implement select box ([62b6d73](https://gitlab.com/scale-ds/scale-telekom/commit/62b6d73256b39967c28e36945ccaea425913828c))
* improve scale-icon, remove app-icon ([9e90150](https://gitlab.com/scale-ds/scale-telekom/commit/9e90150385faa4acd69c2d69b4fd6bad1eb9cc7e))
* modal ([4beae35](https://gitlab.com/scale-ds/scale-telekom/commit/4beae35ea0128c697ef7d2027ba98c2ba1ee99d8))
* polyfill animations ([a328947](https://gitlab.com/scale-ds/scale-telekom/commit/a328947b78b181fe5ea1bf0b5c3b0f21d2b600ec))
* pumps up storybook and addons version to 6rc3 ([9ab4b0a](https://gitlab.com/scale-ds/scale-telekom/commit/9ab4b0a293ef5d2cf404117085714ebb2b832b18))
* start work on story for scale-input ([2fe6bab](https://gitlab.com/scale-ds/scale-telekom/commit/2fe6babbc3b3f11b39d74d862401cfc0b5eccd09))
* stories for collapsible ([7b9a110](https://gitlab.com/scale-ds/scale-telekom/commit/7b9a110b211eeaecc4ce3b9dfbaff86f85da20bd))


### Reverts

* Revert "fix: use scale button and disable shadow dom  of button component" ([0de27a9](https://gitlab.com/scale-ds/scale-telekom/commit/0de27a9fe0ed5e3025469f6b44096698128a56a8))
* Revert "fix: use scale button and disable shadow dom  of button component" ([30f314b](https://gitlab.com/scale-ds/scale-telekom/commit/30f314b2fc0bc8c6e26fa12f9f2c7aa1bf98ff51))





## [0.1.15](https://gitlab.com/scale-ds/scale-telekom/compare/v0.1.14...v0.1.15) (2020-07-06)


### Bug Fixes

* apparently resolve issue with duplication of slots within header-nav ([0b51e22](https://gitlab.com/scale-ds/scale-telekom/commit/0b51e22b130a39722aa3cd6974490de03e5b4317))





## [0.1.13](https://gitlab.com/scale-ds/scale-telekom/compare/v0.1.12...v0.1.13) (2020-06-18)

**Note:** Version bump only for package @scaleds/components-telekom





## [0.1.12](https://gitlab.com/scale-ds/scale-telekom/compare/v0.1.11...v0.1.12) (2020-06-18)

**Note:** Version bump only for package @scaleds/components





## [0.1.11](https://gitlab.com/scale-ds/scale-telekom/compare/v0.1.10...v0.1.11) (2020-06-18)

**Note:** Version bump only for package @scaleds/components





## [0.1.10](https://gitlab.com/scale-ds/scale-telekom/compare/v0.1.9...v0.1.10) (2020-06-18)

**Note:** Version bump only for package @scaleds/components





## [0.1.9](https://gitlab.com/scale-ds/scale-telekom/compare/v0.1.8...v0.1.9) (2020-06-18)

**Note:** Version bump only for package @scaleds/components





## [0.1.8](https://gitlab.com/scale-ds/scale-telekom/compare/v0.1.7...v0.1.8) (2020-06-18)

**Note:** Version bump only for package @scaleds/components





## [0.1.7](https://gitlab.com/scale-ds/scale-telekom/compare/v0.1.6...v0.1.7) (2020-06-18)

**Note:** Version bump only for package @scaleds/components





## [0.1.6](https://gitlab.com/scale-ds/scale-telekom/compare/v0.1.5...v0.1.6) (2020-06-18)

**Note:** Version bump only for package @scaleds/components





## 0.1.5 (2020-06-18)


### Bug Fixes

* resolve remaining repo-merge issues ([93f788f](https://gitlab.com/scale-ds/scale-telekom/commit/93f788f2027f5331aee8f6214ff2b563a624165e))





## [0.1.4](https://github.com/telekom/scale/compare/v0.1.3...v0.1.4) (2020-04-29)


### Bug Fixes

* renames scale-react package to components-react and fixes all the paths ([#200](https://github.com/telekom/scale/issues/200)) ([2cd2fb1](https://github.com/telekom/scale/commit/2cd2fb11d29d82640b244108c3ba75f77fca3f1b))





## [0.1.3](https://github.com/telekom/scale/compare/v0.1.2...v0.1.3) (2020-04-24)

**Note:** Version bump only for package @scaleds/components





# [0.1.0](https://github.com/telekom/scale/compare/v0.0.12...v0.1.0) (2020-04-23)


### Bug Fixes

* update build files ([#175](https://github.com/telekom/scale/issues/175)) ([1767c8b](https://github.com/telekom/scale/commit/1767c8bf98927d00afdce177f0e367d79c456e77))


### Features

* add Breadcrumb component ([#182](https://github.com/telekom/scale/issues/182)) ([fc339dd](https://github.com/telekom/scale/commit/fc339dd9513b5bd1458002e2cc6ea57b8021ca95))
* adjust circleci config to mirror package name changes. Also corrects the readme file to reflect the right package name. ([3eae56b](https://github.com/telekom/scale/commit/3eae56bc37ec523f459e6550c82b81f2592df63e))
* better types ([#185](https://github.com/telekom/scale/issues/185)) ([4a6ca9d](https://github.com/telekom/scale/commit/4a6ca9dc4e31289b55f96ecc37568e5c97c537c6))
* finishes integration of the react proxy output plugin. Updates the react boiler plate. ([c33e451](https://github.com/telekom/scale/commit/c33e4514fb840cc2e19e53dee1b17c30e27320ac))


### Performance Improvements

* update old sheet with new component rules ([#184](https://github.com/telekom/scale/issues/184)) ([a98dac2](https://github.com/telekom/scale/commit/a98dac2047d560392fc055fddbf6535a422633b7))





## [0.0.15](https://github.com/telekom/scale/compare/v0.0.14...v0.0.15) (2020-04-01)

**Note:** Version bump only for package @scaleds/components





## [0.0.14](https://github.com/telekom/scale/compare/v0.0.13...v0.0.14) (2020-04-01)

**Note:** Version bump only for package @scaleds/components





## [0.0.13](https://github.com/telekom/scale/compare/v0.0.12...v0.0.13) (2020-04-01)

**Note:** Version bump only for package @scaleds/components





## [0.0.12](https://github.com/telekom/scale/compare/v0.0.11...v0.0.12) (2020-03-25)

**Note:** Version bump only for package @scaleds/components





## [0.0.11](https://github.com/telekom/scale/compare/v0.0.10...v0.0.11) (2020-03-24)

**Note:** Version bump only for package @scaleds/components





## [0.0.10](https://github.com/telekom/scale/compare/v0.0.9...v0.0.10) (2020-03-24)


### Bug Fixes

* improve card component ([#153](https://github.com/telekom/scale/issues/153)) ([5e2029c](https://github.com/telekom/scale/commit/5e2029c8ef7ce5fbb4e07c8db04cae6a4926ff82))





## [0.0.9](https://github.com/telekom/scale/compare/v0.0.8...v0.0.9) (2020-03-23)

**Note:** Version bump only for package @scaleds/components





## [0.0.8](https://github.com/telekom/scale/compare/v0.0.7...v0.0.8) (2020-03-23)


### Bug Fixes

* adjust icon and button props ([#151](https://github.com/telekom/scale/issues/151)) ([3448e31](https://github.com/telekom/scale/commit/3448e318494c933294c1381b779d9416c741be5b))





## [0.0.7](https://github.com/telekom/scale/compare/v0.0.6...v0.0.7) (2020-03-19)

**Note:** Version bump only for package @scaleds/components





## [0.0.6](https://github.com/telekom/scale/compare/v0.0.5...v0.0.6) (2020-03-19)

**Note:** Version bump only for package @scaleds/components





## [0.0.5](https://github.com/telekom/scale/compare/v0.0.3...v0.0.5) (2020-03-17)

**Note:** Version bump only for package @scaleds/components





## [0.0.4](https://github.com/telekom/scale/compare/v0.0.3...v0.0.4) (2020-03-17)

**Note:** Version bump only for package @scaleds/components





## [0.0.3](https://github.com/telekom/scale/compare/v0.0.2...v0.0.3) (2020-03-17)

**Note:** Version bump only for package @scaleds/components





## [0.0.2](https://github.com/telekom/telements/compare/v0.4.0...v0.0.2) (2020-03-16)


### Bug Fixes

* format ([74f9044](https://github.com/telekom/telements/commit/74f90446b392d548989f9a62eb6caa624dbf83ac))
