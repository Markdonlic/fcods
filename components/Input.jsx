export default function Input(props) {
  return (
    <input
      className="text-xs sm:text-sm p-3 border-gray-300 border-[1px] outline-1 outline-red-400 rounded-none"
      type={props.type}
      placeholder={props.label}
      required={props.required}
    />
  );
}
