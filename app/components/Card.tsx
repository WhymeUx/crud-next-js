interface CardProps {
    title: string, count: string, bg?: string
}

const Card = ({ title, count, bg = "bg-green-600" }: CardProps) => {
    return (
        <div className="">
            <div className={` ${bg} border rounded-xl shadow p-2`}>
                <div className="flex flex-row items-center p-2">
                    <div className="flex-shrink pl-1 pr-4">
                        <i className="fa fa-wallet fa-2x fa-fw fa-inverse" />
                    </div>
                    <div className="flex-1 text-right">
                        <h5 className="text-white text-xl">{title}</h5>
                        <h3 className="text-white text-3xl">
                            {count}
                            <span className="text-green-400">
                                <i className="fas fa-caret-down" />
                            </span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
