// Smooth scrolling for navigation (si vous ajoutez une navigation)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 

function createCoin() {
    const coin = document.createElement('div');
    coin.classList.add('coin');
    
    // Position aléatoire horizontale
    coin.style.left = Math.random() * 100 + '%';
    
    // Vitesse et taille aléatoires
    const duration = Math.random() * 4 + 3; // entre 3 et 7 secondes
    const size = Math.random() * 1.5 + 1; // entre 1 et 2.5
    
    coin.style.animationDuration = duration + 's';
    coin.style.transform = `scale(${size})`;
    
    document.body.appendChild(coin);
    
    // Supprimer la pièce après l'animation
    setTimeout(() => {
        coin.remove();
    }, duration * 1000);
}

// Créer des pièces à intervalles réguliers (toutes les 500ms au lieu de 200ms)
setInterval(createCoin, 500); 