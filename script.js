const navButton = document.querySelector(".nav-button");
navButton.addEventListener('click',()=>{
    const navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
})
const tools = document.querySelectorAll('.tool');
const toolBox = document.getElementById('tool-box');

tools.forEach(tool => {
  tool.addEventListener('dragstart', dragStart)
  tool.addEventListener('dragend', dragEnd);
});

function dragStart() {
  draggedtool = this;
  this.classList.add('dragging'); 
}

function dragEnd() {
  this.classList.remove('dragging');
}



toolBox.addEventListener('dragover', dragOver);
toolBox.addEventListener('dragenter', dragEnter);
toolBox.addEventListener('dragleave', dragLeave);
toolBox.addEventListener('drop', drop);

// let draggedFruit = null; //no effect

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  // fruitBox.classList.add('highlight'); //no effect
}

function dragLeave() {
  // fruitBox.classList.remove('highlight');  //no effect
}
const progressPercenage = document.querySelector('.progress-percentage')
function drop() {
  // fruitBox.classList.remove('highlight');   //no effect
  if (draggedtool) {
    const b ={
      HTML:80,
      CSS:75,
      JAVASCRIPT:60,
      BOOTSTRAP:50,
      AURDINO:30,
      PYTHON:20
    }
    const a = `${draggedtool.dataset.tool}`
    const c = b[a]
    console.log(b[a])
    toolBox.innerHTML = `<h2>${a}</h2>`;
     //after here progressbar section 
    progressPercenage.innerText = c +"%";
    const progressBar = document.getElementById("my-progress-bar");
    progressBar.style.width = c +"%" ;
  }
}