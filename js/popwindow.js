// Функция для открытия и закрытия всплывающего окна чата
function toggleChat() {
    var chatPopup = document.getElementById('chat-popup');
    chatPopup.style.display = (chatPopup.style.display === 'none' || chatPopup.style.display === '') ? 'block' : 'none';
}

// Функция для отправки сообщения (в данном примере просто выводим в консоль)
function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var message = messageInput.value;
    console.log('Отправлено сообщение: ' + message);
    // Перенаправление на другую страницу (замените 'новая-страница.html' на ваш URL)
    window.location.href = "helpform.html";
}