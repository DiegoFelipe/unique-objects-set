export class UniqueObjectsSet {
  // Public so it can be accessed outside the class
  public set: Set<string>;

  constructor() {
    this.set = new Set();
  }

  add(obj: object) {
    const key = JSON.stringify(obj);
    this.set.add(key);
  }

  getAll() {
    return Array.from(this.set).map((key) => JSON.parse(key));
  }
}
