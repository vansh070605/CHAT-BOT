from flask import Flask, render_template, request, jsonify
import google.generativeai as genai

# Initialize Flask app
app = Flask(__name__)

# Configure the API key
genai.configure(api_key="AIzaSyBvAg1maizCFqWaZ1odqh7Nxf2-5-wYhZM")

# Create a single instance of the model
model = genai.GenerativeModel("gemini-pro")

# Function to get chatbot response
def get_gemini_response(user_input):
    try:
        response = model.generate_content(user_input)
        return response.text if hasattr(response, "text") else "I couldn't understand that."
    except Exception as e:
        print(f"Error: {e}")  # Debugging
        return "Sorry, I couldn't process that."

# Flask routes
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_message = data.get("message", "").strip()

    if not user_message:
        return jsonify({"reply": "Please enter a message."})

    bot_reply = get_gemini_response(user_message)
    return jsonify({"reply": bot_reply})

if __name__ == "__main__":
    app.run(debug=True)
