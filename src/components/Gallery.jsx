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


import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const galleryItems = [
    {
      id: 1,
      category: "workshops",
      title: "Web Development Workshop",
      date: "March 2024",
      image: "https://picsum.photos/200/300",
      description: "Students learning advanced web technologies",
    },
    {
      id: 2,
      category: "events",
      title: "Annual Tech Summit",
      date: "February 2024",
      image: "https://picsum.photos/200/300",
      description: "Industry experts sharing insights",
    },
    {
      id: 3,
      category: "students",
      title: "Graduation Ceremony",
      date: "January 2024",
      image: "https://picsum.photos/200/300",
      description: "Successful completion of advanced courses",
    },
    {
      id: 4,
      category: "workshops",
      title: "Digital Marketing Workshop",
      date: "March 2024",
      image: "https://picsum.photos/200/300",
      description: "Practical session on social media marketing",
    },
    {
      id: 5,
      category: "events",
      title: "Industry Visit",
      date: "February 2024",
      image: "https://picsum.photos/200/300",
      description: "Students visiting tech park",
    },
    {
      id: 6,
      category: "students",
      title: "Project Presentation",
      date: "January 2024",
      image: "https://picsum.photos/200/300",
      description: "Students showcasing their final projects",
    },
    
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative py-20 overflow-hidden text-white" style={{ backgroundColor: '#e67e23' }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e67e23] to-[#d35400] opacity-90"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2%, transparent 0%)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
        <div className="relative px-4 mx-auto text-center max-w-7xl">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Gallery</h1>
          <p className="max-w-3xl mx-auto text-xl text-white/80">
            Capturing moments of learning, growth, and achievement at Aarti Educare
          </p>
        </div>
      </div>

      <div className="px-4 py-12 mx-auto max-w-7xl">
        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="flex justify-center p-1 space-x-2 bg-white rounded-lg shadow-sm">
            <TabsTrigger
              value="all"
              className="px-6 py-2 rounded-md text-[#e67e23] hover:bg-[#e67e23]/10"
              onClick={() => setSelectedCategory("all")}
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="workshops"
              className="px-6 py-2 rounded-md text-[#e67e23] hover:bg-[#e67e23]/10"
              onClick={() => setSelectedCategory("workshops")}
            >
              Workshops
            </TabsTrigger>
            <TabsTrigger
              value="events"
              className="px-6 py-2 rounded-md text-[#e67e23] hover:bg-[#e67e23]/10"
              onClick={() => setSelectedCategory("events")}
            >
              Events
            </TabsTrigger>
            <TabsTrigger
              value="students"
              className="px-6 py-2 rounded-md text-[#e67e23] hover:bg-[#e67e23]/10"
              onClick={() => setSelectedCategory("students")}
            >
              Students
            </TabsTrigger>
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden transition-shadow bg-white shadow-lg group rounded-xl hover:shadow-xl"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 transition-opacity opacity-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-100">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p className="mb-1 text-sm font-medium">{item.date}</p>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm font-medium text-[#e67e23] capitalize">
                        {item.category}
                      </span>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Gallery;
