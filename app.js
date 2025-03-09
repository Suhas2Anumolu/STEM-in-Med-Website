// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Authentication event listeners
document.getElementById("login").addEventListener("click", () => {
    const email = prompt("Enter your email:");
    const password = prompt("Enter your password:");
    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert("Login successful!");
        })
        .catch(error => {
            alert("Error: " + error.message);
        });
});

document.getElementById("register").addEventListener("click", () => {
    const email = prompt("Enter your email:");
    const password = prompt("Create a password:");
    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert("Registration successful!");
        })
        .catch(error => {
            alert("Error: " + error.message);
        });
});
