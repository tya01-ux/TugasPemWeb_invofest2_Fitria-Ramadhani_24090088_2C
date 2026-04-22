interface TextAreaProps { 
  label: string; 
  name: string; 
  register: any; 
  error?: string; 
  placeholder?: string; 
} 
 
export const TextArea: React.FC<TextAreaProps> = ({ 
  label, 
  name, 
  register, 
  error, 
  placeholder 
}) => { 
  return ( 
    <div className="flex flex-col gap-1 mb-4"> 
      <label>{label}</label> 
      <textarea 
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2"
        {...register(name)} 
        placeholder={placeholder} /> 
      {error && <p className="text-red-500 text-sm">{error}</p>} 
    </div> 
  ); 
};