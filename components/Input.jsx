export function FormInput(props) {
  return (
    <div className="flex text-xs sm:text-sm flex-col justify-center">
      <label for={props.for}>{props.labelName}</label>
      <input
        className="text-xs sm:text-sm p-3 border-gray-300 border-[1px] outline-1 rounded-none"
        id={props.id}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
        disabled={props.disabled}
      />
    </div>
  );
}

export default function Input(props) {
  return (
    <input
      className="text-xs sm:text-sm p-3 border-gray-300 border-[1px] outline-1 rounded-none"
      type={props.type}
      placeholder={props.label}
      required={props.required}
      readOnly={props.readOnly}
      disabled={props.disabled}
    />
  );
}
