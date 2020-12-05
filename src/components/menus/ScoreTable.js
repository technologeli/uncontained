import React from 'react';

export default function ScoreTable({ leaderboard }) {
  function generateRows() {
    leaderboard.sort((a, b) => {
      return b.score - a.score;
    })
    return leaderboard.map((entry) => {
      return (
        <tr key={entry.id} className='score-table-row'>
          <td className='score-table-text'>{entry.initials}</td>
          <td className='score-table-text'>{entry.score}</td>
        </tr>
      );
    });
  }

  return (
    <table className='score-table purple standard-border'>
      <tbody>
        <tr>
          <th className='score-table-header'>Initials</th>
          <th className='score-table-header'>Score</th>
        </tr>
        {generateRows()}
      </tbody>
    </table>
  );
}
