# Rock, Paper, Scissors Game

A simple and interactive Rock, Paper, Scissors game built with HTML, CSS, and JavaScript.

## Features

- Enter your name and play against the computer
- Animated SVG icons for Rock, Paper, and Scissors
- Scoreboard tracking wins, losses, and draws
- "Play Again", "Reset Score", and "Quit" options
- Rules dialogue explaining how to play
- Responsive design for desktop and mobile
- Persistent scores using `localStorage`

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension for VS Code (optional, for local development)

### Running Locally

1. **Clone or download this repository**
2. **Open the project folder in VS Code**
3. **Start Live Server** (or open `index.html` directly in your browser)

### File Structure

```
rock-paper-scissors/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── rock.svg
    ├── paper.svg
    ├── scissors.svg
    └── logo.png
```

## How to Play

1. Enter your name in the input field and click "Play".
2. Choose Rock, Paper, or Scissors by clicking the corresponding button.
3. The computer will randomly select its choice.
4. The winner will be determined based on the rules of the game:
   - Rock crushes Scissors
   - Scissors cut Paper
   - Paper covers Rock
5. Your score will be updated on the scoreboard.
6. You can click "Play Again" to continue playing, "Reset Score" to reset the scores, or "Quit" to end the game.

## Rules Dialogue

The rules dialogue explains the game rules in detail and is accessible by clicking the "Rules" button. It can be closed by clicking the "X" button or anywhere outside the dialogue.

## Responsive Design

The game is designed to be responsive and should work on both desktop and mobile devices. The layout and controls will adjust based on the screen size.

## Persistent Scores

The game uses `localStorage` to persist scores, so your wins, losses, and draws will be saved even if you refresh the page or close the browser.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Credits

- Designed and developed by [GiftinTech](https://giftegbonyi.vercel.app/)
- Design inspired by [Mark's Rock Paper Scissors Game](https://markteekman.github.io/rock-paper-scissors-game/)

## Licence

This project is licensed under the MIT Licence – see the [LICENCE](/LICENSE) file for details.

## Acknowledgements

- Inspired by the classic Rock, Paper, Scissors game
- Icons made by [Freepik](https://www.freepik.com) from [Flaticon](https://www.flaticon.com)
