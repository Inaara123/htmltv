// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBLeHVX_PVKoXuIGBBjf-Mv1S8Cn2oWM18",
    authDomain: "qezev6.firebaseapp.com",
    databaseURL: "https://qezev6-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "qezev6",
    storageBucket: "qezev6.appspot.com",
    messagingSenderId: "446370519683",
    appId: "1:446370519683:web:de812b56512fb9556e19b6",
    measurementId: "G-QVWB7G4L8W"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get elements
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var loaderDiv = document.getElementById('loader');
var errorMessageParagraph = document.getElementById('error-message');
var loginButton = document.getElementById('loginBtn');

// Handle login function
loginButton.addEventListener('click', function() {
    var email = emailInput.value;
    var password = passwordInput.value;

    // Clear previous error message
    errorMessageParagraph.textContent = '';
    
    // Show loader
    loaderDiv.style.display = 'block';

    // Sign in with email and password
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(userCredential) {
            // Signed in successfully
            var user = userCredential.user;
            console.log("User signed in:", user);
            // Redirect to home.html after successful login
            window.location.href = 'home.html';
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error("Login error:", errorCode, errorMessage);

            // Display error message
            errorMessageParagraph.textContent = errorMessage;
        })
        .finally(function() {
            // Hide loader
            loaderDiv.style.display = 'none';
        });
});

// Check if user is already signed in
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in, redirect to home page
        console.log("User already signed in:", user);
        window.location.href = 'home.html';
    } else {
        console.log("No user is signed in.");
    }
});

// Add some console logs to help with debugging
console.log("Firebase initialized");
console.log("Login button:", loginButton);