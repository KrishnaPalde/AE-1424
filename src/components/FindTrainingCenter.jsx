// import React, { useEffect, useState } from "react";
// import { FaMapMarkerAlt, FaBook, FaUserGraduate, FaMapPin } from "react-icons/fa";
// import { getDistance } from "geolib";

// import config from "@/config";

// const API_URL = config.API_URL;

// // const trainingCenters = [
// //   {
// //     id: 1,
// //     title: "Test Center - 1",
// //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
// //     courses: "20+ Courses",
// //     students: "500+ Students",
// //     address: "Mumbai, Maharashtra",
// //     coords: { latitude: 19.076, longitude: 72.8777 },
// //   },
// //   {
// //     id: 2,
// //     title: "Test Center - 2",
// //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
// //     courses: "30+ Courses",
// //     students: "800+ Students",
// //     address: "Pune, Maharashtra",
// //     coords: { latitude: 18.5204, longitude: 73.8567 },
// //   },
// // ];

// export default function FindTrainingCenter() {
//   const [userLocation, setUserLocation] = useState(null);
//   const [filteredCenters, setFilteredCenters] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [trainingCenters, setTrainingCenters] = useState([]);

//   const fetchServices = async () => {
//     try {
//       const response = await fetch(API_URL + "/training-centers");
//       if (!response.ok) throw new Error("Failed to fetch services");

//       const data = await response.json();
//       setTrainingCenters(data);
//     } catch (err) {
//       setError("Failed to load services.");
//       console.error("Error fetching services:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setUserLocation({
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//           });
//           setLoading(false);
//         },
//         (err) => {
//           console.error(err);
//           setError("Failed to fetch location. Please enable location services.");
//           setLoading(false);
//         }
//       );
//     } else {
//       setError("Geolocation is not supported by this browser.");
//       setLoading(false);
//     }
//     fetchServices();
//     // if (userLocation) {
//     //   const sortedCenters = trainingCenters
//     //     .map((center) => ({
//     //       ...center,
//     //       distance: getDistance(userLocation, center.coords) / 1000,
//     //     }))
//     //     .sort((a, b) => a.distance - b.distance);

//     //   setFilteredCenters(sortedCenters);
//     // }
//   }, []);

//   // useEffect(() => {
//   //   if (userLocation) {
//   //     const sortedCenters = trainingCenters
//   //       .map((center) => ({
//   //         ...center,
//   //         distance: getDistance(userLocation, center.coords) / 1000,
//   //       }))
//   //       .sort((a, b) => a.distance - b.distance);

//   //     setFilteredCenters(sortedCenters);
//   //   }
//   // }, [userLocation]);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-fit">
//         <div className="w-24 h-24 mt-8 border-4 border-t-orange-500 border-orange-200 rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   if (error) return <div className="text-center text-red-500">{error}</div>;

//   return (
//     <div className="container mx-auto py-6 px-4">
//       <h1 className="text-2xl font-bold text-center mb-6">Find Training Centers Near You</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {userLocation ? 
//           trainingCenters
//           .map((center) => ({
//             ...center,
//             distance: getDistance(userLocation, center.coords) / 1000,
//           }))
//           .sort((a, b) => a.distance - b.distance).map((center) => (
//             <div key={center.id} className="border rounded-lg p-4 shadow-md bg-white">
//               <h2 className="text-xl font-semibold">{center.title}</h2>
//               <p className="text-sm">{center.description}</p>
//               <div className="mt-2">
//                 <div className="flex items-center">
//                   <FaBook className="mr-2 text-orange-500" />
//                   <span>{center.courses}</span>
//                 </div>
                // <div className="flex items-center mt-1">
                //   <FaUserGraduate className="mr-2 text-orange-500" />
                //   <span>{center.students}</span>
                // </div>
