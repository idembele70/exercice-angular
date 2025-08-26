import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizePipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms "hello world" to "Hello World"', () => {
    const pipe = new CapitalizePipe();
    expect(pipe.transform('hello world')).toBe('Hello World');
  })
});
