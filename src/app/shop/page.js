
// "use client";

// import { useState, useContext } from "react";
// import { Filter, Heart, ShoppingCart } from "lucide-react";
// import { CartContext } from "@/context/CartContext";
// import { WishlistContext } from "@/context/WishlistContext";

// const products = [
//   // Phones
//   { id: 0, name: "Samsung Galaxy S25", price: 999, image: "https://i0.wp.com/techwithmuchiri.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-23-at-9.38.02-AM.jpeg?resize=1600%2C1200&ssl=1", category: "phones" },
//   { id: 1, name: "iPhone 15 Pro", price: 1199, image: "https://512pixels.net/wp-content/uploads/2023/12/iphone-15-pro-max-natural.jpg", category: "phones" },
//   { id: 2, name: "Samsung Galaxy S23 Ultra", price: 1099, image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202302/3_0-three_four.jpg?VersionId=iMXm_2n2BSvSt858M4h7usiKbQ6o_2Yw", category: "phones" },
//   { id: 3, name: "Google Pixel 8 Pro", price: 999, image: "https://static1.pocketnowimages.com/wordpress/wp-content/uploads/wm/2023/10/pixel-8-pro-official-in-house-2-1.jpeg", category: "phones" },
//   { id: 4, name: "OnePlus 11", price: 799, image: "https://cdn.mos.cms.futurecdn.net/ZVzgmoLCTUAsMqLQCA3GCb.jpg", category: "phones" },
//   { id: 5, name: "Xiaomi 13 Pro", price: 899, image: "https://i.blogs.es/2da12d/img_1286/1366_2000.jpg", category: "phones" },
//   { id: 6, name: "Nothing Phone 2", price: 699, image: "https://s.yimg.com/ny/api/res/1.2/GnFFV_Ds5Q7rx.I8SIWLEw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTI0MDA7aD0xNDQw/https://s.yimg.com/os/creatr-uploaded-images/2023-07/ebf45430-263e-11ee-b9bd-70f7acf0f838", category: "phones" },
//   { id: 7, name: "Sony Xperia 1 V", price: 1199, image: "https://cdn.mos.cms.futurecdn.net/qNNP8Jtzx2Fe8x7hnwjniA.jpg", category: "phones" },
//   { id: 8, name: "Asus ROG Phone 7", price: 999, image: "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/04/asus-rog-phone-7-review-rear-standing.jpg", category: "phones" },
//   { id: 9, name: "Oppo Find X6 Pro", price: 949, image: "https://www.stuff.tv/wp-content/uploads/sites/2/2023/03/Oppo-Find-X6-Pro-lead.jpg", category: "phones" },
//   { id: 10, name: "Huawei P60 Pro", price: 899, image: "https://imageio.forbes.com/specials-images/imageserve/64df9b99e173ec9b8ec712f6/F3v2JGdbsAA656B/1960x0.jpg?height=533&width=711&fit=bounds", category: "phones" },
//   { id: 61, name: "iPhone 16", price: 1899, image: "https://hips.hearstapps.com/hmg-prod/images/iphone-16-review-lead-6724ffef2985f.jpg", category: "phones" },

//   // Laptops
//   { id: 11, name: "MacBook Air M2", price: 1299, image: "https://root-nation.com/wp-content/uploads/2023/08/6efd6ab0-e5d1-11ec-be6c-b2fe04160b9a.cf_.jpg", category: "laptops" },
//   { id: 12, name: "MacBook Pro 14 M3", price: 1999, image: "https://www.notebookcheck.net/fileadmin/Notebooks/Apple/MacBook_Pro_14_2023_M3_Max/IMG_1008.JPG", category: "laptops" },
//   { id: 13, name: "Dell XPS 13", price: 1399, image: "https://www.stuff.tv/wp-content/uploads/sites/2/2022/08/Dell-XPS-13-Plus-review-lead.jpg?w=1080", category: "laptops" },
//   { id: 14, name: "HP Spectre x360", price: 1249, image: "https://cdn.mos.cms.futurecdn.net/mAmV4LCBhaFtA2jSjKmu39.jpg", category: "laptops" },
//   { id: 15, name: "Asus Zenbook Pro", price: 1599, image: "https://www.clove.co.uk/cdn/shop/files/5d6475fb112f7ebd5fdea213dcbdb363_2048x.jpg?v=1721732595", category: "laptops" },
//   { id: 16, name: "Lenovo ThinkPad X1", price: 1799, image: "https://shopinverse.com/cdn/shop/files/20B992D1-3A52-40B7-898E-D8D775822230.jpg?v=1752053242", category: "laptops" },
//   { id: 17, name: "Microsoft Surface Laptop 5", price: 1299, image: "https://www.cnet.com/a/img/resize/368e35e3d85ca7b670cc31ea77e2c59e4ab11735/hub/2022/10/12/72774e72-5884-4043-8767-29d09023d260/microsoft-surface-fall-2022-2460.jpg?auto=webp&fit=crop&height=675&width=1200", category: "laptops" },
//   { id: 18, name: "Razer Blade 15", price: 2299, image: "https://sm.pcmag.com/pcmag_au/gallery/r/razer-blad/razer-blade-15-advanced-model-mid-2019-oled_z1mk.jpg", category: "laptops" },
//   { id: 19, name: "Acer Swift X", price: 1199, image: "https://sm.mashable.com/mashable_sea/review/a/acer-swift/acer-swift-x-14-2024-review_b2aw.jpg", category: "laptops" },
//   { id: 20, name: "MSI Stealth 16", price: 1999, image: "https://cdn.mos.cms.futurecdn.net/DJbkE7dDBZeK6Ct4AnFWaK.jpg", category: "laptops" },

