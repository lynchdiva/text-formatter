import { useState } from 'react';

export default function TextFormatter() {
  const [inputValue, setInputValue] = useState('');
  const [formattedText, setFormattedText] = useState('');

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = e => {
    e.preventDefault();
    if (inputValue.trim()) {
      setFormattedText(inputValue.toUpperCase());
      setInputValue('');
    }
  };

  return (
    <form>
      <label>
        Введите текст:
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>

      <button onClick={handleButtonClick}>Кнопка</button>
      {formattedText ? <p>{formattedText}</p> : null}
    </form>
  );
}
