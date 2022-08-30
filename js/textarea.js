document.addEventListener('paste', (e) => {
  debugger;
  console.log(e);
  console.log(e.clipboardData);
  console.log(e.clipboardData.types);
});