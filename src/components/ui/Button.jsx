function Button({ type, text, onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-4 py-2 rounded bg-blue-600 text-white font-semibold"
    >
      {text}
    </button>
  );
}

export default Button;
