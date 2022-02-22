document.addEventListener("DOMContentLoaded", function(event) { 
      
    // Displaying how many seconds passed from the day I started to code
      const timeContainer = document.getElementById("time-container");
      const FIRST_CODE_DAY = new Date('November 20, 2021 10:00:00');
      const intlNumberFormatter = new Intl.NumberFormat("en-US");
      const displaySeconds = () => {
              const now = new Date();
              const difference = Math.floor((now.getTime() - FIRST_CODE_DAY.getTime()) / 1000);
              timeContainer.innerText = intlNumberFormatter.format(difference);
      }
      displaySeconds();
      setInterval(displaySeconds, 1000);

    // Change color of heart on every refresh page

    const heart = document.querySelector(".fa-heart");
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    heart.style.color = "#" + randomColor;
   
});


