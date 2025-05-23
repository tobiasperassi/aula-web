const ITEMS_PER_PAGE = 10, TOTAL_ITEMS = 168, TOTAL_PAGES = Math.ceil(TOTAL_ITEMS / ITEMS_PER_PAGE);
let currentPage = 1;

function loadPokemons(page) {
    const offset = (page - 1) * ITEMS_PER_PAGE;
    $('#pokemon-body').empty();
    $.getJSON(`https://pokeapi.co/api/v2/pokemon?limit=${ITEMS_PER_PAGE}&offset=${offset}`, (data) => {
        data.results.forEach(pokemon => {
            $.getJSON(pokemon.url, (details) => {
                $('#pokemon-body').append(`
                    <tr>
                        <td><img src="${details.sprites.front_default}" alt="${details.name}"></td>
                        <td class="pokemon-name">#${details.id} - ${details.name}</td>
                        <td class="pokemon-species">${details.species.name}</td>
                        <td>${(details.height / 10).toFixed(1)}</td>
                        <td>${(details.weight / 10).toFixed(1)}</td>
                    </tr>
                `);
            });
        });
    });
}

function setupPagination() {
    $('#pagination').empty().append(`
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" id="prev">Previous</a>
        </li>
        ${Array.from({length: TOTAL_PAGES}, (_, i) => `
            <li class="page-item ${currentPage === i + 1 ? 'active' : ''}">
                <a class="page-link" href="#" data-page="${i + 1}">${i + 1}</a>
            </li>
        `).join('')}
        <li class="page-item ${currentPage === TOTAL_PAGES ? 'disabled' : ''}">
            <a class="page-link" href="#" id="next">Next</a>
        </li>
    `);

    $('#prev').on('click', (e) => {
        e.preventDefault();
        if (currentPage > 1) loadPokemons(--currentPage), setupPagination();
    });

    $('#next').on('click', (e) => {
        e.preventDefault();
        if (currentPage < TOTAL_PAGES) loadPokemons(++currentPage), setupPagination();
    });

    $('.page-link[data-page]').on('click', (e) => {
        e.preventDefault();
        currentPage = parseInt($(e.target).data('page'));
        loadPokemons(currentPage);
        setupPagination();
    });
}

loadPokemons(currentPage);
setupPagination();