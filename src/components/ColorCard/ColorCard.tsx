import { FC } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


type ColorCardProps = {
    title : string;
    color : string;
    icon : any;
    path : any;
};

const ColorCard : FC<ColorCardProps> = ( props ) => {
    return (
        <Link to={ props.path } className={`w-full h-40 bg-bg-${ props.color } rounded-2xl relative hover:cursor-pointer hover:rounded-3xl transition-all`}>
            <FontAwesomeIcon icon={ props.icon } className={`text-${ props.color } text-5xl p-3 absolute top-0 right-0`} />
            <p className={`text-${ props.color } bottom-0 absolute p-3 text-2xl font-semibold font-fields`} >
                { props.title }
            </p>
        </Link>
    );
};


export default ColorCard;