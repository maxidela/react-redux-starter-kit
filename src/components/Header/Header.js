import React from 'react'
import {IndexLink, Link} from 'react-router'
import classes from './Header.scss'

export const Header = () => (
    <div>
        <h1>Hello, this is Maxi's test with several examples</h1>
        <IndexLink to='/' activeClassName={classes.activeRoute}>
            Home
        </IndexLink>
        {' · '}
        <Link to='/counter' activeClassName={classes.activeRoute}>
            Counter
        </Link>
        {' · '}
        <Link to="/todo" activeClassName={classes.activeRoute}>
            Todo
        </Link>
        {' · '}
        <Link to="/books" activeClassName={classes.activeRoute}>
            Books
        </Link>
    </div>
)

export default Header
