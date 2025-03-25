import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-database.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnWBqFIDzhpfOc32wdLDScpVj0PL4gaWg",
    authDomain: "database-83f84.firebaseapp.com",
    databaseURL: "https://database-83f84-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "database-83f84",
    storageBucket: "database-83f84.appspot.com",
    messagingSenderId: "1036124202854",
    appId: "1:1036124202854:web:c9c59daa131cc0e0008aa7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const messagesRef = ref(database, "messages");

// Debugging: Log if Firebase connects
console.log("Firebase Initialized");

// Send message to Firebase
document.getElementById("sendButton").addEventListener("click", () => {
    const input = document.getElementById("messageInput");
    if (input.value.trim() !== "") {
        push(messagesRef, input.value)
            .then(() => {
                console.log("Message sent to Firebase:", input.value);
                input.value = ""; // Clear input
            })
            .catch(error => console.error("Error sending message:", error));
    } else {
        console.warn("Empty message not sent.");
    }
});

// Load messages from Firebase
onValue(messagesRef, (snapshot) => {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = ""; // Clear previous content
    snapshot.forEach((childSnapshot) => {
        const text = childSnapshot.val();
        const textBox = document.createElement("div");
        textBox.classList.add("gallery-item");
        textBox.textContent = text;
        gallery.appendChild(textBox);
    });
    console.log("Messages loaded from Firebase");
});
