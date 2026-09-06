function Input({ label, type, placeholder, register, error }) {
  return (
    <div className="flex flex-col gap-1 my-2">
      <label className="font-semibold capitalize">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(label, {
          required: "This field is required",
        })}
        className="px-3 py-2 border border-gray-300 rounded "
      />
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
}

export default Input;
