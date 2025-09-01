
    const dice = document.getElementById("dice");
    const history = document.getElementById("history");
    const diceFaces = ["⚀","⚁","⚂","⚃","⚄","⚅"];

    let lastRoll = null;
    function rollDice() {
      dice.style.transform = "rotate(360deg)";
      setTimeout(() => {
        dice.style.transform = "rotate(0deg)";
        const roll = Math.floor(Math.random() * 6);
        dice.textContent = diceFaces[roll];
       
            if (lastRoll !== null) {
              const lastEntry = document.createElement("p");
              lastEntry.textContent = "Last round: " + (lastRoll + 1);
              // Remove any existing "Last round" entry
              if (
                history.firstChild &&
                history.firstChild.textContent.startsWith("Last round:")
              ) {
                history.removeChild(history.firstChild);
              }
              history.prepend(lastEntry);
            }

            lastRoll = roll;

             const entry = document.createElement("p");
             entry.textContent = "You rolled: " + (roll + 1);
             history.prepend(entry);
             
        //Adding functionality of when 6 hits.
        if (roll === 5) {
            alert("Congratulations! You rolled a 6!");
        }
      }, 300);
    }
    function resetDice() {
      dice.textContent = "⚀";
      history.innerHTML = "";
    }