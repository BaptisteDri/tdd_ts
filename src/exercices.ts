export function reverseString(str?:string){
    return str 
        ?
            (str === '') 
            ? undefined
            : str.split('').reverse().join('') 
        : undefined
}

export function isPalindrome(str:string){
    return (reverseString(str.trim())===str.trim()) ? true : false
}

export function reverseInt(int:number){
    return Number(int.toString().split('').reverse().join(''))
}

export function capitalizeLetters(str:string){
    return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase().trim() + word.slice(1).trim())
    .join(' ')
}

export function maxChar(str:string){
    return str.split('').sort((a,b) =>
        str.split('').filter(v => v===a).length
        - str.split('').filter(v => v===b).length
    ).pop()
}

export function fizzBuzz(){
    let arr = []
    for (var i=1; i < 101; i++){
        if (i % 15 == 0) arr.push('FizzBuzz')
        else if (i % 3 == 0) arr.push('Fizz')
        else if (i % 5 == 0) arr.push('Buzz')
        else arr.push(i)
    }
    return arr
}
