import express from "express";
import { APIResponse } from "./service/core/CustomResponse.js";
import { sendTelegramMessage } from "./service/notifier.service.js";

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// app.use()
// Home route
app.get("/", (req, res) => {
  APIResponse.success(res, null, "Welcome to Telegram Notifier");
});

// Send message route
app.post("/send", async (req, res) => {
  try {
    const { message } = req.body;
    await sendTelegramMessage(message);

    APIResponse.success(res, null, "Message sent successfully");
  } catch (error) {
    APIResponse.error(res, error.message);
  }
});

// Error handler
app.use((error, req, res, next) => {
  console.log(error);
  APIResponse.error(res, "Something went wrong");
});

// Start server
app.listen(3000, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Server started on port 3000");
});
