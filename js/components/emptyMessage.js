export function displayMessage(messageType, message, messages) {
    const element = document.querySelector(messages);

    element.innerHTML = `<div class="message ${messageType}">${message}</div>`;
}
