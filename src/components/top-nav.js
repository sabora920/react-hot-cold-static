import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a className="what" href="./info-modal.js">
                        What?
                    </a>
                </li>
                <li>
                    <a className="new" href="./game.js">
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}

