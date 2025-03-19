require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDb = require("./utils/dbConnection");

const authRoutes = require("./routes/authRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const trainingRoutes = require("./routes/trainingRoutes");
const schemeRoutes = require("./routes/schemeRoutes");
// const galleryRoutes = require("./routes/galleryRoutes");
const contactRoutes = require("./routes/contactRoutes");
const inquiryRoutes = require("./routes/inquiryRoutes");
const coursesRoutes = require("./routes/courseRoutes");
const bannerRoutes = require("./routes/bannerRoutes");

const app = express();
connectDb();

app.use(express.json());
app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/training-centers", trainingRoutes);
app.use("/api/schemes", schemeRoutes);
app.use("/api/courses", coursesRoutes);
app.use("/api/inquiries", inquiryRoutes);
app.use("/api/banners", bannerRoutes);
app.use("/api/contact", contactRoutes);
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
