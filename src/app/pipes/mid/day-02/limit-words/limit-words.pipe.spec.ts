import { LimitWordsPipe } from './limit-words.pipe';

describe('LimitWordsPipe', () => {
  let pipe: LimitWordsPipe;
  beforeEach(() => {
    pipe = new LimitWordsPipe();
  });
  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should truncate to 2 words', () => {
    expect(pipe.transform('Hello Angular World', 2)).toBe('Hello Angular...');
  });

  it('should return full string if under limit', () => {
    expect(pipe.transform('Hello Angular', 5)).toBe('Hello Angular');
  });

  it('should return ... only if limit is 0', () => {
    expect(pipe.transform('Hello Angular World', 0)).toBe('...');
  });
});
