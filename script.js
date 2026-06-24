// Guest Name from URL
const params = new URLSearchParams(window.location.search);
const guest = params.get("guest");

if (guest) {
    document.getElementById("guestName").innerText = decodeURIComponent(guest);
}

// Countdown
const weddingDate = new Date("August 3, 2026 11:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();


// Falling Leaves Animation

function createLeaf() {

    const leaf = document.createElement("div");

    leaf.classList.add("leaf");

    leaf.style.left = Math.random() * 100 + "vw";

    leaf.style.animationDuration =
        (8 + Math.random() * 8) + "s";

    leaf.style.opacity =
        Math.random() * 0.5 + 0.3;

    document.body.appendChild(leaf);

    setTimeout(() => {
        leaf.remove();
    }, 16000);
}

setInterval(createLeaf, 500);
