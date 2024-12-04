// import React, { useState } from "react";
// import { X } from "lucide-react";
// import emailjs from "emailjs-com"; // Import EmailJS
// import indianStates from "./indianState";

// const PopupEnquiryForm = ({ isOpen, onClose }) => {
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
//   const [success, setSuccess] = useState(false);

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

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       const emailData = {
//         name: formData.name || "N/A",
//         email: formData.email || "N/A",
//         phone: formData.phone || "N/A",
//         message: formData.message || "N/A",
//         type: formData.type || "N/A",
//         age: formData.type === "student" ? formData.age || "N/A" : "N/A",
//         state: formData.state || "N/A",
//         city: formData.city || "N/A",
//       };
      

//       emailjs
//         .send(
//           "service_q498tfn", // Replace with your EmailJS service ID
//           "template_soo2f4r", // Replace with your EmailJS template ID
//           emailData,
//           "k6St47ADFWmErY3X5" // Replace with your Public Key (User ID)
//         )
//         .then(
//           (response) => {
//             console.log("Email sent successfully:", response.status, response.text);
//             setSuccess(true);
//             setFormData({
//               name: "",
//               email: "",
//               phone: "",
//               message: "",
//               type: "student",
//               age: "",
//               state: "",
//               city: "",
//             });
//             setTimeout(() => setSuccess(false), 3000);
//             onClose();
//           },
//           (err) => {
//             console.error("Failed to send email:", err);
//           }
//         );
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
//       <div className="relative w-full max-w-lg p-8 mx-4 bg-white shadow-2xl rounded-xl lg:max-w-2xl">
//         <button
//           onClick={onClose}
//           className="absolute text-gray-400 transition top-4 right-4 hover:text-gray-600"
//         >
//           <X size={24} />
//         </button>

//         <h2 className="mb-6 text-3xl font-semibold text-center text-gray-800">
//           Enquiry Form
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//             {/* Full Name */}
//             <div>
//               <label className="block mb-1 text-sm font-medium text-gray-600">
//                 Full Name *
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter your full name"
//                 className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all ${
//                   errors.name ? "border-red-500" : "border-gray-300 focus:ring-orange-500"
//                 }`}
//               />
//               {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block mb-1 text-sm font-medium text-gray-600">
//                 Email *
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email address"
//                 className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all ${
//                   errors.email ? "border-red-500" : "border-gray-300 focus:ring-orange-500"
//                 }`}
//               />
//               {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="block mb-1 text-sm font-medium text-gray-600">
//                 Phone *
//               </label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="Enter your phone number"
//                 className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all ${
//                   errors.phone ? "border-red-500" : "border-gray-300 focus:ring-orange-500"
//                 }`}
//               />
//               {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
//             </div>

//             {/* Enquiry Type */}
//             <div>
//               <label className="block mb-1 text-sm font-medium text-gray-600">
//                 Enquiry Type
//               </label>
//               <select
//                 name="type"
//                 value={formData.type}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 transition border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
//               >
//                 <option value="student">Student</option>
//                 <option value="training_center">Training Center</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>

//             {/* Age */}
//             {formData.type === "student" && (
//               <div>
//                 <label className="block mb-1 text-sm font-medium text-gray-600">
//                   Age
//                 </label>
//                 <input
//                   type="number"
//                   name="age"
//                   value={formData.age}
//                   onChange={handleChange}
//                   placeholder="Enter your age"
//                   className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all ${
//                     errors.age ? "border-red-500" : "border-gray-300 focus:ring-orange-500"
//                   }`}
//                 />
//                 {errors.age && <p className="mt-1 text-sm text-red-500">{errors.age}</p>}
//               </div>
//             )}

//             {/* State */}
//             <div>
//               <label className="block mb-1 text-sm font-medium text-gray-600">
//                 State *
//               </label>
//               <select
//                 name="state"
//                 value={formData.state}
//                 onChange={handleChange}
//                 className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all ${
//                   errors.state ? "border-red-500" : "border-gray-300 focus:ring-orange-500"
//                 }`}
//               >
//                 <option value="">Select State</option>
//                 {Object.keys(indianStates).map((state) => (
//                   <option key={state} value={state}>
//                     {state}
//                   </option>
//                 ))}
//               </select>
//               {errors.state && <p className="mt-1 text-sm text-red-500">{errors.state}</p>}
//             </div>

//             {/* City */}
//             <div>
//               <label className="block mb-1 text-sm font-medium text-gray-600">
//                 City *
//               </label>
//               <select
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all ${
//                   errors.city ? "border-red-500" : "border-gray-300 focus:ring-orange-500"
//                 }`}
//               >
//                 <option value="">Select City</option>
//                 {(indianStates[formData.state] || []).map((city) => (
//                   <option key={city} value={city}>
//                     {city}
//                   </option>
//                 ))}
//               </select>
//               {errors.city && <p className="mt-1 text-sm text-red-500">{errors.city}</p>}
//             </div>
//           </div>

//           {/* Message */}
//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-600">
//               Message *
//             </label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Write your message here"
//               rows="4"
//               className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all ${
//                 errors.message ? "border-red-500" : "border-gray-300 focus:ring-orange-500"
//               }`}
//             />
//             {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full py-3 text-white transition-all rounded-lg shadow-lg bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800"
//           >
//             Submit Enquiry
//           </button>
//           {success && (
//             <p className="mt-4 text-center text-green-500">
//               Enquiry submitted successfully!
//             </p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PopupEnquiryForm;


import React, { useState } from "react";
import { X } from "lucide-react";
import emailjs from "emailjs-com";
import indianStates from "./indianState";

const PopupEnquiryForm = ({ isOpen, onClose }) => {
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
  const [responseMessage, setResponseMessage] = useState(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const emailData = {
        name: formData.name || "N/A",
        email: formData.email || "N/A",
        phone: formData.phone || "N/A",
        message: formData.message || "N/A",
        type: formData.type || "N/A",
        age: formData.type === "student" ? formData.age || "N/A" : "N/A",
        state: formData.state || "N/A",
        city: formData.city || "N/A",
      };

      emailjs
        .send(
          "service_q498tfn", // Replace with your EmailJS service ID
          "template_soo2f4r", // Replace with your EmailJS template ID
          emailData,
          "k6St47ADFWmErY3X5" // Replace with your Public Key (User ID)
        )
        .then(
          (response) => {
            console.log("Email sent successfully:", response.status, response.text);
            setResponseMessage({
              type: "success",
              text: "Enquiry submitted successfully!",
            });
            resetFormAndClose();
          },
          (err) => {
            console.error("Failed to send email:", err);
            setResponseMessage({
              type: "error",
              text: "Failed to submit enquiry. Please try again later.",
            });
            resetFormAndClose();
          }
        );
    }
  };

  const resetFormAndClose = () => {
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
    setTimeout(() => {
      setResponseMessage(null);
      onClose();
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="relative w-full max-w-lg p-8 mx-4 bg-white shadow-2xl rounded-xl lg:max-w-2xl">
        <button
          onClick={onClose}
          className="absolute text-gray-400 transition top-4 right-4 hover:text-gray-600"
        >
          <X size={24} />
        </button>

        {!responseMessage ? (
          <>
            <h2 className="mb-6 text-3xl font-semibold text-center text-gray-800">
              Enquiry Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Full Name */}
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-600">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all ${
                      errors.name ? "border-red-500" : "border-gray-300 focus:ring-orange-500"
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-600">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all ${
                      errors.email ? "border-red-500" : "border-gray-300 focus:ring-orange-500"
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-600">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all ${
                      errors.phone ? "border-red-500" : "border-gray-300 focus:ring-orange-500"
                    }`}
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                </div>

                {/* Enquiry Type */}
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-600">
                    Enquiry Type
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 transition border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="student">Student</option>
                    <option value="training_center">Training Center</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Age */}
                {formData.type === "student" && (
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-600">
                      Age
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="Enter your age"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all ${
                        errors.age ? "border-red-500" : "border-gray-300 focus:ring-orange-500"
                      }`}
                    />
                    {errors.age && <p className="mt-1 text-sm text-red-500">{errors.age}</p>}
                  </div>
                )}

                {/* State */}
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-600">
                    State *
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all ${
                      errors.state ? "border-red-500" : "border-gray-300 focus:ring-orange-500"
                    }`}
                  >
                    <option value="">Select State</option>
                    {Object.keys(indianStates).map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                  {errors.state && <p className="mt-1 text-sm text-red-500">{errors.state}</p>}
                </div>

                {/* City */}
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-600">
                    City *
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all ${
                      errors.city ? "border-red-500" : "border-gray-300 focus:ring-orange-500"
                    }`}
                  >
                    <option value="">Select City</option>
                    {(indianStates[formData.state] || []).map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  {errors.city && <p className="mt-1 text-sm text-red-500">{errors.city}</p>}
                </div>
              {/* </div> */}

              {/* Message */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-600">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                  rows="4"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 transition-all ${
                    errors.message ? "border-red-500" : "border-gray-300 focus:ring-orange-500"
                  }`}
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 text-white transition-all rounded-lg shadow-lg bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800"
              >
                Submit Enquiry
              </button>
            </form>
          </>
        ) : (
          <div
            className={`text-center p-8 rounded-lg transition-transform duration-500 ${
              responseMessage.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            <h2 className="text-2xl font-semibold">
              {responseMessage.type === "success" ? "Success" : "Error"}
            </h2>
            <p className="mt-4">{responseMessage.text}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopupEnquiryForm;
