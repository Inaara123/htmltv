// Your web app's Firebase configuration
const firebaseConfig = {
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
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loaderDiv = document.getElementById('loader');
const errorMessageParagraph = document.getElementById('error-message');
const loginButton = document.getElementById('loginBtn');

// Handle login function
loginButton.addEventListener('click', async () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    // Clear previous error message
    errorMessageParagraph.textContent = '';
    
    // Show loader
    loaderDiv.style.display = 'block';

    try {
        // Sign in with email and password
        await firebase.auth().signInWithEmailAndPassword(email, password);
        
        // Redirect to home.html after successful login
        window.location.href = 'home.html';
        
    } catch (error) {
        // Handle Errors here.
        const errorMessage = error.message;

        // Display error message
        errorMessageParagraph.textContent = errorMessage;

    } finally {
        // Hide loader
        loaderDiv.style.display = 'none';
    }
});

// Check if user is already signed in
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, redirect to home page
        window.location.href = 'home.html';
    }
});