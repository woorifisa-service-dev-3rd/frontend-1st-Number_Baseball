

export function displayVictoryPopup() {
    const victoryPopup = document.getElementById('victoryPopup');
    const closeVictoryPopupBtn = document.getElementById('closeVictoryPopupBtn');

    victoryPopup.style.display = 'block';

    closeVictoryPopupBtn.addEventListener('click', () => {
        victoryPopup.style.display = 'none';
    });
};

export function displayLosePopup() {
    const losePopup = document.getElementById('losePopup');
    const closeLosePopupBtn = document.getElementById('closeLosePopupBtn');

    losePopup.style.display = 'block';

    closeLosePopupBtn.addEventListener('click', () => {
        losePopup.style.display = 'none';
    });
};
