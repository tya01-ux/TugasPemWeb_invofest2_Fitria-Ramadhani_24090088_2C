interface TextareaProps {
  label: string;
  name: string;
  register: any;
  error?: string;
  placeholder?: string;
}

export const Textarea: React.FC<TextareaProps> = ({label, name, register, error, placeholder,}) => {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <label className="font-medium">{label}</label>
      <textarea
        {...register(name, { required: `${label} wajib diisi` })}
        placeholder={placeholder || `Masukkan ${label}`}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};