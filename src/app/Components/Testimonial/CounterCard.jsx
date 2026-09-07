
const CounterCard = ({number,content}) => {
    return (
        <div className="col-lg-3 col-md-6 counterCard ">
        <div className="about-counter ">
            <div className="counter-title">
                <h2 className="counter ">{number}%</h2>
                
            </div>
        </div>
            <div className="counter-text-span  ">
                <span>{content}</span>
            </div>
    </div>
    );
};

export default CounterCard;