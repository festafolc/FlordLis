import { Star, StarFill, StarHalf } from "react-bootstrap-icons"

export const Rating = ({value, text}: {value: any, text: any}) => {
    return (
        <div className='rating'>
            <span>
                {value >= 1 ? <StarFill /> : value >= 0.5 ? <StarHalf /> : <Star />}
            </span>
            <span>
                {value >= 2 ? <StarFill /> : value >= 1.5 ? <StarHalf /> : <Star />}
            </span>
            <span>
                {value >= 3 ? <StarFill /> : value >= 2.5 ? <StarHalf /> : <Star />}
            </span>
            <span>
                {value >= 4 ? <StarFill /> : value >= 3.5 ? <StarHalf /> : <Star />}
            </span>
            <span>
                {value >= 5 ? <StarFill /> : value >= 4.5 ? <StarHalf /> : <Star />}
            </span>
            <span className='rating-text'>{text && text}</span>
        </div>
    )
}
