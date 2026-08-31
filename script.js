const pages = document.querySelectorAll('.page');
const pageLinks = document.querySelectorAll('[data-page]');

function showPage(pageName) {
	pages.forEach((page) => page.classList.toggle('active', page.id === pageName));
	pageLinks.forEach((link) => link.classList.toggle('active', link.dataset.page === pageName));
	document.title = pageName === 'minecraft' ? 'Arko | Minecraft' : 'Arko | Developer';
}

function route() {
	showPage(window.location.hash === '#minecraft' ? 'minecraft' : 'home');
}

window.addEventListener('hashchange', route);
route();

// Gallery modal functionality
const modal = document.getElementById('imageModal');
const modalImage = document.querySelector('.modal-image');
const modalCaption = document.querySelector('.modal-caption');
const modalClose = document.querySelector('.modal-close');
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach((item) => {
	item.addEventListener('click', () => {
		const img = item.querySelector('img');
		const caption = item.querySelector('figcaption');
		
		modalImage.src = img.src;
		modalImage.alt = img.alt;
		modalCaption.textContent = caption.textContent;
		modal.classList.add('active');
		document.body.style.overflow = 'hidden';
	});
});

modalClose.addEventListener('click', () => {
	modal.classList.remove('active');
	document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
	if (e.target === modal) {
		modal.classList.remove('active');
		document.body.style.overflow = 'auto';
	}
});

document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape' && modal.classList.contains('active')) {
		modal.classList.remove('active');
		document.body.style.overflow = 'auto';
	}
});
