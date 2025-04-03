const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());//later for production we have to chane it
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));


const feedbackSchema = new mongoose.Schema({
  name: String,
  feedback: String,
  date: { type: Date, default: Date.now },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);


app.post("/api/feedbacks", async (req, res) => {
  try {
    const { name, feedback } = req.body;
    const newFeedback = new Feedback({ name, feedback });
    await newFeedback.save();
    res.status(201).json(newFeedback);
  } catch (err) {
    res.status(500).json({ error: "Error saving feedback" });
  }
});

app.get("/api/feedbacks", async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ date: -1 });
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: "Error fetching feedbacks" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