//   // Consoles
//   { id: 21, name: "PlayStation 5", price: 499, image: "https://sm.pcmag.com/t/pcmag_me/review/s/sony-plays/sony-playstation-5-pro_rvpq.1920.jpg", category: "consoles" },
//   { id: 22, name: "Xbox Series X", price: 499, image: "https://cdn.mos.cms.futurecdn.net/iJMFE69y8bVeKDsdZDJHG6.jpg", category: "consoles" },
//   { id: 23, name: "Nintendo Switch OLED", price: 349, image: "https://sm.ign.com/t/ign_nordic/deal/w/woot-has-a/woot-has-a-nintendo-switch-oled-new-us-model-with-1-year-war_w1s1.1280.jpg", category: "consoles" },
//   { id: 24, name: "Steam Deck", price: 399, image: "https://www.cnet.com/a/img/resize/38ebb2ead8d5bdbff67f9a7892069e3da045a36a/hub/2022/02/21/72eeb045-0eb1-4b76-b942-3f9e2a4c8eda/steam-deck-main.jpg?auto=webp&fit=crop&height=900&width=1200", category: "consoles" },
//   { id: 25, name: "Asus ROG Ally", price: 699, image: "https://cdn.mos.cms.futurecdn.net/YTQgkcToCsdqkeSvJT3oog.jpg", category: "consoles" },
//   { id: 26, name: "Meta Quest 3", price: 499, image: "https://cdn.shopify.com/s/files/1/0665/3342/5446/files/XRCarlos-Quest-3-Lite.webp?v=1717163828", category: "consoles" },
//   { id: 27, name: "PlayStation VR2", price: 549, image: "https://www.digitaltrends.com/wp-content/uploads/2023/02/playstation-vr2-with-sense-controllers.jpg?fit=2729%2C1536&p=1", category: "consoles" },
//   { id: 28, name: "Atari VCS", price: 299, image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Atari_Vcs_Oynx.jpg", category: "consoles" },
//   { id: 29, name: "Analogue Pocket", price: 219, image: "https://imgix.bustle.com/uploads/image/2022/1/27/7d27af14-d4c8-4d76-a0cc-6f8bac782da3-analogue-pocket-review-1.jpg?w=400&h=460&fit=crop&crop=faces&dpr=2", category: "consoles" },
//   { id: 30, name: "Evercade EXP", price: 179, image: "https://cdn.mos.cms.futurecdn.net/48iKf277PSUoZyrpk4s99B-1200-80.jpg", category: "consoles" },

//   // Audio
//   { id: 31, name: "Sony WH-1000XM5", price: 349, image: "https://headphonesaddict.com/wp-content/uploads/2023/09/Sony-WH-1000XM5-in-a-table.jpg", category: "audio" },
//   { id: 32, name: "Bose 700", price: 379, image: "https://www.techhive.com/wp-content/uploads/2023/04/bose-700-1a-100806774-orig.jpg?quality=50&strip=all", category: "audio" },
//   { id: 33, name: "AirPods Pro 2", price: 249, image: "https://affordablephonesng.com/wp-content/uploads/2023/02/airpods-pro-2022.webp", category: "audio" },
//   { id: 34, name: "Beats Studio Pro", price: 349, image: "https://www.techadvisor.com/wp-content/uploads/2024/03/Beats-Studio-Pro-review_2.jpg?quality=50&strip=all", category: "audio" },
//   { id: 35, name: "Sennheiser Momentum 4", price: 399, image: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/hermano/verge/product/image/9938/DSCF8639-2.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400", category: "audio" },
//   { id: 36, name: "JBL Live Pro 2", price: 149, image: "https://cdn.mos.cms.futurecdn.net/8mMrio235yNxWxt9DcRWPh.jpg", category: "audio" },
//   { id: 37, name: "Marshall Major IV", price: 149, image: "https://cdn.renderhub.com/cactus3d/marshall-major-iv-bluetooth-headphones/marshall-major-iv-bluetooth-headphones-01.jpg", category: "audio" },
//   { id: 38, name: "Anker Soundcore Liberty 4", price: 129, image: "https://images.bauerhosting.com/affiliates/sites/8/2023/07/Soundcore-Liberty-4-NC-review.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80", category: "audio" },
//   { id: 39, name: "Shure Aonic 50", price: 399, image: "https://i.rtings.com/assets/products/SFWwX90k/shure-aonic-50-gen-2-wireless/design-medium.jpg?format=auto", category: "audio" },
//   { id: 40, name: "Bang & Olufsen H95", price: 899, image: "https://i.rtings.com/assets/products/8TYuoijB/bang-olufsen-beoplay-h95-wireless/design-medium.jpg?format=auto", category: "audio" },

