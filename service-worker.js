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
    "revision": "5908103f92c86a16e9ff9ed298ac1c84"
  },
  {
    "url": "advanced/auth.html",
    "revision": "ad506d6405f8ce468061170a4ea94458"
  },
  {
    "url": "advanced/component.html",
    "revision": "3f91a0a43e42a24bea02e147997ee8f5"
  },
  {
    "url": "advanced/doc.html",
    "revision": "7a76e367b404c700a1749d7bffc860dc"
  },
  {
    "url": "advanced/plugin.html",
    "revision": "2f812d2e58c25cbd331f9cb4dbb09464"
  },
  {
    "url": "advanced/prop.html",
    "revision": "47f42cb0a5fcee903d9d5379741e0c42"
  },
  {
    "url": "advanced/props.html",
    "revision": "515e805e37ff24fd34573203e4688654"
  },
  {
    "url": "advanced/sample/Card.html",
    "revision": "8cb29f205d0286187771280d7fd4f066"
  },
  {
    "url": "advanced/sample/ColorPicker.html",
    "revision": "33151084c29b9168d2c9834ec9efa2a1"
  },
  {
    "url": "advanced/validator.html",
    "revision": "4ee0b8b9d85c665ae2340314a2766089"
  },
  {
    "url": "api.html",
    "revision": "845f3a74891b487f73e36634546a32af"
  },
  {
    "url": "assets/css/0.styles.b20dc4a5.css",
    "revision": "cdd67868e3166aa552522be861c48119"
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
    "url": "assets/js/12.b4581c14.js",
    "revision": "d2ac142719a1173d3b3ca4df774dbbdc"
  },
  {
    "url": "assets/js/13.b265c49c.js",
    "revision": "bb08893fbc4c3daa1b123efa3bacee28"
  },
  {
    "url": "assets/js/14.be8f8137.js",
    "revision": "18feb4eb23329de3b073a139f5d73f97"
  },
  {
    "url": "assets/js/15.432df4e2.js",
    "revision": "d2110d95943958e1f0763080b9e0c845"
  },
  {
    "url": "assets/js/16.1c03ef42.js",
    "revision": "b9506368a3de50573b69596fec46bb2c"
  },
  {
    "url": "assets/js/17.bf1fccaf.js",
    "revision": "45776d3b25188159356831a4fa1dec09"
  },
  {
    "url": "assets/js/18.0e018bfc.js",
    "revision": "af500733b226923b4773845080f0f3d6"
  },
  {
    "url": "assets/js/19.3de3b7c5.js",
    "revision": "64cc7376a4a39ca6fea6bf7a141db9dc"
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
    "url": "assets/js/22.10625a74.js",
    "revision": "2bd8d504e2d7ce56cb7e83c82c5a337d"
  },
  {
    "url": "assets/js/23.4845bc71.js",
    "revision": "ee03a33e5f8255c671a54b5b302661f2"
  },
  {
    "url": "assets/js/24.ecc15960.js",
    "revision": "21e4e948d0466df0c5fd9a44d3299900"
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
    "url": "assets/js/27.c733d755.js",
    "revision": "b465eea3b001182591f5d02f628fb916"
  },
  {
    "url": "assets/js/28.5218b5d5.js",
    "revision": "43248ca2b94dbdc7f956afcac6475b7d"
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
    "url": "assets/js/30.a247d44e.js",
    "revision": "d6c50d135f115c5e27b44f12515fb662"
  },
  {
    "url": "assets/js/31.b76c4431.js",
    "revision": "eac3dc0cd363807432d822f0262900a2"
  },
  {
    "url": "assets/js/32.990b0806.js",
    "revision": "f972b566cf840a0e49a46d16db8983c0"
  },
  {
    "url": "assets/js/33.5f28ebc4.js",
    "revision": "e1f4f94ec9629bb4f33f70a83c2d43d6"
  },
  {
    "url": "assets/js/34.27da0260.js",
    "revision": "a2717a7313cea78c7a48875c3836e0b3"
  },
  {
    "url": "assets/js/35.93a57b2e.js",
    "revision": "f028ee64e295bd6acb68a8a583653755"
  },
  {
    "url": "assets/js/36.f9ab8e85.js",
    "revision": "329f2aa42bac0928a4f7bcde8662fe76"
  },
  {
    "url": "assets/js/37.b362ea98.js",
    "revision": "867430d8bfdcb719296638be39227521"
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
    "url": "assets/js/4.4e62d493.js",
    "revision": "127a8ba0ed4d063490c57a2de9d9d938"
  },
  {
    "url": "assets/js/40.f62eb143.js",
    "revision": "3574ba21bb716f4017b3f8634a99a419"
  },
  {
    "url": "assets/js/41.ffb75223.js",
    "revision": "e8b13b4bb9aca2768b54eb138498b0ae"
  },
  {
    "url": "assets/js/42.a070b289.js",
    "revision": "f6873e4045cc7ced27891bae524eb0ed"
  },
  {
    "url": "assets/js/43.79ee38cc.js",
    "revision": "3d00bd067a6ec0f6106d8169c6d4355d"
  },
  {
    "url": "assets/js/44.2ef117d7.js",
    "revision": "237e3df1d4a87e113ee58ea6731384cf"
  },
  {
    "url": "assets/js/45.ceedfa7e.js",
    "revision": "51609c16a90c285105b39b3a4cf6ddbe"
  },
  {
    "url": "assets/js/46.123a902f.js",
    "revision": "4b74bf27e4e30d561ce367e574834e3f"
  },
  {
    "url": "assets/js/47.febb3b1f.js",
    "revision": "ebcbf5c2b83f5d37089e29808575a4a6"
  },
  {
    "url": "assets/js/48.e7c9a5c8.js",
    "revision": "a323aaaa015e7319e91d1f4f1fd30e97"
  },
  {
    "url": "assets/js/49.95b85a11.js",
    "revision": "4a6c8e5693ec0e0ea219f9bb831f787a"
  },
  {
    "url": "assets/js/5.2e33f5cc.js",
    "revision": "2e59d489b24bd1f84540c069597275cc"
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
    "url": "assets/js/52.06999548.js",
    "revision": "6d7c9c1284425ccd8066b8c317643fbd"
  },
  {
    "url": "assets/js/53.7b0fbcd5.js",
    "revision": "e291b386cb9473943bb5ab40604f2cf7"
  },
  {
    "url": "assets/js/54.07bbcba0.js",
    "revision": "2a2c3096d4a540f4192ee2de3effafd4"
  },
  {
    "url": "assets/js/55.6c0054fe.js",
    "revision": "4648f2bd244ee53610651668b3d625f8"
  },
  {
    "url": "assets/js/56.1dd4bb5a.js",
    "revision": "a0a20d444a84f6cf674c4c8a2f226eaf"
  },
  {
    "url": "assets/js/57.b7f96f8c.js",
    "revision": "6f2fd59af7cf76f5a568a0c6e29b38c5"
  },
  {
    "url": "assets/js/58.5bba2cd8.js",
    "revision": "64af9e423178576e90689681a53c39e9"
  },
  {
    "url": "assets/js/59.15e1b821.js",
    "revision": "df31bfc6869adb950e8565cb0996464f"
  },
  {
    "url": "assets/js/6.9733e8ae.js",
    "revision": "d517b43fdcaee1f7f267e7b9095d539b"
  },
  {
    "url": "assets/js/60.16ca3908.js",
    "revision": "06928c640a4ff4f2faa69eb3a7536d1c"
  },
  {
    "url": "assets/js/61.def1112c.js",
    "revision": "aec8723f538353d43813f1be4eb6a105"
  },
  {
    "url": "assets/js/62.d8baf720.js",
    "revision": "eb25048dcbe8c347b56ced80b7ef2182"
  },
  {
    "url": "assets/js/63.aa411fd1.js",
    "revision": "2666588f6eb9dee4f18af89c305db0a3"
  },
  {
    "url": "assets/js/64.e9d66056.js",
    "revision": "4f0edea66bd0f7ea53e96361e92c49b4"
  },
  {
    "url": "assets/js/65.46a00e1f.js",
    "revision": "beeba9ad3349e2216b05215df61be768"
  },
  {
    "url": "assets/js/66.c1936a14.js",
    "revision": "26f54447131a9a171e389b789d5329b1"
  },
  {
    "url": "assets/js/67.307db76a.js",
    "revision": "7bca228b148f37d3a1ca2e09ab8130de"
  },
  {
    "url": "assets/js/68.921a8722.js",
    "revision": "88136c31646488375025dd9da6dc34d9"
  },
  {
    "url": "assets/js/69.a266186e.js",
    "revision": "f4dc099a4746191f741f2b681c7974eb"
  },
  {
    "url": "assets/js/7.2ab52577.js",
    "revision": "668c66b126f888015fc086461ada53a0"
  },
  {
    "url": "assets/js/70.7fcd3e8e.js",
    "revision": "f904d4f0159ebded320f34b3e2f7ed75"
  },
  {
    "url": "assets/js/8.82704cbd.js",
    "revision": "f2faf36072be11e214f24d7062ddb5ab"
  },
  {
    "url": "assets/js/9.f0ce6285.js",
    "revision": "d3e0f18bc2f9d6c5a12d97789ccdb28a"
  },
  {
    "url": "assets/js/app.b5d57520.js",
    "revision": "634b45bc3426e61353a97fe901cd0e2a"
  },
  {
    "url": "components/basic/alert.html",
    "revision": "463a4fb770ef610d70373e6b989e5cd6"
  },
  {
    "url": "components/basic/button.html",
    "revision": "29a6e740129c5f26ef5117e1f259c2f2"
  },
  {
    "url": "components/basic/download.html",
    "revision": "d1365fc0648c25cbc260d418ea6b8faa"
  },
  {
    "url": "components/basic/icon.html",
    "revision": "a8e2ee0f4d8e83e5a18f73c1d16996bc"
  },
  {
    "url": "components/basic/img.html",
    "revision": "1ecfbeec7de316c15323763466ae49fc"
  },
  {
    "url": "components/basic/link.html",
    "revision": "c9404d823f698ca195d26463abe1dea8"
  },
  {
    "url": "components/basic/placeholder.html",
    "revision": "dc5a017489fef681c6429c3b5d2e93d6"
  },
  {
    "url": "components/basic/text.html",
    "revision": "1026dbc59b5aab5571e7e26fa9db2394"
  },
  {
    "url": "components/basic/upload.html",
    "revision": "3bc8b13e016cc36c4920a8e150cfa299"
  },
  {
    "url": "components/container/collapse.html",
    "revision": "a7b8b30db7939c0eeae5d8c2c98f2cd0"
  },
  {
    "url": "components/container/container.html",
    "revision": "32d62f5408e4db240012793f710d6690"
  },
  {
    "url": "components/container/dialog.html",
    "revision": "2219205f3a9e118490d3aed2a1a38872"
  },
  {
    "url": "components/container/drawer.html",
    "revision": "b480433ffb90d28d5e26cc72862a08f9"
  },
  {
    "url": "components/container/flex-container.html",
    "revision": "48954ef8861993230edf30fd6a570842"
  },
  {
    "url": "components/container/list.html",
    "revision": "86f4a9b37b9ab527992391bbed396bd7"
  },
  {
    "url": "components/container/page.html",
    "revision": "0dafd69db31b3878d29008ecf561ec10"
  },
  {
    "url": "components/container/panel.html",
    "revision": "1cac2de2eb19b434fc79f8456c8303c7"
  },
  {
    "url": "components/container/search-bar.html",
    "revision": "46bf7427a58561731552709c652044b3"
  },
  {
    "url": "components/container/tab.html",
    "revision": "18c2028f718e674a6dab2de5068fa952"
  },
  {
    "url": "components/data/table.html",
    "revision": "3ba7cc2219be2271bdb227dbe025339e"
  },
  {
    "url": "components/data/tree.html",
    "revision": "712d0d75523355149b9a7093df86c5bd"
  },
  {
    "url": "components/form/checkbox.html",
    "revision": "85662b94e7bd26547afe356989c4389e"
  },
  {
    "url": "components/form/date-picker.html",
    "revision": "3916be3dca081cf5a91e49e6b72780fb"
  },
  {
    "url": "components/form/form.html",
    "revision": "bc75ddd9cd9b98780b534b59caf23351"
  },
  {
    "url": "components/form/hidden.html",
    "revision": "f20c0ff17881e007f0197543df9b8b94"
  },
  {
    "url": "components/form/input-number.html",
    "revision": "e412191a1256d05549fbd26c394ac53a"
  },
  {
    "url": "components/form/input.html",
    "revision": "c5e2eeb11f1c0c9304530340fc6044bf"
  },
  {
    "url": "components/form/radio.html",
    "revision": "0298ac7b2fbddfcb5a0e81fa45c0c619"
  },
  {
    "url": "components/form/select.html",
    "revision": "b5aa5f34eda0743c8c582bb04ee50cf7"
  },
  {
    "url": "components/form/switch.html",
    "revision": "76afab6f095ca0f42e411e25d2e7f9c9"
  },
  {
    "url": "components/form/text.html",
    "revision": "9e6b4dea1332b6a4c75fb7771352571b"
  },
  {
    "url": "components/form/time-picker.html",
    "revision": "30711009cb5963c9069af4bb1743b846"
  },
  {
    "url": "components/form/transfer-table.html",
    "revision": "70abc2f57d52bf0d30583186847c24fc"
  },
  {
    "url": "components/form/transfer.html",
    "revision": "c0d5a73fe6ff804c406ffc3d14d1e9f0"
  },
  {
    "url": "components/leivii.html",
    "revision": "257605b41583c16bb02fbb7b59ca5363"
  },
  {
    "url": "components/others/webview.html",
    "revision": "a543be0272b3db18cb93f4594a5a9894"
  },
  {
    "url": "design/datasource.html",
    "revision": "f604f9f473baf49b890a84bc7a44d6ac"
  },
  {
    "url": "design/dsl.html",
    "revision": "e7d2e0c2cae77a00e495cdec34007031"
  },
  {
    "url": "design/editor.html",
    "revision": "ade40ea52a833e30b30c0c6999b1ca7c"
  },
  {
    "url": "design/expression.html",
    "revision": "e0f52675662b0793165aca25fafb3035"
  },
  {
    "url": "design/handler.html",
    "revision": "47c52ba84072abdf322694b8b9e4edd5"
  },
  {
    "url": "design/scf.html",
    "revision": "b172b85dd55573055270eeddf0b0f851"
  },
  {
    "url": "design/theme.html",
    "revision": "9be309a62c871744434029660081ae28"
  },
  {
    "url": "en/api.html",
    "revision": "72f70eddb568323cd6a6ffe540c12753"
  },
  {
    "url": "en/index.html",
    "revision": "edb7ecd0b95d3832baa2945f3fe7e7a3"
  },
  {
    "url": "en/install.html",
    "revision": "2fc5033df83c6e6679c8ea5c9a4f93f6"
  },
  {
    "url": "en/join.html",
    "revision": "62e187e6538f818df872cf75c699f24d"
  },
  {
    "url": "index.html",
    "revision": "e5ba17d494e3031ae9e5e39e4227d5b2"
  },
  {
    "url": "install.html",
    "revision": "30af13f287c4056e33fdb83851a6f822"
  },
  {
    "url": "join.html",
    "revision": "fb7adfbd2d1fd7932a78c35154dcd7bf"
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
