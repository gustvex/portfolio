import { describe, expect, it } from 'vitest'
import { cn } from './utils'

describe('cn', () => {
  it('mescla classes simples', () => {
    expect(cn('a', 'b')).toBe('a b')
  })

  it('remove valores falsy', () => {
    expect(cn('a', false, undefined, null, 'b')).toBe('a b')
  })

  it('aplica twMerge para classes conflitantes do tailwind', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4')
  })

  it('aceita arrays e objetos do clsx', () => {
    expect(cn(['a', 'b'], { c: true, d: false })).toBe('a b c')
  })
})
