import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";
// Styles
import "./App.css";
// Pages
import Homepage from "./pages/home/home.component";
import Shop from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import SignInSignOut from "./pages/sign-in-sign-out/sign-in-sign-out.component";
// Components
import Header from "./components/header/header.component";
// Firebase
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
// Redux
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
// styled demo
// const Text = styled.div`
//     color: red;
//     font-size: 28px;
//     border: ${({ isActive }) =>
//         isActive ? `1px solid black` : `3px dashed green`};
// `;
// <Text isActive={false}>I am a component</Text>
class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data(),
                    });
                });
            }
            setCurrentUser(userAuth);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/shop" component={Shop} />
                    <Route exact path="/checkout" component={CheckoutPage} />
                    <Route
                        exact
                        path="/signin"
                        render={() =>
                            this.props.currentUser ? (
                                <Redirect to="/" />
                            ) : (
                                <SignInSignOut />
                            )
                        }
                    />
                </Switch>
            </div>
        );
    }
}
// advanced destructuring
// const mapStateToProps = ({user: {currentUser}}) => ({
//   currentUser: currentUser
// })

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
