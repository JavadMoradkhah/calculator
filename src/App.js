function App() {
  return (
    <div className="calculator">
      <div className="calculator__display">
        <div className="prev-operand">123 +</div>
        <div className="curr-operand">0</div>
      </div>

      <button className="col-span-2">C</button>
      <button>DEL</button>
      <button>÷</button>

      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>×</button>

      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>

      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>

      <button>•</button>
      <button>0</button>
      <button className="col-span-2 equal-btn">=</button>
    </div>
  );
}

export default App;
