📘 Student Learning - DSA App 💻
Welcome to the DSA Learning App, a Streamlit-based interactive platform designed to help students master Data Structures and Algorithms through hands-on practice and AI-powered assistance.

🚀 Overview
This application provides a curated set of DSA challenges across various categories like Arrays, Strings, Linked Lists, and Graphs. Whether you prefer solving problems independently or with the help of an AI tutor, this app adapts to your learning style.

⚡ Two Dynamic Learning Modes
The app features a toggle to switch between two distinct environments depending on your needs and connectivity.

🌐 AI Assist Mode (Online)
Unlock the power of Generative AI by entering your DeepSeek API Key.

Intelligent Validation: Uses the deepseek-coder model to strictly analyze your logic, not just the output.

Dynamic Hinting: Generates 6 custom, simple English hints specifically for the problem you are stuck on.

Strict Grading: The AI acts as a mentor, checking for syntax issues and algorithmic efficiency.

🔌 Offline Mode
No API key? No problem! The Offline Mode relies on local logic and the internal database.

Local Code Checker: Uses a Python exec() environment to run your code against predefined sample inputs and compare them to expected outputs.

Hardcoded Hints: Access the curated "Pro-Hints" stored directly in the dsa_questions.json file.

Instant Solutions: Still get access to optimized code and complexity analysis without an internet connection.

🛠️ Tech Stack
Frontend/UI: Streamlit

Language: Python

AI Engine: DeepSeek-Coder API

Data Storage: JSON

📂 Project Structure
dsa_questions.json: The heart of the app. It contains IDs, difficulty levels, sample inputs, expected outputs, hints, and optimized solutions with complexity analysis.

my_project.py: The main execution script. It handles session states (like tracking your failed attempts), local code execution using contextlib, and API requests.

💡 How the App Works (Interactively)
Select Your Topic: Pick a category from the dropdown menu.

Choose a Challenge: Read the task and study the sample input/output.

Code Editor: Implement your logic within the pre-filled function signature.

Run & Validate:

Click Run Code.

If correct, you’ll see a success message with Time/Space complexity.

If wrong, your "Attempt Counter" increases.

3-Strike Rule: If you fail 3 times, the app automatically reveals the Optimized Solution and a clear 5-line explanation to help you learn from your mistakes.

📥 Getting Started
1. Prerequisites
Bash

pip install streamlit requests
2. Launch
Bash

streamlit run my_project.py
Happy Coding! 💻✨

Would you like me to create a sample "Contribution" guide if you want others to add questions to your JSON file?
