import axios from "axios";
import { MESSAGE_URL } from "../utils/constants/app.constants.js";
import { config } from "../config/app.config.js";
import { CustomError } from "./core/CustomResponse.js";

export const sendTelegramMessage = async (message = "Default message") => {
  try {
    const response = await axios.post(MESSAGE_URL(config.TELEGRAM.BOT_TOKEN), {
      chat_id: config.TELEGRAM.CHAT_ID,
      text: message,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new CustomError(error.message, error.response.status);
  }
};
