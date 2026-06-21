import { vi } from 'vitest'

type Callback = (entries: IntersectionObserverEntry[]) => void

const callbacks: Callback[] = []

class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null
  readonly rootMargin = ''
  readonly scrollMargin = '0px'
  readonly thresholds: ReadonlyArray<number> = []
  private readonly callback: Callback

  constructor(callback: Callback) {
    this.callback = callback
    callbacks.push(callback)
  }

  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn(() => {
    const index = callbacks.indexOf(this.callback)
    if (index !== -1) callbacks.splice(index, 1)
  })
  takeRecords = vi.fn((): IntersectionObserverEntry[] => [])
}

export function installIntersectionObserverMock() {
  Object.defineProperty(window, 'IntersectionObserver', {
    configurable: true,
    writable: true,
    value: MockIntersectionObserver,
  })
}

export function resetIntersectionObserverMock() {
  callbacks.length = 0
}

export function triggerIntersection(isIntersecting: boolean) {
  callbacks.forEach((callback) => {
    callback([{ isIntersecting } as IntersectionObserverEntry])
  })
}
