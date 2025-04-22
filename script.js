function updateCountdown() {
    let deadline = new Date(new Date().getTime() + 3 * 60 * 60 * 1000); // 3 hours from now
    let countdownElement = document.getElementById('countdown');

    let interval = setInterval(function () {
      let now = new Date().getTime();
      let distance = deadline - now;

      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownElement.innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

      if (distance < 0) {
        clearInterval(interval);
        countdownElement.innerHTML = "Offer Expired";
      }
    }, 1000);
  }

  // Initialize the countdown timer
  updateCountdown();