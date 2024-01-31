import useValidation, { ValidationRule } from './useValidation';

type InputProps = {
  validationRule: ValidationRule<string>;
  errorMessage: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ validationRule, errorMessage, ...props }) => {
  const { value, error, handleChange } = useValidation('', validationRule, errorMessage);

  return (
    <div>
      <input autoFocus={!!error} {...props} value={value} onChange={handleChange} />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};


export default Input;