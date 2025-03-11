# 🚀 UniqueObjectSet

A modern TypeScript utility that ensures all objects inside a `Set` are **truly unique** based on their content, not just their reference.

> By default, JavaScript `Set` only considers objects unique by reference. `UniqueObjectSet` ensures uniqueness by key-value equality.

---

## 📦 Installation

```bash
npm install @diegofnib/unique-object-set
```

Or with Yarn:

```bash
yarn add @diegofnib/unique-object-set
```

---

## ✨ Features

- ✅ Ensures true uniqueness of objects in a set
- ⚡ Lightweight and dependency-free
- 🛡️ Written in TypeScript with full type definitions
- 🌍 Works in Node.js and browser environments

---

## 🔥 Usage

### Importing

```ts
import { UniqueObjectSet } from "unique-object-set";
```

### Basic Example

```ts
const set = new UniqueObjectSet();

set.add({ id: 1, name: "Alice" });
set.add({ id: 1, name: "Alice" }); // Duplicate by content, won't be added
set.add({ id: 2, name: "Bob" });

console.log(set.size); // 2
```

### Checking Existence

```ts
console.log(set.has({ id: 1, name: "Alice" })); // true
console.log(set.has({ id: 3, name: "Charlie" })); // false
```

### Deleting an Object

```ts
set.delete({ id: 1, name: "Alice" });
console.log(set.size); // 1
```

### Iterating Over the Set

```ts
for (const item of set) {
  console.log(item);
}
```

---

## ⚙️ API

### `add(object: object): this`

Adds an object to the set if it's not already present by content.

### `has(object: object): boolean`

Checks if an object exists in the set based on content.

### `delete(object: object): boolean`

Deletes an object from the set if it exists.

### `size: number`

Returns the number of unique objects in the set.

### `[Symbol.iterator]()`

Allows iteration using for...of loops.

---

## 🛠️ How It Works

`UniqueObjectSet` uses deep comparison (like JSON serialization) to ensure object uniqueness by their key-value pairs, not memory reference.

---

## 🧪 Testing

To run tests:

```bash
npm test
```

---

## 📄 License

MIT

---

## 💡 Contributing

1. Fork the project.
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'feat: add new feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a pull request.

---

## 🤝 Support

Have questions or suggestions? Feel free to open an issue!

---

> Made with ❤️ in TypeScript.
