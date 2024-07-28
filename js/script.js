document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll('.fade-in');

    // Opções do IntersectionObserver
    const appearOptions = {
        threshold: 0.1, // Percentual de visibilidade para ativar o efeito
        rootMargin: "0px 0px -50px 0px" // Margem da área de visualização
    };

    // Função de callback para o IntersectionObserver
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe 'appear' se o elemento estiver visível
                entry.target.classList.add("appear");
                observer.unobserve(entry.target); // Remove o elemento da observação
            }
        });
    }, appearOptions);

    // Observa cada elemento que deve aparecer com o scroll
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
