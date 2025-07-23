import axios from "axios";
import { MESSAGE_URL } from "../utils/constants/app.constants.js";
import { CustomError } from "./core/CustomResponse.js";

export const sendTestTelegramMessage = async (botToken, chatId, message) => {
  if (!message) {
    throw new CustomError("Message is required", 400);
  }

  if (!botToken) {
    throw new CustomError("Bot token is required", 400);
  }

  if (!chatId) {
    throw new CustomError("Chat ID is required", 400);
  }

  try {
    const url = MESSAGE_URL(botToken);
    const response = await axios.post(url, {
      chat_id: chatId,
      text: message,
    });

    if (!response.data.ok) {
      throw new CustomError(
        response.data.description || "Failed to send message",
        400
      );
    }

    return response.data;
  } catch (error) {
    if (error.response?.data?.description) {
      throw new CustomError(error.response.data.description, 400);
    }
    throw new CustomError(error.message || "Failed to send message", 500);
  }
};