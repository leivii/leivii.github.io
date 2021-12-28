/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d12f73438bd2c0caa94437361e937341"
  },
  {
    "url": "advanced/auth.html",
    "revision": "88e444db035740c12ee004bf4a24c8ed"
  },
  {
    "url": "advanced/component.html",
    "revision": "1931d34acfd4168a60b5bbf48e917b3b"
  },
  {
    "url": "advanced/doc.html",
    "revision": "9d24cab4b8f601820527825f6e71465f"
  },
  {
    "url": "advanced/plugin.html",
    "revision": "bd26dc5be1bf396b1606b6c1b5a80235"
  },
  {
    "url": "advanced/prop.html",
    "revision": "9977e3db0567aac6540cd26f3f5c786e"
  },
  {
    "url": "advanced/props.html",
    "revision": "5df938dea435fba4f93b7a5eb3656675"
  },
  {
    "url": "advanced/sample/Card.html",
    "revision": "e9048d9b919c78cde6cc5c0d89984f57"
  },
  {
    "url": "advanced/sample/ColorPicker.html",
    "revision": "12394ae969f54198686b436b849f4d18"
  },
  {
    "url": "advanced/validator.html",
    "revision": "b494aedc44116e5d6b61225fca0c77ac"
  },
  {
    "url": "api.html",
    "revision": "0257915471c4e89b2f489f6ac08adf90"
  },
  {
    "url": "assets/css/0.styles.609d539a.css",
    "revision": "d4d425149696058848e5283287755c80"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/auth-1.63e1f0a0.png",
    "revision": "63e1f0a0ad45246925f1df901257e891"
  },
  {
    "url": "assets/img/button.41e54797.png",
    "revision": "41e547979ed48d6102eff5d14246809a"
  },
  {
    "url": "assets/img/column-config.2d6fb071.png",
    "revision": "2d6fb0713c551ac21dfc5301f2d21e51"
  },
  {
    "url": "assets/img/datasource-1.ef3e4825.png",
    "revision": "ef3e4825915cbc09814218b05d85a405"
  },
  {
    "url": "assets/img/datasource-10.25270637.png",
    "revision": "25270637d08d993be67bf166e572b694"
  },
  {
    "url": "assets/img/datasource-11.6d077937.png",
    "revision": "6d07793798b1312885a30e8dbf415c27"
  },
  {
    "url": "assets/img/datasource-2.f6137e41.png",
    "revision": "f6137e41e50e004c92c6338d01af26df"
  },
  {
    "url": "assets/img/datasource-21.1012258a.png",
    "revision": "1012258a189cd476e95794547123ff73"
  },
  {
    "url": "assets/img/datasource-22.3d514464.png",
    "revision": "3d5144649d38227b8634a542eaa99e57"
  },
  {
    "url": "assets/img/datasource-23.c54e6a8e.png",
    "revision": "c54e6a8eaa8b2766e4481174ba7ccb5d"
  },
  {
    "url": "assets/img/datasource-24.209ba78f.png",
    "revision": "209ba78fa3cb061ff41dddccb204b07c"
  },
  {
    "url": "assets/img/datasource-25.1b930ed4.png",
    "revision": "1b930ed478064dc0d7f838fef91ed7d0"
  },
  {
    "url": "assets/img/datasource-3.b71a9451.png",
    "revision": "b71a94519fbfde6e547e8a3d7b8775cc"
  },
  {
    "url": "assets/img/dict-1.9d3017d9.png",
    "revision": "9d3017d95239cf8fb299c61b0ca6223c"
  },
  {
    "url": "assets/img/dict-2.c2fcfd04.png",
    "revision": "c2fcfd04ed9c19a561bdc2ada1983dd5"
  },
  {
    "url": "assets/img/doc-1.64946b9f.png",
    "revision": "64946b9f9135a0c06ea6243b222d7b7d"
  },
  {
    "url": "assets/img/editor-1.9832793e.png",
    "revision": "9832793e1c768db7a8de5a5b84ec5302"
  },
  {
    "url": "assets/img/editor-3.35e170d6.png",
    "revision": "35e170d683f4aa25d4fb80056ab8ccd0"
  },
  {
    "url": "assets/img/expression-1.0a4559ec.png",
    "revision": "0a4559ec920df30d1c965ef023b3333a"
  },
  {
    "url": "assets/img/expression-2.f253fb24.png",
    "revision": "f253fb2453770b286a2576791ec687fc"
  },
  {
    "url": "assets/img/handler-11.020e7ba7.png",
    "revision": "020e7ba79621cfebd47ec097f6e6a6a0"
  },
  {
    "url": "assets/img/handler-12.fcf1ead6.png",
    "revision": "fcf1ead6135c05298a35b768f19895db"
  },
  {
    "url": "assets/img/handler-13.ae5a01d6.png",
    "revision": "ae5a01d65a26d1f7cf536280edb2fcbd"
  },
  {
    "url": "assets/img/poster.9c0ca5a7.png",
    "revision": "9c0ca5a7f4f52d7cd7a4571f07bcc0d4"
  },
  {
    "url": "assets/img/prop-1.6e884e94.png",
    "revision": "6e884e941524c3a7354a411cce9d6a54"
  },
  {
    "url": "assets/img/scf-1.6a49a226.png",
    "revision": "6a49a226de95d90dd7f3f2d9e5a280c4"
  },
  {
    "url": "assets/img/scf-2.0ae2805b.png",
    "revision": "0ae2805b4c9d04777c43d490743e1719"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/validator-1.06876bdd.png",
    "revision": "06876bddc6cd4847dfd2212c0a5e6e98"
  },
  {
    "url": "assets/img/welcome.b8400751.png",
    "revision": "b8400751dbe0127dd8ad401a0ea0aa29"
  },
  {
    "url": "assets/js/1.06f7090a.js",
    "revision": "286d06306f665c4af902d692acbff54f"
  },
  {
    "url": "assets/js/10.d8f8ad66.js",
    "revision": "2d4fc5c3b98eef8bac9f0042ccb54693"
  },
  {
    "url": "assets/js/11.3498f076.js",
    "revision": "e6e4a0054201f266e9d73cda377b5606"
  },
  {
    "url": "assets/js/12.8b8b474b.js",
    "revision": "72713bcf6f8c6b896fa00a7bfaeb57ea"
  },
  {
    "url": "assets/js/13.de6b5226.js",
    "revision": "e2c6bd08774a3b980f2ee2e027f609c7"
  },
  {
    "url": "assets/js/14.f9431c46.js",
    "revision": "f300b4ef4cca799f4eeda4734b4f0779"
  },
  {
    "url": "assets/js/15.5118a3cc.js",
    "revision": "15bd5de0e1ffaee30a5c89cc0afa12a1"
  },
  {
    "url": "assets/js/16.1c03ef42.js",
    "revision": "b9506368a3de50573b69596fec46bb2c"
  },
  {
    "url": "assets/js/17.c3969071.js",
    "revision": "1e212dc101862e828a6da5cb8033e8fa"
  },
  {
    "url": "assets/js/18.0e018bfc.js",
    "revision": "af500733b226923b4773845080f0f3d6"
  },
  {
    "url": "assets/js/19.9b2595a7.js",
    "revision": "26abb1c01a2059efa0e3eb9035b8783e"
  },
  {
    "url": "assets/js/20.008e543c.js",
    "revision": "bc95d2c7dfffcc0a5b6c6f90024dec2f"
  },
  {
    "url": "assets/js/21.3a64b549.js",
    "revision": "79bbcec3c34ae86ceafde9b09c654b95"
  },
  {
    "url": "assets/js/22.64dffb07.js",
    "revision": "9aa4370cf8c6a855ddc0296e825acd9d"
  },
  {
    "url": "assets/js/23.4845bc71.js",
    "revision": "ee03a33e5f8255c671a54b5b302661f2"
  },
  {
    "url": "assets/js/24.99156ed4.js",
    "revision": "67c02177a7ed447597f0a9914e6499fe"
  },
  {
    "url": "assets/js/25.47437f0e.js",
    "revision": "3f00a46cb0d88ff0a9d19c10a51923f2"
  },
  {
    "url": "assets/js/26.99962d3e.js",
    "revision": "caf653226533d69a847884e32cc7ad3d"
  },
  {
    "url": "assets/js/27.10ab6e4f.js",
    "revision": "eb78eed55c1263d716ea6bd22749fbc2"
  },
  {
    "url": "assets/js/28.942f0d8d.js",
    "revision": "fb7110850c0413abaded17d4ed43c4a3"
  },
  {
    "url": "assets/js/29.7c7bed23.js",
    "revision": "d850a02104a70e65200f606d31941743"
  },
  {
    "url": "assets/js/3.7e5cdfd8.js",
    "revision": "39d8ad54b268c963a7e3e8fd235b4f66"
  },
  {
    "url": "assets/js/30.92d39165.js",
    "revision": "af7a8ac731a75839dfd21b320e37f1a4"
  },
  {
    "url": "assets/js/31.24a9a0b7.js",
    "revision": "cda10fe8d1f70a48f89d261a0e9e2f3a"
  },
  {
    "url": "assets/js/32.27dbe8b1.js",
    "revision": "514c93b6c8c3167089d6ea3199ff7e4a"
  },
  {
    "url": "assets/js/33.8bc58b38.js",
    "revision": "b7b4cf55447485fc90b2c97717b17f07"
  },
  {
    "url": "assets/js/34.1022116d.js",
    "revision": "cb413e38d7359c617a459d5101b1f7c4"
  },
  {
    "url": "assets/js/35.93a57b2e.js",
    "revision": "f028ee64e295bd6acb68a8a583653755"
  },
  {
    "url": "assets/js/36.d9285deb.js",
    "revision": "a141c04b2f8715d16793c3fb2883777d"
  },
  {
    "url": "assets/js/37.5b1ed5d7.js",
    "revision": "915b9b4048bdc6bbe9030904748f9616"
  },
  {
    "url": "assets/js/38.61c28e22.js",
    "revision": "6504737d98563eba9eeb4ad9773e7a4d"
  },
  {
    "url": "assets/js/39.afe39bd6.js",
    "revision": "d91c2112f8c505ba3a347d71344752ca"
  },
  {
    "url": "assets/js/4.3340b357.js",
    "revision": "f30a54e482ca2f69ca4cacba16d905e1"
  },
  {
    "url": "assets/js/40.f62eb143.js",
    "revision": "3574ba21bb716f4017b3f8634a99a419"
  },
  {
    "url": "assets/js/41.2b51105a.js",
    "revision": "73e60db921f6bee0b4d1a48000c7919e"
  },
  {
    "url": "assets/js/42.e902b647.js",
    "revision": "940ef2d8b011194084a88052db90fb14"
  },
  {
    "url": "assets/js/43.7d25fb1a.js",
    "revision": "75e68991d8c9c8e1bb71aa4807b376db"
  },
  {
    "url": "assets/js/44.daf0fe0f.js",
    "revision": "1329d2289542ce36b894df7c10348780"
  },
  {
    "url": "assets/js/45.ceedfa7e.js",
    "revision": "51609c16a90c285105b39b3a4cf6ddbe"
  },
  {
    "url": "assets/js/46.da2d2417.js",
    "revision": "d49b38a8c5911e08e152621170881fb0"
  },
  {
    "url": "assets/js/47.30a1c292.js",
    "revision": "4b7f930a494f782307a17be151cf260a"
  },
  {
    "url": "assets/js/48.03884666.js",
    "revision": "556b27b96315482cef0d01b8ef7c37ae"
  },
  {
    "url": "assets/js/49.95b85a11.js",
    "revision": "4a6c8e5693ec0e0ea219f9bb831f787a"
  },
  {
    "url": "assets/js/5.3313f185.js",
    "revision": "52da56d09b50fb458e9480e9df3cfb3f"
  },
  {
    "url": "assets/js/50.e400a3cc.js",
    "revision": "a3233cad1340229b56aca90fe1ca57f8"
  },
  {
    "url": "assets/js/51.8bdb22e8.js",
    "revision": "675d19aeab5c833a20392ee7360c911e"
  },
  {
    "url": "assets/js/52.d0e58cb8.js",
    "revision": "c4f2597f71622082453319ee379b2037"
  },
  {
    "url": "assets/js/53.9db7c2ab.js",
    "revision": "dbcef57a5c90b8c297f02806c5fd9b22"
  },
  {
    "url": "assets/js/54.36d7c29d.js",
    "revision": "bd2d9154e2148326c27b0be0cf61c25c"
  },
  {
    "url": "assets/js/55.6c0054fe.js",
    "revision": "4648f2bd244ee53610651668b3d625f8"
  },
  {
    "url": "assets/js/56.16d522a4.js",
    "revision": "7967ef1a68135bacd4b44e8381178d5d"
  },
  {
    "url": "assets/js/57.142714cb.js",
    "revision": "64cace03a1a35f484cf093f78448dac0"
  },
  {
    "url": "assets/js/58.5bba2cd8.js",
    "revision": "64af9e423178576e90689681a53c39e9"
  },
  {
    "url": "assets/js/59.0f9954b0.js",
    "revision": "83131dd6e7dc65e0b00a77b0359a5d3a"
  },
  {
    "url": "assets/js/6.9733e8ae.js",
    "revision": "d517b43fdcaee1f7f267e7b9095d539b"
  },
  {
    "url": "assets/js/60.874f4f88.js",
    "revision": "d444219cf30876bab932311780071b4d"
  },
  {
    "url": "assets/js/61.9dd300ea.js",
    "revision": "36e66b8ca5e52058ce5758758ec5f297"
  },
  {
    "url": "assets/js/62.d3b5d8d5.js",
    "revision": "0d519c81b91c6ca84a4f22c1dc8827bb"
  },
  {
    "url": "assets/js/63.144a5a58.js",
    "revision": "fe2093d1da29f3d85ee8db7408801760"
  },
  {
    "url": "assets/js/64.2b492365.js",
    "revision": "e3757df7598c65fee0847903c027eaf0"
  },
  {
    "url": "assets/js/65.46db6331.js",
    "revision": "cdd45e39aa5991c30beb1577535591f6"
  },
  {
    "url": "assets/js/66.8542b55b.js",
    "revision": "206fa574120c952d857e49134a2e76ff"
  },
  {
    "url": "assets/js/67.f511efb8.js",
    "revision": "016cc99a7c5f67df8233b50ee5394da5"
  },
  {
    "url": "assets/js/68.88c40fab.js",
    "revision": "2869c917a7be06659362a8c75e379b89"
  },
  {
    "url": "assets/js/69.47dc82ab.js",
    "revision": "4a4824648439c095a83bb4e3ddda6b81"
  },
  {
    "url": "assets/js/7.8f5da6f9.js",
    "revision": "b9afd2f9957ad7300cbdbf58cc3977c5"
  },
  {
    "url": "assets/js/70.7fcd3e8e.js",
    "revision": "f904d4f0159ebded320f34b3e2f7ed75"
  },
  {
    "url": "assets/js/8.2b07defc.js",
    "revision": "dfc241efcaddfb2b115750ff2f64c127"
  },
  {
    "url": "assets/js/9.7f72de7a.js",
    "revision": "019b2fad42fa8004cd4f23f8e875af75"
  },
  {
    "url": "assets/js/app.9aeafb6f.js",
    "revision": "1a82b86463a3146009a003689155a811"
  },
  {
    "url": "components/basic/alert.html",
    "revision": "296eb86e15ff3be2b91a9eb640698854"
  },
  {
    "url": "components/basic/button.html",
    "revision": "f0bbbeb8034ac5bceba5811a1cf9edd6"
  },
  {
    "url": "components/basic/download.html",
    "revision": "e756b6a36bad14e78581e2c624131d97"
  },
  {
    "url": "components/basic/icon.html",
    "revision": "fc1b42f9a84bb58c5a988907c9e49a9d"
  },
  {
    "url": "components/basic/img.html",
    "revision": "9389b9be6faf1b1b5a65abd75494260e"
  },
  {
    "url": "components/basic/link.html",
    "revision": "e6cf05da6e0a48c7b582391d2b1b3831"
  },
  {
    "url": "components/basic/placeholder.html",
    "revision": "254caae330b090d1fa03fe469f665ea0"
  },
  {
    "url": "components/basic/text.html",
    "revision": "ff1b8b0549bb7a08b54e358ec80a707e"
  },
  {
    "url": "components/basic/upload.html",
    "revision": "128f53a251529c276053f9426d529a67"
  },
  {
    "url": "components/container/collapse.html",
    "revision": "3bc836d3fb003d4c77462f06ee603e19"
  },
  {
    "url": "components/container/container.html",
    "revision": "571ae5095f12ba4cbd3752a0781dac71"
  },
  {
    "url": "components/container/dialog.html",
    "revision": "ea0ca00abd6a15adada6d7faa53b411a"
  },
  {
    "url": "components/container/drawer.html",
    "revision": "ba5835a6623adb85873ae9204a09adc6"
  },
  {
    "url": "components/container/flex-container.html",
    "revision": "31af9e391fce3dce9fbe2bb125676f42"
  },
  {
    "url": "components/container/list.html",
    "revision": "5d9c4843566410c5b0dc59e59ad4d422"
  },
  {
    "url": "components/container/page.html",
    "revision": "ea729d78348b33035ee8aacd28f68bea"
  },
  {
    "url": "components/container/panel.html",
    "revision": "26ff7aba8fd8e0485bfb6189fb0c0d86"
  },
  {
    "url": "components/container/search-bar.html",
    "revision": "8435dda27b08b2cc9708262dbab9f0bc"
  },
  {
    "url": "components/container/tab.html",
    "revision": "addc13bc9e8d7ee1b4559f827e172df6"
  },
  {
    "url": "components/data/table.html",
    "revision": "57aee92984d28193cbc2575cf60dd3cc"
  },
  {
    "url": "components/data/tree.html",
    "revision": "1f2d6fefd9427f75155ec9f72ae4d16c"
  },
  {
    "url": "components/form/checkbox.html",
    "revision": "b30dc3a373817cf0d9f7931f496c6ba0"
  },
  {
    "url": "components/form/date-picker.html",
    "revision": "bc79d252387ec6d5256cd27ca242438e"
  },
  {
    "url": "components/form/form.html",
    "revision": "d1afba141c93cfef8ff4194bbc818c98"
  },
  {
    "url": "components/form/hidden.html",
    "revision": "12f437c6d451e78f0ad1ad8f94ad718f"
  },
  {
    "url": "components/form/input-number.html",
    "revision": "deb02c08be06d301c43001aa4624d928"
  },
  {
    "url": "components/form/input.html",
    "revision": "32b6850c0a6bab20d60a6d436390db57"
  },
  {
    "url": "components/form/radio.html",
    "revision": "8b3f3ed26a8e39747d1bf651c38ec8a6"
  },
  {
    "url": "components/form/select.html",
    "revision": "9fbc9a9e17c7dbbac9eb303daa67b3be"
  },
  {
    "url": "components/form/switch.html",
    "revision": "8f6602c4df3fa7b9d11919284f7b50a4"
  },
  {
    "url": "components/form/text.html",
    "revision": "1ad60c68744f2bbe55d99b4b1713f426"
  },
  {
    "url": "components/form/time-picker.html",
    "revision": "6448e6fdd0e79a756227cdb05edc4722"
  },
  {
    "url": "components/form/transfer-table.html",
    "revision": "0791f7a3df01f5e3c770fbff2230cd11"
  },
  {
    "url": "components/form/transfer.html",
    "revision": "0bb38507dd927ff07c46d46213465678"
  },
  {
    "url": "components/leivii.html",
    "revision": "9e149c47404b6f308a533b27e6a960fd"
  },
  {
    "url": "components/others/webview.html",
    "revision": "95458a3f10a4aad7ed942c445952578e"
  },
  {
    "url": "design/datasource.html",
    "revision": "fc5024adc81be57d4e5ce9471f5a23a1"
  },
  {
    "url": "design/dsl.html",
    "revision": "0d690d6fcf03413ddb76a1cf224d6223"
  },
  {
    "url": "design/editor.html",
    "revision": "5cbb6dac77031e512229a3f6cb58f1b4"
  },
  {
    "url": "design/expression.html",
    "revision": "db2a4644f8f2aa9dfd99fc3dcd0d5cd8"
  },
  {
    "url": "design/handler.html",
    "revision": "c918c885586a56e3f14f648a66288f07"
  },
  {
    "url": "design/scf.html",
    "revision": "f5bd59c3be76114f54d85467770b5a7d"
  },
  {
    "url": "design/theme.html",
    "revision": "2ae5e1ce35891ad07cfd23979df29d02"
  },
  {
    "url": "en/api.html",
    "revision": "d941a1692ace3869270d4984f9a64f28"
  },
  {
    "url": "en/index.html",
    "revision": "0e8ad696eef9ba95ac1691f9014a91a5"
  },
  {
    "url": "en/install.html",
    "revision": "b0bef4c28476fdbab62b9e0ded7a6e9e"
  },
  {
    "url": "en/join.html",
    "revision": "69b834f7ad689c5a5aa28cdc59642fa8"
  },
  {
    "url": "index.html",
    "revision": "ff9d37e267698c54f81188d27ae70df7"
  },
  {
    "url": "install.html",
    "revision": "e79a91a6551df3c417a167c94e706de2"
  },
  {
    "url": "join.html",
    "revision": "13be6c2cfd9f580ae495c04b18493ad7"
  },
  {
    "url": "logo.png",
    "revision": "26adb829ec0df8e803d58adcd48d407b"
  },
  {
    "url": "qrcode.jpeg",
    "revision": "fdb65dfbec2fab62dc81012c66afdf26"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
