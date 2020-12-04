import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/Menu.css';

/**
 * Functional component Main Menu.
 *
 * @returns JSX that represents a main menu.
 */
export default function MainMenu() {
  /**
   * A helper method to create the main menu buttons.
   *
   * @param {string} to The url of the page to go to.
   * @param {string} color The color of the button.
   * @param {string} text The text to put inside of the button.
   * @param {function} onClick The method to execute on click.
   *
   * @returns JSX that represents a button for the main menu.
   */
  function MainMenuButton(to, color, text, onClick) {
    return (
      <Link to={to} className='main-menu-text link-text'>
        <div
          className={`main-menu-button ${color} standard-border div-hover`}
          onClick={onClick}
        >
          {text}
        </div>
      </Link>
    );
  }

  return (
    <>
      <div className='title-bar'>
        <span className='title-text center'>Uncontained</span>
      </div>

      <div className='btn-container'>
        {MainMenuButton('/level-select', 'blue', 'Level Select')}
        {MainMenuButton('/how-to-play', 'red', 'How to Play')}
        {MainMenuButton('/leaderboard', 'purple', 'Leaderboard')}
        {MainMenuButton('/', 'orange', 'Exit Game', window.close)}
      </div>
    </>
  );
}
