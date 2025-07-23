# Telegram Notifier

## Overview

**Telegram Notifier** is a lightweight Node.js service that provides a clean REST API for sending messages to Telegram. It includes both a deployable service and a web-based testing playground, making it easy to integrate Telegram notifications into any application or use directly via HTTP requests.

Built with **Express.js** and **Axios**, this tool enables developers to quickly add Telegram-based messaging to their applications without dealing with the Telegram Bot API complexity.

## Features

* 🚀 Simple REST API for sending Telegram messages
* 🌐 Web-based testing playground with API documentation
* 🔒 Secure handling of bot credentials (never stored or logged)
* 📱 Support for personal chats, groups, and channels
* 🛠️ Easy integration with any programming language or monitoring system
* 📖 Interactive documentation with code examples

## Use Cases

* **Automated Alerts**: Real-time notifications for system errors, server downtime, or deployment events
* **Monitoring Integration**: Connect with Prometheus, Grafana, or custom monitoring scripts
* **CI/CD Notifications**: Build status, deployment updates, and pipeline alerts
* **Application Events**: User registrations, order notifications, or system updates
* **Server Monitoring**: CPU usage alerts, disk space warnings, or service health checks
* **Task Automation**: Cron job results, backup completion, or scheduled reports

## Quick Start Options

### Option 1: Use the Hosted Service (Recommended for Testing)

1. **Create Your Telegram Bot**
   - Open Telegram and search for `@BotFather`
   - Send `/newbot` and follow the instructions
   - Save your **Bot Token** (format: `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`)

2. **Get Your Chat ID**
   - Send a message to your bot
   - Visit: `https://api.telegram.org/bot{YOUR_BOT_TOKEN}/getUpdates`
   - Find your chat ID in the JSON response

