const messagesDiv = document.getElementById('messages');

function sendMessage() {
  const userMessage = document.getElementById('userInput').value;
  if (!userMessage.trim()) return;

  // यूजर का मैसेज दिखाओ
  messagesDiv.innerHTML += <p><b>You:</b> ${userMessage}</p>;
  document.getElementById('userInput').value = '';

  // बॉट का जवाब (अभी डमी, बाद में असली AI से जोड़ेगे)
  setTimeout(() => {
    messagesDiv.innerHTML += <p><b>Bot:</b> Hello! You said: ${userMessage}</p>;
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }, 500);
}
