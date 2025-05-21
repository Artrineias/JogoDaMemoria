function CriarCards() {
    const quantidadeInput = 20;
    const container = document.getElementById("cards");
    container.innerHTML = ""; // limpa os cards anteriores

    // Exemplo de imagens (use links reais ou locais)
    const imagens = [
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/2.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/002.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
    ];

    const selecionadas = imagens.slice(0, quantidadeInput);
    const cartas = [...selecionadas, ...selecionadas]; // duplica para formar pares

    // Embaralhar as cartas
    cartas.sort(() => Math.random() - 0.5);

    // Criar os elementos de card
    cartas.forEach((url, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<img src="${url}" alt="pokemon-${index}" />`;
        container.appendChild(card);
    });
}