//   // Wearables
//   { id: 41, name: "Apple Watch Ultra 2", price: 799, image: "https://photos5.appleinsider.com/gallery/61633-127601-Apple-Watch-Ultra-with-Strap-on-Couch-xl.jpg", category: "wearables" },
//   { id: 42, name: "Samsung Galaxy Watch 6", price: 399, image: "https://img.global.news.samsung.com/global/wp-content/uploads/2023/07/UNPK_Watch6-PR_main1.jpg", category: "wearables" },
//   { id: 43, name: "Google Pixel Watch 2", price: 349, image: "https://i.guim.co.uk/img/media/7fc6df63867812d665f164cdda36d7adbd3386a9/164_441_4957_2974/master/4957.jpg?width=700&quality=85&auto=format&fit=max&s=490903dc5a1ee621a329bd3c4277ede1", category: "wearables" },
//   { id: 44, name: "Fitbit Sense 2", price: 299, image: "https://www.techadvisor.com/wp-content/uploads/2022/10/Fitbit-Sense-2_review_12.jpg?quality=50&strip=all", category: "wearables" },
//   { id: 45, name: "Garmin Epix Pro", price: 899, image: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/hermano/verge/product/image/10135/236704_Garmin_Epix_2_pro_VSong_0008.jpg?quality=90&strip=all&crop=0,0,100,100", category: "wearables" },
//   { id: 46, name: "Huawei Watch GT 4", price: 249, image: "https://imageio.forbes.com/specials-images/imageserve/6522db321e891b7d6de0b9f0/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds", category: "wearables" },
//   { id: 47, name: "Withings ScanWatch 2", price: 349, image: "https://assets.techniknews.net/wp-content/uploads/2023/09/withings-scanwatch-2-light-ifa-2023-scaled.jpg", category: "wearables" },
//   { id: 48, name: "Amazfit T-Rex Ultra", price: 399, image: "https://i.blogs.es/a7bfc0/img_1747-mejorado-nr-en-tamano-grande/1366_2000.jpeg", category: "wearables" },
//   { id: 49, name: "Polar Vantage V3", price: 599, image: "https://media.dcrainmaker.com/images/2023/10/P1099764.jpg", category: "wearables" },
//   { id: 50, name: "Suunto Vertical", price: 599, image: "https://www.switchbacktravel.com/sites/default/files/articles%20/Watch%20home%20screen%202%20%28Suunto%20Vertical%20Titanium%20Solar%29%20m.jpg", category: "wearables" },

