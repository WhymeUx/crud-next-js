

const Modal = ({title="Title", children, handle}: {title?: string, children?: any, handle: string}) => {
    return (
        <div className="">
            <div className={`${handle} modal`}>
                <div className="modal-box mb-80">
                    <h1 className="text-center font-bold text-xl">{title}</h1>
                    <div className="">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
