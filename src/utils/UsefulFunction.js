//ф-я умножения
export function multiply(a,b){
    return a*b;
}

//деление
export function divide(a,b){
    if(b===0){
        return 'ошибка: деление на ноль'
    }
    return a / b;
}