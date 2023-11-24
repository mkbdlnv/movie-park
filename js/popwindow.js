// Функция для открытия и закрытия всплывающего окна чата
function toggleChat() {
    var chatPopup = document.getElementById('chat-popup');
    chatPopup.style.display = (chatPopup.style.display === 'none' || chatPopup.style.display === '') ? 'block' : 'none';
}


function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var message = messageInput.value;
    window.location.href = "helpform.html";
}
