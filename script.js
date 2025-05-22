let flippedCards = []; // lista para armazenar os cards virados
let lockBoard = false; // impede clique enquanto verifica par

function CriarCards(valor) {
    const container = document.getElementById("cards");
    container.innerHTML = "";

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

        // Evento de clique no card
        card.addEventListener("click", () => {
            if (lockBoard || inner.classList.contains("flipped")) return;

            inner.classList.add("flipped");
            flippedCards.push({ card, url });

            if (flippedCards.length === 2) {
                lockBoard = true;

                const [first, second] = flippedCards;

                if (first.url === second.url) {
                    // Cartas iguais - manter viradas
                    flippedCards = [];
                    lockBoard = false;
                } else {
                    // Cartas diferentes - desvirar depois de um tempo
                    setTimeout(() => {
                        first.card.querySelector(".card-inner").classList.remove("flipped");
                        second.card.querySelector(".card-inner").classList.remove("flipped");
                        flippedCards = [];
                        lockBoard = false;
                    }, 500);
                }
            }
        });

        container.appendChild(card);
    });
}

