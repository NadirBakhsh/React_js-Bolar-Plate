import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
    render() {
        return (
            <div style={{width: '100%', height: 70, backgroundColor: 'gray', color: 'white', textAlign: 'right'}}>
                {this.props.user && this.props.user.name}
                <button>Logout</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(Header);
