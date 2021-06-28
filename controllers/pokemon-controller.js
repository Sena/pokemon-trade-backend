const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();

exports.list = (req, res) => {
    P.getPokemonsList()
        .then(function (response) {
            const pokemon = response.results.map(pokemon => {
                const id = pokemon.url.match(/\/(\d+)\//)[1];
                return {
                    id,
                    name: pokemon.name.replace(/-/gm, ' ').split('').map((e, i) => i === 0 ? e.toUpperCase() : e).join(''),
                    sprites: {
                        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + id + '.png',
                        back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/' + id + '.png',
                    }
                };
            });

            return res.status(200).send({pokemon})
        })
        .catch(function (error) {
            return res.status(500).send({error})
        });
}
exports.get = (req, res) => {
    P.getPokemonByName(req.params.id)
        .then(function (pokemon) {
                const sprint_default =
                    pokemon.sprites.front_default ||
                    pokemon.sprites.front_female ||
                    pokemon.sprites.front_shiny ||
                    pokemon.sprites.front_shiny_female ||
                    pokemon.sprites.back_default ||
                    pokemon.sprites.back_female ||
                    pokemon.sprites.back_shiny ||
                    pokemon.sprites.back_shiny_female ||
                    pokemon.sprites.other.dream_world.front_default ||
                    pokemon.sprites.other.dream_world.front_female ||
                    pokemon.sprites.other['official-artwork'].front_default ||
                    pokemon.sprites

                return res.status(200).send({
                    id: pokemon.id,
                    name: pokemon.name.replace(/-/gm, ' ').split('').map((e, i) => i === 0 ? e.toUpperCase() : e).join(''),
                    base_experience: pokemon.base_experience,
                    sprite: sprint_default,
                })
            }
        )
        .catch(function (error) {
            return res.status(500).send({error})
        });
}