// src/components/ui/Input.jsx
const Input = ({ type = 'text', placeholder = '', className = '', ...props }) => (
  <input
    type={type}
    placeholder={placeholder}
    className={`border border-gray-300 rounded py-2 px-3 ${className}`}
    {...props}
  />
);

export { Input };
