// Представим, что вы работаете над приложением магазина, которое отображает карточки с информацией о товаре.
// 1.Создайте компонент Card, он будет принимать несколько пропсов с информацией о товаре и отображать их.
// 2.Card должен содержать название товара, информацию о его наличии, информацию о его цене .
// 3.Импортируйте получившийся компонент в App.js, сделайте так, чтобы в приложении отображалось 3 карточки с различной информацией.
// 4.Запустите приложение, посмотрите на результат.

// function Card(props){
// return(
//     <div>
//         <h3>{props.name}</h3>
//         <p>Price: <strong>{props.price}</strong></p>
//         <p>{props.inStock ? 'In the stock' : 'Not in the stock'}</p>
//     </div>
// )
// }
// export default Card;

//деструтуризация
// {Card.props = {
//         name: 'Laptop Honor',
//         price: 1200,
//         inStock: true,
//       }} см App.jsx
function Card({name,price,inStock}){
return(
    <div>
        <h3>{name}</h3>
        <p>Price: <strong>{price}</strong></p>
        <p>{inStock ? 'In the stock' : 'Not in the stock'}</p>
    </div>
)
}
export default Card;