
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', Arial, sans-serif;
  background: #1c1c1c;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  position: relative;
  text-align: center;
}

.moving-circle {
  position: absolute;
  width: 300px;
  height: 300px;
  background: conic-gradient(red, orange, yellow, green, blue, indigo, violet, red);
  filter: blur(80px);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
}

header h1 {
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
  text-shadow: 0 5px 15px rgba(255, 255, 255, 0.6);
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.image-placeholder {
  width: 100%;
  max-width: 300px;
  height: 150px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ddd;
  font-style: italic;
  font-size: 1rem;
}

.input-container {
  margin-bottom: 20px;
  width: 100%;
  max-width: 300px;
  position: relative;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 2px solid transparent;
  border-radius: 8px;
  background-color: #fff;
  color: #333;
  text-align: center;
  position: relative;
  z-index: 1;
  transition: transform 0.3s, box-shadow 0.3s;
  animation: rainbowBorder 3s infinite linear; /* การเปลี่ยนสีกรอบ */
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3); /* เพิ่มเงาครั้งแรก */
}

@keyframes rainbowBorder {
  0% {
    border-color: red;
    box-shadow: 0 0 15px red;
  }
  14% {
    border-color: orange;
    box-shadow: 0 0 15px orange;
  }
  28% {
    border-color: yellow;
    box-shadow: 0 0 15px yellow;
  }
  42% {
    border-color: green;
    box-shadow: 0 0 15px green;
  }
  57% {
    border-color: blue;
    box-shadow: 0 0 15px blue;
  }
  71% {
    border-color: indigo;
    box-shadow: 0 0 15px indigo;
  }
  85% {
    border-color: violet;
    box-shadow: 0 0 15px violet;
  }
  100% {
    border-color: red;
    box-shadow: 0 0 15px red;
  }
}

input:focus {
  outline: none;
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.8); /* เงารุ้งเมื่อ focus */
}

.button-container {
  margin-bottom: 20px;
  width: 100%;
  max-width: 300px;
}

button {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  font-weight: bold;
  background: #333;
  color: white;
  border: none;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
}

button:active {
  transform: scale(0.95);
}

button::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);
  filter: blur(15px);
  border-radius: inherit;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

button:hover::after {
  opacity: 1;
}

.result-container {
  margin-top: 20px;
  width: 100%;
  max-width: 300px;
}

#result {
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  text-align: left;
}
