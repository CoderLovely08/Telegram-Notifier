import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { APIResponse } from "./service/core/CustomResponse.js";
import { sendTelegramMessage } from "./service/notifier.service.js";
import { sendTestTelegramMessage } from "./service/testNotifier.service.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Set up EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home route - render the documentation page
app.get("/", (req, res) => {
  res.render('index');
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

// Test endpoint - accepts custom bot token and chat ID
app.post("/test", async (req, res) => {
  try {
    const { botToken, chatId, message } = req.body;
    const result = await sendTestTelegramMessage(botToken, chatId, message);

    APIResponse.success(res, result, "Message sent successfully");
  } catch (error) {
    APIResponse.error(res, error.message, error.statusCode || 500);
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
