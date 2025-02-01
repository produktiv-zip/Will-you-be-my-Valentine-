const messages = [
    "Bist du sicher?",
    "Wirklich sicher??",
    "Ganz, ganz sicher?",
    "Manno, bitte...",
    "Denk einfach mal drüber nach!",
    "Wenn du nein sagst bin ich sehr traurig :(...",
    "Ich werde sehr traurig sein...",
    "Okay, unfassbar stark traurig...",
    "Ok in Ordnung, ich hör auf zu fragen...",
    "Spas, bitte asg einfach ja! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
