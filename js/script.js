document.addEventListener("DOMContentLoaded", function(event) { 
    const timeContainer = document.getElementById("time-container");
    const BIRTH_DAY_DATE = new Date('April 24, 1995 10:00:00');
    const intlNumberFormatter = new Intl.NumberFormat("en-US");
    const displaySeconds = () => {
            const now = new Date();
            const difference = Math.floor(
        (now.getTime() - BIRTH_DAY_DATE.getTime()) / 1000
    );
            timeContainer.innerText = intlNumberFormatter.format(difference);
    }

    displaySeconds();

    setInterval(displaySeconds, 1000);

});


