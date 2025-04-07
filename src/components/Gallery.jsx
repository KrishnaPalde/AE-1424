// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

// const Gallery = () => {
//   const [selectedCategory, setSelectedCategory] = useState("all");

  
  // const galleryItems = [
  //   {
  //     id: 1,
  //     category: "workshops",
  //     title: "Web Development Workshop",
  //     date: "March 2024",
  //     image: "https://picsum.photos/200/300",
  //     description: "Students learning advanced web technologies",
  //   },
  //   {
  //     id: 2,
  //     category: "events",
  //     title: "Annual Tech Summit",
  //     date: "February 2024",
  //     image: "https://picsum.photos/200/300",
  //     description: "Industry experts sharing insights",
  //   },
  //   {
  //     id: 3,
  //     category: "students",
  //     title: "Graduation Ceremony",
  //     date: "January 2024",
  //     image: "https://picsum.photos/200/300",
  //     description: "Successful completion of advanced courses",
  //   },
  //   {
  //     id: 4,
  //     category: "workshops",
  //     title: "Digital Marketing Workshop",
  //     date: "March 2024",
  //     image: "https://picsum.photos/200/300",
  //     description: "Practical session on social media marketing",
  //   },
  //   {
  //     id: 5,
  //     category: "events",
  //     title: "Industry Visit",
  //     date: "February 2024",
  //     image: "https://picsum.photos/200/300",
  //     description: "Students visiting tech park",
  //   },
  //   {
  //     id: 6,
  //     category: "students",
  //     title: "Project Presentation",
  //     date: "January 2024",
  //     image: "https://picsum.photos/200/300",
  //     description: "Students showcasing their final projects",
  //   },
    
  // ];

//   const filteredItems =
//     selectedCategory === "all"
//       ? galleryItems
//       : galleryItems.filter((item) => item.category === selectedCategory);

//   return (
//     <div className="min-h-screen bg-gray-50">
     
