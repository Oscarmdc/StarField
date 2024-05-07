const frase = window.frases || [];
const COLORS = ['#fff2', '#fff4', '#fff7', '#fffc'];

const generateStarsLayer = (size, selector, totalStars, duration) => {
    const layer = [];

    for (let i = 0; i < totalStars; i++) {
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 ${color}`);
    }

    const container = document.querySelector(selector);
    container.style.setProperty('--space-layer', layer.join(','));
    container.style.setProperty('--size', size);
    container.style.setProperty('--duration', duration);
};

function mostrarFrase() {
    let currentIndex = Math.floor(Math.random() * frase.length); // frase al azar
    let currentPhrase = frase[currentIndex];

    const mensaje = document.getElementById('mensaje'); // get div
    const parrafo = mensaje.querySelector('p'); // get p
    parrafo.textContent = currentPhrase; // write new frase

    setInterval(() => {
        currentIndex = (currentIndex + 1) % phrases.length;
        currentPhrase = phrases[currentIndex];
        displayElement.textContent = currentPhrase;
    }, 86400000); // 24 hours in milliseconds
}

generateStarsLayer('1px', '.space-1', 200, '60s');
generateStarsLayer('2px', '.space-2', 100, '50s');
generateStarsLayer('6px', '.space-3', 25, '40s');
mostrarFrase();
