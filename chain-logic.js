// ============================================================
// SCI FUN RACE PART 2 2027 — Game Chain Handoff Logic
// ------------------------------------------------------------
// Shared by every game file. Each game calls renderChainBox()
// from its win/finish function, passing the id of an empty
// container div sitting inside its completion overlay.
//
// It figures out which game the player just finished (by
// matching the current page's filename against GAME_ORDER in
// config.js) and shows either:
//   - a QR code for the NEXT game in the chain (QR ONLY — no
//     tappable link), or
//   - the final "show staff to get your password" message, if
//     this was the LAST game in GAME_ORDER.
//
// Why QR-only, no direct link: each game is meant to be played by
// a DIFFERENT team member. A QR code shown on one phone can only
// be scanned by a SECOND phone's camera — that naturally forces
// the phone to be handed to the next player. A tappable link,
// though, opens on the SAME phone/browser that just finished,
// letting one person keep playing every game solo. So this file
// intentionally does not render an <a href> to the next game.
//
// Requires config.js to be loaded first (defines BASE_URL and
// GAME_ORDER).
// ============================================================

function renderChainBox(containerId){
  const el=document.getElementById(containerId);
  if(!el)return;

  try{
    const currentFile=(location.pathname.split("/").pop()||"").trim();
    const idx=GAME_ORDER.indexOf(currentFile);

    if(idx===-1 || idx===GAME_ORDER.length-1){
      // Unknown filename (e.g. opened locally under a different
      // name) or this IS the last game in the chain — end here.
      el.innerHTML=staffBoxHTML();
      return;
    }

    const nextFile=GAME_ORDER[idx+1];
    const nextUrl=BASE_URL+nextFile;
    const qrSrc="https://api.qrserver.com/v1/create-qr-code/?size=260x260&data="+encodeURIComponent(nextUrl);

    el.innerHTML=
      '<div class="qrBox">'+
        '<div class="qrLabel">📱 Pass the phone to the NEXT team member!</div>'+
        '<img class="qrImg" src="'+qrSrc+'" alt="QR code to the next challenge" '+
          'onerror="this.replaceWith(Object.assign(document.createElement(\'div\'),{className:\'qrFallback\',textContent:\'Could not load QR image — check your internet connection.\'}))">'+
        '<div class="qrSub">The NEXT player scans this with a DIFFERENT phone to start their challenge.</div>'+
      '</div>';
  }catch(e){
    el.innerHTML=staffBoxHTML();
  }
}

function staffBoxHTML(){
  return '<div class="showStaffBox">📱 Show this screen to a staff member to get your password.</div>';
}