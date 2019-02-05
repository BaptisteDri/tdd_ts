export function sum(...numbers:number[]) {
    return numbers.reduce((acc, val) => acc+val, 0)
}