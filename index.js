document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.querySelector('.grid-container');

    for (let i = 0; i < 16 * 16; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        gridContainer.appendChild(div);
    }
});

const gridDivs = document.querySelectorAll('.grid-item');  

function mouseHoverStart(event) {
    event.target.style.backgroundColor = 'red';
}

function mouseHoverEnd(event) {
    event.target.style.backgroundColor ='lightgray';
}

gridDivs.forEach(function(div) {
    div.addEventListener('mouseenter', mouseHoverStart);
    div.addEventListener('mouseleave', mouseHoverEnd);
});