import { FC } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


type NavLinkProps = {
    path : string;
    title : string;
    icon : any;
};

const NavLinks : FC<NavLinkProps> = ( props ) => {
    return (
        <li>
            <NavLink to={ props.path } className="py-3 px-[3.25rem] flex-col-center-center gap-2 rounded-lg">
                <FontAwesomeIcon icon={ props.icon } className="text-xl" />
                <p className="text-sm font-light">{ props.title }</p>
            </NavLink>
        </li>
    );
};


export default NavLinks;