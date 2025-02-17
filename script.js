function openLetter() {
    const envelopeWrapper = document.querySelector('.envelope-wrapper');
    const expandedLetter = document.querySelector('.expanded-letter');

    envelopeWrapper.classList.add('flap');

    setTimeout(() => {
        envelopeWrapper.classList.add('hide');
        expandedLetter.classList.add('show');
    }, 1500);
}