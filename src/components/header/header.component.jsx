import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component.jsx";
import CartDropdown from "../cart-dropdown/cart-dropdown.component.jsx";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionDiv,
    OptionLink,
} from "./header.styles.jsx";

const Header = ({ currentUser, hidden }) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo />
            </LogoContainer>

            <OptionsContainer>
                <OptionLink to="/shop">SHOP</OptionLink>

                <OptionLink to="/">CONTACT</OptionLink>

                {currentUser ? (
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                    <OptionDiv onClick={() => auth.signOut()}>
                        SIGN OUT
                    </OptionDiv>
                ) : (
                    <OptionLink to="/signin">SIGN IN</OptionLink>
                )}
                <CartIcon />
            </OptionsContainer>

            {hidden ? null : <CartDropdown />}
        </HeaderContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
