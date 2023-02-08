const chatForm = document.querySelector("#chat-form");
const chatOutput = document.querySelector("#chat-output");
const chatInput = document.querySelector("#chat-input");

let catCount = 0;

chatForm.addEventListener("submit", e => {
  e.preventDefault();

  // Get the user's input
  const message = chatInput.value;

  // Append the user's message to the chat area
  chatOutput.innerHTML += `<p><strong>You:</strong> ${message}</p>`;

  // ChatGPT's response
  if (message.toLowerCase() === "cat") {
    catCount++;
    if (catCount % 5 === 0) {
      chatOutput.innerHTML += `<p><strong>CatGPT:</strong> hissing!😾</p>`;
    } else {
      chatOutput.innerHTML += `<p><strong>CatGPT:</strong> meow meow😸</p>`;
    }
  }

  // Clear the input field
  chatInput.value = "";
});


