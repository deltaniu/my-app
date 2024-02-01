import { useState } from 'react';

export type ValidationRule<T> = (value: T) => boolean;

interface ValidationResult {
  value: any;
  error: string | null;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validate: () => void;
}

const useValidation = <T>(
  initialValue: T,
  validationRule: ValidationRule<T>,
  errorMessage: string = 'Invalid input'
): ValidationResult => {
  const [value, setValue] = useState<T>(initialValue);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value as T;
    setValue(newValue);
    setError(validationRule && !validationRule(newValue) ? errorMessage : null);
  };

  const validate = () => {
    setError(validationRule && !validationRule(value) ? errorMessage : null);
  };

  return { value, error, handleChange, validate };
};

export default useValidation;