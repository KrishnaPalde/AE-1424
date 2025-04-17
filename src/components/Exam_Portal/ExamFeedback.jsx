import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import config from "@/config.js"

const API_URL = config.API_URL;

export default function FeedbackScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { examId } = useParams();
  const { autoSubmitted = false, studentId } = location.state || {};
  const [trainingRating, setTrainingRating] = useState(0);
  const [examRating, setExamRating] = useState(0);
  const [comments, setComments] = useState("");


  const handleSubmit = async () => {
    if (!trainingRating || !examRating) {
      alert("Please rate both the training and the exam.");
      return;
    }

    if (!studentId) {
      alert("Student ID not found.");
      return;
    }

    const feedbackData = {
      examId,
      studentId,
      trainingRating,
      examRating,
      comments,
      autoSubmitted,
    };

    try {
      const response = await fetch(
        `${API_URL}/exams/feedback`, // or your actual API endpoint
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(feedbackData),
        }
      );

      if (response.ok) {
        alert("Thank you! Your feedback has been submitted.");
        navigate(`/online-examination/Dashboard/${studentId}`);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || "Something went wrong."}`);
      }
    } catch (error) {
      alert("Something went wrong while submitting feedback. Please try again.");
    }
  };

  const renderStars = (rating, setRating) => (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          size={28}
          className={`cursor-pointer transition-colors duration-200 ${
            star <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
          onClick={() => setRating(star)}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 font-nunito text-gray-800 flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl bg-white shadow-xl rounded-xl p-8 space-y-8"
      >
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-2">We Value Your Feedback</h1>
          <p className="text-sm sm:text-base text-gray-600">
            Please take a moment to let us know about your experience.
          </p>
        </div>

        {/* Questions */}
        <div className="space-y-6">
          <div>
            <label className="block font-semibold text-lg mb-1">1. How was your training?</label>
            {renderStars(trainingRating, setTrainingRating)}
          </div>

          <div>
            <label className="block font-semibold text-lg mb-1">2. How was your exam experience?</label>
            {renderStars(examRating, setExamRating)}
          </div>

          <div>
            <label className="block font-semibold text-lg mb-2">3. Any comments or suggestions?</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows={5}
              placeholder="Write your feedback here..."
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            ></textarea>
          </div>
        </div>

        {/* Submit */}
        <div className="pt-4 flex justify-center">
          <button
            onClick={handleSubmit}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 shadow-lg transition-all duration-300"
          >
            Submit Feedback
          </button>
        </div>
      </motion.div>
    </div>
  );
}
