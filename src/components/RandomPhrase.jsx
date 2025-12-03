// 1.Создайте компонент RandomPhrase.
// 2.Определите массив фраз внутри компонента.
// 3.Используйте функцию Math.random() для выбора случайной фразы из массива.
// 4.Импортируйте компонент в App.js.
// Запустите приложение, проверьте, что всё получилось.

function RandomPhrase(){
    const phrases = [
    "Жизнь — это то, что происходит, пока вы строите планы.",
    "Улыбнись — и мир улыбнётся тебе в ответ!",
    "Каждый день — новый шанс всё изменить.",
    "Не жди идеального момента, создай его сам.",
    "Главное — не сдаваться, даже если тяжело.",
  ];
  //выбор случ-й фразы
  const randomIndex = Math.floor(Math.random() * phrases.length);
  const randomElement = phrases[randomIndex]; //означает: "Возьми элемент массива phrases под номером randomIndex",напр: const randomElement = phrases[3];
  // Допустим, phrases.length = 5,а Math.random() даёт число от 0 до 0.9999.
  // Math.random() → 0.62
  // 0.62 * 5 = 3.1
  // Math.floor(3.1) → 3
  
  return(
    <div>
        <h2>Random Phrase</h2>
        <p>{randomElement}</p>
    </div>
  )
}

export default RandomPhrase;