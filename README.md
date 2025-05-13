# Telegram Notifier

## Overview

Telegram Notifier is a Node.js application that allows users to send messages to a Telegram chat using a bot. This project utilizes Express.js for the server framework and Axios for making HTTP requests to the Telegram API.

## Features

- Send messages to a specified Telegram chat.
- Simple REST API for interaction.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/CoderLovely08/Telegram-Notifier.git
   cd Telegram-Notifier
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your Telegram bot token and chat ID:
   ```bash
   TELEGRAM_BOT_TOKEN=<your-bot-token>
   TELEGRAM_CHAT_ID=<your-chat-id>
   ```

## Usage

- Start the server:
  ```bash
  npm start
  ```
- Use the following endpoint to send a message:
  ```http
  POST /send
  ```
  - Request body:
  ```json
  {
    "message": "Your message here"
  }
  ```

## API Endpoints

- `GET /`: Returns a welcome message.
- `POST /send`: Sends a message to the specified Telegram chat.

## Error Handling

The application includes basic error handling to manage unexpected issues gracefully.