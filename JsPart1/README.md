# ⚡ Hoisting in JavaScript

## 🧠 What is Hoisting?

> **Hoisting** is JavaScript’s default behavior of moving **declarations** (not initializations) to the **top of their scope** before code execution.

This means you can sometimes use variables or functions **before** they are actually declared in the code — depending on *how* they are declared.

---

## 🧩 Function Hoisting

✅ **Function declarations** are **fully hoisted** — you can call them before they are defined.

```js
sayHi(); // ✅ Works fine

function sayHi() {
  console.log("Hello!");
}
wh