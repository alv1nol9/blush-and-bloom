import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Name, email, and message are required",
      });
    }

    // For now just log (later you can save to DB or send email)
    console.log("New Contact Message:", {
      name,
      email,
      phone,
      subject,
      message,
    });

    res.status(200).json({
      message: "Message received successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

export default router; // ✅ VERY IMPORTANT
