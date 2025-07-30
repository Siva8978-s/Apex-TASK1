document.addEventListener('DOMContentLoaded', function() {
    const demoBtn = document.getElementById('demo-btn');
    const demoText = document.getElementById('demo-text');
    
    demoBtn.addEventListener('click', function() {
        alert("yes, you clicked the button!");
        
        demoText.textContent = "You clicked the button! This is JavaScript in action!";
        
        
    });
});