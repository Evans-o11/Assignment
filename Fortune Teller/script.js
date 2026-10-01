const fortunes = [
  "Your inner fire will turn inward, boiling the blood in your veins until you beg for the chill of the grave.",
  "A headless ram walks in your future dreams; when it turns to face you, it wears your own skin.",
  "The courage you prize so deeply will abandon you in a dark room, leaving only a wet, heavy breathing behind your ear.",
  "The earth beneath your feet will soften, yielding not to roots, but to grasping white fingers that know your name.",
  "You will swallow something precious and cold in your sleep; it will take root in your throat and whisper to you by noon.",
  "Your hands will grow heavy and thick, turning to clay while you are still alive enough to watch them crack.",
  "The voice inside your head will stop agreeing with you, then it will begin screaming in a language your tongue cannot form.",
  "In a crowded room, every mirror will show you standing completely still while your reflection smiles and slits its throat.",
  "Your twin soul died before you were born, and tonight, it is crawling up the stairs to reclaim its half of your lungs.",
  "Your shell will turn to dry bone, and the tide will rise inside your lungs until you cough up salt and rusted iron.",
  "You will find a photograph of your childhood home in your pocket—only the windows are weeping thick, black pitch.",
  "The moon will pull the iron from your blood, drawing a thin red line from your pores toward the night sky.",
  "Your golden crown will melt into your scalp, sealing your eyes open so you can stare forever at the dark ceiling.",
  "They will cheer your name in the dark, but the voices belong to things without jaws or teeth.",
  "Your reflection will burn away to ash in every polished surface, leaving only a pair of hollow, smoking sockets.",
  "The small, dark stain on your floor is not dirt; it is a mouth, and it is slowly learning how to pronounce your sins.",
  "You will spend your final hour scrubbing a spot of blood that flows endlessly from your own shadow.",
  "Every bone in your skeleton will itch with a cold precision, as if an insect is carving numbers into your shins.",
  "The scales in your mind will tip toward rot, weighing your beating heart against a handful of cemetery dust—and finding you heavier.",
  "You will look into the eyes of your lover and see two empty wells where your own drowned face floats at the bottom.",
  "The balance of the room will shift when the thing standing in your closet decides to step out into the light.",
  "Your sting will turn upon yourself, injecting a venom that makes you forget who you were before the dark took hold.",
  "You will dig into the damp earth of your past and unearth a beating heart that wears your wedding ring.",
  "The shadows you love so well will curdle, growing teeth and pulling you down into the floorboards inch by inch.",
  "Your grand arrow will fly true into the night, returning seconds later wet with the blood of something that was hiding behind your back.",
  "The horizon you chase will fold inward like a wet eyelid, trapping you in a vast and silent red desert.",
  "You will walk off the edge of the world, not into open air, but onto the teeth of a sleeping god.",
  "Your great mountain will turn to a pile of whitening skulls, and you will be forced to climb them barefoot in the frost.",
  "The heavy stone around your neck will crack open to reveal a nest of blind, writhing things that feed on your ambition.",
  "You will build a fortress of iron and bone, only to realize the lock is on the inside and you swallowed the key.",
  "The stars above will rearrange themselves into a cage, and you will realize the sky is just a lid on a jar.",
  "Your brilliant mind will short-circuit in the dark, leaving you with the screams of everyone who ever died forgotten.",
  "A cold wind from nowhere will blow through your bones, carrying the sound of your own voice screaming for help from tomorrow.",
  "The ocean will dry up inside your dreams, leaving you stranded on a seabed paved with the teeth of your ancestors.",
  "You will drown in a cup of water on your kitchen table, pulled down by hair that is not your own.",
  "The fish beneath the dark ice are watching you; tonight, they will begin to tap on the glass of your bedroom windows.",
];

// Create another array called pastReadings which starts completely empty.
const pastReadings = [];

// Grab elements from the page
const nameInput = document.getElementById("name");
const signSelect = document.getElementById("sign");
const revealBtn = document.getElementById("revealBtn");
const destinyContent = document.getElementById("destinyContent");
const historyList = document.getElementById("history");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const sortBtn = document.getElementById("sortBtn");
const searchResult = document.getElementById("searchResult");
const archiveList = document.getElementById("archive");
const resetBtn = document.getElementById("resetBtn");

// Reaveal My fate Button

function showModal(message) {
  document.getElementById("modalMessage").textContent = message;
  document.getElementById("customModal").classList.add("show");
}

function closeModal() {
  document.getElementById("customModal").classList.remove("show");
}

