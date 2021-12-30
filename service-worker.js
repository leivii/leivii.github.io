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
    "revision": "f12492a1eabbfc64080a8ab6062b1ae9"
  },
  {
    "url": "advanced/auth.html",
    "revision": "39089954615e8faef427d3e5602fee78"
  },
  {
    "url": "advanced/component.html",
    "revision": "96f461d0ee99752be86a0266df8d10e2"
  },
  {
    "url": "advanced/doc.html",
    "revision": "2ca1e0a428e54fd20718487052fcacdd"
  },
  {
    "url": "advanced/plugin.html",
    "revision": "ab0026bff0d77497104dd663e7fa8fdc"
  },
  {
    "url": "advanced/prop.html",
    "revision": "ec7a9d8cd88d75113770989897a9945b"
  },
  {
    "url": "advanced/props.html",
    "revision": "f7911e9cae2fcee20d98f3e0f38567ef"
  },
  {
    "url": "advanced/sample/Card.html",
    "revision": "e2e430e841080fa3d96fdecc7beaa880"
  },
  {
    "url": "advanced/sample/ColorPicker.html",
    "revision": "9a9f5f6d0e86550022d467e07200ed29"
  },
  {
    "url": "advanced/validator.html",
    "revision": "2b50d12918e2f8789c07c21e64b56c4a"
  },
  {
    "url": "api.html",
    "revision": "3e7071f090844f577c159508c96fb623"
  },
  {
    "url": "assets/css/0.styles.55b65f2b.css",
    "revision": "d076421dc5397c1be8c35eaee4041142"
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
    "url": "assets/js/10.591dde2a.js",
    "revision": "5c5c338caa1f694e3930992eeb35df9a"
  },
  {
    "url": "assets/js/100.3459ffe6.js",
    "revision": "e1fc11362a69d06e0b6745a8fdf46dee"
  },
  {
    "url": "assets/js/101.bee916eb.js",
    "revision": "f2abfa92813df3c05ae936536d71693b"
  },
  {
    "url": "assets/js/102.5e8f931b.js",
    "revision": "9a32aa7d522fd852dbb5b8f755428b59"
  },
  {
    "url": "assets/js/103.e5063820.js",
    "revision": "80630ee207f80fea307ac0574b3450cd"
  },
  {
    "url": "assets/js/104.ef308751.js",
    "revision": "f7bb9d070b8424a1cfd198ce4fdadd83"
  },
  {
    "url": "assets/js/105.eddc5894.js",
    "revision": "c431781363934d02a9e052d13148374a"
  },
  {
    "url": "assets/js/106.500f227c.js",
    "revision": "021fd5e50d3a403287beb693e6e0a5ee"
  },
  {
    "url": "assets/js/107.0777661c.js",
    "revision": "e82c884164f3787209b0a1c68537d30a"
  },
  {
    "url": "assets/js/108.c825a658.js",
    "revision": "4acad10d391a6a87c443c8c26b931ff3"
  },
  {
    "url": "assets/js/109.695f029b.js",
    "revision": "24713a60c779796bdd18cd404e49e950"
  },
  {
    "url": "assets/js/11.ea7a0a59.js",
    "revision": "9041a0fc82b4a888e3ae1c8517bf2e48"
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
    "url": "assets/js/113.ad6a55cf.js",
    "revision": "0d39b8faa9a5b7fec16c054d4713f4db"
  },
  {
    "url": "assets/js/114.f92b065b.js",
    "revision": "cfa3ee61b6f88d729ec40c295fbfd0f4"
  },
  {
    "url": "assets/js/115.0ae95a97.js",
    "revision": "5a5bd447df6cec735bf5707cd9fc3250"
  },
  {
    "url": "assets/js/116.4037224e.js",
    "revision": "dc2a8731975991074bc5bc292fa123be"
  },
  {
    "url": "assets/js/117.c9402814.js",
    "revision": "d169bd422bc46ca014989a56c503d781"
  },
  {
    "url": "assets/js/118.892336df.js",
    "revision": "92be701f4ffa7f28b7d56a5743733208"
  },
  {
    "url": "assets/js/119.b1195ffa.js",
    "revision": "d50b3f8737e501d24bb31554223b2efd"
  },
  {
    "url": "assets/js/12.66422b01.js",
    "revision": "c9bbd86b296aba00169c1a740958c20d"
  },
  {
    "url": "assets/js/120.c9c1566b.js",
    "revision": "8cb7efef26a74fd08fc80d282706eecd"
  },
  {
    "url": "assets/js/121.1c4acd21.js",
    "revision": "92e06e9fd80b51a168a8d5f3f2f8288b"
  },
  {
    "url": "assets/js/122.e4242f6e.js",
    "revision": "b83ebd0c366f6d851216a11f29849394"
  },
  {
    "url": "assets/js/123.c703ae16.js",
    "revision": "acf5392074e2bbe2eb8464a711e1ff88"
  },
  {
    "url": "assets/js/124.5057b23c.js",
    "revision": "e139617c85880555cec10ab1848482c2"
  },
  {
    "url": "assets/js/125.cb552ecc.js",
    "revision": "68c8260c6323e67e103b6df8a31ba014"
  },
  {
    "url": "assets/js/13.0e52e5c6.js",
    "revision": "ef318196fce372d8cf86aaa3038c0ab8"
  },
  {
    "url": "assets/js/14.bf008c4f.js",
    "revision": "faf8f1f2ac7f49cf397da5359480870b"
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
    "url": "assets/js/22.f386eeb0.js",
    "revision": "6d936e3be5c235b31461212e9453cb58"
  },
  {
    "url": "assets/js/23.348ba670.js",
    "revision": "293b69032e978228a5a6c5e990946f8a"
  },
  {
    "url": "assets/js/24.c84895ad.js",
    "revision": "c97059022d1e4286c1a46564a5d5bf03"
  },
  {
    "url": "assets/js/25.f256d582.js",
    "revision": "e1e2fe34ca867bde772bf8c03ad3745f"
  },
  {
    "url": "assets/js/26.37f4a67a.js",
    "revision": "10051c0916c313592353eae1e27fc9df"
  },
  {
    "url": "assets/js/27.322ac85a.js",
    "revision": "c7f9fd20565faae74b4205ec1d9eef49"
  },
  {
    "url": "assets/js/28.4836960d.js",
    "revision": "f8a9ab3319236413fadcd34655ceeeb9"
  },
  {
    "url": "assets/js/29.cfd2afee.js",
    "revision": "837780c023e8bc72d5772e887d6dd31a"
  },
  {
    "url": "assets/js/30.e6f0098e.js",
    "revision": "24201e0b5ebb309e43efbb8aaa9ed8e7"
  },
  {
    "url": "assets/js/31.fe51e5f0.js",
    "revision": "1ec42d8fa0c875d7af1d3360fda79528"
  },
  {
    "url": "assets/js/32.d14c03c2.js",
    "revision": "500f76d8b6ad1bfa6aaaa82f36c40b3e"
  },
  {
    "url": "assets/js/33.0e88627a.js",
    "revision": "3aa3de29cc35b24c71bc744fb9ee654d"
  },
  {
    "url": "assets/js/34.0fb9b2ab.js",
    "revision": "cf22f1e42e95aef7d54adb2173784e25"
  },
  {
    "url": "assets/js/35.cbde822a.js",
    "revision": "420e2da17abe1f946ae28f2c06e56aa1"
  },
  {
    "url": "assets/js/36.bbe8dc19.js",
    "revision": "4ef4fc0191b74ed191929be2940cd23e"
  },
  {
    "url": "assets/js/37.7085b2c6.js",
    "revision": "df575f753c12fb5ec78861a60563ebeb"
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
    "url": "assets/js/42.7fe76864.js",
    "revision": "9c1b5bb16b0179fdf46a869de8085081"
  },
  {
    "url": "assets/js/43.c7d54412.js",
    "revision": "d80045b09783bfda27444603ae1f5dde"
  },
  {
    "url": "assets/js/44.03e068ff.js",
    "revision": "f2056129ada32134905af093640631e5"
  },
  {
    "url": "assets/js/45.e3054ae3.js",
    "revision": "b4b95234c4cc55f1c213f5e6c8f3ab7d"
  },
  {
    "url": "assets/js/46.c2210349.js",
    "revision": "ec2a3573e11728b8f232f4fc043c871b"
  },
  {
    "url": "assets/js/47.f1b92731.js",
    "revision": "c6ea9f2c05f6a896b63c9bdb02a6b8d9"
  },
  {
    "url": "assets/js/48.fff365fa.js",
    "revision": "9d7c045fb15dd4b922b53f82f4c1b2dc"
  },
  {
    "url": "assets/js/49.3651e226.js",
    "revision": "140b3d823e4d339432d503fd37391608"
  },
  {
    "url": "assets/js/5.63bcaefa.js",
    "revision": "5c0064c4df170a8aa70cdbb23b90f7e5"
  },
  {
    "url": "assets/js/50.b0b56c72.js",
    "revision": "f82c78ad8ea4b41da9896f74ec57b711"
  },
  {
    "url": "assets/js/51.9a4096df.js",
    "revision": "3097b7d9da796ecc7a95d3984ae44e0c"
  },
  {
    "url": "assets/js/52.c96e4489.js",
    "revision": "dcea1a257b9d5b478715ea50c0ca4f0c"
  },
  {
    "url": "assets/js/53.48b5733b.js",
    "revision": "4806bee82eae8f20ad8d548bac5cbaea"
  },
  {
    "url": "assets/js/54.2eaabed3.js",
    "revision": "972398bd61ae37bab8b893da2cd7d04a"
  },
  {
    "url": "assets/js/55.91914ae1.js",
    "revision": "d8c65ddf08a209fdfd56bfdf5de128f9"
  },
  {
    "url": "assets/js/56.ca3cea39.js",
    "revision": "435ccbc723a1228c22e081e69b6e2f8b"
  },
  {
    "url": "assets/js/57.8b52c2b6.js",
    "revision": "c5be16a9e98bb2040351d7dbab53d9d1"
  },
  {
    "url": "assets/js/58.804c37a8.js",
    "revision": "f49446511df999af174e7e908c939616"
  },
  {
    "url": "assets/js/59.7d5f04e7.js",
    "revision": "339700c329fb9b7add6d3e6133b63107"
  },
  {
    "url": "assets/js/6.f49d794e.js",
    "revision": "d251983c825802f81fae2c5111a57738"
  },
  {
    "url": "assets/js/60.68cfe9d0.js",
    "revision": "145ffbc9dc73f5d1e9d22c8fd8ecd5d4"
  },
  {
    "url": "assets/js/61.cbb1db4c.js",
    "revision": "2802c65bd7445075e6aa53065240005d"
  },
  {
    "url": "assets/js/62.b4e42ede.js",
    "revision": "3ee65fb9aa2a6aaf04afdbb2f0f91757"
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
    "url": "assets/js/65.0b7091cb.js",
    "revision": "63e454efc0a68d9e62fe8a1f5a3219bc"
  },
  {
    "url": "assets/js/66.9c951170.js",
    "revision": "9525118e256cbb9c848a232ae1e8cbb9"
  },
  {
    "url": "assets/js/67.d20c624d.js",
    "revision": "333b4a6fed1560c0aa60b5e4d3b031d0"
  },
  {
    "url": "assets/js/68.9d094bed.js",
    "revision": "1bb0fe335093723a023073fb9a477956"
  },
  {
    "url": "assets/js/69.c2c53016.js",
    "revision": "811a3b9bef3ca15989f72d45b2577c2d"
  },
  {
    "url": "assets/js/7.ac604f6e.js",
    "revision": "8cf1544f9225c0e3aaebf50ec075547b"
  },
  {
    "url": "assets/js/70.12a7e71b.js",
    "revision": "800a2fae718c842dc4b21dee1eacd889"
  },
  {
    "url": "assets/js/71.92569a0a.js",
    "revision": "978d7c710efde4e2e7c9e0535c019272"
  },
  {
    "url": "assets/js/72.1d08743a.js",
    "revision": "cafad0b6984277cca6f28c2de8550d68"
  },
  {
    "url": "assets/js/73.307b5e39.js",
    "revision": "52a9b658669a79142c533581e42f6a35"
  },
  {
    "url": "assets/js/74.03808fe4.js",
    "revision": "a53116b3bded1832339d08d9ad2b39f1"
  },
  {
    "url": "assets/js/75.07fd6fd1.js",
    "revision": "0ac51ec09e56c8e25e9173b77e0c8aca"
  },
  {
    "url": "assets/js/76.9580e152.js",
    "revision": "a1de99319ba01bef4db08bdc6ff2a963"
  },
  {
    "url": "assets/js/77.e796996f.js",
    "revision": "4bcbc2ef7763233d000f0ae26b19fcc4"
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
    "url": "assets/js/8.b8cc2e30.js",
    "revision": "f0cad7353683f36aa11a634215e336d6"
  },
  {
    "url": "assets/js/80.7597800a.js",
    "revision": "de6237ad3c59a1d5702509e5e0d7673a"
  },
  {
    "url": "assets/js/81.6cce23b7.js",
    "revision": "46069c61cdee3d0647fa185344f0aa64"
  },
  {
    "url": "assets/js/82.1ceda064.js",
    "revision": "0882845f049b3e4ba63fdca9f04fed5f"
  },
  {
    "url": "assets/js/83.51edd9e6.js",
    "revision": "44d5b3257c93583a6297f60299e114da"
  },
  {
    "url": "assets/js/84.051d3873.js",
    "revision": "5f5bf72d096a813e3a3bb8bbd9d015f0"
  },
  {
    "url": "assets/js/85.346a3ae3.js",
    "revision": "a523986e9173927d68c22da9b650a536"
  },
  {
    "url": "assets/js/86.c4b9897e.js",
    "revision": "2ca403a33a29eb9421f8fea4cc8c487f"
  },
  {
    "url": "assets/js/87.2fca87df.js",
    "revision": "180044d3eac1d5f5a23faf0c6bbcc0dd"
  },
  {
    "url": "assets/js/88.4ef33f88.js",
    "revision": "95a36c41bec97c89256978eb0d9cb4dc"
  },
  {
    "url": "assets/js/89.4657c5f1.js",
    "revision": "66990a0a6206708dd34de0d0ea64c1ba"
  },
  {
    "url": "assets/js/9.7de0acce.js",
    "revision": "d99b04cf2aefa6db721b8b54dc43e369"
  },
  {
    "url": "assets/js/90.7fb7b6aa.js",
    "revision": "c13e7617c2a2da37b41a4dee688fbbb0"
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
    "url": "assets/js/94.3c5be8a3.js",
    "revision": "ef236feb7947e4963d1bbcfee9aa70bf"
  },
  {
    "url": "assets/js/95.20632b06.js",
    "revision": "d2f536f612316bc0060dbaf0171befef"
  },
  {
    "url": "assets/js/96.c1b73d05.js",
    "revision": "fdfd87b94e2b27ed64be67a1b5362e26"
  },
  {
    "url": "assets/js/97.47a183c3.js",
    "revision": "e52663a7abc05e50c299fe993c712046"
  },
  {
    "url": "assets/js/98.e565ba88.js",
    "revision": "ac97f611f17eb79b83ae907185e659e7"
  },
  {
    "url": "assets/js/99.a9c94640.js",
    "revision": "d67e438c306b38ae53b42d5e27d2bd45"
  },
  {
    "url": "components/basic/alert.html",
    "revision": "759bea4705317a031280cff6b450530e"
  },
  {
    "url": "components/basic/button.html",
    "revision": "0fc3687afc86e0c8cd4bf3fbb804c1e8"
  },
  {
    "url": "components/basic/download.html",
    "revision": "acdf6aa5cc92d1055217f7362e40acdc"
  },
  {
    "url": "components/basic/icon.html",
    "revision": "85bf30f61cc6241f7d3e69fca82353c8"
  },
  {
    "url": "components/basic/img.html",
    "revision": "343eef83be2a5c39656c3657be8568d9"
  },
  {
    "url": "components/basic/link.html",
    "revision": "dbc6ed040b68c212e6f59042dcefc2b4"
  },
  {
    "url": "components/basic/placeholder.html",
    "revision": "0aee48a3d042f9a8fc26f08e7a81c8a8"
  },
  {
    "url": "components/basic/text.html",
    "revision": "d5dade3acf635c7fb98f632de1a6bb71"
  },
  {
    "url": "components/basic/upload.html",
    "revision": "60b3c0155d2b6a6a87c8282d814e1507"
  },
  {
    "url": "components/container/collapse.html",
    "revision": "ba91d55c707f37a8546c714fe3671626"
  },
  {
    "url": "components/container/container.html",
    "revision": "190dd030992f8c694c2ebca0c2f4b15b"
  },
  {
    "url": "components/container/dialog.html",
    "revision": "1f174b3b7f493d51e3561de172fbf1b0"
  },
  {
    "url": "components/container/drawer.html",
    "revision": "cf5c9d915dee7f8b510522ad1fb17736"
  },
  {
    "url": "components/container/flex-container.html",
    "revision": "2d447be9665498d49ab3ba9c8b8e78e2"
  },
  {
    "url": "components/container/list.html",
    "revision": "a66b6e8f615a17c24c7f5b02e2ca3568"
  },
  {
    "url": "components/container/page.html",
    "revision": "84f3c122255bd2d4d442f24110dc165c"
  },
  {
    "url": "components/container/panel.html",
    "revision": "250d88b6d90cce4513f8e739d9165418"
  },
  {
    "url": "components/container/search-bar.html",
    "revision": "ac4d0dcbf764b76b87e7424e0a466cc3"
  },
  {
    "url": "components/container/tab.html",
    "revision": "89ed92ea422b9fb63932c1d76968b1e6"
  },
  {
    "url": "components/data/table.html",
    "revision": "6e6e4d3cd19ba0d48300d73b74de17ff"
  },
  {
    "url": "components/data/tree.html",
    "revision": "03c6084de62464160b8625b543a3ba64"
  },
  {
    "url": "components/form/checkbox.html",
    "revision": "227ea2ef84af885cc0d787c47f0a85d2"
  },
  {
    "url": "components/form/date-picker.html",
    "revision": "f71db593912343eb7affd339b0533ad9"
  },
  {
    "url": "components/form/form.html",
    "revision": "c8573b057e1b12f2050364a399b5c363"
  },
  {
    "url": "components/form/hidden.html",
    "revision": "4d409a46728e42b3f7ef5f9e83effae4"
  },
  {
    "url": "components/form/input-number.html",
    "revision": "334739e647f86794bbd172d504e34083"
  },
  {
    "url": "components/form/input.html",
    "revision": "4730f9d59ca0de080e700e559a19c2ee"
  },
  {
    "url": "components/form/radio.html",
    "revision": "2890e2b10b104208b7b4064d094813e3"
  },
  {
    "url": "components/form/select.html",
    "revision": "1abe919ee8b0ab26f15fba9abef17c7f"
  },
  {
    "url": "components/form/switch.html",
    "revision": "a66d0d86a6764d4f3d6ede768968e03f"
  },
  {
    "url": "components/form/text.html",
    "revision": "53fb6a1d6225d3b72399dc2de4029e6f"
  },
  {
    "url": "components/form/time-picker.html",
    "revision": "43248e6c757408061c7c80bebc476463"
  },
  {
    "url": "components/form/transfer-table.html",
    "revision": "a99adeb0a29dd209d07836ff6e5bae71"
  },
  {
    "url": "components/form/transfer.html",
    "revision": "374e43604ae5e92caba5b0aebce1d4ad"
  },
  {
    "url": "components/leivii.html",
    "revision": "43ceabf6f984c433bb7e5c9682d6ae30"
  },
  {
    "url": "components/others/webview.html",
    "revision": "9a3e2ee2eecc78ac6b3969c11e994e22"
  },
  {
    "url": "design/datasource.html",
    "revision": "229a53e8a0135195c3393bfef5ebbd25"
  },
  {
    "url": "design/dsl.html",
    "revision": "8fb703bcebe90db14522073b1e73ce67"
  },
  {
    "url": "design/editor.html",
    "revision": "c0e11a36bd96e98bb8f9074735c08177"
  },
  {
    "url": "design/expression.html",
    "revision": "2fa86a6c9b8e4ebfcf0feed5983f7a7c"
  },
  {
    "url": "design/handler.html",
    "revision": "546b143831b19c10020dcaaa42b5b340"
  },
  {
    "url": "design/scf.html",
    "revision": "e5db539ddc8a2eb0776497cc4d70bd06"
  },
  {
    "url": "design/theme.html",
    "revision": "8b2bc1051ffb94886c83dbf1969c89b4"
  },
  {
    "url": "en/advanced/auth.html",
    "revision": "44736241a70658af615be6aa8923d330"
  },
  {
    "url": "en/advanced/component.html",
    "revision": "4fdbd438c6e21e6e6002f7fb9980e5ab"
  },
  {
    "url": "en/advanced/doc.html",
    "revision": "5c894f12103a51f529157f2e108bf4f6"
  },
  {
    "url": "en/advanced/plugin.html",
    "revision": "84ea8e5815f79a8051438f30235a75b0"
  },
  {
    "url": "en/advanced/prop.html",
    "revision": "c42de7da95f1db36e49d874c938ee116"
  },
  {
    "url": "en/advanced/props.html",
    "revision": "e129e3698f78a3b91cc52e712f9e2bfe"
  },
  {
    "url": "en/advanced/sample/Card.html",
    "revision": "8fd029422e64037633afeb72b9d38696"
  },
  {
    "url": "en/advanced/sample/ColorPicker.html",
    "revision": "0ffa930592e38f4ae983b5316b78b45e"
  },
  {
    "url": "en/advanced/validator.html",
    "revision": "7da5e28d597736d9143286813a3f3151"
  },
  {
    "url": "en/api.html",
    "revision": "f78b4118897ac348a5640e80e66f59a6"
  },
  {
    "url": "en/components/basic/alert.html",
    "revision": "1e3f899576c23207a501d6f9f970f712"
  },
  {
    "url": "en/components/basic/button.html",
    "revision": "e17140b4b077cb80635c80ca11d7cde5"
  },
  {
    "url": "en/components/basic/download.html",
    "revision": "2bfe484d478d50347f261acb540a25ab"
  },
  {
    "url": "en/components/basic/icon.html",
    "revision": "5642f5582791b765d53bf944fa85591d"
  },
  {
    "url": "en/components/basic/img.html",
    "revision": "735909b07c96d24610b8ec3dc017ba37"
  },
  {
    "url": "en/components/basic/link.html",
    "revision": "261bdc2122b3f61f3045eb0f0774f5f5"
  },
  {
    "url": "en/components/basic/placeholder.html",
    "revision": "6bdcc536d4b7b4764ae2d636759aeea3"
  },
  {
    "url": "en/components/basic/text.html",
    "revision": "6a0f612a771fd8da03a5b263b24bbe6d"
  },
  {
    "url": "en/components/basic/upload.html",
    "revision": "cd96d7ee4d2cd8924f487d06be73d56e"
  },
  {
    "url": "en/components/container/collapse.html",
    "revision": "8ad498a34bf1980c78e8577e51351bee"
  },
  {
    "url": "en/components/container/container.html",
    "revision": "8aa4f3804dc7ac1919a1e0441c95ab92"
  },
  {
    "url": "en/components/container/dialog.html",
    "revision": "47cb183ae1c70f6b19aa2d8a18bf538e"
  },
  {
    "url": "en/components/container/drawer.html",
    "revision": "a4369e89ac4b8891340617d8da9bec99"
  },
  {
    "url": "en/components/container/flex-container.html",
    "revision": "eeb3ac7aebc8821fc63685657288a5a2"
  },
  {
    "url": "en/components/container/list.html",
    "revision": "aee90034142fc324e6519dbc834e87bb"
  },
  {
    "url": "en/components/container/page.html",
    "revision": "a5feab0c1aa2ae11949faf3b08e2b742"
  },
  {
    "url": "en/components/container/panel.html",
    "revision": "a69bd351f37f4eb29eedd18cf917fc13"
  },
  {
    "url": "en/components/container/search-bar.html",
    "revision": "f2f750480a7950738316406328c8a1b5"
  },
  {
    "url": "en/components/container/tab.html",
    "revision": "d95b3f00273dac2b640ffcc1cba139ce"
  },
  {
    "url": "en/components/data/table.html",
    "revision": "6288ba8546bdc3cc7b38d265740028d4"
  },
  {
    "url": "en/components/data/tree.html",
    "revision": "6aaeaa31dea97bd7ff0b0e27c9a5836d"
  },
  {
    "url": "en/components/form/checkbox.html",
    "revision": "14c952dbb2ac6255ccf1a44f4ac8d366"
  },
  {
    "url": "en/components/form/date-picker.html",
    "revision": "d135543ed23e91e6d286a4474e6ce72f"
  },
  {
    "url": "en/components/form/form.html",
    "revision": "20f8d271ba0ee511127030f6f7f22049"
  },
  {
    "url": "en/components/form/hidden.html",
    "revision": "f9fd3e3eea5ed236aaca3749454132be"
  },
  {
    "url": "en/components/form/input-number.html",
    "revision": "203240ed6d734d5a8e4c9e8e59ab89ee"
  },
  {
    "url": "en/components/form/input.html",
    "revision": "edde748c59df2d1736991fccd6e7581f"
  },
  {
    "url": "en/components/form/radio.html",
    "revision": "32f628375ef06978102f31e7530d9338"
  },
  {
    "url": "en/components/form/select.html",
    "revision": "3b58684b86146c6c81bb6a9515375b5d"
  },
  {
    "url": "en/components/form/switch.html",
    "revision": "1c03afbc99a5b5ae02a8e21037e04a2d"
  },
  {
    "url": "en/components/form/text.html",
    "revision": "c4f11c5c5937cd855532632a7479e11f"
  },
  {
    "url": "en/components/form/time-picker.html",
    "revision": "f5f500f4b7fffaae488d6122de975f11"
  },
  {
    "url": "en/components/form/transfer-table.html",
    "revision": "c4710503ec89dc3655fb35960a1a35af"
  },
  {
    "url": "en/components/form/transfer.html",
    "revision": "7a9ad16bb184a13428f87591715e637e"
  },
  {
    "url": "en/components/leivii.html",
    "revision": "d206a1a3721e7cb5424a350a5ac1b56c"
  },
  {
    "url": "en/components/others/webview.html",
    "revision": "33ec8af25e20d5e12f7143ea72997cee"
  },
  {
    "url": "en/design/datasource.html",
    "revision": "e3087431711d44bacaa3810e2291567c"
  },
  {
    "url": "en/design/dsl.html",
    "revision": "3b92043b1a4ea41b1b065426d3bf847a"
  },
  {
    "url": "en/design/editor.html",
    "revision": "d68c706f1a74afd3301396c441369298"
  },
  {
    "url": "en/design/expression.html",
    "revision": "e484080e318c916b46dcc4c412f97bc4"
  },
  {
    "url": "en/design/handler.html",
    "revision": "654e60452fed097f9eded2c16f7ee4a7"
  },
  {
    "url": "en/design/scf.html",
    "revision": "5880b19360058f43ab1dcf7d16001f12"
  },
  {
    "url": "en/design/theme.html",
    "revision": "26eda6a686c097603c27278f29f27beb"
  },
  {
    "url": "en/index.html",
    "revision": "b66c9f790194cc957e4a23109983b866"
  },
  {
    "url": "en/install.html",
    "revision": "e3d7aac1b1d08b3cb6eecde218ae1a34"
  },
  {
    "url": "en/join.html",
    "revision": "36fa4920590ab239b7fbbfab5e45eaad"
  },
  {
    "url": "en/playground.html",
    "revision": "625948105c856f51232f2d6a0cd3015a"
  },
  {
    "url": "index.html",
    "revision": "476ae23a31cf9ed57550654aed2548d4"
  },
  {
    "url": "install.html",
    "revision": "9a05ae8cfb587c6695fc8cad2a64bb7c"
  },
  {
    "url": "join.html",
    "revision": "67dc52bdae9f71e7147b8389f95f9227"
  },
  {
    "url": "logo.png",
    "revision": "26adb829ec0df8e803d58adcd48d407b"
  },
  {
    "url": "playground.html",
    "revision": "74cac62d344efdc6f5725d0fc89bd2d5"
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
