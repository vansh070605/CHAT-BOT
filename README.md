# ChatBot

A simple web-based chatbot that allows users to interact with an AI-powered bot. The chatbot takes user input, processes it, and returns a response.

## Features

- Real-time user interaction
- Auto-scrolling chat window
- Clean and responsive UI
- Backend integration using fetch API

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Flask (Python)
- **API**: Custom endpoint for chatbot response

## Setup and Installation

### 1. Clone the Repository
```bash
    git clone https://github.com/vansh070605/CHAT-BOT.git
    cd CHAT-BOT
```

### 2. Install Dependencies (Backend - Flask)
If using Python and Flask for the backend:
```bash
    pip install flask
```

### 3. Run the Flask Server
```bash
    python app.py
```
By default, the server will run on `http://127.0.0.1:5000/`

### 4. Open the Chatbot in Your Browser
Simply open `index.html` in your preferred web browser.

## Usage
1. Type a message in the input field.
2. Press `Enter` or click the send button.
3. The bot will process your message and respond accordingly.

## File Structure
```
📂 CHAT-BOT
├── 📂 static
│   ├── 📜 styles.css  # Chatbot UI Styling
│   ├── 📜 script.js   # Chatbot Logic
├── 📂 templates
│   ├── 📜 index.html  # Frontend UI
├── 📜 app.py          # Backend Logic (Flask API)
└── 📜 README.md       # Project Documentation
```

## Future Enhancements
- Improve NLP capabilities for better responses
- Add authentication for personalized chatbot experience
- Store and analyze past conversations
- Deploy on a cloud platform

## Contributing
Feel free to fork this repository and submit pull requests with improvements!

---

### Author
**Vansh Agrawal**
- GitHub: [@vansh070605](https://github.com/vansh070605)
