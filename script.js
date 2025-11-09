document.addEventListener('DOMContentLoaded', function() {
    const poemElement = document.getElementById('poem');
    const randomPoem = poems[Math.floor(Math.random() * poems.length)];

    const lines = randomPoem.split('\n');
    while (lines.length && lines[lines.length - 1].trim() === '') {
        lines.pop();
    }

    poemElement.innerHTML = lines.map((line, index) => {
        if (line.trim() === '') {
            return '<div class="empty-line"></div>';
        }

        const isLastLine = index === lines.length - 1;
        return `<span class="poem-line">${line}</span>${isLastLine ? '' : '<br>'}`;
    }).join('');
});