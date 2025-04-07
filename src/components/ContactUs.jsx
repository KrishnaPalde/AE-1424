// import React, { useEffect, useState } from "react";
// import { Mail, Phone, MapPin, Clock } from "lucide-react";
// import indianStates from "./indianState";
// import config from "@/config";

// const API_URL = config.API_URL;

// // Google Map Component
// const GoogleMapWidget = () => (
//   <iframe
//     title="Google Map"
//     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.92150271103!2d73.74028207609443!3d19.969803181427682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb58cc9ed9b1%3A0x9389f758ecca661c!2sAarti%20EduCare%20Private%20Limited!5e0!3m2!1sen!2sin!4v1729949242030!5m2!1sen!2sin"
//     width="100%"
//     height="300"
//     style={{ border: 0 }}
//     allowFullScreen=""
//     loading="lazy"
//   ></iframe>
// );

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//     type: "student",
//     age: "",
//     state: "",
//     city: "",
//   });

//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   });
  
//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData((prev) => ({
//   //     ...prev,
//   //     [name]: value,
//   //     ...(name === "state" && { city: "" }),
//   //   }));
//   // };
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//       ...(name === "type" && value === "student" ? { age: "" } : {}),
//     }));
//   };
  

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       newErrors.email = "Invalid email format";
//     }
//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone is required";
//     } else if (!/^\d{10}$/.test(formData.phone)) {
//       newErrors.phone = "Invalid phone number";
//     }
//     if (!formData.message.trim()) newErrors.message = "Message is required";
//     if (formData.type === "student" && !formData.age) {
//       newErrors.age = "Age is required";
//     }
//     if (!formData.state) newErrors.state = "State is required";
//     if (!formData.city) newErrors.city = "City is required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       try {
//         const response = await fetch(API_URL + "/inquiries", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             ...formData
//           }),
//         });
  
//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message || "Error Submitting Message.");
//         } else {
//           alert("Message Sent Successfully.")
//         }
  
//       } catch (err) {
//         console.error("Error saving service:", err);
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
      
//       <div className="py-20 text-white bg-[#e67e23]">
//         <div className="px-4 mx-auto text-center max-w-7xl">
//           <h1 className="mb-6 text-4xl font-bold md:text-5xl">Contact Us</h1>
//           <p className="max-w-3xl mx-auto text-xl">
//             Get in touch with us for any queries about our training programs and services.
//           </p>
//         </div>
//       </div>

//       <div className="px-4 py-16 mx-auto max-w-7xl">
//         <div className="grid gap-12 lg:grid-cols-3">
          
//           <div className="space-y-8 lg:col-span-1">
//             <div className="p-8 bg-white shadow-lg rounded-xl">
//               <h2 className="mb-6 text-2xl font-bold text-gray-800">Contact Information</h2>
//               <GoogleMapWidget />
//               <div className="mt-6 space-y-6">
//                 <div className="flex items-center space-x-4">
//                   <MapPin className="text-[#e67e23]" size={100} />
//                   <p className="text-gray-700">Utkarsha Training Centre, Plot No. 58, Ambad - Uttam Nagar Rd, behind Shivanjali Petrol Pump, DGP Nagar 2, Murari Nagar, Nashik, Maharashtra 422010</p>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <Phone className="text-[#e67e23]" />
//                   <p className="text-gray-700">+91 80878 10364</p>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <Mail className="text-[#e67e23]" />
//                   <p className="text-gray-700">contact@aartieducare.com</p>
//                 </div>
//                 <div className="flex items-center space-x-4">
//                   <Clock className="text-[#e67e23]" />
//                   <p className="text-gray-700">Mon - Sat: 9:00 AM - 6:00 PM</p>
//                 </div>
//               </div>
//             </div>
//           </div>

          
//           <div key={formData.type} className="p-8 bg-white shadow-lg lg:col-span-2 rounded-xl">
//             <h2 className="mb-6 text-2xl font-bold text-gray-800">Send us a Message</h2>

