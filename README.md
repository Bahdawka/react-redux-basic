# Redux Basic Project / Базовий Redux Проект [EN description below]
- Deploy on Vercel: 

## 🇺🇦 Українська

### Опис проекту
Це навчальний проект, який демонструє основи роботи з Redux Toolkit у React додатку. Проект реалізує простий лічильник з асинхронними операціями.

### Що реалізовано
- ✅ Налаштування Redux store з configureStore
- ✅ Створення slice з async thunks
- ✅ Кастомний logger middleware
- ✅ TypeScript типізація для store
- ✅ Асинхронні операції increment/decrement з затримкою 1 секунда
- ✅ Базова стилізація компонентів

### Як розгорнути та запустити

1. **Клонування репозиторію**
   ```bash
   git clone <repository-url>
   cd redux-basic
   ```

2. **Встановлення залежностей**
   ```bash
   npm install
   ```

3. **Запуск проекту**
   ```bash
   npm run dev
   ```

4. **Відкрити у браузері**
   ```
   http://localhost:5173
   ```

### Структура проекту
```
src/
├── components/
│   └── Counter.tsx          # Компонент лічильника
├── redux/
│   ├── slices/
│   │   └── counterSlice.ts  # Redux slice з async thunks
│   └── store.ts             # Налаштування store та middleware
├── App.tsx                  # Головний компонент з Provider
├── main.tsx                 # Точка входу додатку
├── index.css                # Стилі
└── ...        
```

---

## 🇬🇧 English

### Project Description
This is an educational project demonstrating Redux Toolkit basics in a React application. The project implements a simple counter with asynchronous operations.

### What's Implemented
- ✅ Redux store setup with configureStore
- ✅ Slice creation with async thunks
- ✅ Custom logger middleware
- ✅ TypeScript typing for store
- ✅ Asynchronous increment/decrement operations with 1-second delay
- ✅ Basic component styling

### Setup and Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd redux-basic
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the project**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Project Structure
```
src/
├── components/
│   └── Counter.tsx          # Counter component
├── redux/
│   ├── slices/
│   │   └── counterSlice.ts  # Redux slice with async thunks
│   └── store.ts             # Store configuration and middleware
├── App.tsx                  # Main component with Provider
├── main.tsx                 # Application entry point
├── index.css                # Styles
└── ...
```
