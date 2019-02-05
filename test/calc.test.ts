import { sum } from '../src/calc'

test('La fonction existe-t-elle', () => {
    expect(sum()).toBeDefined()
})

test('sum() = 0', () => {
    expect(sum()).toBe(0)
})

test('sum() = 2', () => {
    expect(sum(1, 1)).toBe(2)
})