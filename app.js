    const express = require("express");
    const bodyParser = require("body-parser");
    const dotenv = require("dotenv");
    const connectDB = require("./config/db");

    const patientRoutes = require("./routes/patientRoutes");
    const doctorRoutes = require("./routes/doctorRoutes");
    const appointmentRoutes = require("./routes/appointmentRoutes");

    dotenv.config();
    connectDB();

    const app = express();
    app.use(bodyParser.json());

    app.get("/", (req, res) => res.send("🏥 Clinic API is running!"));

    app.use("/api/patients", patientRoutes);
    app.use("/api/doctors", doctorRoutes);
    app.use("/api/appointments", appointmentRoutes);

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
