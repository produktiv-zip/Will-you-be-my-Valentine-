const messages = [
    "Bist du sicher?",
    "Wirklich sicher??",
    "Ganz, ganz sicher?",
    "Manno, bitte...",
    "Komm gönn!",
    "Wenn ich du wäre, würde ich ja sagen...",
    "Kennst du eigentlich die Schwester von Phineas und Ferb?",
    "Candice...",
    "Schere, ich hör schon auf...",
    "Spaß, sag einfach ja! Bitte❤️"
    "Grrr!"
    "Ich bin dein größter Fan..."
    "P*ss dich du H*rensohn!"
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
