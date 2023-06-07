interface Type {
    bg?: string,
    text?: string,
    title?: string,
    type: any,
    click?: any
}

const Button = ({ bg = "bg-blue-500", text = "text-white", title ="Button", type ="button" , click}: Type) => {
    return (
        <button type={type} className={`${bg} ${text} px-3 py-2 rounded-lg `} onClick={click} >
            {title}
        </button>
    );
};

export default Button;