//      <div className="relative py-20 overflow-hidden text-white bg-violet-700">
//     <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-violet-900 opacity-90"></div>
         
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2%, transparent 0%)`,
//               backgroundSize: "50px 50px",
//             }}
//           ></div>
//         </div>
//         <div className="relative px-4 mx-auto text-center max-w-7xl">
//           <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Gallery</h1>
//           <p className="max-w-3xl mx-auto text-xl text-blue-100">
//             Capturing moments of learning, growth, and achievement at Aarti
//             Educare
//           </p>
//         </div>
//       </div>

    
//       <div className="px-4 py-12 mx-auto max-w-7xl">
        
//         <Tabs defaultValue="all" className="mb-12">
//           <TabsList className="flex justify-center p-1 space-x-2 bg-white rounded-lg shadow-sm">
//             <TabsTrigger
//               value="all"
//               className="px-6 py-2 rounded-md"
//               onClick={() => setSelectedCategory("all")}
//             >
//               All
//             </TabsTrigger>
//             <TabsTrigger
//               value="workshops"
//               className="px-6 py-2 rounded-md"
//               onClick={() => setSelectedCategory("workshops")}
//             >
//               Workshops
//             </TabsTrigger>
//             <TabsTrigger
//               value="events"
//               className="px-6 py-2 rounded-md"
//               onClick={() => setSelectedCategory("events")}
//             >
//               Events
//             </TabsTrigger>
//             <TabsTrigger
//               value="students"
//               className="px-6 py-2 rounded-md"
//               onClick={() => setSelectedCategory("students")}
//             >
//               Students
//             </TabsTrigger>
//           </TabsList>

          
//           <TabsContent value={selectedCategory} className="mt-8">
//             <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//               {filteredItems.map((item) => (
//                 <motion.div
//                   key={item.id}
//                   layout
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: 20 }}
//                   transition={{ duration: 0.3 }}
//                   className="relative overflow-hidden transition-shadow bg-white shadow-lg group rounded-xl hover:shadow-xl"
//                 >
                  
//                   <div className="relative overflow-hidden aspect-video">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-105"
//                     />
                   
//                     <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-100">
//                       <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                         <p className="mb-1 text-sm font-medium">{item.date}</p>
//                         <h3 className="text-lg font-semibold">{item.title}</h3>
//                       </div>
//                     </div>
//                   </div>
                 
//                   <div className="p-6">
//                     <h3 className="mb-2 text-xl font-semibold text-gray-800">
//                       {item.title}
//                     </h3>
//                     <p className="text-gray-600">{item.description}</p>
//                     <div className="flex items-center justify-between mt-4">
//                       <span className="text-sm font-medium text-blue-600 capitalize">
//                         {item.category}
//                       </span>
//                       <span className="text-sm text-gray-500">{item.date}</span>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </TabsContent>
//         </Tabs>
//       </div>

      
//     </div>
//   );
// };

// export default Gallery;


// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

// const Gallery = () => {
//   const [selectedCategory, setSelectedCategory] = useState("all");

//   const galleryItems = [
//     {
//       id: 1,
//       category: "workshops",
//       title: "Web Development Workshop",
//       date: "March 2024",
//       image: "https://picsum.photos/200/300",
//       description: "Students learning advanced web technologies",
//     },
//     {
//       id: 2,
//       category: "events",
//       title: "Annual Tech Summit",
//       date: "February 2024",
//       image: "https://picsum.photos/200/300",
//       description: "Industry experts sharing insights",
//     },
//     {
//       id: 3,
//       category: "students",
//       title: "Graduation Ceremony",
//       date: "January 2024",
//       image: "https://picsum.photos/200/300",
//       description: "Successful completion of advanced courses",
//     },
//     {
//       id: 4,
//       category: "workshops",
//       title: "Digital Marketing Workshop",
//       date: "March 2024",
//       image: "https://picsum.photos/200/300",
//       description: "Practical session on social media marketing",
//     },
//     {
//       id: 5,
//       category: "events",
//       title: "Industry Visit",
//       date: "February 2024",
//       image: "https://picsum.photos/200/300",
//       description: "Students visiting tech park",
//     },
//     {
//       id: 6,
//       category: "students",
//       title: "Project Presentation",
//       date: "January 2024",
//       image: "https://picsum.photos/200/300",
//       description: "Students showcasing their final projects",
//     },
    
//   ];

//   const filteredItems =
//     selectedCategory === "all"
//       ? galleryItems
//       : galleryItems.filter((item) => item.category === selectedCategory);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="relative py-20 overflow-hidden text-white" style={{ backgroundColor: '#e67e23' }}>
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-r from-[#e67e23] to-[#d35400] opacity-90"></div>
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2%, transparent 0%)`,
//               backgroundSize: "50px 50px",
//             }}
//           ></div>
//         </div>
//         <div className="relative px-4 mx-auto text-center max-w-7xl">
//           <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Gallery</h1>
//           <p className="max-w-3xl mx-auto text-xl text-white/80">
//             Capturing moments of learning, growth, and achievement at Aarti Educare
//           </p>
//         </div>
//       </div>

//       <div className="px-4 py-12 mx-auto max-w-7xl">
//         <Tabs defaultValue="all" className="mb-12">
//           <TabsList className="flex justify-center p-1 space-x-2 bg-white rounded-lg shadow-sm">
//             <TabsTrigger
//               value="all"
//               className="px-6 py-2 rounded-md text-[#e67e23] hover:bg-[#e67e23]/10"
//               onClick={() => setSelectedCategory("all")}
//             >
//               All
//             </TabsTrigger>
//             <TabsTrigger
//               value="workshops"
//               className="px-6 py-2 rounded-md text-[#e67e23] hover:bg-[#e67e23]/10"
//               onClick={() => setSelectedCategory("workshops")}
//             >
//               Workshops
//             </TabsTrigger>
//             <TabsTrigger
//               value="events"
//               className="px-6 py-2 rounded-md text-[#e67e23] hover:bg-[#e67e23]/10"
//               onClick={() => setSelectedCategory("events")}
//             >
//               Events
//             </TabsTrigger>
//             <TabsTrigger
//               value="students"
//               className="px-6 py-2 rounded-md text-[#e67e23] hover:bg-[#e67e23]/10"
//               onClick={() => setSelectedCategory("students")}
//             >
//               Students
//             </TabsTrigger>
//           </TabsList>

