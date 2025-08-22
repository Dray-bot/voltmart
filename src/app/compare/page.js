// "use client";
// import Image from "next/image";
// import { useCart } from "@/context/CartContext";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function ComparePage() {
//   const { addToCart } = useCart();
//   const [selected, setSelected] = useState([]);
//   const [showCompare, setShowCompare] = useState(false);

//   const products = [
//     // Phones
//     { id: 0, name: "Samsung Galaxy S25", price: 1079, ram: 12, storage: 512, battery: 5000, category: "phones", image: "https://i0.wp.com/techwithmuchiri.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-23-at-9.38.02-AM.jpeg?resize=1600%2C1200&ssl=1" },
//     { id: 1, name: "iPhone 15 Pro", price: 749, ram: 8, storage: 256, battery: 4300, category: "phones", image: "https://512pixels.net/wp-content/uploads/2023/12/iphone-15-pro-max-natural.jpg" },
//     { id: 2, name: "Google Pixel 8 Pro", price: 999, ram: 12, storage: 512, battery: 4600, category: "phones", image: "https://static1.pocketnowimages.com/wordpress/wp-content/uploads/wm/2023/10/pixel-8-pro-official-in-house-2-1.jpeg" },
//     // Laptops
//     { id: 11, name: "MacBook Air M2", price: 1299, ram: 8, storage: 256, category: "laptops", image: "https://root-nation.com/wp-content/uploads/2023/08/6efd6ab0-e5d1-11ec-be6c-b2fe04160b9a.cf_.jpg" },
//     { id: 12, name: "Dell XPS 13", price: 1399, ram: 16, storage: 512, category: "laptops", image: "https://www.stuff.tv/wp-content/uploads/sites/2/2022/08/Dell-XPS-13-Plus-review-lead.jpg?w=1080" },
//     // Consoles
//     { id: 21, name: "PlayStation 5", price: 499, performance: 9, storage: 825, category: "consoles", image: "https://sm.pcmag.com/t/pcmag_me/review/s/sony-plays/sony-playstation-5-pro_rvpq.1920.jpg" },
//     { id: 22, name: "Xbox Series X", price: 499, performance: 9, storage: 1000, category: "consoles", image: "https://cdn.mos.cms.futurecdn.net/iJMFE69y8bVeKDsdZDJHG6.jpg" },
//     // Audio
//     { id: 31, name: "Sony WH-1000XM5", price: 349, battery: 30, category: "audio", image: "https://headphonesaddict.com/wp-content/uploads/2023/09/Sony-WH-1000XM5-in-a-table.jpg" },
//     { id: 32, name: "Bose 700", price: 379, battery: 20, category: "audio", image: "https://www.techhive.com/wp-content/uploads/2023/04/bose-700-1a-100806774-orig.jpg?quality=50&strip=all" },
//     // Wearables
//     { id: 41, name: "Apple Watch Ultra 2", price: 799, battery: 36, category: "wearables", image: "https://photos5.appleinsider.com/gallery/61633-127601-Apple-Watch-Ultra-with-Strap-on-Couch-xl.jpg" },
//     { id: 42, name: "Samsung Galaxy Watch 6", price: 399, battery: 40, category: "wearables", image: "https://img.global.news.samsung.com/global/wp-content/uploads/2023/07/UNPK_Watch6-PR_main1.jpg" },
//     // Accessories
//     { id: 51, name: "Apple AirTag (4 pack)", price: 99, category: "accessories", image: "https://5.imimg.com/data5/SELLER/Default/2023/4/301444015/LB/DB/CK/184984620/img-9939-500x500.jpg" },
//     { id: 52, name: "Anker PowerCore 20K", price: 59, category: "accessories", image: "https://m.media-amazon.com/images/I/61KvyW9lvsL._UF1000,1000_QL80_.jpg" }
//   ];

//   const toggleSelect = (id) => {
//     const updated = selected.includes(id) ? selected.filter(x => x !== id) : [...selected, id];
//     setSelected(updated);
//     setShowCompare(updated.length > 1);
//   };

//   const selectedProducts = products.filter(p => selected.includes(p.id));

