import ShowCalc from "./components/ShowCalc";
import CarList from "./components/CarList";
import RandomPhrase from "./components/RandomPhrase";
import Card from "./components/Card";
import PokemonList from "./components/PokemonList";


function App(){
      const pokemons = [
  { id: 1, name: "Bulbasaur", type: "Grass/Poison" },
  { id: 2, name: "Charmander", type: "Fire" },
  { id: 3, name: "Squirtle", type: "Water" },
  { id: 4, name: "Pikachu", type: "Electric" },
  { id: 5, name: "Jigglypuff", type: "Normal/Fairy" },
  { id: 6, name: "Gengar", type: "Ghost/Poison" },
  { id: 7, name: "Snorlax", type: "Normal" },
  { id: 8, name: "Mewtwo", type: "Psychic" },
  { id: 9, name: "Dragonite", type: "Dragon/Flying" },
  { id: 10, name: "Eevee", type: "Normal" }
];

  return(
    <div>
      <h1>Work with JSX components</h1>
      <ShowCalc/>
      <CarList/>
      <RandomPhrase/>
      <Card name="Laptop Asus" price = {1200} inStock = {true}/>
      {/* {Card.props = {
        name: 'Laptop Honor',
        price: 1200,
        inStock: true,
      }} */}
      <Card name="iPhone" price = {1000} inStock = {false}/>
      <Card name="Laptop Honor" price = {700} inStock = {true}/>
      <PokemonList pokemons={pokemons}/>
      {/* pokemons={pokemons}, pokemons= название атрибута , {pokemons} название переменной */}
      


    </div>
  )
}


export default App;