//           <TabsContent value={selectedCategory} className="mt-8">
//             <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//               {filteredItems.map((item) => (
//                 <motion.div
//                   key={item.id}
//                   layout
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: 20 }}
//                   transition={{ duration: 0.3 }}
//                   className="relative overflow-hidden transition-shadow bg-white shadow-lg group rounded-xl hover:shadow-xl"
//                 >
//                   <div className="relative overflow-hidden aspect-video">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-105"
//                     />
//                     <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-100">
//                       <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                         <p className="mb-1 text-sm font-medium">{item.date}</p>
//                         <h3 className="text-lg font-semibold">{item.title}</h3>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="p-6">
//                     <h3 className="mb-2 text-xl font-semibold text-gray-800">{item.title}</h3>
//                     <p className="text-gray-600">{item.description}</p>
//                     <div className="flex items-center justify-between mt-4">
//                       <span className="text-sm font-medium text-[#e67e23] capitalize">
//                         {item.category}
//                       </span>
//                       <span className="text-sm text-gray-500">{item.date}</span>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// };

// export default Gallery;


import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import Footer from "./Footer";
import Nav from "./Nav";
import PageWrapper from "./PageWrapper";
import WhatsAppButton from "./WhatsappButton";
import config from "@/config";
import Modal from "react-modal";
import { useInView } from "react-intersection-observer";

// Modal styling
Modal.setAppElement("#root");

const GalleryScreen = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [categories, setCategories] = useState([{_id: "0",name: "All"}]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [visibleItems, setVisibleItems] = useState(8);
  const [modalItem, setModalItem] = useState(null);

  const { ref, inView } = useInView({ triggerOnce: false });
  const API_URL = config.API_URL;

  const fetchGallery = async () => {
    try {
      const res = await axios.get(`${API_URL}/gallery`);
      setGalleryItems(res.data);
    } catch (error) {
      console.error("Error fetching gallery items:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get(`${API_URL}/categories`);
      const fetchedCategories = res.data || [];
      setCategories([{_id: "0",name: "All"}, ...fetchedCategories]);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchGallery();
    fetchCategories();
  }, []);

  // Lazy load more items when in view
  useEffect(() => {
    if (inView && !loading) {
      setTimeout(() => setVisibleItems((prev) => prev + 8), 500);
    }
  }, [inView, loading]);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const visibleFilteredItems = filteredItems.slice(0, visibleItems);

  return (
    <>
      <Helmet>
        <title>Gallery | Aarti Educare</title>
        <meta
          name="description"
          content="Explore our gallery showcasing vibrant events, workshops, and student achievements."
        />
      </Helmet>

      <Nav />
      <PageWrapper>
        <div className="bg-white py-16 px-6 md:px-20 min-h-screen">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Gallery
            </h1>
            <p className="text-lg text-gray-600">
              Discover glimpses of our inspiring journey
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex justify-center mb-10 flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat._id}
                onClick={() => {
                  setActiveCategory(cat.name);
                  setVisibleItems(8); // Reset on category change
                }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-orange-400 hover:bg-orange-400 hover:text-white ${
                  activeCategory === cat.name
                    ? "bg-orange-400 text-white"
                    : "text-orange-500 bg-white"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Gallery Items */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-gray-100 animate-pulse h-64 w-full"
                ></div>
              ))}
            </div>
          ) : visibleFilteredItems.length === 0 ? (
            <div className="text-center text-gray-500 text-lg py-10">
              No items found.
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {visibleFilteredItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setModalItem(item)}
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm">{item.category}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Lazy Loader Trigger */}
              {visibleItems < filteredItems.length && (
                <div ref={ref} className="text-center py-10">
                  <span className="text-gray-400 text-sm">Loading more...</span>
                </div>
              )}
            </>
          )}
        </div>

        {/* Modal View */}
        <Modal
          isOpen={!!modalItem}
          onRequestClose={() => setModalItem(null)}
          className="max-w-4xl mx-auto my-20 p-4 bg-white rounded-2xl shadow-xl outline-none"
          overlayClassName="fixed inset-0 bg-black/70 flex justify-center items-start z-50"
        >
          {modalItem && (
            <div className="flex flex-col items-center">
              <img
                src={modalItem.image}
                alt={modalItem.title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-md mb-4"
              />
              <h2 className="text-xl font-bold text-gray-800 mb-1">{modalItem.title}</h2>
              <p className="text-sm text-gray-600">{modalItem.category}</p>
              <button
                onClick={() => setModalItem(null)}
                className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
              >
                Close
              </button>
            </div>
          )}
        </Modal>

        <WhatsAppButton />
        <Footer />
      </PageWrapper>
    </>
  );
};

export default GalleryScreen;
