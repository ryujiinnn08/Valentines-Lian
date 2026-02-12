document.addEventListener('DOMContentLoaded', () => {
    const questionContainer = document.getElementById('question-container');
    const successContainer = document.getElementById('success-container');
    const mainGif = document.getElementById('main-gif');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    
    // Modal elements
    const letterModal = document.getElementById('letter-modal');
    const openLetterBtn = document.getElementById('open-letter-btn');
    const closeBtn = document.querySelector('.close-btn');

    // GIF Arrays - make sure these files exist in your ASSETS folder!
    const noGifs = [
        'ASSETS/shaking-cute.gif',
        'ASSETS/sad-nailong.gif',
        'ASSETS/dog-shaking.gif',
        'ASSETS/cute-blinking.gif'
    ];

    let noClickCount = 0;
    const maxNoClicks = noGifs.length;

    // --- Interaction Logic ---

    // 1. Handle "No" Button Click
    noBtn.addEventListener('click', () => {
        // Change GIF
        if (noClickCount < maxNoClicks) {
            mainGif.src = noGifs[noClickCount];
            noClickCount++;
        } else {
            // Loop back to the last one or random if you prefer
            mainGif.src = noGifs[maxNoClicks - 1]; 
        }

        // Increase "Yes" button size
        const currentFontSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
        const currentPadding = parseFloat(window.getComputedStyle(yesBtn).paddingTop);
        
        yesBtn.style.fontSize = `${currentFontSize * 1.5}px`;
        yesBtn.style.padding = `${currentPadding * 1.5}px ${currentPadding * 3}px`; // grow width faster
        
        // Optional: reduce "No" button text or hide it eventaully?
        // For now, we just let Yes take over the screen.
    });

    // 2. Handle "Yes" Button Click
    yesBtn.addEventListener('click', () => {
        questionContainer.classList.add('hidden');
        successContainer.classList.remove('hidden');
    });

    // 3. Modal/Letter Logic
    openLetterBtn.addEventListener('click', () => {
        letterModal.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', () => {
        letterModal.classList.add('hidden');
    });

    // Close modal if clicking outside content
    window.addEventListener('click', (e) => {
        if (e.target === letterModal) {
            letterModal.classList.add('hidden');
        }
    });
});

