let flippedCards = [];
let lockBoard = false;
let errosSeguidos = 0;
let nivelSelecionado = 1;
let pontuacao = 0;
let acertosSeguidos = 0;
let modificadorErro = 1.0;

function CriarCards(valor, nivel = 1) {
    nivelSelecionado = nivel;
    errosSeguidos = 0;
    pontuacao = 0;
    acertosSeguidos = 0;
    modificadorErro = 1.0;

    const container = document.getElementById("cards");
    container.innerHTML = "";
  

    atualizarPontuacao();

    let imagens = new Set();
    while (imagens.size < valor) {
        const id = Math.floor(Math.random() * 150) + 1;
        imagens.add(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`);
    }

    const cartas = [...imagens, ...imagens];
    cartas.sort(() => Math.random() - 0.5);

    cartas.forEach((url, index) => {
        const card = document.createElement("div");
        card.className = "card";

        const inner = document.createElement("div");
        inner.className = "card-inner";

        const front = document.createElement("div");
        front.className = "card-front";
        front.innerHTML = `<img src="${url}" alt="pokemon-${index}" />`;

        const back = document.createElement("div");
        back.className = "card-back";
        back.innerHTML = `<img src="Pokebola-pokeball-png-0.png" alt="">`;

        inner.appendChild(front);
        inner.appendChild(back);
        card.appendChild(inner);

        card.addEventListener("click", () => {
            if (lockBoard || inner.classList.contains("flipped")) return;

            inner.classList.add("flipped");
            flippedCards.push({ card, url });

            if (flippedCards.length === 2) {
                lockBoard = true;

                const [first, second] = flippedCards;

                if (first.url === second.url) {
                    // Acerto
                    acertosSeguidos++;
                    errosSeguidos = 0;

                    // Calcula pontuação
                    let pontosGanhos = 50 * Math.pow(2, acertosSeguidos - 1) * modificadorErro;
                    pontuacao += Math.floor(pontosGanhos);
                    modificadorErro = 1.0;

                    atualizarPontuacao();

                    flippedCards = [];
                    lockBoard = false;

                } else {
                    // Erro
                    acertosSeguidos = 0;
                    errosSeguidos++;
                    modificadorErro /= 0.25;

                    setTimeout(() => {
                        first.card.querySelector(".card-inner").classList.remove("flipped");
                        second.card.querySelector(".card-inner").classList.remove("flipped");
                        flippedCards = [];
                        lockBoard = false;

                        // Verifica embaralhamento
                        if (
                            (nivelSelecionado === 2 && errosSeguidos >= 5) ||
                            (nivelSelecionado === 3 && errosSeguidos >= 3)
                        ) {
                            embaralharCards(container);
                            errosSeguidos = 0;
                        }

                    }, 500);
                }
            }
        });

        container.appendChild(card);
    });
}

function embaralharCards(container) {
    const cards = Array.from(container.children);
    cards.sort(() => Math.random() - 0.5);
    cards.forEach(card => container.appendChild(card));
}

function atualizarPontuacao() {
    const pontosDiv = document.getElementById("pontuacao");
    if (pontosDiv) {
        pontosDiv.textContent = `Pontuação: ${pontuacao}`;
    }
}