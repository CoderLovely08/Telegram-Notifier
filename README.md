# Telegram Notifier

## Overview

**Telegram Notifier** is a lightweight Node.js module that can be seamlessly integrated into your existing projects to send messages to a Telegram chat via a bot. It provides a clean REST API interface for using Telegram as a tool for real-time alerts, system monitoring, reporting, and more.

Built with **Express.js** for routing and **Axios** for Telegram Bot API communication, this module enables developers to quickly add Telegram-based messaging to their applications.

## Features

* Send messages to a specified Telegram chat.
* Simple REST API for interaction.
* Easy integration with any app or monitoring system.

## Use Cases

* **Automated Alerts**: Receive real-time messages for system errors, server downtime, or deployment events.
* **Notification System**: Send updates or notifications to users or team groups.
* **Monitoring Tools**: Pair with tools like Prometheus, Grafana, or custom scripts for on-call alerts.
* **Event Reminders**: Schedule tasks and send time-based reminders to yourself or a Telegram group.
* **Community Updates**: Broadcast messages to a group or channel from backend events or admin actions.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/CoderLovely08/Telegram-Notifier.git
cd Telegram-Notifier
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Your Telegram Bot

If you don't already have a Telegram bot, follow these steps:

1. Open Telegram and search for `@BotFather`.
2. Start a chat and send `/newbot`.
3. Follow the instructions to set a name and username for your bot.
4. BotFather will give you a **Bot Token** — copy and save it.
5. Start a chat with your bot or add it to a group/channel where you want it to send messages.
6. To get your **chat ID**:

   * You can use [@userinfobot](https://t.me/userinfobot) to get your user ID.
   * For group chats, send a message and use Telegram’s API:
     `https://api.telegram.org/bot<YourBOTToken>/getUpdates`

### 4. Set Up Environment Variables

Create a `.env` file in the root directory and add:

```env
TELEGRAM_BOT_TOKEN=<your-bot-token>
TELEGRAM_CHAT_ID=<your-chat-id>
```

## Usage

### Start the Server

```bash
npm start
```

### Send a Message

* Endpoint:
  `POST /send`

* Request body:

```json
{
  "message": "Your message here"
}
```

### Example using `curl`

```bash
curl -X POST http://localhost:3000/send \
-H "Content-Type: application/json" \
-d '{"message": "Hello from Telegram Notifier!"}'
```

## API Endpoints

| Method | Endpoint | Description                           |
| ------ | -------- | ------------------------------------- |
| GET    | `/`      | Returns a welcome message.            |
| POST   | `/send`  | Sends a message to the Telegram chat. |

## Error Handling

The app includes basic error handling for invalid inputs, missing env variables, or Telegram API failures.
