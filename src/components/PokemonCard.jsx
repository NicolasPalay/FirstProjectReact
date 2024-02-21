import PropTypes from 'prop-types';

function PokemonCard({pokemon}){
    PokemonCard.propTypes = {
        pokemon: PropTypes.shape({
            name:PropTypes.string.isRequired,
            imgSrc:PropTypes.string

        })
    }
   return( 
        <figure>
            {pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt={pokemon.name}/>) : (<p>???</p>) }
            
            <figcaption>{pokemon.name}</figcaption>
        </figure> 
    )
}
export default PokemonCard;

