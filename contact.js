import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
            import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
            
            // Your web app's Firebase configuration
            const firebaseConfig = {
                apiKey: "AIzaSyCK4CN26m6Jwl-3lAQUN6OR9E2a4KvMfRY",
                authDomain: "creative-login-ff046.firebaseapp.com",
                projectId: "creative-login-ff046",
                storageBucket: "creative-login-ff046.appspot.com",
                messagingSenderId: "209523988745",
                appId: "1:209523988745:web:a66b3ce30e30a365bb9bd8"
            };
    
            // Initialize Firebase
            const app = initializeApp(firebaseConfig);
            const db = getDatabase(app);
    
            document.getElementById("submit").addEventListener('click', function(e) {
                e.preventDefault();
                set(ref(db, 'contacts/' + document.getElementById("fullName").value), {
                    fullName: document.getElementById("fullName").value,
                    emailAddress: document.getElementById("emailAddress").value,
                    mobileNumber: document.getElementById("mobileNumber").value,
                    emailSubject: document.getElementById("emailSubject").value,
                    message: document.getElementById("message").value
                });
                alert("Message Sent Successfully!");
            });