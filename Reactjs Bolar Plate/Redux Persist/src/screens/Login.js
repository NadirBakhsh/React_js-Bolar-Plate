import React from 'react';
import { update_user } from '../store/action';
import { connect } from 'react-redux';

class Login extends React.Component {

    componentDidMount() {
        if(this.props.user && this.props.user.name) {
            this.props.afterLogin();
        }
    }

    login() {
        //firebase api
        
        const user = { 
            name: 'kashif', 
            age: 40, 
            profile_pic: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' 
        }

        console.log('this.props ==> ', this.props)
        this.props.store_user(user);
        this.props.afterLogin();
    }

    render() {
        return (
            <div>
                <input placeholder="email" />
                <input placeholder="password" />

                <button onClick={this.login.bind(this)}>Login</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        store_user: (user) => dispatch(update_user(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
