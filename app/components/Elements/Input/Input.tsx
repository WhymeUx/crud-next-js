interface Type {
    value?: string;
    type?: any;
    placeholder?: string;
    id: any;
    onChange?: any
}

const Input = ({ value, type, placeholder, id, onChange }: Type) => {
    return (
        <input
            id={id}
            value={value}
            type={type}
            className="input input-bordered w-full"
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

export default Input;
