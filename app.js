let userName = "Sam";
let age = 20;

if (age >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// ================= Part 2: Functions =================
// Function 1: Show a greeting message
function showMessage() {
  document.getElementById("message").textContent = "Hello " + userName + "! Welcome to JavaScript.";
}

// Function 2: Reset the counter
function resetCounter() {
  counter = 0;
  document.getElementById("counterValue").textContent = counter;
}

// ================= Part 3: Loops =================
// Loop 1: For loop to display numbers 1–5
let numberList = document.getElementById("numberList");
for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.textContent = "Number " + i;
  numberList.appendChild(li);
}

// Loop 2: While loop example (counting down)
let countdown = 3;
while (countdown > 0) {
  console.log("Countdown: " + countdown);
  countdown--;
}

// ================= Part 4: DOM Interactions =================
let counter = 0;

document.getElementById("showMessageBtn").addEventListener("click", showMessage);

document.getElementById("incrementBtn").addEventListener("click", function() {
  counter++;
  document.getElementById("counterValue").textContent = counter;
});

document.getElementById("resetBtn").addEventListener("click", resetCounter);