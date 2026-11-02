// JavaScript code for handling the video playback and fade-out effect of the overlay
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector('.overlay');
    const video = document.querySelector('.intro-video');

    if (overlay && video) {
        video.addEventListener('ended', function() {
            overlay.classList.add('fade-out');
            setTimeout(() => {
                overlay.style.display = 'none';
            }, 1000);
        });
    }
});

// Price Range Slider
const priceSlider = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');
const categoryFilters = document.querySelectorAll('.category-filter');
const productCards = document.querySelectorAll('.product-card');
const productGrid = document.getElementById('productGrid');
const noProducts = document.getElementById('noProducts');

// Product image lightbox
if (productGrid) {
    const galleryImages = Array.from(productGrid.querySelectorAll('[data-lightbox-gallery]'));
    const dialog = document.createElement('dialog');
    dialog.className = 'product-lightbox';
    dialog.setAttribute('aria-label', 'Product image gallery');

    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'lightbox-close';
    closeButton.textContent = 'Close';
    closeButton.setAttribute('aria-label', 'Close image gallery');

    const viewer = document.createElement('div');
    viewer.className = 'lightbox-viewer';

    const previousButton = document.createElement('button');
    previousButton.type = 'button';
    previousButton.className = 'lightbox-navigation';
    previousButton.textContent = 'Previous';
    previousButton.setAttribute('aria-label', 'Show previous image');

    const lightboxImage = document.createElement('img');
    lightboxImage.className = 'lightbox-image';

    const nextButton = document.createElement('button');
    nextButton.type = 'button';
    nextButton.className = 'lightbox-navigation';
    nextButton.textContent = 'Next';
    nextButton.setAttribute('aria-label', 'Show next image');

    viewer.append(previousButton, lightboxImage, nextButton);

    const caption = document.createElement('p');
    caption.className = 'lightbox-caption';

    const imageCount = document.createElement('p');
    imageCount.className = 'lightbox-count';
    imageCount.setAttribute('aria-live', 'polite');

    dialog.append(closeButton, viewer, caption, imageCount);
    document.body.append(dialog);

    let activeGallery = [];
    let activeIndex = 0;
    let lastTrigger = null;

    function showGalleryImage(index) {
        activeIndex = (index + activeGallery.length) % activeGallery.length;
        const image = activeGallery[activeIndex];
        lightboxImage.src = image.currentSrc || image.src;
        lightboxImage.alt = image.alt;
        caption.textContent = image.alt;
        imageCount.textContent = `${activeIndex + 1} of ${activeGallery.length}`;
        previousButton.hidden = activeGallery.length < 2;
        nextButton.hidden = activeGallery.length < 2;
    }

    function openLightbox(image) {
        const card = image.closest('.product-card');
        activeGallery = Array.from(card.querySelectorAll('[data-lightbox-gallery]'))
            .filter(galleryImage => galleryImage.dataset.lightboxGallery === image.dataset.lightboxGallery);
        activeIndex = activeGallery.indexOf(image);
        lastTrigger = image;
        showGalleryImage(activeIndex);
        dialog.showModal();
    }

    galleryImages.forEach(image => {
        image.tabIndex = 0;
        image.setAttribute('role', 'button');
        image.setAttribute('aria-haspopup', 'dialog');
        image.setAttribute('aria-label', `View larger image: ${image.alt}`);
    });

    productGrid.addEventListener('click', event => {
        const image = event.target.closest('[data-lightbox-gallery]');
        if (image) {
            openLightbox(image);
        }
    });

    productGrid.addEventListener('keydown', event => {
        if (event.target.matches('[data-lightbox-gallery]') && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault();
            openLightbox(event.target);
        }
    });

    closeButton.addEventListener('click', () => dialog.close());
    previousButton.addEventListener('click', () => showGalleryImage(activeIndex - 1));
    nextButton.addEventListener('click', () => showGalleryImage(activeIndex + 1));

    dialog.addEventListener('click', event => {
        if (event.target === dialog) {
            dialog.close();
        }
    });

    dialog.addEventListener('keydown', event => {
        if (event.key === 'ArrowLeft' && activeGallery.length > 1) {
            showGalleryImage(activeIndex - 1);
        } else if (event.key === 'ArrowRight' && activeGallery.length > 1) {
            showGalleryImage(activeIndex + 1);
        }
    });

    dialog.addEventListener('close', () => {
        if (lastTrigger) {
            lastTrigger.focus();
        }
    });
}

// Update price display
if (priceSlider) {
    priceSlider.addEventListener('input', function() {
        priceValue.textContent = 'R' + parseInt(this.value).toLocaleString();
        filterProducts();
    });
}

// Category filter
categoryFilters.forEach(filter => {
    filter.addEventListener('change', filterProducts);
});

const requestedCategory = new URLSearchParams(window.location.search).get('category');
const requestedCategoryFilter = Array.from(categoryFilters)
    .find(filter => filter.value === requestedCategory);

if (requestedCategoryFilter && priceSlider && productGrid) {
    requestedCategoryFilter.checked = true;
    filterProducts();
}

// Filter products based on price and category
function filterProducts() {
    const maxPrice = parseInt(priceSlider.value);
    const selectedCategories = Array.from(categoryFilters)
        .filter(filter => filter.checked)
        .map(filter => filter.value);

    let visibleCount = 0;

    productCards.forEach(card => {
        const price = parseFloat(card.dataset.price);
        const category = card.dataset.category;

        // Show product if it matches price range
        // If no categories selected, show all within price range
        // If categories selected, show only matching categories within price range
        const matchesPrice = price <= maxPrice;
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(category);

        if (matchesPrice && matchesCategory) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    // Show/hide no products message
    if (visibleCount === 0) {
        productGrid.style.display = 'none';
        noProducts.style.display = 'block';
    } else {
        productGrid.style.display = 'grid';
        noProducts.style.display = 'none';
    }
}

// Hero video 
const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
    heroVideo.play();
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});