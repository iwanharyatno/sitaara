let imgPlaceholdersImg = document.querySelectorAll('.img-placeholder img');
let imgPlaceholders = document.querySelectorAll('.img-placeholder');

window.checkImgPlaceholders = function() {
    imgPlaceholdersImg = document.querySelectorAll('.img-placeholder img');
    imgPlaceholders = document.querySelectorAll('.img-placeholder');
    
	for (const imgPlaceholderImg of imgPlaceholdersImg) {
	    if (imgPlaceholderImg.completed) {
		    imgPlaceholderImg.parentNode.style.setProperty('--placeholder-display', 'none');
	    } else {
		    imgPlaceholderImg.addEventListener('load', function() {
		        imgPlaceholderImg.parentNode.style.setProperty('--placeholder-display', 'none');
		    });
	    }
	}
}

function resizePlaceholders() {
	for (const imgPlaceholder of imgPlaceholders) {
	    const width = imgPlaceholder.offsetWidth;
	    imgPlaceholder.style.height = width + 'px';
	}
}

checkImgPlaceholders();
resizePlaceholders();

window.addEventListener('resize', resizePlaceholders);