const Label = ({ forHtml = "name", labelText = "Label" }) => {
    return (
        <>
            <label htmlFor={forHtml} className="label font-bold">
                {labelText}
            </label>
        </>
    );
};

export default Label;
