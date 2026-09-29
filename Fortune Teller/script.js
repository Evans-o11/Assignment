// Here are 8 horror fortune strings written in that same mysterious style:
// • A locked door in your home will open while you sleep.
// • Your reflection will stop copying your movements tonight.
// • The knock at your front door will come from someone who died last year.
// • Something is breathing in the empty space beneath your bed.
// • A whisper in the dark will call you by a name only your mother knew.
// • The voice on your baby monitor is not your child's.
// • Your shadow on the wall will grow a head of its own.
// • You will count four footsteps on the stairs when only three people live in your house.
const fortunes = [
  "A locked door in your home will open while you sleep",
  "Your reflection will stop copying your movements tonight",
  "The knock at your front door will come from someone who died last year",
  "Something is breathing in the empty space beneath your bed",
  "A whisper in the dark will call you by a name only your mother knew",
  "The voice on your baby monitor is not your child's",
  "Your shadow on the wall will grow a head of its own",
  "You will count four footsteps on the stairs when only three people live in your house",
];
const pastReadings = [];

const fateForm = document.getElementById("fateForm");
const nameInput = document.getElementById("userName");
const zodiacSelect = document.getElementById("zodiacSign");
const destinyOutput = document.getElementById("destinyOutput");

fateForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const userName = nameInput.value.trim();
  const zodiac = zodiacSelect.value;

  if (userName === "") {
    alert("Mortal, you must enter your name.");
    return;
  }
 
  const cosmicLuckScore = Math.floor(Math.random() * 100) + 1;
  const status = cosmicLuckScore > 50 ? "Blessed" : "Cursed";

  destinyOutput.innerHTML = `
    <p>${userName} of ${zodiac}, the stars have spoken.</p>
    <p>Cosmic Luck Score: ${cosmicLuckScore}</p>
    <p>Status: ${status}</p>
  `;

  const tarotCard = fortunes[Math.floor(Math.random() * fortunes.length)];
  destinyOutput.innerHTML += `<p>${tarotCard}</p>`;
  pastReadings.push({ userName, zodiac, cosmicLuckScore, status, tarotCard });
});
 










    