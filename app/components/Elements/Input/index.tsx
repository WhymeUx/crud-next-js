import Input from "./Input";
import Label from "./Label";

interface Type {
    value?: string,
    type?: any,
    placeholder?: string,
    htmlFor? : any,
    labelText?: string,
    id?: any,
    onChange?: any
}


const InputForm = (props: Type) => {
    const { type, placeholder, value, htmlFor, labelText, id, onChange } = props;
    return (
        <>
            <div className="form-controll w-full">
                <Label forHtml={htmlFor} labelText={labelText}></Label>
                <Input onChange={onChange} id={id} type={type} placeholder={placeholder} value={value} />
            </div>
        </>
    );
};

export default InputForm;
