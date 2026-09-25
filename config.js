// ============================================================
// SCI FUN RACE PART 2 2027 — Shared Game Chain Config
// ------------------------------------------------------------
// EDIT THIS FILE ONLY — every game reads from here.
//
// 1) Host ALL the game files (this one included) in the same
//    folder on GitHub Pages (or any web host). See
//    HOSTING-SETUP.md for step-by-step instructions.
//
// 2) Set BASE_URL below to the exact address where they live,
//    ENDING WITH A SLASH.
//
// 3) List every game file in GAME_ORDER, in the order teams
//    must play them. When you add more games later, just add
//    the filename to this list — nothing else needs to change
//    in any of the game files themselves.
//
// 4) The LAST entry in GAME_ORDER does NOT need to be a special
//    "completed" page. chain-logic.js automatically detects
//    whichever game is listed last and shows the "show staff
//    to get your password" message right on that game's own
//    completion screen instead of a QR code — so the final game
//    in the list doubles as the finish line. No separate
//    all-completed.html file is needed.
// ============================================================

const BASE_URL = "https://revil007.github.io/Fun-Race-Games/";

const GAME_ORDER = [
  "puzzle-game.html",
  "reflex-game.html",
  "memory-match-game.html",
  "game4.html",
  "game5.html"
];