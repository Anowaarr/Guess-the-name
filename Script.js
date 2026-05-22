// Game State variables
        let player1 = "", player2 = "", targetNumber = null, chances = 3;

        // Shortcut function to grab elements and toggle screens easily
        const $ = id => document.getElementById(id);
        const nextStep = (hideId, showId) => {
            $(hideId).classList.add('hidden');
            $(showId).classList.remove('hidden');
        };

        // 1. Submit Player 1 Name
        const submitP1Name = () => {
            player1 = $('p1Name').value || 'Player 1';
            $('p1Greeting').innerText = `Welcome ${player1}!`;
            nextStep('step1', 'step2');
        };

        // 2. Submit Secret Number
        const submitSecretNumber = () => {
            const val = $('secretNum').value;
            if (!val) return alert("Please enter a number!");
            targetNumber = Number(val);
            nextStep('step2', 'step3');
        };

        // 3. Submit Player 2 Name
        const submitP2Name = () => {
            player2 = $('p2Name').value || 'Player 2';
            $('p2Greeting').innerText = `Good luck, ${player2}!`;
            nextStep('step3', 'step4');
        };

        // 4. Core Guessing Logic (The Engine)
        const checkGuess = () => {
            const currentGuess = Number($('guessInput').value);
            const feedback = $('feedback');
            feedback.classList.remove('hidden', 'text-emerald-400', 'text-rose-500', 'text-amber-500');

            // Scenario A: Correct Guess (Win!)
            if (currentGuess === targetNumber) {
                feedback.innerText = `🎉 Congratulations ${player2}! You guessed it!`;
                feedback.classList.add('text-emerald-400', 'animate-bounce');
                $('guessBtn').disabled = true;
                return;
            }

            // Scenario B: Wrong Guess
            chances--;
            $('chancesText').innerText = `Chances left: ${chances}`;

            if (chances > 0) {
                feedback.innerText = "❌ Try again!";
                feedback.classList.add('text-rose-500');
            } else {
                // Scenario C: Out of chances (Game Over)
                feedback.innerText = `💥 Game Over! ${player1} wins! The number was ${targetNumber}.`;
                feedback.classList.add('text-amber-500');
                $('guessBtn').disabled = true;
                $('guessInput').disabled = true;
            }
        };