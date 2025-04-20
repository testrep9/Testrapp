// register.js
import { auth, db } from './firebase.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

document.getElementById("registerForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const username = document.getElementById("username").value;
  const fullName = document.getElementById("fullname").value;
  const phone = document.getElementById("phone").value;
  const currencyCode = document.getElementById("currency").value;

  // Map currency code to symbol
  const currencySymbols = {
    USD: "$",
    INR: "₹",
    EUR: "€",
    GBP: "£",
    AUD: "A$",
    CAD: "C$"
    // Add more as needed
  };

  const currency = currencySymbols[currencyCode] || currencyCode;
  const registrationDate = new Date().toISOString();

  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    const uid = userCred.user.uid;

   
await setDoc(doc(db, "users", uid), {
  email,
  username,
  fullName,
  phone,
  currency: currencyCode, // Store the code, not the symbol
  balance: 0,
  registrationDate
});


    alert("Registration successful! Redirecting to login...");
    window.location.href = "login.html";

  } catch (error) {
    alert("Error: " + error.message);
  }
});
