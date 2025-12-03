// 1.Создайте компонент CarList, который будет отображать статический список автомобилей.
// 2.Определите список внутри функции компонента.
// 3.Используйте знания о JSX и метод map для его отображения.
// 4.Экспортируйте компонент и импортируйте его в App.js.
// 5.Запустите проект, проверьте, что всё получилось.

function CarList(){
    const cars = [
        {id: 1, brand: 'Toyota', model: 'Camry', year: 2024},
        {id: 2, brand: 'Audi', model: 'Q8', year: 2023},
        {id: 3, brand: 'Chevrolet', model: 'Tahoe', year: 2004},
        {id: 4, brand: 'Volkswagen ', model: 'Touareg', year: 2018},
    ];
    return(
        <div>
            <h2>List of cars</h2>
            {/* <ul>
                {cars.map((car) =>{
                    return <li key={cars.id}> {car.brand} {car.model} - {car.year} year</li>
                })}
            </ul> */}
            {/* same same but this example is with return */}
              <ul>
                {cars.map((car) =>(
                     <li key={cars.id}> {car.brand} {car.model} - {car.year} year</li>
                ))}
            </ul>
                {/* key -абрибут, use only in the method map */}
            {/* this is without return: change{} to () */}
        </div>
    )
}
export default CarList;