3. **Test with Web Playground**
   - Visit the web interface at [Telegram Notifier Playground](https://tg-notifier-464cf4bcf4d2.herokuapp.com/) or `http://localhost:3000` (if running locally)
   - Enter your bot token and chat ID
   - Send a test message instantly

### Option 2: Direct API Integration (No Setup Required)

If you just want to send messages without running our service, use these ready-to-copy code snippets:

#### JavaScript/Node.js
```javascript
const axios = require('axios');

async function sendTelegramMessage(botToken, chatId, message) {
    try {
        const response = await axios.post(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                chat_id: chatId,
                text: message
            }
        );
        console.log('Message sent successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Failed to send message:', error.response?.data || error.message);
        throw error;
    }
}

// Usage
sendTelegramMessage(
    'YOUR_BOT_TOKEN',
    'YOUR_CHAT_ID', 
    'Hello from my application!'
);
```

#### Python
```python
import requests
import json

def send_telegram_message(bot_token, chat_id, message):
    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    payload = {
        'chat_id': chat_id,
        'text': message
    }
    
    try:
        response = requests.post(url, json=payload)
        response.raise_for_status()
        print("Message sent successfully:", response.json())
        return response.json()
    except requests.exceptions.RequestException as e:
        print("Failed to send message:", e)
        raise

# Usage
send_telegram_message(
    'YOUR_BOT_TOKEN',
    'YOUR_CHAT_ID',
    'Hello from my Python application!'
)
```

#### PHP
```php
<?php
function sendTelegramMessage($botToken, $chatId, $message) {
    $url = "https://api.telegram.org/bot{$botToken}/sendMessage";
    
    $data = json_encode([
        'chat_id' => $chatId,
        'text' => $message
    ]);
    
    $options = [
        'http' => [
            'header' => "Content-type: application/json\r\n",
            'method' => 'POST',
            'content' => $data
        ]
    ];
    
    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    
    if ($result === FALSE) {
        throw new Exception('Failed to send message');
    }
    
    return json_decode($result, true);
}

// Usage
sendTelegramMessage(
    'YOUR_BOT_TOKEN',
    'YOUR_CHAT_ID',
    'Hello from my PHP application!'
);
?>
```

#### cURL
```bash
curl -X POST "https://api.telegram.org/bot{YOUR_BOT_TOKEN}/sendMessage" \
     -H "Content-Type: application/json" \
     -d '{
         "chat_id": "YOUR_CHAT_ID",
         "text": "Hello from cURL!"
     }'
```

#### Go
```go
package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
)

type TelegramMessage struct {
    ChatID string `json:"chat_id"`
    Text   string `json:"text"`
}

func sendTelegramMessage(botToken, chatID, message string) error {
    url := fmt.Sprintf("https://api.telegram.org/bot%s/sendMessage", botToken)
    
    msg := TelegramMessage{
        ChatID: chatID,
        Text:   message,
    }
    
    jsonData, err := json.Marshal(msg)
    if err != nil {
        return err
    }
    
    resp, err := http.Post(url, "application/json", bytes.NewBuffer(jsonData))
    if err != nil {
        return err
    }
    defer resp.Body.Close()
    
    if resp.StatusCode != http.StatusOK {
        return fmt.Errorf("failed to send message, status: %d", resp.StatusCode)
    }
    
    fmt.Println("Message sent successfully!")
    return nil
}

// Usage
func main() {
    sendTelegramMessage(
        "YOUR_BOT_TOKEN",
        "YOUR_CHAT_ID",
        "Hello from my Go application!",
    )
}
```

### Option 3: Clone and Run Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/CoderLovely08/Telegram-Notifier.git
   cd Telegram-Notifier
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   ```bash
   cp .env.sample .env
   # Edit .env with your bot token and chat ID
   ```

4. **Start the Server**
   ```bash
   npm start
   ```

5. **Access the Web Interface**
   - Open `http://localhost:3000` in your browser
   - Use the interactive playground to test your setup

## Setting Up Your Telegram Bot (Detailed Guide)

### Step 1: Create a Bot
1. Open Telegram and search for `@BotFather`
2. Start a conversation and send `/newbot`
3. Choose a name for your bot (e.g., "My Notification Bot")
4. Choose a username ending in "bot" (e.g., "mynotification_bot")
5. Save the **Bot Token** that BotFather provides

### Step 2: Get Your Chat ID

#### Method 1: Using getUpdates (Recommended)
1. Send any message to your bot
2. Open this URL in your browser (replace YOUR_BOT_TOKEN):
   ```
   https://api.telegram.org/bot{YOUR_BOT_TOKEN}/getUpdates
   ```
3. Look for the "chat" object in the JSON response
4. Copy the "id" value (this is your chat ID)

#### Method 2: Using Helper Bots
- **Personal Chat**: Message `@userinfobot`
- **Groups**: Add `@getidsbot` to your group
- **Channels**: Forward a message to `@getidsbot`

### Step 3: Test Your Setup
Use any of the code snippets above or visit our web playground to send a test message.

## API Reference

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Web interface and documentation |
| `POST` | `/send` | Send message using configured credentials |
| `POST` | `/test` | Send message with custom credentials (for testing) |

### Request Format

#### /send (Uses environment variables)
```json
{
  "message": "Your notification message"
}
```

#### /test (Custom credentials)
```json
{
  "botToken": "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11",
  "chatId": "-1001234567890",
  "message": "Your test message"
}
```

### Response Format

#### Success Response
```json
{
  "success": true,
  "data": null,
  "message": "Message sent successfully"
}
```

#### Error Response
```json
{
  "success": false,
  "message": "Error description"
}
```

## Integration Examples

### With Monitoring Systems

#### Prometheus AlertManager
```yaml
route:
  receiver: 'telegram-notifications'

receivers:
- name: 'telegram-notifications'
  webhook_configs:
  - url: 'http://your-server:3000/send'
    send_resolved: true
```

#### GitHub Actions
```yaml
- name: Notify Telegram
  run: |
    curl -X POST http://your-server:3000/send \
      -H "Content-Type: application/json" \
      -d '{"message": "Build completed: ${{ job.status }}"}'
```

#### Docker Health Check
```bash
#!/bin/bash
if ! docker ps | grep -q my-app; then
  curl -X POST http://localhost:3000/send \
    -H "Content-Type: application/json" \
    -d '{"message": "🚨 Docker container my-app is down!"}'
fi
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `TELEGRAM_BOT_TOKEN` | Your Telegram bot token from BotFather | Yes |
| `TELEGRAM_CHAT_ID` | Target chat ID for messages | Yes |
| `PORT` | Server port (default: 3000) | No |

## Security & Privacy

- 🔒 **Credentials are never stored**: All bot tokens and chat IDs are processed in memory only
- 🛡️ **No logging of sensitive data**: Your credentials are never written to logs
- 🌐 **HTTPS ready**: Can be deployed with SSL/TLS for secure communication
- 🔐 **Environment-based config**: Secrets are managed through environment variables

## Deployment

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

### Heroku
```bash
git push heroku main
heroku config:set TELEGRAM_BOT_TOKEN=your_token
heroku config:set TELEGRAM_CHAT_ID=your_chat_id
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Support

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/CoderLovely08/Telegram-Notifier/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/CoderLovely08/Telegram-Notifier/discussions)
- 📖 **Documentation**: Use the web interface at `/` for interactive docs

---

**Made with ❤️ for developers who love simple, effective notification systems.**