//             <form onSubmit={handleSubmit} className="space-y-6">
              // <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              //   <div>
              //     <label className="block mb-2 text-sm font-medium text-gray-700">Full Name *</label>
              //     <input
              //       type="text"
              //       name="name"
              //       value={formData.name}
              //       onChange={handleChange}
              //       className={`w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none transition-colors ${errors.name ? "border-red-500" : "border-gray-300"}`}
              //     />
              //     {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              //   </div>

              //   <div>
              //     <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
              //     <input
              //       type="email"
              //       name="email"
              //       value={formData.email}
              //       onChange={handleChange}
              //       className={`w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none transition-colors ${errors.email ? "border-red-500" : "border-gray-300"}`}
              //     />
              //     {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              //   </div>

              //   <div>
              //     <label className="block mb-2 text-sm font-medium text-gray-700">Phone *</label>
              //     <input
              //       type="tel"
              //       name="phone"
              //       value={formData.phone}
              //       onChange={handleChange}
              //       className={`w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none transition-colors ${errors.phone ? "border-red-500" : "border-gray-300"}`}
              //     />
              //     {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
              //   </div>

              //   <div>
              //   <label className="block mb-2 text-sm font-medium text-gray-700">Enquiry Type</label>
              //   <select
              //     name="type"
              //     value={formData.type}
              //     onChange={handleChange}
              //     className="w-full px-4 py-2 transition-colors border border-gray-300 rounded-lg outline-none focus:ring-2"
              //   >
              //     <option value="student">Student</option>
              //     <option value="training_center">Training Center</option>
              //     <option value="other">Other</option>
              //   </select>
              // </div>

              //   {formData.type === "student" && (
              //   <div>
              //     <label className="block mb-2 text-sm font-medium text-gray-700">Age</label>
              //     <input
              //       type="number"
              //       name="age"
              //       value={formData.age}
              //       onChange={handleChange}
              //       className={`w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none transition-colors ${errors.age ? "border-red-500" : "border-gray-300"}`}
              //     />
              //     {errors.age && <p className="mt-1 text-sm text-red-500">{errors.age}</p>}
              //   </div>
              // )}


              //   <div>
              //     <label className="block mb-2 text-sm font-medium text-gray-700">State *</label>
              //     <select
              //       name="state"
              //       value={formData.state}
              //       onChange={handleChange}
              //       className={`w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none transition-colors ${errors.state ? "border-red-500" : "border-gray-300"}`}
              //     >
              //       <option value="">Select State</option>
              //       {Object.keys(indianStates).map((state) => (
              //         <option key={state} value={state}>{state}</option>
              //       ))}
              //     </select>
              //     {errors.state && <p className="mt-1 text-sm text-red-500">{errors.state}</p>}
              //   </div>

              //   <div>
              //     <label className="block mb-2 text-sm font-medium text-gray-700">City *</label>
              //     <select
              //       name="city"
              //       value={formData.city}
              //       onChange={handleChange}
              //       className={`w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none transition-colors ${errors.city ? "border-red-500" : "border-gray-300"}`}
              //     >
              //       <option value="">Select City</option>
              //       {(indianStates[formData.state] || []).map((city) => (
              //         <option key={city} value={city}>{city}</option>
              //       ))}
              //     </select>
              //     {errors.city && <p className="mt-1 text-sm text-red-500">{errors.city}</p>}
              //   </div>
              // </div>

              // <div>
              //   <label className="block mb-2 text-sm font-medium text-gray-700">Message *</label>
              //   <textarea
              //     name="message"
              //     value={formData.message}
              //     onChange={handleChange}
              //     rows="4"
              //     className={`w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none transition-colors ${errors.message ? "border-red-500" : "border-gray-300"}`}
              //   />
              //   {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              // </div>

//               <button type="submit" className="w-full py-3 text-white transition-colors duration-300 bg-[#e67e23] rounded-lg hover:bg-orange-700">
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;