//                 <div className="flex items-center mt-1">
//                   <FaMapPin className="mr-2 text-orange-500" />
//                   <span>{center.address}</span>
//                 </div>
//                 <div className="flex items-center mt-1">
//                   <FaMapMarkerAlt className="mr-2 text-orange-500" />
//                   <span>{center.distance.toFixed(2)} km away</span>
//                 </div>
//               </div>
//               <button className="mt-4 w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
//                 Register Now
//               </button>
//             </div>
//           ))
//         : trainingCenters.map((center) => (
//           <div key={center.id} className="border rounded-lg p-4 shadow-md bg-white">
//             <h2 className="text-xl font-semibold">{center.title}</h2>
//             <p className="text-sm">{center.description}</p>
//             <div className="mt-2">
//               <div className="flex items-center">
//                 <FaBook className="mr-2 text-orange-500" />
//                 <span>{center.courses}+ Courses</span>
//               </div>
//               <div className="flex items-center mt-1">
//                 <FaUserGraduate className="mr-2 text-orange-500" />
//                 <span>{center.students}+ Students</span>
//               </div>
//               <div className="flex items-center mt-1">
//                 <FaMapPin className="mr-2 text-orange-500" />
//                 <span>{center.address}</span>
//               </div>
//               <div className="flex items-center mt-1">
//                 <FaMapMarkerAlt className="mr-2 text-orange-500" />
//                 <span>{center.distance ? center.distance.toFixed(2) : "Calculating..."} km away</span>
//               </div>
//             </div>
//             <button className="mt-4 w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
//               Register Now
//             </button>
//           </div>
//         ))
//         }
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaBook, FaUserGraduate, FaMapPin, FaCheckCircle } from "react-icons/fa";
import { getDistance } from "geolib";

import config from "@/config";

const API_URL = config.API_URL;

export default function FindTrainingCenter() {
  const [userLocation, setUserLocation] = useState(null);
  const [trainingCenters, setTrainingCenters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchServices = async () => {
    try {
      const response = await fetch(API_URL + "/training-centers");
      if (!response.ok) throw new Error("Failed to fetch services");

      const data = await response.json();
      setTrainingCenters(data);
    } catch (err) {
      setError("Failed to load services.");
      console.error("Error fetching services:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setLoading(false);
        },
        (err) => {
          console.error(err);
          setError("Failed to fetch location. Please enable location services.");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      setLoading(false);
    }
    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-fit">
        <div className="w-24 h-24 mt-8 border-4 border-t-orange-500 border-orange-200 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-2xl font-bold text-center mb-6">Find Training Centers Near You</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {userLocation ? 
          trainingCenters
          .map((center) => ({
            ...center,
            distance: getDistance(userLocation, center.coords) / 1000,
          }))
          .sort((a, b) => a.distance - b.distance).map((center) => (
            <div key={center.id} className="border rounded-lg p-4 shadow-md bg-white flex flex-col h-full">
              <div className="flex-grow">
                <h2 className="text-xl font-semibold mb-2">{center.title}</h2>
                <p className="text-sm mb-4">{center.description}</p>
                <div className="mb-2">
                  <div className="flex items-center">
                    <FaMapPin className="mr-2 text-orange-500" />
                    <span>{center.address}</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <FaMapMarkerAlt className="mr-2 text-orange-500" />
                    <span>{center.distance.toFixed(2)} km away</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <FaUserGraduate className="mr-2 text-orange-500" />
                    <span>{center.students}</span>
                  </div>
                </div>
                <div className="mt-2">
                  <h3 className="text-lg font-semibold mb-2 flex items-center"><FaBook className="mr-2 text-orange-500" /> Courses Offered:</h3>
                  <ul className="list-disc pl-5 text-sm">
                    {center.courses.map((course, index) => (
                      <li key={index} className="flex items-center">
                        <FaCheckCircle className="text-green-500 mr-2" /> {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <button className="mt-4 w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
                Register Now
              </button>
            </div>
          ))
        : trainingCenters.map((center) => (
          <div key={center.id} className="border rounded-lg p-4 shadow-md bg-white flex flex-col h-full">
            <div className="flex-grow">
              <h2 className="text-xl font-semibold mb-2">{center.title}</h2>
              <p className="text-sm mb-4">{center.description}</p>
              <div className="mb-2">
                <div className="flex items-center">
                  <FaMapPin className="mr-2 text-orange-500" />
                  <span>{center.address}</span>
                </div>
                <div className="flex items-center mt-1">
                  <FaMapMarkerAlt className="mr-2 text-orange-500" />
                  <span>{center.distance ? center.distance.toFixed(2) : "Calculating..."} km away</span>
                </div>
                <div className="flex items-center mt-1">
                  <FaUserGraduate className="mr-2 text-orange-500" />
                  <span>{center.students}</span>
                </div>
              </div>
              <div className="mt-2">
                <h3 className="text-lg font-semibold mb-2 flex items-center"><FaBook className="mr-2 text-orange-500" /> Courses Offered:</h3>
                <ul className="list-disc pl-5 text-sm">
                  {center.courses.map((course, index) => (
                    <li key={index} className="flex items-center">
                      <FaCheckCircle className="text-green-500 mr-2" /> {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <button className="mt-4 w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
              Register Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
