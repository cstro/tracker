import { useState } from 'react';

interface AutocompleteProps {
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

export default function Autocomplete({
  value,
  options,
  onChange,
}: AutocompleteProps) {
  const [visible, setVisible] = useState(false);

  const displayedOptions = options.filter((option) => {
    return option.toLowerCase().indexOf(value.toLowerCase()) > -1;
  });

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleOptionClick = (option: string) => {
    onChange(option);
    setVisible(false);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleValueChange}
        onFocus={() => setVisible(true)}
      />
      {visible && (
        <div>
          {displayedOptions.map((option) => (
            <div onClick={() => handleOptionClick(option)} key={option}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