//   // Accessories
//   { id: 51, name: "Apple AirTag (4 pack)", price: 99, image: "https://5.imimg.com/data5/SELLER/Default/2023/4/301444015/LB/DB/CK/184984620/img-9939-500x500.jpg", category: "accessories" },
//   { id: 52, name: "Anker PowerCore 20K", price: 59, image: "https://m.media-amazon.com/images/I/61KvyW9lvsL._UF1000,1000_QL80_.jpg", category: "accessories" },
//   { id: 53, name: "Belkin MagSafe Charger", price: 39, image: "https://www.belkin.com/dw/image/v2/BGBH_PRD/on/demandware.static/-/Sites-master-product-catalog-blk/default/dwcdd3e360/images/hi-res/5/5ad65261f4c8bde3_WIZ017myBK-MagSafe-BoostChargePro-3in1WirelessChargeDock-webgg-hero-01__lz__en_GB.jpg?sfrm=png", category: "accessories" },
//   { id: 54, name: "Logitech MX Master 3S", price: 99, image: "https://geekculture.co/wp-content/uploads/2022/06/geek-review-logitech-master-mx-3s.jpg", category: "accessories" },
//   { id: 55, name: "Keychron K8 Pro Keyboard", price: 89, image: "https://i.ytimg.com/vi/giCppUqr4J0/maxresdefault.jpg", category: "accessories" },
//   { id: 56, name: "Samsung T7 SSD 1TB", price: 119, image: "https://sm.pcmag.com/pcmag_au/review/s/samsung-po/samsung-portable-ssd-t7_pazq.jpg", category: "accessories" },
//   { id: 57, name: "Elgato Stream Deck", price: 149, image: "https://static1.pocketlintimages.com/wordpress/wp-content/uploads/163421-gadgets-news-elgato-stream-deck-plus-image1-tqwtn6no1e.jpg", category: "accessories" },
//   { id: 58, name: "Sony DualSense Controller", price: 69, image: "https://www.pcworld.com/wp-content/uploads/2025/04/DualSense-1.jpg?quality=50&strip=all", category: "accessories" },
//   { id: 59, name: "Oculus Elite Strap", price: 119, image: "https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2020/10/quest-2-elite-strap-with-battery-1.jpg", category: "accessories" },
//   { id: 60, name: "Nanoleaf Light Panels", price: 199, image: "https://ca-cdn.nanoleaf.me/assets/img/products/canvas/owl/smk/9pk/1-nanoleaf-canvas-rbg-gaming-smart-lighting-entertainment-living-room@1x.jpg", category: "accessories" },
//   { id: 62, name: "4K Drone", price: 99, image: "https://cdn.mos.cms.futurecdn.net/8vDseDCiBscAtPwCnQNjrf.jpg", category: "accessories" },
//   { id: 63, name: "Smart Home Hub", price: 299, image: "https://www.cnet.com/a/img/resize/f5a9d3d0bde4745d6f6d50559a6d6f5ab74aabaa/hub/2020/10/21/0608c58e-c3c8-4e25-85b9-9d155c0c56e2/amazon-echo-2020-2.jpg?auto=webp&fit=crop&height=675&width=1200", category: "accessories" }
// ];

// const categories = ["phones", "laptops", "consoles", "audio", "wearables", "accessories"];

// export default function ShopPage() {
//   const [selected, setSelected] = useState("all");
//   const [showFilters, setShowFilters] = useState(false);

//   const { addToCart } = useContext(CartContext);
//   const { wishlist, toggleWishlist } = useContext(WishlistContext);

//   const filtered =
//     selected === "all" ? products : products.filter((p) => p.category === selected);

//   return (
//     <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 bg-white overflow-hidden">
//       <div className="flex gap-8">
//         {/* Sidebar for desktop */}
//         <aside className="hidden lg:block w-60 shrink-0 bg-white">
//           <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
//           <ul className="space-y-2">
//             <li>
//               <button
//                 onClick={() => setSelected("all")}
//                 className={`block w-full text-left px-3 py-2 rounded-xl text-sm ${
//                   selected === "all"
//                     ? "bg-blue-500 text-white"
//                     : "hover:bg-gray-100 text-gray-700"
//                 }`}
//               >
//                 All
//               </button>
//             </li>
//             {categories.map((cat) => (
//               <li key={cat}>
//                 <button
//                   onClick={() => setSelected(cat)}
//                   className={`block w-full text-left px-3 py-2 rounded-xl text-sm capitalize ${
//                     selected === cat
//                       ? "bg-blue-500 text-white"
//                       : "hover:bg-gray-100 text-gray-700"
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </aside>

//         {/* Products */}
//         <section className="flex-1">
//           <div className="flex items-center justify-between mb-6">
//             <h1 className="text-2xl font-bold tracking-tight text-gray-900">Shop</h1>
//             <button
//               onClick={() => setShowFilters(!showFilters)}
//               className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-xl border text-sm text-gray-700 hover:bg-gray-100 transition"
//             >
//               <Filter className="h-4 w-4" /> Filters
//             </button>
//           </div>

//           {showFilters && (
//             <div className="mb-6 lg:hidden transition-all duration-300 ease-out">
//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
//                 <button
//                   onClick={() => {
//                     setSelected("all");
//                     setShowFilters(false);
//                   }}
//                   className={`px-3 py-2 rounded-xl text-sm ${
//                     selected === "all"
//                       ? "bg-blue-500 text-white"
//                       : "hover:bg-gray-100 text-gray-700"
//                   }`}
//                 >
//                   All
//                 </button>
//                 {categories.map((cat) => (
//                   <button
//                     key={cat}
//                     onClick={() => {
//                       setSelected(cat);
//                       setShowFilters(false);
//                     }}
//                     className={`px-3 py-2 rounded-xl text-sm capitalize ${
//                       selected === cat
//                         ? "bg-blue-500 text-white"
//                         : "hover:bg-gray-100 text-gray-700"
//                     }`}
//                   >
//                     {cat}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {filtered.length === 0 ? (
//             <p className="text-gray-500">No products available.</p>
//           ) : (
//             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
//               {filtered.map((product) => {
//                 const inWishlist = wishlist.some((w) => w.id === product.id);
//                 return (
//                   <div
//                     key={product.id}
//                     className="rounded-2xl border bg-white p-4 hover:shadow-md transition group"
//                   >
//                     <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-gray-50">
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         className="w-full h-full object-cover group-hover:scale-105 transition"
//                       />
//                     </div>
//                     <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
//                     <p className="mt-1 text-sm font-semibold text-blue-500">${product.price}</p>

