export default function StateJS() {
  return (
    <>
      <button id="click-btn">Click me!</button>
      <p>Click count: <span id="click-count">0</span></p>
    </>
  )
}

const clickBtn = document.getElementById('click-btn'); 

const clickCount = document.getElementById('click-count'); 

let count = 0; 

clickBtn.addEventListener('click', () => { 

  count++; 

  clickCount.textContent = count; 

}); 