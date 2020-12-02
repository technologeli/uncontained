import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Menu.css';

export default function MainMenu() {
  /*
      <div className='test'>
        <nav>
          <ul>
            <li>
              <Link to='/level'>Level 4</Link>
            </li>
          </ul>
        </nav>
      </div>
  */

  return (
    <>
      <div className='title-bar'>
        <span className='title-text center'>uncontained</span>
      </div>

      <div className='btn-container'>
        <Link to='/level' className='MenuText'>
          <div className='MenuButton blue'>Level Select</div>
        </Link>

        <Link to='/level' className='MenuText'>
          <div className='MenuButton red'>How To Play</div>
        </Link>

        <Link to='/level' className='MenuText'>
          <div className='MenuButton purple'>Leaderboard</div>
        </Link>

        <Link to='/' className='MenuText '>
          <div className='MenuButton orange' onClick={window.close}>
            Exit Game
          </div>
        </Link>
      </div>
    </>
  );
}
