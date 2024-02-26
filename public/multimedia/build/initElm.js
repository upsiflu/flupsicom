(() => {
  // initElm.ts
  function run() {
    window["Elm"]?.Multimedia?.init();
    const shellImages = document.querySelectorAll(":is(#Shell, #Restrictive) img");
    window.addEventListener("mousemove", (e) => {
      shellImages.forEach((shell) => {
        shell.style.filter = `hue-rotate(${~~(e.clientX / 2 + e.clientY / 3)}deg)`;
      });
    });
  }
  run();
})();
