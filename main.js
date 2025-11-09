// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const navMenu = document.getElementById("navMenu")

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenuBtn.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

document.addEventListener("DOMContentLoaded", () => {
  const featuredItems = document.querySelectorAll(".featured-item")
  const indicators = document.querySelectorAll(".indicator")
  const prevBtn = document.getElementById("prevFeatured")
  const nextBtn = document.getElementById("nextFeatured")
  let currentSlide = 0

  function showSlide(n) {
    featuredItems.forEach((item) => item.classList.remove("active"))
    indicators.forEach((indicator) => indicator.classList.remove("active"))

    currentSlide = (n + featuredItems.length) % featuredItems.length
    featuredItems[currentSlide].classList.add("active")
    indicators[currentSlide].classList.add("active")
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => showSlide(currentSlide - 1))
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => showSlide(currentSlide + 1))
  }

  indicators.forEach((indicator) => {
    indicator.addEventListener("click", () => {
      showSlide(Number.parseInt(indicator.getAttribute("data-slide")))
    })
  })
})

document.addEventListener("DOMContentLoaded", () => {
  const testimonialItems = document.querySelectorAll(".testimonial-item")
  const indicators = document.querySelectorAll(".indicator")
  const prevBtn = document.getElementById("prevTestimonial")
  const nextBtn = document.getElementById("nextTestimonial")
  let currentSlide = 0
  const visibleCount = 2 // number of testimonials visible at once

  function showSlides(startIndex) {
    testimonialItems.forEach((item) => item.classList.remove("active"))
    indicators.forEach((indicator) => indicator.classList.remove("active"))

    // Loop through the next two testimonials
    for (let i = 0; i < visibleCount; i++) {
      const index = (startIndex + i) % testimonialItems.length
      testimonialItems[index].classList.add("active")
    }

    // Activate correct indicator (based on pair index)
    const indicatorIndex = Math.floor(startIndex / visibleCount)
    if (indicators[indicatorIndex]) indicators[indicatorIndex].classList.add("active")

    currentSlide = startIndex
  }

  nextBtn.addEventListener("click", () => {
    const nextIndex = (currentSlide + visibleCount) % testimonialItems.length
    showSlides(nextIndex)
  })

  prevBtn.addEventListener("click", () => {
    const prevIndex =
      (currentSlide - visibleCount + testimonialItems.length) % testimonialItems.length
    showSlides(prevIndex)
  })

  indicators.forEach((indicator) => {
    indicator.addEventListener("click", () => {
      const slideIndex = Number.parseInt(indicator.getAttribute("data-slide")) * visibleCount
      showSlides(slideIndex)
    })
  })

  showSlides(currentSlide)
})


// Smooth scroll active state for navbar
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section")
  const navLinks = document.querySelectorAll(".nav-menu a")

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100
    const sectionBottom = sectionTop + section.offsetHeight

    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      navLinks.forEach((link) => (link.style.color = ""))
    }
  })
})

