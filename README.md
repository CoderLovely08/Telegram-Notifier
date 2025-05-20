# Telegram Notifier

## Overview

Telegram Notifier is a Node.js-based feature module that can be easily integrated into your existing projects to enable message sending to a Telegram chat via a bot. It provides a simple interface for utilizing Telegram as a reporting, alerting, or community notification tool — perfect for use cases like personal alerts, error reporting, or broadcasting messages to a group or channel.

Built with Express.js for routing and Axios for Telegram Bot API communication, Telegram Notifier helps developers quickly plug Telegram messaging capabilities into their applications.

## Features

- Send messages to a specified Telegram chat.
- Simple REST API for interaction.

## Use Cases

- **Automated Alerts**: Integrate the Telegram Notifier to send real-time alerts for system events, such as server downtime or critical errors.
- **Notification System**: Use it to notify users about important updates or messages from your application.
- **Monitoring Tools**: Integrate with monitoring tools to receive alerts directly in your Telegram chat for performance metrics or anomalies.
- **Event Reminders**: Set up reminders for events or tasks by sending scheduled messages to a Telegram chat.

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
