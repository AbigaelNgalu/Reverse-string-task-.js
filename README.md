# Reverse-string-task
/This project showcases multiple ways to reverse a string using JavaScript. It's perfect for beginners exploring string manipulation, loops, recursion, and built-in methods.

---

## 🚀 How It Works

Three methods are implemented:

### 1. 🧰 Built-in Methods
```javascript
str.split('').reverse().join('');

# 🔄 Reverse String in JavaScript

This project showcases multiple ways to reverse a string using JavaScript. It's perfect for beginners exploring string manipulation, loops, recursion, and built-in methods.

---

## 📁 Project Structure

- `reverseString.js` – Contains all reversal methods.
- `index.html` – (Optional) A simple webpage to test the functions.
- `README.md` – You're reading it!

---

## 🚀 How It Works

Three methods are implemented:

### 1. 🧰 Built-in Methods
```javascript
str.split('').reverse().join('');


2. 🔁 Loop
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}


3. 🧠 Recursion
reverseString(str.substr(1)) + str.charAt(0);


Each method is wrapped in a function and can be tested independently.

🛠️ How to Run
🔧 Node.js
node reverseString.js


🌐 Browser
Open index.html in your browser and test interactively.

🎯 Use Cases
- Interview prep
- Learning string manipulation
- Practicing recursion and loops
- Building interactive coding tutorials


---


