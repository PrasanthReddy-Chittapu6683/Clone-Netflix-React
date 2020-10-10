import React, { useEffect, useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'


function NavBar() {

    const [hangleShowTopNamBar, setHangleShowTopNamBar] = useState(false)
    // const [hangleWindowSize, setHangleWindowSize] = useState(false)
    // const [handleSubmenu, setHandleSubmenu] = useState(false)
    // const listeners = {};

    useEffect(() => {



        // window.innerWidth < 600 ? setHangleWindowSize(true) : setHangleWindowSize(false);

        window.addEventListener("scroll", (type, fn, options) => {

            // if (window.innerWidth < 600) {
            //     setHangleWindowSize(true)
            //     console.log('LESSSSSSSSSSS' + window.innerWidth);
            // } else {
            //     setHangleWindowSize(false)
            //     console.log('MOREEEEEEEEE' + window.innerWidth);
            // }
            if (window.scrollY > 100) {
                setHangleShowTopNamBar(true);
            } else {
                setHangleShowTopNamBar(false);
            }

        })
        // window.addEventListener("resize", (type, fn, options) => {
        //     if (listeners[type.type]?.indexOf('resize') !== -1)
        //         listeners[type.type] = [];

        //     listeners[type.type].push(type.type);
        //     if (window.innerWidth < 600) {
        //         setHangleWindowSize(true)
        //     } else {
        //         setHangleWindowSize(false)
        //     }
        //     console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
        // })



        return () => {
            window.removeEventListener("scroll")
            // window.removeEventListener('resize')
        }

    }, [])

    return (
        <div className={`nav ${hangleShowTopNamBar && "nav__black"}`}>
            <Link to='/'> <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" /></Link>
            <Link to='/myInfo'> <img className="nav__avatar" src="https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABaPolEEq5s2QRP_CDO2Y0XKN6lbRAkH-S-B5XcfR-7xdSV2k-1VPzx54xaySu7czNLu8U4t5Q8lhLZMzIBPgxcA.png?r=a41" alt="Netflix Logo" /></Link>
            {/* https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABd0VJiB-jlZOa4mPM_JZLqrwJamcrjh4ZVC5RcX3P3tEVQ-uJNJ36uHQcaIQvtthwlh1Xj_6lCjDxONOY6wr8ow.png?r=f71 */}



            <ul className="tabbed-primary-navigation">
                {/*                 
                {hangleWindowSize ?
                    <li className="navigation-menu">
                        <a className="menu-trigger" role="button" aria-haspopup="true" tabIndex="0">Browse  </a>

                        <div className="sub-menu theme-lakira" style={{ opacity: 1, transitionDuration: '150ms' }}>
                            <div className="callout-arrow"></div>
                            <div className="topbar"> </div>
                            <ul className="sub-menu-list">
                                <li className="sub-menu-item">
                                    <a className="current active" href="/browse">Home</a>
                                </li>
                                <li className="sub-menu-item">
                                    <a href="/browse/genre/83">TV Shows</a>
                                </li>
                                <li className="sub-menu-item">
                                    <a href="/browse/genre/34399">Movies</a>
                                </li>
                                <li className="sub-menu-item">
                                    <a href="/latest">Latest</a>
                                </li>
                                <li className="sub-menu-item">
                                    <a href="/browse/my-list">My List</a>
                                </li></ul>
                        </div>
                    </li>
                    :
                    <> */}

                <li className="navigation-tab">
                    <Link to='/' className="current active">
                        <span>Home</span>
                    </Link>
                </li>
                <li className="navigation-tab">
                    <Link to='/myInfo' className="current active">
                        <span >TV Shows</span>
                    </Link>
                </li>
                <li className="navigation-tab">
                    <Link to='/myInfo' className="current active">
                        <span >Movies</span>
                    </Link>
                </li>
                {/* <li className="navigation-tab">
                    <a href="/latest">Latest</a>
                </li>
                <li className="navigation-tab">
                    <a href="/browse/my-list">My List</a>
                </li> */}
                {/* </>
                } */}

                {/* </>
                } */}
            </ul>

        </div>
    )
}

export default NavBar
