/* ==========================================================================
   TRAVEL EXPLORER — MAIN JAVASCRIPT (script.js)
   Pure Vanilla JavaScript (ES6+) • No Frameworks • No Backend Required
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  /* ------------------------------------------------------------------------
     1. DATA CATALOG FOR DESTINATIONS & TRAVEL PACKAGES
     ------------------------------------------------------------------------ */
  const DESTINATIONS_DATA = {
    goa: {
      name: 'Goa',
      country: 'India',
      badge: 'Beaches & Heritage',
      image: 'assets/images/goa.jpg',
      price: '₹14,500 / person',
      idealDays: 4,
      defaultStyle: 'Comfort',
      meta: 'India • Best Season: Oct – Mar • 4 Days / 3 Nights',
      description:
        'Experience Goa beyond the ordinary—from tranquil crescent beaches in South Goa and colonial Fontainhas heritage walks to spice plantation lunches and golden Arabian Sea catamaran cruises.',
      highlightsHeading: 'Must-Experience Highlights in Goa',
      highlights: [
        'Sunset dolphin & coastal cruise along Palolem and Butterfly Beach',
        'Guided heritage walk through Fontainhas Latin Quarter in Panjim',
        'Authentic Goan Saraswat & Portuguese culinary tasting trail',
        'Dudhsagar waterfalls excursion & tropical spice estate tour',
        'Kayaking through serene Sal backwater mangroves at dawn'
      ]
    },
    manali: {
      name: 'Manali',
      country: 'India',
      badge: 'Himalayan Mountains',
      image: 'assets/images/manali.jpg',
      price: '₹15,800 / person',
      idealDays: 5,
      defaultStyle: 'Comfort',
      meta: 'India • Best Season: Oct – Jun • 5 Days / 4 Nights',
      description:
        'Nestled in the Kullu Valley along the roaring Beas River, Manali offers snow-crowned Himalayan vistas, ancient cedar-shaded temples, high-altitude passes, and cozy mountain cafes.',
      highlightsHeading: 'Must-Experience Highlights in Manali',
      highlights: [
        'Scenic drive through Atal Tunnel into Lahaul & Sissu Waterfall',
        'Solang Valley cable car ride & snow adventure activities',
        'Heritage timber architecture walk at Hadimba Devi Temple & Old Manali',
        'Riverside apple orchard picnic & Himachali trout dinner',
        'Guided pine forest trail to Jogini Waterfall at sunrise'
      ]
    },
    jaipur: {
      name: 'Jaipur',
      country: 'India',
      badge: 'Royal Heritage City',
      image: 'assets/images/jaipur.jpg',
      price: '₹12,900 / person',
      idealDays: 3,
      defaultStyle: 'Comfort',
      meta: 'India • Best Season: Oct – Mar • 3 Days / 2 Nights',
      description:
        'India’s fabled Pink City enchants visitors with hilltop Rajput fortresses, intricate honeycomb palace facades, UNESCO astronomical observatories, and vibrant block-print and gemstone bazaars.',
      highlightsHeading: 'Must-Experience Highlights in Jaipur',
      highlights: [
        'Golden hour tour of Amber Fort & Sheesh Mahal Mirror Palace',
        'Sunrise photography session across Hawa Mahal & Panna Meena Stepwell',
        'Private heritage walk through City Palace & Jantar Mantar',
        'Artisanal hand-block printing workshop in Sanganer',
        'Royal Rajasthani thali dinner with folk music at a heritage haveli'
      ]
    },
    kerala: {
      name: 'Kerala',
      country: 'India',
      badge: 'Backwaters & Nature',
      image: 'assets/images/kerala.jpg',
      price: '₹18,500 / person',
      idealDays: 5,
      defaultStyle: 'Comfort',
      meta: 'India • Best Season: Sep – Mar • 5 Days / 4 Nights',
      description:
        'Unwind in God’s Own Country as you drift along palm-shaded Alleppey lagoons aboard a traditional wooden Kettuvallam houseboat, wander misty Munnar tea estates, and rejuvenate with authentic Ayurveda.',
      highlightsHeading: 'Must-Experience Highlights in Kerala',
      highlights: [
        'Overnight private Kettuvallam houseboat cruise in Alleppey backwaters',
        'Misty morning trek through Munnar’s rolling emerald tea gardens',
        'Traditional Kathakali dance performance & Fort Kochi spice walk',
        'Authentic Malabar coastal seafood & Sadya feast served on banana leaf',
        'Rejuvenating Ayurvedic wellness session overlooking tropical lagoons'
      ]
    },
    bali: {
      name: 'Bali',
      country: 'Indonesia',
      badge: 'Tropical Island Escape',
      image: 'assets/images/bali.jpg',
      price: '₹42,000 / person',
      idealDays: 6,
      defaultStyle: 'Comfort',
      meta: 'Indonesia • Best Season: Apr – Oct • 6 Days / 5 Nights',
      description:
        'A sanctuary of emerald sculpted rice terraces, dramatic Indian Ocean cliff temples, mist-wreathed volcanic peaks, and warm Balinese hospitality across Ubud, Uluwatu, and Nusa Penida.',
      highlightsHeading: 'Must-Experience Highlights in Bali',
      highlights: [
        'Sunrise walk across Tegalalang Rice Terraces & Sacred Monkey Forest in Ubud',
        'Clifftop sunset & Kecak fire dance at Uluwatu Ocean Temple',
        'Full-day speedboat excursion to Nusa Penida’s Kelingking cliff viewpoint',
        'Mount Batur sunrise jeep viewpoint & natural volcanic hot springs',
        'Balinese bamboo villa stay with floating tropical breakfast'
      ]
    },
    dubai: {
      name: 'Dubai',
      country: 'United Arab Emirates',
      badge: 'Modern Metropolis & Desert',
      image: 'assets/images/dubai.jpg',
      price: '₹48,500 / person',
      idealDays: 5,
      defaultStyle: 'Premium',
      meta: 'United Arab Emirates • Best Season: Nov – Apr • 5 Days / 4 Nights',
      description:
        'Where visionary architecture meets timeless Arabian desert heritage—soar to the top of the Burj Khalifa, sail along Dubai Marina at twilight, and dine under desert stars on golden dunes.',
      highlightsHeading: 'Must-Experience Highlights in Dubai',
      highlights: [
        'Sunset observation deck visit at Burj Khalifa & Dubai Fountain show',
        'Luxury 4x4 Arabian desert safari with dune bashing & starlit BBQ dinner',
        'Private twilight dhow cruise along illuminated Dubai Marina',
        'Future-forward exploration at Museum of the Future & Dubai Frame',
        'Old Dubai creek abra ride through aromatic Spice & Gold Souks'
      ]
    }
  };

  const PACKAGES_DATA = {
    weekend: {
      name: 'Weekend Wanderer Package',
      badge: '3 Days / 2 Nights • Quick Escape',
      image: 'assets/images/pkg-weekend.jpg',
      price: '₹11,999 / person',
      calcDestination: 'Jaipur',
      calcDays: 3,
      calcStyle: 'Comfort',
      meta: 'Domestic Short Break • Ideal for Goa, Jaipur, or Manali',
      description:
        'Designed for busy professionals and couples seeking a restorative long-weekend escape. Every transfer, boutique hotel check-in, and sunset experience is pre-arranged so you simply arrive and unwind.',
      highlightsHeading: 'What’s Included in Weekend Wanderer',
      highlights: [
        '2 nights in a handpicked 4-Star Boutique Resort or Heritage Haveli',
        'Daily gourmet breakfast & welcome artisanal refreshment',
        'Chauffeur-driven airport or railway station pick-up and drop-off',
        'Curated half-day local heritage & sunset photography tour',
        '24/7 Travel Explorer on-trip WhatsApp & phone concierge'
      ]
    },
    explorer: {
      name: 'The Explorer Signature Package',
      badge: '6 Days / 5 Nights • Most Popular',
      image: 'assets/images/pkg-explorer.jpg',
      price: '₹26,499 / person',
      calcDestination: 'Kerala',
      calcDays: 6,
      calcStyle: 'Comfort',
      meta: 'Immersive Flagship Circuit • Ideal for Kerala, Himachal, or Rajasthan',
      description:
        'Our most loved multi-stop expedition blending nature, culture, and boutique luxury. Stay in eco-resorts and private houseboats, travel in your own SUV, and uncover hidden local gems with expert storytellers.',
      highlightsHeading: 'What’s Included in The Explorer',
      highlights: [
        '5 nights across luxury eco-resorts & 1 private houseboat/glamping night',
        'Daily breakfast plus 3 curated regional tasting dinners',
        'Dedicated private AC SUV & experienced local driver throughout',
        'All monument entry tickets, national park permits & guided trails',
        'Complimentary 1-hour professional travel photoshoot at a scenic spot'
      ]
    },
    beyond: {
      name: 'Beyond Borders International Luxe',
      badge: '7 Days / 6 Nights • International Escape',
      image: 'assets/images/pkg-beyond.jpg',
      price: '₹58,999 / person',
      calcDestination: 'Bali',
      calcDays: 7,
      calcStyle: 'Premium',
      meta: 'International Luxury • Ideal for Bali or Dubai',
      description:
        'Cross horizons with effortless sophistication. From oceanfront infinity pool villas in Bali to skyline suites in Downtown Dubai, enjoy VIP fast-track access, private cruises, and end-to-end visa assistance.',
      highlightsHeading: 'What’s Included in Beyond Borders',
      highlights: [
        '6 nights in 5-Star Oceanfront Pool Villas or Luxury Skyline Suites',
        'Dedicated visa documentation guidance & comprehensive travel insurance',
        'Private sunset yacht cruise or luxury Arabian desert conservation safari',
        'VIP skip-the-line entry to flagship landmarks & cultural shows',
        'Private airport transfers & personal on-call travel butler'
      ]
    }
  };

  /* ------------------------------------------------------------------------
     2. STICKY HEADER, SCROLLSPY & BACK-TO-TOP BUTTON
     ------------------------------------------------------------------------ */
  const siteHeader = document.getElementById('site-header');
  const backToTopBtn = document.getElementById('back-to-top');
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Sticky glass header
    if (scrollY > 40) {
      siteHeader.classList.add('is-scrolled');
    } else {
      siteHeader.classList.remove('is-scrolled');
    }

    // Back-to-top visibility
    if (scrollY > 450) {
      backToTopBtn.classList.add('is-visible');
    } else {
      backToTopBtn.classList.remove('is-visible');
    }

    // Active section scrollspy
    let currentSectionId = 'home';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 130;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === `#${currentSectionId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ------------------------------------------------------------------------
     3. MOBILE HAMBURGER MENU
     ------------------------------------------------------------------------ */
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mainNav = document.getElementById('main-nav');

  const closeMobileMenu = () => {
    if (!hamburgerBtn || !mainNav) return;
    hamburgerBtn.classList.remove('is-active');
    mainNav.classList.remove('is-open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  };

  if (hamburgerBtn && mainNav) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      hamburgerBtn.classList.toggle('is-active', isOpen);
      hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when clicking any link inside nav
    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (
        mainNav.classList.contains('is-open') &&
        !mainNav.contains(event.target) &&
        !hamburgerBtn.contains(event.target)
      ) {
        closeMobileMenu();
      }
    });
  }

  /* ------------------------------------------------------------------------
     4. SCROLL REVEAL ANIMATION (IntersectionObserver)
     ------------------------------------------------------------------------ */
  const revealElements = document.querySelectorAll('.reveal-up');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('is-visible'));
  }

  /* ------------------------------------------------------------------------
     5. DESTINATIONS CATEGORY FILTERING
     ------------------------------------------------------------------------ */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const destinationCards = document.querySelectorAll('.destination-card');

  const applyDestinationFilter = (category) => {
    // Update active state on filter buttons
    filterButtons.forEach((btn) => {
      const isMatch = btn.dataset.filter === category;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-selected', String(isMatch));
    });

    // Show/hide destination cards based on data-category
    destinationCards.forEach((card) => {
      const cardCategories = (card.dataset.category || '').split(' ');
      const shouldShow = category === 'all' || cardCategories.includes(category);

      if (shouldShow) {
        card.classList.remove('is-hidden');
        // Trigger smooth entrance animation
        card.animate(
          [
            { opacity: 0, transform: 'translateY(14px) scale(0.98)' },
            { opacity: 1, transform: 'translateY(0) scale(1)' }
          ],
          { duration: 340, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
        );
      } else {
        card.classList.add('is-hidden');
      }
    });
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedCategory = button.dataset.filter;
      applyDestinationFilter(selectedCategory);
    });
  });

  // Footer quick-filter destination links
  document.querySelectorAll('.footer-dest-link').forEach((link) => {
    link.addEventListener('click', () => {
      const targetFilter = link.dataset.filterTrigger;
      if (targetFilter) {
        applyDestinationFilter(targetFilter);
      }
    });
  });

  /* ------------------------------------------------------------------------
     6. INTERACTIVE TRAVEL BUDGET CALCULATOR
     ------------------------------------------------------------------------ */
  const budgetForm = document.getElementById('budget-form');
  const destSelect = document.getElementById('calc-destination');
  const travellersInput = document.getElementById('calc-travellers');
  const daysInput = document.getElementById('calc-days');
  const resetCalcBtn = document.getElementById('reset-calc-btn');
  const bookEstimateBtn = document.getElementById('book-estimate-btn');

  // Output DOM Elements
  const resultCard = document.querySelector('.result-card');
  const resSummaryPill = document.getElementById('res-summary-pill');
  const resStylePill = document.getElementById('res-style-pill');
  const resTotalAmount = document.getElementById('res-total-amount');
  const resPerPerson = document.getElementById('res-per-person');
  const resStayCost = document.getElementById('res-stay-cost');
  const resTransportCost = document.getElementById('res-transport-cost');
  const resFoodCost = document.getElementById('res-food-cost');
  const resActivityCost = document.getElementById('res-activity-cost');
  const resNote = document.getElementById('res-note');

  // Per-person daily base rates (in INR) + transit baseline per person
  const DESTINATION_RATES = {
    Goa: { dailyRate: 3200, transitBase: 3500 },
    Manali: { dailyRate: 3400, transitBase: 3800 },
    Jaipur: { dailyRate: 2900, transitBase: 3000 },
    Kerala: { dailyRate: 3900, transitBase: 4200 },
    Bali: { dailyRate: 5800, transitBase: 14500 },
    Dubai: { dailyRate: 7200, transitBase: 16500 }
  };

  const STYLE_MULTIPLIERS = {
    Budget: 1.0,
    Comfort: 1.55,
    Premium: 2.4
  };

  // Format number as Indian Rupees (₹)
  const formatINR = (amount) => {
    return '₹' + Math.round(amount).toLocaleString('en-IN');
  };

  const calculateTripBudget = (animateCard = true) => {
    if (!destSelect || !travellersInput || !daysInput) return;

    const destination = destSelect.value || 'Goa';
    const travellers = Math.min(20, Math.max(1, parseInt(travellersInput.value, 10) || 1));
    const days = Math.min(30, Math.max(1, parseInt(daysInput.value, 10) || 1));

    travellersInput.value = travellers;
    daysInput.value = days;

    const selectedStyleInput = document.querySelector('input[name="travelStyle"]:checked');
    const travelStyle = selectedStyleInput ? selectedStyleInput.value : 'Comfort';

    const rateInfo = DESTINATION_RATES[destination] || DESTINATION_RATES.Goa;
    const styleMultiplier = STYLE_MULTIPLIERS[travelStyle] || 1.55;

    // Group sharing efficiency discount (8% off when 4+ travellers share rooms & SUVs)
    const groupFactor = travellers >= 4 ? 0.92 : 1.0;

    // Calculate per-person cost: (daily cost * days + transit baseline) * styleMultiplier * groupFactor
    const dailyPortion = rateInfo.dailyRate * days * styleMultiplier;
    const transitPortion = rateInfo.transitBase * (0.75 + styleMultiplier * 0.25);
    const perPersonTotal = Math.round((dailyPortion + transitPortion) * groupFactor);
    const totalCost = perPersonTotal * travellers;
    const perDayPerPerson = Math.round(perPersonTotal / days);

    // Breakdown percentages: Stay 42%, Transport 26%, Food 18%, Activities 14%
    const stayCost = Math.round(totalCost * 0.42);
    const transportCost = Math.round(totalCost * 0.26);
    const foodCost = Math.round(totalCost * 0.18);
    const activityCost = totalCost - stayCost - transportCost - foodCost;

    // Update Summary Labels
    const travellerLabel = travellers === 1 ? '1 Traveller' : `${travellers} Travellers`;
    const dayLabel = days === 1 ? '1 Day' : `${days} Days`;

    resSummaryPill.textContent = `${destination} • ${travellerLabel} • ${dayLabel}`;
    resStylePill.textContent = `${travelStyle} Style`;
    resTotalAmount.textContent = formatINR(totalCost);
    resPerPerson.textContent = `Approx. ${formatINR(perPersonTotal)} per traveller (${formatINR(perDayPerPerson)} / day)`;

    resStayCost.textContent = formatINR(stayCost);
    resTransportCost.textContent = formatINR(transportCost);
    resFoodCost.textContent = formatINR(foodCost);
    resActivityCost.textContent = formatINR(activityCost);

    const discountNote =
      travellers >= 4 ? ' (Includes 8% group sharing savings for 4+ travellers!)' : '';
    resNote.textContent = `* Includes estimated ${travelStyle.toLowerCase()} stays, transfers, dining, and guided sightseeing in ${destination}.${discountNote}`;

    if (animateCard && resultCard) {
      resultCard.classList.remove('is-pulsing');
      void resultCard.offsetWidth; // trigger reflow
      resultCard.classList.add('is-pulsing');
    }

    return {
      destination,
      travellers,
      days,
      travelStyle,
      totalCostFormatted: formatINR(totalCost)
    };
  };

  // Stepper buttons (+ / -) for Travellers and Days
  document.querySelectorAll('.stepper-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const action = btn.dataset.action;
      const input = document.getElementById(targetId);
      if (!input) return;

      const min = parseInt(input.getAttribute('min'), 10) || 1;
      const max = parseInt(input.getAttribute('max'), 10) || 30;
      let val = parseInt(input.value, 10) || min;

      if (action === 'increment' && val < max) {
        val += 1;
      } else if (action === 'decrement' && val > min) {
        val -= 1;
      }

      input.value = val;
      calculateTripBudget(false);
    });
  });

  // Form submit handler ("Calculate Budget" button)
  if (budgetForm) {
    budgetForm.addEventListener('submit', (event) => {
      event.preventDefault();
      calculateTripBudget(true);
    });

    // Also update live when dropdown or radio changes
    destSelect.addEventListener('change', () => calculateTripBudget(true));
    travellersInput.addEventListener('input', () => calculateTripBudget(false));
    daysInput.addEventListener('input', () => calculateTripBudget(false));
    document.querySelectorAll('input[name="travelStyle"]').forEach((radio) => {
      radio.addEventListener('change', () => calculateTripBudget(true));
    });
  }

  // Reset Calculator button
  if (resetCalcBtn) {
    resetCalcBtn.addEventListener('click', () => {
      destSelect.value = 'Goa';
      travellersInput.value = 2;
      daysInput.value = 5;
      const comfortRadio = document.querySelector('input[name="travelStyle"][value="Comfort"]');
      if (comfortRadio) comfortRadio.checked = true;
      calculateTripBudget(true);
    });
  }

  // Pre-fill inquiry form when clicking "Lock In This Estimate"
  if (bookEstimateBtn) {
    bookEstimateBtn.addEventListener('click', () => {
      const estimate = calculateTripBudget(false);
      const notesField = document.getElementById('inq-notes');
      if (notesField && estimate) {
        notesField.value = `Hi Travel Explorer Team, I'd love to plan a ${estimate.days}-day ${estimate.travelStyle} trip to ${estimate.destination} for ${estimate.travellers} traveller(s) (Estimated budget: ${estimate.totalCostFormatted}). Please share a detailed itinerary!`;
      }
    });
  }

  // Initialize budget calculator on page load
  calculateTripBudget(false);

  /* ------------------------------------------------------------------------
     7. DESTINATION & PACKAGE DETAIL MODAL
     ------------------------------------------------------------------------ */
  const detailModal = document.getElementById('detail-modal');
  const detailModalBackdrop = document.getElementById('detail-modal-backdrop');
  const detailModalClose = document.getElementById('detail-modal-close');
  const modalImg = document.getElementById('modal-img');
  const modalBadge = document.getElementById('modal-badge');
  const modalMeta = document.getElementById('modal-meta');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalListHeading = document.getElementById('modal-list-heading');
  const modalHighlightsList = document.getElementById('modal-highlights-list');
  const modalPrice = document.getElementById('modal-price');
  const modalCalcBtn = document.getElementById('modal-calc-btn');

  let activeModalCalcPreset = null;

  const openDetailModal = (config) => {
    if (!detailModal) return;

    modalImg.src = config.image;
    modalImg.alt = config.name;
    modalBadge.textContent = config.badge;
    modalMeta.textContent = config.meta;
    modalTitle.textContent = config.name;
    modalDesc.textContent = config.description;
    modalListHeading.textContent = config.highlightsHeading;
    modalPrice.textContent = config.price;

    modalHighlightsList.innerHTML = '';
    config.highlights.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      modalHighlightsList.appendChild(li);
    });

    activeModalCalcPreset = {
      destination: config.calcDestination || config.name,
      days: config.calcDays || config.idealDays || 5,
      style: config.calcStyle || config.defaultStyle || 'Comfort'
    };

    detailModal.classList.add('is-open');
    detailModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeDetailModal = () => {
    if (!detailModal) return;
    detailModal.classList.remove('is-open');
    detailModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  // Attach click handlers to Destination "Explore" buttons
  document.querySelectorAll('.btn-explore-dest').forEach((btn) => {
    btn.addEventListener('click', () => {
      const destId = btn.dataset.destId;
      const data = DESTINATIONS_DATA[destId];
      if (data) openDetailModal(data);
    });
  });

  // Attach click handlers to Package "Explore Package" buttons
  document.querySelectorAll('.btn-explore-pkg').forEach((btn) => {
    btn.addEventListener('click', () => {
      const pkgId = btn.dataset.pkgId;
      const data = PACKAGES_DATA[pkgId];
      if (data) openDetailModal(data);
    });
  });

  if (detailModalClose) detailModalClose.addEventListener('click', closeDetailModal);
  if (detailModalBackdrop) detailModalBackdrop.addEventListener('click', closeDetailModal);

  // "Calculate Budget for This Trip" inside modal
  if (modalCalcBtn) {
    modalCalcBtn.addEventListener('click', () => {
      if (activeModalCalcPreset) {
        destSelect.value = activeModalCalcPreset.destination;
        daysInput.value = activeModalCalcPreset.days;
        const radio = document.querySelector(
          `input[name="travelStyle"][value="${activeModalCalcPreset.style}"]`
        );
        if (radio) radio.checked = true;
        calculateTripBudget(true);
      }
      closeDetailModal();
      const calcSection = document.getElementById('calculator');
      if (calcSection) {
        calcSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  /* ------------------------------------------------------------------------
     8. PHOTO GALLERY CLICK-TO-ENLARGE LIGHTBOX
     ------------------------------------------------------------------------ */
  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxLocation = document.getElementById('lightbox-location');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');

  let currentGalleryIndex = 0;

  const updateLightboxSlide = (index) => {
    const total = galleryItems.length;
    currentGalleryIndex = (index + total) % total;
    const item = galleryItems[currentGalleryIndex];
    if (!item) return;

    lightboxImg.src = item.dataset.src;
    lightboxImg.alt = item.dataset.title;
    lightboxLocation.textContent = item.dataset.location;
    lightboxCounter.textContent = `${currentGalleryIndex + 1} / ${total}`;
    lightboxTitle.textContent = item.dataset.title;
    lightboxDesc.textContent = item.dataset.caption;
  };

  const openLightbox = (index) => {
    if (!lightboxModal) return;
    updateLightboxSlide(index);
    lightboxModal.classList.add('is-open');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('is-open');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  galleryItems.forEach((item, idx) => {
    item.addEventListener('click', () => openLightbox(idx));
    item.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openLightbox(idx);
      }
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', () => updateLightboxSlide(currentGalleryIndex - 1));
  }
  if (lightboxNext) {
    lightboxNext.addEventListener('click', () => updateLightboxSlide(currentGalleryIndex + 1));
  }

  // Global keyboard navigation for modals & mobile menu
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeLightbox();
      closeDetailModal();
      closeMobileMenu();
    } else if (lightboxModal && lightboxModal.classList.contains('is-open')) {
      if (event.key === 'ArrowRight') {
        updateLightboxSlide(currentGalleryIndex + 1);
      } else if (event.key === 'ArrowLeft') {
        updateLightboxSlide(currentGalleryIndex - 1);
      }
    }
  });

  /* ------------------------------------------------------------------------
     9. CONTACT INQUIRY & NEWSLETTER FORM FEEDBACK
     ------------------------------------------------------------------------ */
  const inquiryForm = document.getElementById('inquiry-form');
  const inquiryFeedback = document.getElementById('inquiry-feedback');

  if (inquiryForm && inquiryFeedback) {
    inquiryForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const nameInput = document.getElementById('inq-name');
      const visitorName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : 'Traveller';

      inquiryFeedback.textContent = `✓ Thank you, ${visitorName}! Our senior travel curator will contact you within 2 hours.`;
      inquiryForm.reset();

      setTimeout(() => {
        inquiryFeedback.textContent = '';
      }, 6500);
    });
  }

  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterMsg = document.getElementById('newsletter-msg');

  if (newsletterForm && newsletterMsg) {
    newsletterForm.addEventListener('submit', (event) => {
      event.preventDefault();
      newsletterMsg.textContent = '✓ Welcome aboard! Check your inbox for our seasonal travel guide.';
      newsletterForm.reset();

      setTimeout(() => {
        newsletterMsg.textContent = '';
      }, 5000);
    });
  }

  // Dynamic footer year
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
