document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const heroContents = document.querySelectorAll(".hero-content");
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");
  let currentIndex = 0;

  function showHeroContent(index) {
    heroContents.forEach((content, i) => {
      content.classList.remove("active");
      if (i === index) {
        content.classList.add("active");
      }
    });
  }

  arrowRight.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % heroContents.length;
    showHeroContent(currentIndex);
  });

  arrowLeft.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + heroContents.length) % heroContents.length;
    showHeroContent(currentIndex);
  });

  // Auto-slide functionality
  setInterval(() => {
    currentIndex = (currentIndex + 1) % heroContents.length;
    showHeroContent(currentIndex);
  }, 5000); // Change slide every 5 seconds

  // Portfolio Section Scroll Logic
  const portfolioItems = document.querySelector(".portfolio-items");
  const portfolioArrowLeft = document.querySelector(".slider-arrow-left");
  const portfolioArrowRight = document.querySelector(".slider-arrow-right");

  portfolioArrowRight.addEventListener("click", () => {
    portfolioItems.scrollBy({
      left: 220, // Adjust this value for the scroll distance
      behavior: "smooth",
    });
  });

  portfolioArrowLeft.addEventListener("click", () => {
    portfolioItems.scrollBy({
      left: -220, // Adjust this value for the scroll distance
      behavior: "smooth",
    });
  });
});

// Simple search function for the search bar
const searchInput = document.querySelector('aside input[type="text"]');
const blogPosts = document.querySelectorAll('.blog-post');

searchInput.addEventListener('input', (e) => {
  const searchText = e.target.value.toLowerCase();
  blogPosts.forEach(post => {
    const postTitle = post.querySelector('h3').textContent.toLowerCase();
    if (postTitle.includes(searchText)) {
      post.style.display = 'block';
    } else {
      post.style.display = 'none';
    }
  });
});

let currentIndex = 0;
const newsItems = document.querySelectorAll('.news-item');

function showNews(index) {
    newsItems.forEach((item, i) => {
        item.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextNews() {
    currentIndex = (currentIndex + 1) % newsItems.length;
    showNews(currentIndex);
}

setInterval(nextNews, 5000); // Ganti berita setiap 5 detik

// Tampilkan berita pertama saat halaman dimuat
showNews(currentIndex);