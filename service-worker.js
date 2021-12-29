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
    "revision": "04ad275591fcd72fdcc15dc687377edb"
  },
  {
    "url": "advanced/auth.html",
    "revision": "c5a90fd94fcd36f6c4bd9ebbc50fa5c3"
  },
  {
    "url": "advanced/component.html",
    "revision": "4c82630e9401a400fdaec84f502ac9b2"
  },
  {
    "url": "advanced/doc.html",
    "revision": "c477a310d76f9d2aae182d237a93b7bd"
  },
  {
    "url": "advanced/plugin.html",
    "revision": "18c6be3d286a8178821671db3aba0b13"
  },
  {
    "url": "advanced/prop.html",
    "revision": "d3aae04ee913d46b8ee14381c77ad578"
  },
  {
    "url": "advanced/props.html",
    "revision": "d17a9bfe40a894124a939ed37be4cf21"
  },
  {
    "url": "advanced/sample/Card.html",
    "revision": "782e06fbdf19bed70ed3d6bc861d77cc"
  },
  {
    "url": "advanced/sample/ColorPicker.html",
    "revision": "fcab6e1cc575a66e05e06c866708232a"
  },
  {
    "url": "advanced/validator.html",
    "revision": "d75fdb14ae0d9de49f748c41873d2a70"
  },
  {
    "url": "api.html",
    "revision": "ddd72505c5406275bde8fc5c33d12b78"
  },
  {
    "url": "assets/css/0.styles.74236327.css",
    "revision": "28a1c8f3f8686d25d3e60601729cfa91"
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
    "url": "assets/js/1.2101cf05.js",
    "revision": "d934892af6d198e7a2e6e825cc87504d"
  },
  {
    "url": "assets/js/10.078f1e45.js",
    "revision": "f238299ed2ce898ef1a0f18a1894c59a"
  },
  {
    "url": "assets/js/100.fc9d32f4.js",
    "revision": "993b865fd29a65e28ca9900fabb22bba"
  },
  {
    "url": "assets/js/101.4a41b85e.js",
    "revision": "d68cfcb1ddd3e3d2644c05388f6c5678"
  },
  {
    "url": "assets/js/102.92f57848.js",
    "revision": "5d4d23989406784cfd3bf406232adfe6"
  },
  {
    "url": "assets/js/103.ea250b1a.js",
    "revision": "d21e6e6a0daafd31e66437359cdb974d"
  },
  {
    "url": "assets/js/104.6507b272.js",
    "revision": "af6cc213ba5988c1f56695a5af5ec97e"
  },
  {
    "url": "assets/js/105.148ea3b4.js",
    "revision": "9d199f361836148a6232b8336fbdd75a"
  },
  {
    "url": "assets/js/106.3e4eb2ca.js",
    "revision": "44c6e47e4d96a87a4dc5939d9d1e8321"
  },
  {
    "url": "assets/js/107.87e69eb9.js",
    "revision": "1afaee923d2c73d0d0d2585319e8414d"
  },
  {
    "url": "assets/js/108.c825a658.js",
    "revision": "4acad10d391a6a87c443c8c26b931ff3"
  },
  {
    "url": "assets/js/109.dab56c6c.js",
    "revision": "cdf4289d9ab270aff4a4fe32604d3426"
  },
  {
    "url": "assets/js/11.da6c3cdc.js",
    "revision": "02c5d85eb503acbf027ec42298497006"
  },
  {
    "url": "assets/js/110.957adb01.js",
    "revision": "22d4339c1292d55ca48e00fb5ddd6ad4"
  },
  {
    "url": "assets/js/111.37d90839.js",
    "revision": "e15ff7a493c0199707961eef3fb95832"
  },
  {
    "url": "assets/js/112.00f5bff6.js",
    "revision": "5e83089ce330affd5329186bdac7bb07"
  },
  {
    "url": "assets/js/113.9d718c9f.js",
    "revision": "0ebc6034bd8087a0070f3ad883c27a09"
  },
  {
    "url": "assets/js/114.eee6059f.js",
    "revision": "2965cceccca07e8cdb854861d6e65c86"
  },
  {
    "url": "assets/js/115.2457cc3e.js",
    "revision": "0a353751d96be7cfafab01a1eea7a337"
  },
  {
    "url": "assets/js/116.b36ad521.js",
    "revision": "4c678a5a4a7a80dead27118c30045680"
  },
  {
    "url": "assets/js/117.c29b96b9.js",
    "revision": "7c9228751e0d70f2ddad8c4c86ae4497"
  },
  {
    "url": "assets/js/118.1cc7e593.js",
    "revision": "c02689eb123a960fbce2aa62153dc450"
  },
  {
    "url": "assets/js/119.d8d25f22.js",
    "revision": "8e39f830a0e579153a0b7b06b6d9a482"
  },
  {
    "url": "assets/js/12.d39a9cf5.js",
    "revision": "433a94f7890f365da1c54c4b470230d1"
  },
  {
    "url": "assets/js/120.c9c1566b.js",
    "revision": "8cb7efef26a74fd08fc80d282706eecd"
  },
  {
    "url": "assets/js/121.b296af46.js",
    "revision": "6cac3f2528eaf905eb268e69258bf1a2"
  },
  {
    "url": "assets/js/122.64c4d81f.js",
    "revision": "65fd7d362d11cfe160668f75eb053094"
  },
  {
    "url": "assets/js/123.987708bc.js",
    "revision": "d3483ef3055f798cd2a35cb4d10506e8"
  },
  {
    "url": "assets/js/124.c198ac48.js",
    "revision": "8bf7f252742969973ba93820919c15ab"
  },
  {
    "url": "assets/js/125.cb552ecc.js",
    "revision": "68c8260c6323e67e103b6df8a31ba014"
  },
  {
    "url": "assets/js/13.4af15ba5.js",
    "revision": "3e4c9cff8fb63f3f54375251ee4b8278"
  },
  {
    "url": "assets/js/14.6011e773.js",
    "revision": "44d9564c72611b701ea0217251976b25"
  },
  {
    "url": "assets/js/15.f2e71ed6.js",
    "revision": "4aea3f8a3686d0f7c5e3744b0803744a"
  },
  {
    "url": "assets/js/16.1da6081d.js",
    "revision": "4ceef24f1d7fa5ba4a4ce95b8d29ac11"
  },
  {
    "url": "assets/js/17.cc560b17.js",
    "revision": "a1b3b57fc84a1118f371bbc6bd6616ce"
  },
  {
    "url": "assets/js/18.afe6b61b.js",
    "revision": "505d2ba654b4bc0656eb7f02c6676fab"
  },
  {
    "url": "assets/js/19.879cefb1.js",
    "revision": "b6ff1baa3cf43a54aaeab459d400bb6c"
  },
  {
    "url": "assets/js/2.4e1e6bf9.js",
    "revision": "817a4184c96d6114249faa132e2e8277"
  },
  {
    "url": "assets/js/20.d280860a.js",
    "revision": "f7699f1bd04460bdea0f6f38410c50db"
  },
  {
    "url": "assets/js/21.236cd63d.js",
    "revision": "f51600bc6b1b32c5369dd3af36df7005"
  },
  {
    "url": "assets/js/22.c6ca15d0.js",
    "revision": "d361387aaf3fe5c434c73c1d4f1c3e2f"
  },
  {
    "url": "assets/js/23.bcc42a1e.js",
    "revision": "f6cd33aa1861a5cc1599f173aa4c32ac"
  },
  {
    "url": "assets/js/24.7a9043e0.js",
    "revision": "0284205f1e4027304c7059369b5478e8"
  },
  {
    "url": "assets/js/25.bc0d1d99.js",
    "revision": "45abb616a2a8c331206c89dd40ef018c"
  },
  {
    "url": "assets/js/26.6a7dc335.js",
    "revision": "35e26491f4136cbf246671a841c53aac"
  },
  {
    "url": "assets/js/27.6e9934dc.js",
    "revision": "19ffa1348562b5fe3aab52da764bd3d1"
  },
  {
    "url": "assets/js/28.f0bc6016.js",
    "revision": "4dc39b3f19151fed1608f2f3f3e63f22"
  },
  {
    "url": "assets/js/29.4497d682.js",
    "revision": "01b00ccffa68e9cd93c1d202441a7e22"
  },
  {
    "url": "assets/js/30.f517ccf6.js",
    "revision": "e0f1fb273e861f54d80adfac0ffe902d"
  },
  {
    "url": "assets/js/31.4d713d36.js",
    "revision": "f4ffc66f4b925bdd9b7bdc10ada444cf"
  },
  {
    "url": "assets/js/32.77678424.js",
    "revision": "96d3b9f87b686fa6c91bd6fae6bfa14e"
  },
  {
    "url": "assets/js/33.ff7b7e19.js",
    "revision": "c128310dc02c405f0ffc74cc33ed9a45"
  },
  {
    "url": "assets/js/34.f968893c.js",
    "revision": "6fbe50ea4eb14abd34e5b23e2bbf38e1"
  },
  {
    "url": "assets/js/35.cbde822a.js",
    "revision": "420e2da17abe1f946ae28f2c06e56aa1"
  },
  {
    "url": "assets/js/36.6ac9583c.js",
    "revision": "5f40683200d7a09570b8927c9b51526a"
  },
  {
    "url": "assets/js/37.5206ef28.js",
    "revision": "637c36f54b175a5550426236a82056e1"
  },
  {
    "url": "assets/js/38.38e81169.js",
    "revision": "bb43f003b3bd5f226f38e8e46751516d"
  },
  {
    "url": "assets/js/39.95f08d91.js",
    "revision": "df2f1ce14d977f24d9228a313c55d093"
  },
  {
    "url": "assets/js/4.82b65a1c.js",
    "revision": "39422145cbc35f62a96f0f2ef9d673e9"
  },
  {
    "url": "assets/js/40.ea41d4e5.js",
    "revision": "55567c1ca1edda30a17eecac998ca79d"
  },
  {
    "url": "assets/js/41.adf22e1d.js",
    "revision": "4302168d0dad11aa0f692a767aa3ae36"
  },
  {
    "url": "assets/js/42.bd10f8ae.js",
    "revision": "4bf32dc7d7dfd461f723644d7309d41b"
  },
  {
    "url": "assets/js/43.008ab558.js",
    "revision": "0a5575bcce7ca19a4a365668c07005ed"
  },
  {
    "url": "assets/js/44.03e068ff.js",
    "revision": "f2056129ada32134905af093640631e5"
  },
  {
    "url": "assets/js/45.5474e1eb.js",
    "revision": "a15192cdf0cead392fab901ee4215dc9"
  },
  {
    "url": "assets/js/46.d3195760.js",
    "revision": "0ff30c40a5d47a58759ec83b748446ea"
  },
  {
    "url": "assets/js/47.ea7828e3.js",
    "revision": "565204fa776c9592fa777f45ca9c26fe"
  },
  {
    "url": "assets/js/48.fff365fa.js",
    "revision": "9d7c045fb15dd4b922b53f82f4c1b2dc"
  },
  {
    "url": "assets/js/49.5683752e.js",
    "revision": "15dec6cbde1e2ac09c391404178c0423"
  },
  {
    "url": "assets/js/5.a69e6cc1.js",
    "revision": "fa388d04271c558df926c9d13bc6d6ce"
  },
  {
    "url": "assets/js/50.0958c2ec.js",
    "revision": "d3d300d01240ebca21846e1dfc6bff76"
  },
  {
    "url": "assets/js/51.21983dc7.js",
    "revision": "4d4a79915d79cea833df0ff83ed308a5"
  },
  {
    "url": "assets/js/52.c96e4489.js",
    "revision": "dcea1a257b9d5b478715ea50c0ca4f0c"
  },
  {
    "url": "assets/js/53.b3d1b388.js",
    "revision": "6469d2e6fac7fc7a35122b43df5f7f15"
  },
  {
    "url": "assets/js/54.2c8e3d8f.js",
    "revision": "0b5464b78d1487e92eb3c5e8ee1f8039"
  },
  {
    "url": "assets/js/55.dade3d52.js",
    "revision": "f54cf9bbfddbc6d1f23828f4a6fd38fe"
  },
  {
    "url": "assets/js/56.17754ac7.js",
    "revision": "b6cbcc683d8977b9a620fb0b28b1a068"
  },
  {
    "url": "assets/js/57.735c08e0.js",
    "revision": "53efe2c6398fce3c4a4fcaeb8e22be69"
  },
  {
    "url": "assets/js/58.ef53daef.js",
    "revision": "6c1a0f709bb326975c6efdb815498cea"
  },
  {
    "url": "assets/js/59.c58970c0.js",
    "revision": "b64c77a0750787e79c2b2b3d4cda6851"
  },
  {
    "url": "assets/js/6.c55fc8a0.js",
    "revision": "eb686f67556793e0f82264ab24bd3650"
  },
  {
    "url": "assets/js/60.2b279451.js",
    "revision": "5880a9b8798740ea9cf66928d39b0f2c"
  },
  {
    "url": "assets/js/61.0dc588b3.js",
    "revision": "551bd6597e0ab202884cccc3115b805e"
  },
  {
    "url": "assets/js/62.eb9fbcd9.js",
    "revision": "7ba621fbec55a1a154b332a59ce2f3b7"
  },
  {
    "url": "assets/js/63.66938af4.js",
    "revision": "c85509aaed09a63c11d8f2caf4099b3c"
  },
  {
    "url": "assets/js/64.94d668ca.js",
    "revision": "a934da25e69d1f252ff6ec0e81db9ea0"
  },
  {
    "url": "assets/js/65.ec609ce4.js",
    "revision": "32ac1499d03d1ab40b6df359f0c37d67"
  },
  {
    "url": "assets/js/66.6a10b640.js",
    "revision": "93691e9404dcf4aa4e9c454e5fd3cbb5"
  },
  {
    "url": "assets/js/67.e1f77b4b.js",
    "revision": "c927813ac1488272dfbdab26fc77cd28"
  },
  {
    "url": "assets/js/68.21633e33.js",
    "revision": "8611434a5a0266f61690b3f44ef43801"
  },
  {
    "url": "assets/js/69.ed7c7dad.js",
    "revision": "c2f6c606fd9b7aed2ba4cba2387011f7"
  },
  {
    "url": "assets/js/7.93112e81.js",
    "revision": "1153ab2cfda555aae002f059f30d1690"
  },
  {
    "url": "assets/js/70.3507e1de.js",
    "revision": "ec658af416e69d2e5e6dca80c5edb9f1"
  },
  {
    "url": "assets/js/71.9179b115.js",
    "revision": "41674e61b5a1f1a8b64f2796a81f01f1"
  },
  {
    "url": "assets/js/72.1d08743a.js",
    "revision": "cafad0b6984277cca6f28c2de8550d68"
  },
  {
    "url": "assets/js/73.1e9e577b.js",
    "revision": "6976fb7f9ae197e7f4a8c3815ed288b8"
  },
  {
    "url": "assets/js/74.03808fe4.js",
    "revision": "a53116b3bded1832339d08d9ad2b39f1"
  },
  {
    "url": "assets/js/75.7d5040cc.js",
    "revision": "1e84f1b725e9df6e14fdb2217559dc15"
  },
  {
    "url": "assets/js/76.9580e152.js",
    "revision": "a1de99319ba01bef4db08bdc6ff2a963"
  },
  {
    "url": "assets/js/77.fe1ec9a7.js",
    "revision": "c2f9d3b05c4173c2848e545febda313f"
  },
  {
    "url": "assets/js/78.d450ca74.js",
    "revision": "c8ddc9f106765bcd73594a5978239024"
  },
  {
    "url": "assets/js/79.8f87e034.js",
    "revision": "0855fd7645a8e94e58f29f099add3900"
  },
  {
    "url": "assets/js/8.009cd0ff.js",
    "revision": "34e80a41956587570c1fe394ff509757"
  },
  {
    "url": "assets/js/80.c2994257.js",
    "revision": "d9cd7cfd20719994a7fd7c2e32e16323"
  },
  {
    "url": "assets/js/81.c80740d7.js",
    "revision": "8a2fa0bf57d9a3959855d4312b3b4c03"
  },
  {
    "url": "assets/js/82.59da23d0.js",
    "revision": "79436165d3c0f41ac93cbebce1fa7ab9"
  },
  {
    "url": "assets/js/83.bba7d2f0.js",
    "revision": "3361901142e398de76d901cca7506884"
  },
  {
    "url": "assets/js/84.10ad5c5f.js",
    "revision": "838e974dfadf731156344368b23b6bc3"
  },
  {
    "url": "assets/js/85.346a3ae3.js",
    "revision": "a523986e9173927d68c22da9b650a536"
  },
  {
    "url": "assets/js/86.6824a14c.js",
    "revision": "f4eef3334d4a2a0fc7774b10e9bf8109"
  },
  {
    "url": "assets/js/87.8fc11250.js",
    "revision": "9fc4bf7bc3cfb9a8dc9435fbc9c37d47"
  },
  {
    "url": "assets/js/88.b2f3263b.js",
    "revision": "c8a3be113d016529a14a814df2e6ed05"
  },
  {
    "url": "assets/js/89.4657c5f1.js",
    "revision": "66990a0a6206708dd34de0d0ea64c1ba"
  },
  {
    "url": "assets/js/9.a1c72a9a.js",
    "revision": "0103ef37aad1293d8f27977724aa0174"
  },
  {
    "url": "assets/js/90.334dfc4a.js",
    "revision": "528c129fbec2ac236219bb187350dd7d"
  },
  {
    "url": "assets/js/91.92a2d23c.js",
    "revision": "1df0c04fdb87c1fc5d019e4a38ddf931"
  },
  {
    "url": "assets/js/92.9d4b5ed2.js",
    "revision": "5253b723b9ba20a3a2a301cd2945f5d2"
  },
  {
    "url": "assets/js/93.6eca5cdc.js",
    "revision": "c65f6774f4f7deed60623e68c804948c"
  },
  {
    "url": "assets/js/94.ba16b7e3.js",
    "revision": "a8299d922ea2d5f62c484382b7fb0018"
  },
  {
    "url": "assets/js/95.a5fd6213.js",
    "revision": "a4c03f015c062cc20a81af4d31c8edc3"
  },
  {
    "url": "assets/js/96.644cd2a9.js",
    "revision": "9a4351d22e72e607f9c750dbfa6abff0"
  },
  {
    "url": "assets/js/97.2b99981c.js",
    "revision": "ae95b4453a1622b22e39518f2900c0d5"
  },
  {
    "url": "assets/js/98.651ed909.js",
    "revision": "848fd60074d8c4dc93ea30816b82bbbc"
  },
  {
    "url": "assets/js/99.6cfa4e4c.js",
    "revision": "1b20a95fbe2d8c22736ee2dd131366d4"
  },
  {
    "url": "components/basic/alert.html",
    "revision": "6aaece201c4f9a873143b4ff969854b6"
  },
  {
    "url": "components/basic/button.html",
    "revision": "ff5c004e1363712326a2ea5e7d7b3db7"
  },
  {
    "url": "components/basic/download.html",
    "revision": "83a2055e43ab4c41e697d1b957790905"
  },
  {
    "url": "components/basic/icon.html",
    "revision": "ad92f427f7467bb14edca49b283f9bcc"
  },
  {
    "url": "components/basic/img.html",
    "revision": "f46c45a4b0c7f1f69051b146b0d7c60c"
  },
  {
    "url": "components/basic/link.html",
    "revision": "4b808c430f3d4b161410272d0ec4ba2e"
  },
  {
    "url": "components/basic/placeholder.html",
    "revision": "1cc02fdfe18de04d1b22c5ac3b3ae167"
  },
  {
    "url": "components/basic/text.html",
    "revision": "17369b2ca50e43509a23375f1ae6dee2"
  },
  {
    "url": "components/basic/upload.html",
    "revision": "c7e47e5c996e3908ea3624490faceb39"
  },
  {
    "url": "components/container/collapse.html",
    "revision": "d45a0636960bc0c487a3a9f692f2799b"
  },
  {
    "url": "components/container/container.html",
    "revision": "99e9d81d39aa499f74f493e9855e2713"
  },
  {
    "url": "components/container/dialog.html",
    "revision": "5e7ae621f245a396087512a4d1e46b16"
  },
  {
    "url": "components/container/drawer.html",
    "revision": "39c5521b0ca39c2b0332f8c4b67334e1"
  },
  {
    "url": "components/container/flex-container.html",
    "revision": "5ee36c1bdc7dbdcce0d0163baed88d7b"
  },
  {
    "url": "components/container/list.html",
    "revision": "780015b744f6adb4e1c5f2542bab0d28"
  },
  {
    "url": "components/container/page.html",
    "revision": "ac5714a0355bf37c886d4e400126e213"
  },
  {
    "url": "components/container/panel.html",
    "revision": "bb5879be2e6a0391874c8b47fad14d89"
  },
  {
    "url": "components/container/search-bar.html",
    "revision": "cdbc551993d90bba160c77479d400a33"
  },
  {
    "url": "components/container/tab.html",
    "revision": "172265bc37ec2230e9c185cd4602427f"
  },
  {
    "url": "components/data/table.html",
    "revision": "b92b289ed5db8cca553f641dbaa3a402"
  },
  {
    "url": "components/data/tree.html",
    "revision": "5003f72bd04f9e31f66f6a213bef7bc9"
  },
  {
    "url": "components/form/checkbox.html",
    "revision": "1056b99e1552674bcf447c6687038a10"
  },
  {
    "url": "components/form/date-picker.html",
    "revision": "65cff916ff8e578d82aaf2b2b5f59b0c"
  },
  {
    "url": "components/form/form.html",
    "revision": "01ec0502eedb2608c013f271390e8d4c"
  },
  {
    "url": "components/form/hidden.html",
    "revision": "ac76ea59a84c6d92a713ea874409720e"
  },
  {
    "url": "components/form/input-number.html",
    "revision": "2db56b53f20c8ee1fdbf028488354c0b"
  },
  {
    "url": "components/form/input.html",
    "revision": "bc2806ced0b1e7eedee401dee7bfed6c"
  },
  {
    "url": "components/form/radio.html",
    "revision": "80337ce48b6c4b3f38b4322581abc3aa"
  },
  {
    "url": "components/form/select.html",
    "revision": "baf373bf5b5fc123040c41dc8c2cacbf"
  },
  {
    "url": "components/form/switch.html",
    "revision": "dee4247f7b9807cb8bbe20c5ff24d789"
  },
  {
    "url": "components/form/text.html",
    "revision": "ef4db4359dd925d3409144ea8eb2e81a"
  },
  {
    "url": "components/form/time-picker.html",
    "revision": "be7bd2d89b108ea528d49809095060a4"
  },
  {
    "url": "components/form/transfer-table.html",
    "revision": "49c4a9d8c32646dbaa452ff3b5c02d24"
  },
  {
    "url": "components/form/transfer.html",
    "revision": "625a85ff85a93e30b13a1d03c627d89b"
  },
  {
    "url": "components/leivii.html",
    "revision": "165d6dcd5e38dfee56cc61cf3ee52654"
  },
  {
    "url": "components/others/webview.html",
    "revision": "2bace773c5a50dd851ddb65819688687"
  },
  {
    "url": "design/datasource.html",
    "revision": "c6d8a3213f228321921e56f0b2b42b71"
  },
  {
    "url": "design/dsl.html",
    "revision": "595517edd91baaf4eab78777a4050270"
  },
  {
    "url": "design/editor.html",
    "revision": "03cf4634ed3c266bedae971679c0009e"
  },
  {
    "url": "design/expression.html",
    "revision": "4c2e67e501460a926a0e6b2e3eeedfc8"
  },
  {
    "url": "design/handler.html",
    "revision": "a29ff6a732304ba47f4c8a1735828c92"
  },
  {
    "url": "design/scf.html",
    "revision": "472b548749565a2102442e48d2578269"
  },
  {
    "url": "design/theme.html",
    "revision": "03b3d4872eec1aa595542171910a00d7"
  },
  {
    "url": "en/advanced/auth.html",
    "revision": "840e776a45df0307935d9cacbf1c5864"
  },
  {
    "url": "en/advanced/component.html",
    "revision": "282057170795fa7b13351ec196454581"
  },
  {
    "url": "en/advanced/doc.html",
    "revision": "cf259239bf7bd7f7c3e9509b64a7ef6a"
  },
  {
    "url": "en/advanced/plugin.html",
    "revision": "bdc52387e1595ccd9f9d685019c9a446"
  },
  {
    "url": "en/advanced/prop.html",
    "revision": "131275297504354f90a88ff5b654dca0"
  },
  {
    "url": "en/advanced/props.html",
    "revision": "df8bfb235b083e3386ac78a3e6739cac"
  },
  {
    "url": "en/advanced/sample/Card.html",
    "revision": "bf286a15e766e7c642d91b736695cf53"
  },
  {
    "url": "en/advanced/sample/ColorPicker.html",
    "revision": "02dce33f8042e83662ecf21647feae98"
  },
  {
    "url": "en/advanced/validator.html",
    "revision": "1570fe43469a5effcac4aeedc9ea9383"
  },
  {
    "url": "en/api.html",
    "revision": "e2da354b437bc04b9a29d0d98e0efd22"
  },
  {
    "url": "en/components/basic/alert.html",
    "revision": "d555d2d32dbc4a7c4d0b1ad44553ba46"
  },
  {
    "url": "en/components/basic/button.html",
    "revision": "8b90b1478b5d847afaebce876aea6487"
  },
  {
    "url": "en/components/basic/download.html",
    "revision": "da91418ca974e5ced7b03e9dd41f0cc4"
  },
  {
    "url": "en/components/basic/icon.html",
    "revision": "b1749fe29f562e22b6f598028ed18717"
  },
  {
    "url": "en/components/basic/img.html",
    "revision": "6b97c0a4e54d4c83b2d2fc252f289cd2"
  },
  {
    "url": "en/components/basic/link.html",
    "revision": "f754f72efdbc92500a1689b551e79d2e"
  },
  {
    "url": "en/components/basic/placeholder.html",
    "revision": "bb5d2c5ee8c04371bf99f89eba89db17"
  },
  {
    "url": "en/components/basic/text.html",
    "revision": "b6124917048a503278fa0bbb63f989f1"
  },
  {
    "url": "en/components/basic/upload.html",
    "revision": "9fc32fa0053f827387ef7721939612fe"
  },
  {
    "url": "en/components/container/collapse.html",
    "revision": "9f6a8303279212ab017adc6d1f998f0f"
  },
  {
    "url": "en/components/container/container.html",
    "revision": "80be7ede90914e2703735cf7d4786c7f"
  },
  {
    "url": "en/components/container/dialog.html",
    "revision": "579fe5853dad7488ca35d023db85303d"
  },
  {
    "url": "en/components/container/drawer.html",
    "revision": "951b4501c5965cfed8554beb62393977"
  },
  {
    "url": "en/components/container/flex-container.html",
    "revision": "f494c18547189cd817e218f58a3d02bb"
  },
  {
    "url": "en/components/container/list.html",
    "revision": "90587a090eefa4fb745cb3d53a3e3d1b"
  },
  {
    "url": "en/components/container/page.html",
    "revision": "aa7aa229f0c4e3dc5db7ae045ee0b04d"
  },
  {
    "url": "en/components/container/panel.html",
    "revision": "df07ee6584ea8fea2c4cf83fcc7b9304"
  },
  {
    "url": "en/components/container/search-bar.html",
    "revision": "4545e31f4c4736267b6b1cc568bc4d8b"
  },
  {
    "url": "en/components/container/tab.html",
    "revision": "d512f46c840ceabb8dce43b6b903a784"
  },
  {
    "url": "en/components/data/table.html",
    "revision": "4dc2f0774dc292e672a481398a3af912"
  },
  {
    "url": "en/components/data/tree.html",
    "revision": "b4df57c176da174052040a817088998d"
  },
  {
    "url": "en/components/form/checkbox.html",
    "revision": "5e8dcf1dfc57e282eb8ae1e8ae32d929"
  },
  {
    "url": "en/components/form/date-picker.html",
    "revision": "d821b762f11fdc9b43113153d9426a1f"
  },
  {
    "url": "en/components/form/form.html",
    "revision": "ea46b3643fb5deecf67bea788c299bc0"
  },
  {
    "url": "en/components/form/hidden.html",
    "revision": "f0221d5f185ed286a1ca1aed1bbd4717"
  },
  {
    "url": "en/components/form/input-number.html",
    "revision": "c29e92dd8ff5dbc5c1a6e4ff2470e76a"
  },
  {
    "url": "en/components/form/input.html",
    "revision": "8a8a1b4edf7654f96e83468cb29d1b4f"
  },
  {
    "url": "en/components/form/radio.html",
    "revision": "a64685c6daa3013e109050f5504c2a63"
  },
  {
    "url": "en/components/form/select.html",
    "revision": "67249ff587524bb2c7e39058c1af437a"
  },
  {
    "url": "en/components/form/switch.html",
    "revision": "801e9907a17968a29fb1f946601a3d01"
  },
  {
    "url": "en/components/form/text.html",
    "revision": "55d9f1888cb6a8e0a768472230e979b2"
  },
  {
    "url": "en/components/form/time-picker.html",
    "revision": "b84566bc22f0a79e94f77ee154f61247"
  },
  {
    "url": "en/components/form/transfer-table.html",
    "revision": "9dec0d541a505df944cc9dbaf6c42fc8"
  },
  {
    "url": "en/components/form/transfer.html",
    "revision": "a1796df1c68bbe3fa6aa520e0d0bfdf6"
  },
  {
    "url": "en/components/leivii.html",
    "revision": "0db67f5976f3c573c00190af9cd33289"
  },
  {
    "url": "en/components/others/webview.html",
    "revision": "071214265be3ab5309db7b00299053be"
  },
  {
    "url": "en/design/datasource.html",
    "revision": "4471769187a6f5f0e26282808fa8496e"
  },
  {
    "url": "en/design/dsl.html",
    "revision": "9bf636ccd12225ca2fbc0af588d7e672"
  },
  {
    "url": "en/design/editor.html",
    "revision": "c27c40d44229098053e67002f6eaf35b"
  },
  {
    "url": "en/design/expression.html",
    "revision": "5aa3e8a481a66ee385b941310d06eaa5"
  },
  {
    "url": "en/design/handler.html",
    "revision": "c98182f2b823835e292d3359291dc8a2"
  },
  {
    "url": "en/design/scf.html",
    "revision": "5b9dc10d38e521e3bc59e0eb85f414c0"
  },
  {
    "url": "en/design/theme.html",
    "revision": "888c050ae6c11ef647ad94284e999c09"
  },
  {
    "url": "en/index.html",
    "revision": "9989ab5d3ef9112f92e25c36f01d1066"
  },
  {
    "url": "en/install.html",
    "revision": "94320f80c1679096192cd09186ae1844"
  },
  {
    "url": "en/join.html",
    "revision": "01cdbdc365ba0be38ee6a5763226effa"
  },
  {
    "url": "en/playground.html",
    "revision": "65a3535362de3619df14760144335c0c"
  },
  {
    "url": "index.html",
    "revision": "f06e92d913500d53eb8e1ed0133e32e1"
  },
  {
    "url": "install.html",
    "revision": "6b8a1d4631846c77fd9187e916c8e529"
  },
  {
    "url": "join.html",
    "revision": "0aae1043d01e159b6c37b40f3fb376de"
  },
  {
    "url": "logo.png",
    "revision": "26adb829ec0df8e803d58adcd48d407b"
  },
  {
    "url": "playground.html",
    "revision": "0fa756d0dda2ff73879425e2a8e76eab"
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
