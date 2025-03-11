export class UniqueObjectsSet {
  public set: Set<string>;

  constructor() {
    this.set = new Set();
  }

  add(obj: object): this {
    const key = JSON.stringify(obj);
    this.set.add(key);
    return this;
  }

  has(obj: object): boolean {
    const key = JSON.stringify(obj);
    return this.set.has(key);
  }

  delete(obj: object): boolean {
    const key = JSON.stringify(obj);
    return this.set.delete(key);
  }

  get size(): number {
    return this.set.size;
  }

  getAll(): object[] {
    return Array.from(this.set).map((key) => JSON.parse(key));
  }

  [Symbol.iterator](): Iterator<object> {
    const items = this.getAll();
    let index = 0;
    return {
      next: (): IteratorResult<object> => {
        if (index < items.length) {
          return { value: items[index++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  }
}