revealBtn.addEventListener("click", function () {
  const userName = nameInput.value.trim();
  if (userName === "") {
    showModal("Mortal, you must enter your name.");
  } else {
    const luckScore = Math.floor(Math.random() * 100) + 1;
    const status = luckScore > 50 ? "Blessed" : "Cursed";

    //   console.log(userName)
    //   console.log("MORTAL YOUR Cosmic Luck Score is = " , luckScore);
    //   console.log( "DEAR MORTAL YOU ARE... " + status)
    destinyContent.innerHTML = "";
    const summary = document.createElement("p");
    summary.className = "summary";
    summary.textContent = `${userName}, born under ${signSelect.value}. Your Cosmic Luck Score is ${luckScore}. You are `;
    const statusBadge = document.createElement("span");
    statusBadge.className = "status " + status;
    statusBadge.textContent = status; 
    summary.appendChild(statusBadge);


    const reading = [];
    while (reading.length < 3) {
      const index = Math.floor(Math.random() * fortunes.length);
      if (!reading.includes(fortunes[index])) {
        reading.push(fortunes[index]);
      }
    }

    destinyContent.appendChild(summary);
    const tray = document.createElement("div");
    tray.className = "cards";
    const titles = ["past", "present", "future"];

    for (let i = 0; i < reading.length; i++) {
      const box = document.createElement("div");
      box.className = "card";
      const fortuneText = document.createElement("p");
      fortuneText.textContent = reading[i];
      const label = document.createElement("small");
      label.textContent = titles[i];
      box.appendChild(label);
      box.appendChild(fortuneText);
      tray.appendChild(box);
    }
    destinyContent.appendChild(tray);

    const readingData = {
      userName: userName,
      sign: signSelect.value,
      luckScore: luckScore,
      status: status,
      fortunes: reading
    };
    pastReadings.push(readingData);
    historyList.innerHTML = "";
    for (let i = 0; i < pastReadings.length; i++) {
      const item = document.createElement("li")
      item.textContent = `${pastReadings[i].userName} (${pastReadings[i].sign}) Scored ${pastReadings[i].luckScore}, ${pastReadings[i].status}`;
         historyList.appendChild(item);
    }
   
    // console.log(pastReadings);
  }
});
function showArchive(list, keyword = "") {
  archiveList.innerHTML = "";
  
  for (let i = 0; i < list.length; i++) {
    const item = document.createElement("li");
    const start = list[i].toLowerCase().indexOf(keyword);
    const before = list[i].slice(0, start);
    const middle = list[i].slice(start, start + keyword.length);
    const after = list[i].slice(start + keyword.length);
    archiveList.appendChild(item);

    if (keyword === "") {
      item.textContent = list[i];
    } else {
      item.textContent = before;
      const glow = document.createElement("mark");
      glow.textContent = middle;
      item.appendChild(glow);
      const afterfuckingkeyword = document.createTextNode(after);
      item.appendChild(afterfuckingkeyword);
    }
  }
  
}
showArchive(fortunes); 

// Search button
searchBtn.addEventListener("click", function () {
  const keyword = searchInput.value.trim().toLowerCase();
  const match = fortunes.find(function (fortune) {
    return fortune.toLowerCase().includes(keyword);
  });
  if (keyword === "") {
    searchResult.textContent = "Type a word to search the cosmos.";
  } else if (match) {
    searchResult.textContent = "Best match: " + match;
  } else {
    searchResult.textContent = "Nothing matches " + keyword;
  }
  const matches = fortunes.filter(function (fortune) {
    return fortune.toLowerCase().includes(keyword);
  });
  showArchive(matches, keyword);
  
  
    
  
});
// sortBtn
sortBtn.addEventListener("click", function () {
  const sorted = [...fortunes].sort();
  showArchive(sorted);
});
resetBtn.addEventListener("click", function () {
  nameInput.value = "";
  signSelect.selectedIndex = 0;
  destinyContent.innerHTML ='<p class="empty">Enter your name and reveal your fate to fill this space.</p>';
  historyList.innerHTML =
    '<li class="empty" style="list-style: none">No readings yet this session.</li>';
  pastReadings.length = 0;
  searchInput.value = "";
  searchResult.textContent = "";
  showArchive(fortunes);
});

// Math.floor(Math.random() * fortunes.length);



// Rebuilt Oracle's Table with 3-card readings, search, sort and reset

// - Switch from form submit to a click listener on the Reveal button
// - Expand the fortunes array from 8 to 36 entries
// - Pick 3 distinct fortunes per reading (while loop + includes + push)
// - Build the summary and Past/Present/Future cards with DOM methods
//   instead of innerHTML strings
// - Show Blessed/Cursed as a styled status pill
// - Save each reading to pastReadings as an object and render the
//   Past Readings list
// - Add Explore the Cosmos: archive list, case-insensitive search with
//   find() and filter(), keyword highlighting with <mark>, and an
//   empty-search message
// - Add Sort A to Z using a sorted copy of the fortunes array
// - Add a Reset button that restores the page to its starting state
// - Update index.html and style.css for the new sections and components