import React, { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Clock, Loader2 } from "lucide-react";
import indianStates from "./indianState";
import config from "@/config";

const API_URL = config.API_URL;

const GoogleMapWidget = () => (
  <iframe
    title="Google Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.92150271103!2d73.74028207609443!3d19.969803181427682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb58cc9ed9b1%3A0x9389f758ecca661c!2sAarti%20EduCare%20Private%20Limited!5e0!3m2!1sen!2sin!4v1729949242030!5m2!1sen!2sin"
    width="100%"
    height="300"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
);

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    type: "student",
    age: "",
    state: "",
    city: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "type" && value === "student" ? { age: "" } : {}),
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (formData.type === "student" && !formData.age) {
      newErrors.age = "Age is required";
    }
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.city) newErrors.city = "City is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    if (validateForm()) {
      setLoading(true);
      try {
        const response = await fetch(API_URL + "/inquiries", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Error Submitting Message.");
        } else {
          setSuccessMessage("Message sent successfully.");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            type: "student",
            age: "",
            state: "",
            city: "",
          });
        }
      } catch (err) {
        console.error("Error saving service:", err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-20 text-white bg-[#e67e23]">
        <div className="px-4 mx-auto text-center max-w-7xl">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Contact Us</h1>
          <p className="max-w-3xl mx-auto text-xl">
            Get in touch with us for any queries about our training programs and services.
          </p>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-1">
            <div className="p-8 bg-white shadow-lg rounded-xl">
              <h2 className="mb-6 text-2xl font-bold text-gray-800">Contact Information</h2>
              <GoogleMapWidget />
              <div className="mt-6 space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-[#e67e23] min-w-[24px]" />
                  <p className="text-gray-700">Utkarsha Training Centre, Plot No. 58, Ambad - Uttam Nagar Rd, behind Shivanjali Petrol Pump, DGP Nagar 2, Murari Nagar, Nashik, Maharashtra 422010</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-[#e67e23]" />
                  <p className="text-gray-700">+91 80878 10364</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-[#e67e23]" />
                  <p className="text-gray-700">contact@aartieducare.com</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="text-[#e67e23]" />
                  <p className="text-gray-700">Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div key={formData.type} className="p-8 bg-white shadow-lg lg:col-span-2 rounded-xl">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">Send us a Message</h2>

            {successMessage && <p className="mb-4 text-green-600 font-medium">{successMessage}</p>}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* form fields here... unchanged */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none transition-colors ${errors.name ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none transition-colors ${errors.email ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none transition-colors ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                </div>

                <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Enquiry Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-2 transition-colors border border-gray-300 rounded-lg outline-none focus:ring-2"
                >
                  <option value="student">Student</option>
                  <option value="training_center">Training Center</option>
                  <option value="other">Other</option>
                </select>
              </div>

                {formData.type === "student" && (
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none transition-colors ${errors.age ? "border-red-500" : "border-gray-300"}`}
                  />
                  {errors.age && <p className="mt-1 text-sm text-red-500">{errors.age}</p>}
                </div>
              )}


                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">State *</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none transition-colors ${errors.state ? "border-red-500" : "border-gray-300"}`}
                  >
                    <option value="">Select State</option>
                    {Object.keys(indianStates).map((state) => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                  {errors.state && <p className="mt-1 text-sm text-red-500">{errors.state}</p>}
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">City *</label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none transition-colors ${errors.city ? "border-red-500" : "border-gray-300"}`}
                  >
                    <option value="">Select City</option>
                    {(indianStates[formData.state] || []).map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                  {errors.city && <p className="mt-1 text-sm text-red-500">{errors.city}</p>}
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 outline-none transition-colors ${errors.message ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  disabled={loading}
                  className="relative flex items-center justify-center gap-2 px-6 py-2 text-white bg-[#e67e23] hover:bg-[#d6711d] rounded-md disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? <Loader2 className="animate-spin w-4 h-4" /> : null}
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
