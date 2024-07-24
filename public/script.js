document.querySelectorAll('.toggleButton').forEach(function(button, index) {
    button.addEventListener('click', function() {
        const infoBox = document.querySelectorAll('.info-box')[index];
        if (infoBox.classList.contains('hidden')) {
            infoBox.classList.remove('hidden');
            // Trigger reflow to make the transition work properly
            void infoBox.offsetWidth;
            infoBox.style.top = '0';
        } else {
            infoBox.style.top = '100%';
            infoBox.addEventListener('transitionend', function() {
                infoBox.classList.add('hidden');
            }, { once: true });
        }
    });
});
