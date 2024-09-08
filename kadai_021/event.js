const changeBtn = document.getElementById('btn');
const parentText = document.getElementById('text');

changeBtn.addEventListener('click', () => {
  const childText = document.createElement('text');
  childText.textContent = 'ボタンをクリックしました';

  setTimeout(() => {
    while(parentText.firstChild){
      parentText.removeChild(parentText.firstChild);
    }
    
    parentText.appendChild(childText);
  }, 2000);
});