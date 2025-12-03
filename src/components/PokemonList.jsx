// Шаги реализации:
// ●В родительском компоненте App определите массив покемонов, отправьте массив покемонов в PokemonList.
// ●Создайте дочерний компонент PokemonList, он должен получать массив покемонов через props и использовать метод map для отображения каждого покемона через компонент Pokemon.
// ●Создайте компонент Pokemon для отображения покемона, он должен получать данные о покемоне через props и отображать имя и тип покемона.
// ●Запустите приложение, проверьте результат.
import Pokemon from "./Pokemon"

function PokemonList({pokemons}){

 return(
  <div>
    {pokemons.map((item) => {
        return <Pokemon key={item.id} name={item.name} type={item.type}/>
    })}
  </div>
 
 )
}
export default PokemonList