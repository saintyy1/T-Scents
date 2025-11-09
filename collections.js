// Sample perfume data
const perfumeData = [
  {
    id: 1,
    name: "Velvet Oud",
    brand: "Lattafa",
    price: 60000,
    image: "/images/velvet oud.jpeg",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "La Vie Est Belle",
    brand: "Lancôme",
    price: 18000,
    image: "/images/la vie est belle.webp",
    badge: "Luxury",
  },
  {
    id: 3,
    name: "Sauvage",
    brand: "Christian Dior",
    price: 30000,
    image: "/images/dior sauvage.jpg",
    description: "Fresh ambroxan with warm woody notes.",
    notes: "Cedar, Vanilla, Spices",
    badge: "Best Seller",
  },
  {
    id: 4,
    name: "Adour Body Spray",
    brand: "Adour",
    price: 6500,
    image: "/images/Adour spray.jpg",
    badge: "New",
  },
  {
    id: 5,
    name: "Lavender & Vanilla",
    brand: "Victoria Secrets",
    price: 27000,
    image: "/images/lavender & vanilla.webp",
    badge: "New",
  },
  {
    id: 6,
    name: "Vintage Radio",
    brand: "Lattafa",
    price: 46000,
    image: "/images/vintage radio.jpg",
    badge: "Bestseller",
  },
  {
    id: 7,
    name: "Spanish Vanilla",
    brand: "Alrehab",
    price: 18000,
    image: "/images/spanish vanilla.jpg",
    badge: "New",
  },
  {
    id: 8,
    name: "Cloud Candy",
    brand: "Khadlaj",
    price: 45000,
    image: "/images/cloud candy.jpg",
    badge: "Best Seller",
  },
  {
    id: 9,
    name: "Nebras Gift Set",
    brand: "Lattafa",
    price: 46000,
    image: "/images/nebras.jpg",
    badge: "New",
  },
  {
    id: 10,
    name: "Niche Perfumes",
    brand: "Niche",
    price: 7000,
    image: "/images/niche.jpg",
    badge: "New",
  },
  {
    id: 11,
    name: "Smart World",
    brand: "Smart World",
    price: 8000,
    image: "/images/smart world.jpg",
    badge: "New",
  },
  {
    id: 12,
    name: "Caramel Cascade",
    brand: "Taskeen",
    price: 8500,
    image: "/images/caramel cascade.jpg",
    badge: "Luxury",
  },
  {
    id: 13,
    name: "Angham",
    brand: "Lattafa",
    price: 46000,
    image: "/images/angham.jpg",
    badge: "Best Seller",
  },
  {
    id: 14,
    name: "Dubai Chocolate",
    brand: "Lamsat Harir",
    price: 14000,
    image: "/images/dubai chocolate.jpg",
    badge: "Luxury",
  },
  {
    id: 15,
    name: "Hayaati Belle",
    brand: "Lattafa",
    price: 20000,
    image: "/images/hayaati.jpg",
    badge: "Luxury",
  },
  {
    id: 16,
    name: "Hayaati Beau",
    brand: "Lattada",
    price: 20000,
    image: "/images/hayaati beau.jpg",
    badge: "New",
  },
  {
    id: 17,
    name: "Yum Yum",
    brand: "Armaf",
    price: 60000,
    image: "/images/yum yum.jpg",
    badge: "Best Seller",
  },
  {
    id: 18,
    name: "Qaed Al Fursan",
    brand: "Lattafa",
    price: 21000,
    image: "/images/Qaed Al Fursan.jpg",
    badge: "Luxury",
  },
  {
    id: 19,
    name: "Victoria",
    brand: "Lattafa",
    price: 45000,
    image: "/images/victoria.jpg",
    badge: "Best Seller",
  },
  {
    id: 20,
    name: "Veltia",
    brand: "Imperio",
    price: 16000,
    image: "/images/veltia.jpg",
    badge: "Luxury",
  },
]

function createProductCard(product) {
  return `
    <div class="carousel-product-card">
      <div class="carousel-product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="carousel-product-info">
        <span class="carousel-product-brand">${product.brand}</span>
        <h3 class="carousel-product-name">${product.name}</h3>
        <span class="carousel-product-price">₦${product.price}</span>
      </div>
    </div>
  `
}

function renderCarousels() {
  // Filter products by badge
  const bestSellers = perfumeData.filter((p) => p.badge === "Best Seller" || p.badge === "Bestseller")
  const newest = perfumeData.filter((p) => p.badge === "New")
  const limited = perfumeData.filter((p) => p.badge === "Luxury")

  // Render Best Sellers
  const bestSellersTrack = document.getElementById("track-bestsellers")
  bestSellers.forEach((product) => {
    bestSellersTrack.innerHTML += createProductCard(product)
  })

  // Render Newest
  const newestTrack = document.getElementById("track-newest")
  newest.forEach((product) => {
    newestTrack.innerHTML += createProductCard(product)
  })

  // Render Limited
  const limitedTrack = document.getElementById("track-limited")
  limited.forEach((product) => {
    limitedTrack.innerHTML += createProductCard(product)
  })

  // Initialize carousel navigation
  initCarouselNavigation()
}

function initCarouselNavigation() {
  document.querySelectorAll(".carousel-nav-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const carouselId = button.dataset.carousel
      const container = document.getElementById(`carousel-${carouselId}`)
      const track = document.getElementById(`track-${carouselId}`)

      const scrollAmount = 350

      if (button.classList.contains("prev")) {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }
    })
  })
}

// Mobile menu
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const navMenu = document.getElementById("navMenu")

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("active")
  navMenu.classList.toggle("active")
})

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenuBtn.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

// Initial render
renderCarousels()