//   const highlightFeature = (feature) => {
//     const values = selectedProducts.map(p => parseInt(p[feature] || 0));
//     const max = Math.max(...values);
//     return selectedProducts.map(p => parseInt(p[feature] || 0) === max ? "bg-green-100 font-bold" : "");
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-4">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold mb-10 text-gray-900">Compare Gadgets</h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products.map(item => (
//             <motion.div key={item.id} layout className={`border rounded-xl shadow-md p-4 transition ${selected.includes(item.id) ? "border-green-500" : "border-gray-200"}`}>
//               <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-100">
//                 <Image src={item.image} alt={item.name} fill className="object-cover" />
//               </div>
//               <h2 className="text-xl font-semibold text-gray-900 mt-4">{item.name}</h2>
//               <p className="text-gray-700 font-bold mt-2">${item.price}</p>
//               <p className="text-gray-700 text-sm">{item.category}</p>

//               <div className="flex items-center justify-between mt-4">
//                 <button onClick={() => addToCart({ ...item, qty: 1 })} className="px-4 py-2 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800">Add to Cart</button>
//                 <button onClick={() => toggleSelect(item.id)} className={`px-3 py-1 rounded-lg font-medium ${selected.includes(item.id) ? "bg-gray-200 text-gray-900" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
//                   {selected.includes(item.id) ? "Selected" : "Compare"}
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <AnimatePresence>
//           {showCompare && (
//             <motion.div
//               initial={{ opacity: 0, y: -50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -50 }}
//               className="mt-6 bg-white p-6 rounded-xl shadow-lg border"
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-3xl font-bold text-gray-900">Comparison Table</h2>
//                 <button onClick={() => setShowCompare(false)} className="text-red-600 font-bold px-4 py-2 rounded-lg hover:bg-red-100">Close</button>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full border-collapse text-left table-auto">
//                   <thead className="bg-gray-100">
//                     <tr>
//                       <th className="border-b pb-3 px-4 text-gray-700 font-medium">Feature</th>
//                       {selectedProducts.map(g => <th key={g.id} className="border-b pb-3 px-4 text-gray-900">{g.name}</th>)}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {["price", "category", "ram", "storage", "battery", "performance"].map(feature => {
//                       const highlights = ["ram", "storage", "battery", "performance"].includes(feature) ? highlightFeature(feature) : [];
//                       return (
//                         <tr key={feature}>
//                           <td className="border-b py-2 px-4 font-semibold text-gray-700">{feature.toUpperCase()}</td>
//                           {selectedProducts.map((g, idx) => (
//                             <td key={g.id} className={`border-b py-2 px-4 ${highlights[idx] || ""}`}>
//                               {feature === "price" ? `$${g.price}` : g[feature] || "-"}
//                             </td>
//                           ))}
//                         </tr>
//                       );
//                     })}
//                   </tbody>
//                 </table>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }


"use client";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ComparePage() {
  const { addToCart } = useCart();
  const [selected, setSelected] = useState([]);
  const [showCompare, setShowCompare] = useState(false);
  const tableRef = useRef(null);
  const gridRef = useRef(null); // reference to product grid

    const products = [
    // Phones
    { id: 0, name: "Samsung Galaxy S25", price: 1079, ram: 12, storage: 512, battery: 5000, category: "phones", image: "https://i0.wp.com/techwithmuchiri.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-23-at-9.38.02-AM.jpeg?resize=1600%2C1200&ssl=1" },
    { id: 1, name: "iPhone 15 Pro", price: 749, ram: 8, storage: 256, battery: 4300, category: "phones", image: "https://512pixels.net/wp-content/uploads/2023/12/iphone-15-pro-max-natural.jpg" },
    { id: 2, name: "Google Pixel 8 Pro", price: 999, ram: 12, storage: 512, battery: 4600, category: "phones", image: "https://static1.pocketnowimages.com/wordpress/wp-content/uploads/wm/2023/10/pixel-8-pro-official-in-house-2-1.jpeg" },
    // Laptops
    { id: 11, name: "MacBook Air M2", price: 1299, ram: 8, storage: 256, category: "laptops", image: "https://root-nation.com/wp-content/uploads/2023/08/6efd6ab0-e5d1-11ec-be6c-b2fe04160b9a.cf_.jpg" },
    { id: 12, name: "Dell XPS 13", price: 1399, ram: 16, storage: 512, category: "laptops", image: "https://www.stuff.tv/wp-content/uploads/sites/2/2022/08/Dell-XPS-13-Plus-review-lead.jpg?w=1080" },
    // Consoles
    { id: 21, name: "PlayStation 5", price: 499, performance: 9, storage: 825, category: "consoles", image: "https://sm.pcmag.com/t/pcmag_me/review/s/sony-plays/sony-playstation-5-pro_rvpq.1920.jpg" },
    { id: 22, name: "Xbox Series X", price: 499, performance: 9, storage: 1000, category: "consoles", image: "https://cdn.mos.cms.futurecdn.net/iJMFE69y8bVeKDsdZDJHG6.jpg" },
    // Audio
    { id: 31, name: "Sony WH-1000XM5", price: 349, battery: 30, category: "audio", image: "https://headphonesaddict.com/wp-content/uploads/2023/09/Sony-WH-1000XM5-in-a-table.jpg" },
    { id: 32, name: "Bose 700", price: 379, battery: 20, category: "audio", image: "https://www.techhive.com/wp-content/uploads/2023/04/bose-700-1a-100806774-orig.jpg?quality=50&strip=all" },
    // Wearables
    { id: 41, name: "Apple Watch Ultra 2", price: 799, battery: 36, category: "wearables", image: "https://photos5.appleinsider.com/gallery/61633-127601-Apple-Watch-Ultra-with-Strap-on-Couch-xl.jpg" },
    { id: 42, name: "Samsung Galaxy Watch 6", price: 399, battery: 40, category: "wearables", image: "https://img.global.news.samsung.com/global/wp-content/uploads/2023/07/UNPK_Watch6-PR_main1.jpg" },
    // Accessories
    { id: 51, name: "Apple AirTag (4 pack)", price: 99, category: "accessories", image: "https://5.imimg.com/data5/SELLER/Default/2023/4/301444015/LB/DB/CK/184984620/img-9939-500x500.jpg" },
    { id: 52, name: "Anker PowerCore 20K", price: 59, category: "accessories", image: "https://m.media-amazon.com/images/I/61KvyW9lvsL._UF1000,1000_QL80_.jpg" }
  ];

  const toggleSelect = (id) => {
    const updated = selected.includes(id) ? selected.filter(x => x !== id) : [...selected, id];
    setSelected(updated);
    setShowCompare(updated.length > 1);
  };

  const selectedProducts = products.filter(p => selected.includes(p.id));

  const highlightFeature = (feature) => {
    const values = selectedProducts.map(p => {
      const val = p[feature];
      const strVal = typeof val === "string" ? val : String(val || "0");
      return parseInt(strVal.replace(/[^\d]/g, "")) || 0;
    });

    const max = Math.max(...values);

    return selectedProducts.map(p => {
      const val = p[feature];
      const strVal = typeof val === "string" ? val : String(val || "0");
      return parseInt(strVal.replace(/[^\d]/g, "")) === max ? "bg-green-100 font-bold" : "";
    });
  };

  // scroll to table when two products are selected
  useEffect(() => {
    if (showCompare && tableRef.current) {
      tableRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showCompare]);

  const handleCloseTable = () => {
    setShowCompare(false);
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto" ref={gridRef}>
        <h1 className="text-4xl font-bold mb-10 text-gray-900">Compare Gadgets</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(item => (
            <motion.div key={item.id} layout className={`border rounded-xl shadow-md p-4 transition ${selected.includes(item.id) ? "border-blue-600" : "border-gray-200"}`}>
              <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-100">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mt-4">{item.name}</h2>
              <p className="text-gray-700 font-bold mt-2">${item.price}</p>
              <p className="text-gray-500 text-sm">{item.category}</p>

              <div className="flex items-center justify-between mt-4">
                <button onClick={() => addToCart({ ...item, qty: 1 })} className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">Add to Cart</button>
                <button onClick={() => toggleSelect(item.id)} className={`px-3 py-1 rounded-lg font-medium ${selected.includes(item.id) ? "bg-blue-100 text-blue-700" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}>
                  {selected.includes(item.id) ? "Selected" : "Compare"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {showCompare && (
            <motion.div
              ref={tableRef}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="mt-6 bg-white p-6 rounded-xl shadow-lg border"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold text-gray-900">Comparison Table</h2>
                <button onClick={handleCloseTable} className="text-red-600 font-bold px-4 py-2 rounded-lg hover:bg-red-100">Close</button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-left table-auto">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border-b pb-3 px-4 text-gray-700 font-medium">Feature</th>
                      {selectedProducts.map(g => <th key={g.id} className="border-b pb-3 px-4 text-gray-900">{g.name}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {["price", "category", "ram", "storage", "battery"].map(feature => {
                      const highlights = feature === "ram" || feature === "storage" || feature === "battery" ? highlightFeature(feature) : [];
                      return (
                        <tr key={feature}>
                          <td className="border-b py-2 px-4 font-semibold text-gray-600">{feature.toUpperCase()}</td>
                          {selectedProducts.map((g, idx) => (
                            <td key={g.id} className={`border-b py-2 px-4 text-gray-600 ${highlights[idx] || ""}`}>
                              {feature === "price" ? `$${g.price}` : g[feature] || "-"}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
