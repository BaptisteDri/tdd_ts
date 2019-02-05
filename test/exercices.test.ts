import { reverseString, isPalindrome, reverseInt, capitalizeLetters, maxChar, fizzBuzz } from '../src/exercices'

// reverseString
    test('La fonction reverseString existe', () => {
        expect(reverseString).toBeDefined()
    })
    test('reverseString(hello world) = dlrow olleh', () => {
        expect(reverseString('hello world')).toBe('dlrow olleh')
    })
    test('reverseString() = undefined', () => {
        expect(reverseString()).toBe(undefined)
    })
    test('reverseString(\'\') = undefined', () => {
        expect(reverseString('')).toBe(undefined)
    })
//

// isPalindrome
    test('La fonction isPalindrome existe', () => {
        expect(isPalindrome).toBeDefined()
    })
    test('isPalindrome(kayak) = true', () => {
        expect(isPalindrome('kayak')).toBe(true)
    })
    test('isPalindrome(test) = false', () => {
        expect(isPalindrome('test')).toBe(false)
    })
    test('isPalindrome(kayak kayak ) = true', () => {
        expect(isPalindrome('kayak kayak ')).toBe(true)
    })
//

// reverseInt
    test('La fonction reverseInt existe', () => {
        expect(reverseInt).toBeDefined()
    })
    test('reverseInt(1234) = 4321', () => {
        expect(reverseInt(1234)).toBe(4321)
    })
//

// capitalizeLetters
    test('La fonction capitalizeLetters existe', () => {
        expect(capitalizeLetters).toBeDefined()
    })
    test('capitalizeLetters(\'hello world\') = Hello World', () => {
        expect(capitalizeLetters('hello world')).toBe('Hello World')
    })
//

// maxChar
    test('La fonction maxChar existe', () => {
        expect(maxChar).toBeDefined();
    })
    test('maxChar(\'javascript\') = a', () => {
        expect(maxChar('javascript')).toBe('a');
    })
    test('maxChar(\' a a a \') =  ', () => {
        expect(maxChar(' a a a ')).toBe(' ');
    })
//

// fizzBuzz
    test('La fonction fizzBuzz existe', () => {
        expect(fizzBuzz).toBeDefined();
    })
    test('La fonction fizzBuzz retourne la bonne suite', () => {
        var arr = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz", "Fizz", 52, 53, "Fizz", "Buzz", 56, "Fizz", 58, 59, "FizzBuzz", 61, 62, "Fizz", 64, "Buzz", "Fizz", 67, 68, "Fizz", "Buzz", 71, "Fizz", 73, 74, "FizzBuzz", 76, 77, "Fizz", 79, "Buzz", "Fizz", 82, 83, "Fizz", "Buzz", 86, "Fizz", 88, 89, "FizzBuzz", 91, 92, "Fizz", 94, "Buzz", "Fizz", 97, 98, "Fizz", "Buzz"];
        expect(fizzBuzz()).toEqual(arr);
    })
//