//                     <div className="flex items-center gap-2 mt-3">
//                       <button
//                         onClick={() => addToCart(product)}
//                         className="flex-1 px-3 py-2 rounded-xl bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition"
//                       >
//                         <ShoppingCart className="h-4 w-4 inline mr-1" />
//                         Add
//                       </button>
//                       <button
//                         onClick={() => toggleWishlist(product)}
//                         className={`p-2 rounded-xl border hover:bg-gray-100 ${
//                           inWishlist ? "bg-pink-100" : ""
//                         }`}
//                       >
//                         <Heart
//                           className={`h-4 w-4 ${
//                             inWishlist ? "text-pink-500" : "text-gray-500"
//                           }`}
//                         />
//                       </button>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </section>
//       </div>
//     </main>
//   );
// }



"use client";

import { useState, useContext } from "react";
import { Filter, Heart, ShoppingCart } from "lucide-react";
import { CartContext } from "@/context/CartContext";
import { WishlistContext } from "@/context/WishlistContext";
import Image from "next/image";

const categories = ["phones", "laptops", "consoles", "audio", "wearables", "accessories"];

const products = [
  // Phones
  { id: 0, name: "Samsung Galaxy S25", price: 1079, image: "https://i0.wp.com/techwithmuchiri.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-23-at-9.38.02-AM.jpeg?resize=1600%2C1200&ssl=1", category: "phones" },
  { id: 1, name: "iPhone 15 Pro", price: 749, image: "https://512pixels.net/wp-content/uploads/2023/12/iphone-15-pro-max-natural.jpg", category: "phones" },
  { id: 2, name: "Samsung Galaxy S23", price: 309, image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202302/3_0-three_four.jpg?VersionId=iMXm_2n2BSvSt858M4h7usiKbQ6o_2Yw", category: "phones" },
  { id: 3, name: "Google Pixel 8 Pro", price: 999, image: "https://static1.pocketnowimages.com/wordpress/wp-content/uploads/wm/2023/10/pixel-8-pro-official-in-house-2-1.jpeg", category: "phones" },
  { id: 4, name: "OnePlus 11", price: 799, image: "https://cdn.mos.cms.futurecdn.net/ZVzgmoLCTUAsMqLQCA3GCb.jpg", category: "phones" },
  { id: 5, name: "Xiaomi 13 Pro", price: 899, image: "https://i.blogs.es/2da12d/img_1286/1366_2000.jpg", category: "phones" },
  { id: 6, name: "Nothing Phone 2", price: 599, image: "https://s.yimg.com/ny/api/res/1.2/GnFFV_Ds5Q7rx.I8SIWLEw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTI0MDA7aD0xNDQw/https://s.yimg.com/os/creatr-uploaded-images/2023-07/ebf45430-263e-11ee-b9bd-70f7acf0f838", category: "phones" },
  { id: 7, name: "Sony Xperia 1 V", price: 1099, image: "https://cdn.mos.cms.futurecdn.net/qNNP8Jtzx2Fe8x7hnwjniA.jpg", category: "phones" },
  { id: 8, name: "Asus ROG Phone 7", price: 999, image: "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/04/asus-rog-phone-7-review-rear-standing.jpg", category: "phones" },
  { id: 9, name: "Oppo Find X6 Pro", price: 949, image: "https://www.stuff.tv/wp-content/uploads/sites/2/2023/03/Oppo-Find-X6-Pro-lead.jpg", category: "phones" },
  { id: 10, name: "Huawei P60 Pro", price: 899, image: "https://imageio.forbes.com/specials-images/imageserve/64df9b99e173ec9b8ec712f6/F3v2JGdbsAA656B/1960x0.jpg?height=533&width=711&fit=bounds", category: "phones" },
  { id: 61, name: "iPhone 16", price: 699, image: "https://hips.hearstapps.com/hmg-prod/images/iphone-16-review-lead-6724ffef2985f.jpg", category: "phones" },

  // Laptops
  { id: 11, name: "MacBook Air M2", price: 1299, image: "https://root-nation.com/wp-content/uploads/2023/08/6efd6ab0-e5d1-11ec-be6c-b2fe04160b9a.cf_.jpg", category: "laptops" },
  { id: 12, name: "MacBook Pro 14 M3", price: 1999, image: "https://www.notebookcheck.net/fileadmin/Notebooks/Apple/MacBook_Pro_14_2023_M3_Max/IMG_1008.JPG", category: "laptops" },
  { id: 13, name: "Dell XPS 13", price: 1399, image: "https://www.stuff.tv/wp-content/uploads/sites/2/2022/08/Dell-XPS-13-Plus-review-lead.jpg?w=1080", category: "laptops" },
  { id: 14, name: "HP Spectre x360", price: 1249, image: "https://cdn.mos.cms.futurecdn.net/mAmV4LCBhaFtA2jSjKmu39.jpg", category: "laptops" },
  { id: 15, name: "Asus Zenbook Pro", price: 1599, image: "https://www.clove.co.uk/cdn/shop/files/5d6475fb112f7ebd5fdea213dcbdb363_2048x.jpg?v=1721732595", category: "laptops" },
  { id: 16, name: "Lenovo ThinkPad X1", price: 1799, image: "https://shopinverse.com/cdn/shop/files/20B992D1-3A52-40B7-898E-D8D775822230.jpg?v=1752053242", category: "laptops" },
  { id: 17, name: "Microsoft Surface Laptop 5", price: 1299, image: "https://www.cnet.com/a/img/resize/368e35e3d85ca7b670cc31ea77e2c59e4ab11735/hub/2022/10/12/72774e72-5884-4043-8767-29d09023d260/microsoft-surface-fall-2022-2460.jpg?auto=webp&fit=crop&height=675&width=1200", category: "laptops" },
  { id: 18, name: "Razer Blade 15", price: 2299, image: "https://sm.pcmag.com/pcmag_au/gallery/r/razer-blad/razer-blade-15-advanced-model-mid-2019-oled_z1mk.jpg", category: "laptops" },
  { id: 19, name: "Acer Swift X", price: 1199, image: "https://sm.mashable.com/mashable_sea/review/a/acer-swift/acer-swift-x-14-2024-review_b2aw.jpg", category: "laptops" },
  { id: 20, name: "MSI Stealth 16", price: 1999, image: "https://cdn.mos.cms.futurecdn.net/DJbkE7dDBZeK6Ct4AnFWaK.jpg", category: "laptops" },

  // Consoles
  { id: 21, name: "PlayStation 5", price: 499, image: "https://sm.pcmag.com/t/pcmag_me/review/s/sony-plays/sony-playstation-5-pro_rvpq.1920.jpg", category: "consoles" },
  { id: 22, name: "Xbox Series X", price: 499, image: "https://cdn.mos.cms.futurecdn.net/iJMFE69y8bVeKDsdZDJHG6.jpg", category: "consoles" },
  { id: 23, name: "Nintendo Switch OLED", price: 349, image: "https://sm.ign.com/t/ign_nordic/deal/w/woot-has-a/woot-has-a-nintendo-switch-oled-new-us-model-with-1-year-war_w1s1.1280.jpg", category: "consoles" },
  { id: 24, name: "Steam Deck", price: 399, image: "https://www.cnet.com/a/img/resize/38ebb2ead8d5bdbff67f9a7892069e3da045a36a/hub/2022/02/21/72eeb045-0eb1-4b76-b942-3f9e2a4c8eda/steam-deck-main.jpg?auto=webp&fit=crop&height=900&width=1200", category: "consoles" },
  { id: 25, name: "Asus ROG Ally", price: 699, image: "https://cdn.mos.cms.futurecdn.net/YTQgkcToCsdqkeSvJT3oog.jpg", category: "consoles" },
  { id: 26, name: "Meta Quest 3", price: 499, image: "https://cdn.shopify.com/s/files/1/0665/3342/5446/files/XRCarlos-Quest-3-Lite.webp?v=1717163828", category: "consoles" },
  { id: 27, name: "PlayStation VR2", price: 549, image: "https://www.digitaltrends.com/wp-content/uploads/2023/02/playstation-vr2-with-sense-controllers.jpg?fit=2729%2C1536&p=1", category: "consoles" },
  { id: 28, name: "Atari VCS", price: 299, image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Atari_Vcs_Oynx.jpg", category: "consoles" },
  { id: 29, name: "Analogue Pocket", price: 219, image: "https://imgix.bustle.com/uploads/image/2022/1/27/7d27af14-d4c8-4d76-a0cc-6f8bac782da3-analogue-pocket-review-1.jpg?w=400&h=460&fit=crop&crop=faces&dpr=2", category: "consoles" },
  { id: 30, name: "Evercade EXP", price: 179, image: "https://cdn.mos.cms.futurecdn.net/48iKf277PSUoZyrpk4s99B-1200-80.jpg", category: "consoles" },

  // Audio
  { id: 31, name: "Sony WH-1000XM5", price: 349, image: "https://headphonesaddict.com/wp-content/uploads/2023/09/Sony-WH-1000XM5-in-a-table.jpg", category: "audio" },
  { id: 32, name: "Bose 700", price: 379, image: "https://www.techhive.com/wp-content/uploads/2023/04/bose-700-1a-100806774-orig.jpg?quality=50&strip=all", category: "audio" },
  { id: 33, name: "AirPods Pro 2", price: 249, image: "https://affordablephonesng.com/wp-content/uploads/2023/02/airpods-pro-2022.webp", category: "audio" },
  { id: 34, name: "Beats Studio Pro", price: 349, image: "https://www.techadvisor.com/wp-content/uploads/2024/03/Beats-Studio-Pro-review_2.jpg?quality=50&strip=all", category: "audio" },
  { id: 35, name: "Sennheiser Momentum 4", price: 399, image: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/hermano/verge/product/image/9938/DSCF8639-2.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=2400", category: "audio" },
  { id: 36, name: "JBL Live Pro 2", price: 149, image: "https://cdn.mos.cms.futurecdn.net/8mMrio235yNxWxt9DcRWPh.jpg", category: "audio" },
  { id: 37, name: "Marshall Major IV", price: 149, image: "https://cdn.renderhub.com/cactus3d/marshall-major-iv-bluetooth-headphones/marshall-major-iv-bluetooth-headphones-01.jpg", category: "audio" },
  { id: 38, name: "Anker Soundcore Liberty 4", price: 129, image: "https://images.bauerhosting.com/affiliates/sites/8/2023/07/Soundcore-Liberty-4-NC-review.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80", category: "audio" },
  { id: 39, name: "Shure Aonic 50", price: 399, image: "https://i.rtings.com/assets/products/SFWwX90k/shure-aonic-50-gen-2-wireless/design-medium.jpg?format=auto", category: "audio" },
  { id: 40, name: "Bang & Olufsen H95", price: 899, image: "https://i.rtings.com/assets/products/8TYuoijB/bang-olufsen-beoplay-h95-wireless/design-medium.jpg?format=auto", category: "audio" },

  // Wearables
  { id: 41, name: "Apple Watch Ultra 2", price: 799, image: "https://photos5.appleinsider.com/gallery/61633-127601-Apple-Watch-Ultra-with-Strap-on-Couch-xl.jpg", category: "wearables" },
  { id: 42, name: "Samsung Galaxy Watch 6", price: 399, image: "https://img.global.news.samsung.com/global/wp-content/uploads/2023/07/UNPK_Watch6-PR_main1.jpg", category: "wearables" },
  { id: 43, name: "Google Pixel Watch 2", price: 349, image: "https://i.guim.co.uk/img/media/7fc6df63867812d665f164cdda36d7adbd3386a9/164_441_4957_2974/master/4957.jpg?width=700&quality=85&auto=format&fit=max&s=490903dc5a1ee621a329bd3c4277ede1", category: "wearables" },
  { id: 44, name: "Fitbit Sense 2", price: 299, image: "https://www.techadvisor.com/wp-content/uploads/2022/10/Fitbit-Sense-2_review_12.jpg?quality=50&strip=all", category: "wearables" },
  { id: 45, name: "Garmin Epix Pro", price: 899, image: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/hermano/verge/product/image/10135/236704_Garmin_Epix_2_pro_VSong_0008.jpg?quality=90&strip=all&crop=0,0,100,100", category: "wearables" },
  { id: 46, name: "Huawei Watch GT 4", price: 249, image: "https://imageio.forbes.com/specials-images/imageserve/6522db321e891b7d6de0b9f0/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds", category: "wearables" },
  { id: 47, name: "Withings ScanWatch 2", price: 349, image: "https://assets.techniknews.net/wp-content/uploads/2023/09/withings-scanwatch-2-light-ifa-2023-scaled.jpg", category: "wearables" },
  { id: 48, name: "Amazfit T-Rex Ultra", price: 399, image: "https://i.blogs.es/a7bfc0/img_1747-mejorado-nr-en-tamano-grande/1366_2000.jpeg", category: "wearables" },
  { id: 49, name: "Polar Vantage V3", price: 599, image: "https://media.dcrainmaker.com/images/2023/10/P1099764.jpg", category: "wearables" },
  { id: 50, name: "Suunto Vertical", price: 599, image: "https://www.switchbacktravel.com/sites/default/files/articles%20/Watch%20home%20screen%202%20%28Suunto%20Vertical%20Titanium%20Solar%29%20m.jpg", category: "wearables" },

  // Accessories
  { id: 51, name: "Apple AirTag (4 pack)", price: 99, image: "https://5.imimg.com/data5/SELLER/Default/2023/4/301444015/LB/DB/CK/184984620/img-9939-500x500.jpg", category: "accessories" },
  { id: 52, name: "Anker PowerCore 20K", price: 59, image: "https://m.media-amazon.com/images/I/61KvyW9lvsL._UF1000,1000_QL80_.jpg", category: "accessories" },
  { id: 53, name: "Belkin MagSafe Charger", price: 39, image: "https://www.belkin.com/dw/image/v2/BGBH_PRD/on/demandware.static/-/Sites-master-product-catalog-blk/default/dwcdd3e360/images/hi-res/5/5ad65261f4c8bde3_WIZ017myBK-MagSafe-BoostChargePro-3in1WirelessChargeDock-webgg-hero-01__lz__en_GB.jpg?sfrm=png", category: "accessories" },
  { id: 54, name: "Logitech MX Master 3S", price: 99, image: "https://geekculture.co/wp-content/uploads/2022/06/geek-review-logitech-master-mx-3s.jpg", category: "accessories" },
  { id: 55, name: "Keychron K8 Pro Keyboard", price: 89, image: "https://i.ytimg.com/vi/giCppUqr4J0/maxresdefault.jpg", category: "accessories" },
  { id: 56, name: "Samsung T7 SSD 1TB", price: 119, image: "https://sm.pcmag.com/pcmag_au/review/s/samsung-po/samsung-portable-ssd-t7_pazq.jpg", category: "accessories" },
  { id: 57, name: "Elgato Stream Deck", price: 149, image: "https://static1.pocketlintimages.com/wordpress/wp-content/uploads/163421-gadgets-news-elgato-stream-deck-plus-image1-tqwtn6no1e.jpg", category: "accessories" },
  { id: 58, name: "Sony DualSense Controller", price: 69, image: "https://www.pcworld.com/wp-content/uploads/2025/04/DualSense-1.jpg?quality=50&strip=all", category: "accessories" },
  { id: 59, name: "Oculus Elite Strap", price: 119, image: "https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2020/10/quest-2-elite-strap-with-battery-1.jpg", category: "accessories" },
  { id: 60, name: "Nanoleaf Light Panels", price: 199, image: "https://ca-cdn.nanoleaf.me/assets/img/products/canvas/owl/smk/9pk/1-nanoleaf-canvas-rbg-gaming-smart-lighting-entertainment-living-room@1x.jpg", category: "accessories" },
  { id: 62, name: "4K Drone", price: 99, image: "https://cdn.mos.cms.futurecdn.net/8vDseDCiBscAtPwCnQNjrf.jpg", category: "accessories" },
  { id: 63, name: "Smart Home Hub", price: 299, image: "https://www.cnet.com/a/img/resize/f5a9d3d0bde4745d6f6d50559a6d6f5ab74aabaa/hub/2020/10/21/0608c58e-c3c8-4e25-85b9-9d155c0c56e2/amazon-echo-2020-2.jpg?auto=webp&fit=crop&height=675&width=1200", category: "accessories" }
];

export default function ShopPage() {
  const [selected, setSelected] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const { addToCart } = useContext(CartContext);
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  const filtered =
    selected === "all" ? products : products.filter((p) => p.category === selected);

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 bg-white overflow-hidden">
      <div className="flex gap-8">
        {/* Sidebar for desktop */}
        <aside className="hidden lg:block w-60 shrink-0 bg-white">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setSelected("all")}
                className={`block w-full text-left px-3 py-2 rounded-xl text-sm ${
                  selected === "all"
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                All
              </button>
            </li>
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setSelected(cat)}
                  className={`block w-full text-left px-3 py-2 rounded-xl text-sm capitalize ${
                    selected === cat
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Products */}
        <section className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Shop</h1>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-xl border text-sm text-gray-700 hover:bg-gray-100 transition"
            >
              <Filter className="h-4 w-4" /> Filters
            </button>
          </div>

          {showFilters && (
            <div className="mb-6 lg:hidden transition-all duration-300 ease-out">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <button
                  onClick={() => {
                    setSelected("all");
                    setShowFilters(false);
                  }}
                  className={`px-3 py-2 rounded-xl text-sm ${
                    selected === "all"
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelected(cat);
                      setShowFilters(false);
                    }}
                    className={`px-3 py-2 rounded-xl text-sm capitalize ${
                      selected === cat
                        ? "bg-blue-500 text-white"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}

          {filtered.length === 0 ? (
            <p className="text-gray-500">No products available.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {filtered.map((product) => {
                const inWishlist = wishlist.some((w) => w.id === product.id);
                return (
                  <div
                    key={product.id}
                    className="rounded-2xl border bg-white p-4 hover:shadow-md transition group"
                  >
                    <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-gray-50 relative">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition"
                      />
                    </div>
                    <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-blue-500">${product.price}</p>

                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() => addToCart(product)}
                        className="flex-1 px-3 py-2 rounded-xl bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition"
                      >
                        <ShoppingCart className="h-4 w-4 inline mr-1" />
                        Add
                      </button>
                      <button
                        onClick={() => toggleWishlist(product)}
                        className={`p-2 rounded-xl border hover:bg-gray-100 ${
                          inWishlist ? "bg-pink-100" : ""
                        }`}
                      >
                        <Heart
                          className={`h-4 w-4 ${
                            inWishlist ? "text-pink-500" : "text-gray-500"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
