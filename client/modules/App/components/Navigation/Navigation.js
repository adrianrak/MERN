import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Navigation.css';

const Navigation = (props, context) => {
    return (
        <nav>
            <div className={styles['navigation']}>
                <Link to="/home" activeStyle={{borderBottom: '1px solid #fff'}} onlyActiveOnIndex>Home</Link>
                <Link to="/about" activeStyle={{borderBottom: '1px solid #fff'}} onlyActiveOnIndex>About</Link>
                <Link to="/" activeStyle={{borderBottom: '1px solid #fff'}} onlyActiveOnIndex>Posts</Link>
            </div>
        </nav>
    );
};

Navigation.propTypes = {
};

export default Navigation;