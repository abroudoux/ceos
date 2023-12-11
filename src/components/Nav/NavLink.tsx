import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


type NavLinkProps = {
    path : string;
    title : string;
    icon : any;
};

const NavLinks : FC<NavLinkProps> = ( props ) => {

    const location = useLocation();

    return (
        <li className={`${location.pathname === props.path ? "active" : ""}`}>
            <Link to={ props.path } className="px-12 py-3  flex-col-center-center gap-2">
                <FontAwesomeIcon icon={ props.icon } className="text-xl" />
                <p className="text-sm font-light">{ props.title }</p>
            </Link>
        </li>
    );
};


export default NavLinks;