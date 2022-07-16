const $startButton = document.querySelector('.machine__body-start');
const $machineWindows = document.querySelectorAll('.machine-img');
const $machineWindowsBack = document.querySelectorAll('.machine__body-window-back');
const $result = document.querySelector('.result');
const $winQuote = ['Good Job!', 'Win for you!', 'Lucky you!', 'Congrats!', 'Congratulations!'];
const $loseQuote = ['You lost.', 'Maybe next time.', 'Close enough.', 'Try again!', 'Keep going!'];
const $title = document.querySelector('.title-header');

const machineStart = () => {
    const resultArray = [];

    $machineWindows.forEach((el, i) => {
        el.classList.add('add-z-index');
        el.classList.add('spin-animation');
        $machineWindowsBack[i].classList.add('reversed-spin-animation');

        setTimeout(() => {
            el.classList.remove('spin-animation');
            $machineWindowsBack[i].classList.remove('reversed-spin-animation');

            let randomNumber = Math.floor(Math.random() * 7);
            el.setAttribute('src', `./img/${++randomNumber}.png`)
            resultArray[i] = el.attributes.src.value;

            if (resultArray[0] !== undefined && resultArray[1] !== undefined && resultArray[2] !== undefined) {
                if (resultArray[0] === resultArray[1] && resultArray[1] === resultArray[2]) {
                    $result.textContent = $winQuote[Math.floor(Math.random() * 5)];
                    party.confetti($title);
                    party.sparkles($result);
                } else {
                    $result.textContent = $loseQuote[Math.floor(Math.random() * 5)];
                }
            }
        }, 2000);
    });
};

$startButton.addEventListener('click', machineStart);