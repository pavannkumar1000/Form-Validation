document.getElementById("registerForm").addEventListener("submit", function(e){
    e.preventDefault(); 

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("mailId").value.trim();
    let password = document.getElementById("password").value.trim();
    let repassword = document.getElementById("repassword").value.trim();
    let message = document.getElementById("message");


    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 

    if(name.length < 3){
        message.textContent = "❌ Name must be at least 3 characters!";
        message.style.color = "red";
        return;
    }

   
    if(!emailPattern.test(email)){
        message.textContent = "❌ Invalid email format!";
        message.style.color = "red";
        return;
    }

  
    if(password.length < 8){
        message.textContent = "❌ Password must be at least 8 characters!";
        message.style.color = "red";
        return;
    }

   
    if(password !== repassword){
        message.textContent = "❌ Passwords do not match!";
        message.style.color = "red";
        return;
    }

    
    message.textContent = "✅ Registration successful!...";
    message.style.color = "limegreen";
});
