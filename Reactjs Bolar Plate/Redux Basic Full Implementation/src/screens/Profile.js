import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

class Profile extends React.Component {
    
    render() {
        return (
            <div>
                <Header />
                <h1>Profile</h1>

                <p>Name: {this.props.user.name}</p>
                <p>Age: {this.props.user.age}</p>
                <p><img src={this.props.user.profile_pic} /></p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(Profile);
