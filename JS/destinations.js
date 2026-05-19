/* ═══════════════════════════════════════
   DESTINATIONS PAGE — destinations.js
═══════════════════════════════════════ */

const destinations = [
  {
    id: 1, name: "Maniwaya Beach", municipality: "Santa Cruz", category: "Beach", image: "images/maniwaya.png",
    desc: "Pristine stretch of powdery white sand lapped by crystal-clear turquoise waters, surrounded by lush coconut palms.",
    fullDesc: "Maniwaya Beach on Maniwaya Island is arguably Marinduque's most stunning coastal gem. The wide arc of white sand is fringed by clear, calm waters ranging from turquoise to deep blue, with gentle waves perfect for swimming and snorkeling. The island is accessible by outrigger boat from Buyabod Port in Santa Cruz and retains an unspoiled, unhurried character that is increasingly rare in Philippine beach destinations.",
    fee: "₱50 environmental fee", hours: "Open daily, daylight hours",
    best: "November to May (dry season)", how: "Boat from Buyabod Port, Santa Cruz (30–45 min)",
    activities: ["Swimming & snorkeling", "Island hopping", "Beach camping", "Kayaking", "Picnicking"],
    tips: ["Bring your own food and water — facilities are limited", "Hire a pumpboat from Buyabod Port (₱400–600 round-trip)", "Start early to secure the best spots"]
  },
  {
    id: 2, name: "Poctoy White Beach", municipality: "Torrijos", category: "Beach", image: "images/poctoy.png",
    desc: "A long, scenic white-sand beach known for its fine sand and gentle waves — perfect for families and sunset watching.",
    fullDesc: "Poctoy White Beach in Torrijos is one of Marinduque's most accessible and family-friendly shores. The beach stretches for over a kilometer, offering a mix of fine white and light gray sand, calm waters ideal for swimming, and a laid-back atmosphere with small resorts and cottages dotting the shoreline. Poctoy is especially renowned for its vivid sunset views, where the sky turns brilliant shades of orange and pink over the Sibuyan Sea.",
    fee: "Free access", hours: "Open 24 hours",
    best: "December to May", how: "Drive or habal-habal from Boac (~45 min)",
    activities: ["Swimming", "Sunset watching", "Beach volleyball", "Kayak rental", "Beachside dining"],
    tips: ["Book accommodation ahead during Holy Week", "Best sunsets from late afternoon — arrive by 5 PM", "Seafood restaurants serve fresh daily catches"]
  },
  {
    id: 3, name: "Tres Reyes Islands", municipality: "Gasan", category: "Island", image: "images/tres_reyes_islands.png",
    desc: "Three uninhabited paradise islands teeming with marine life, coral reefs, and crystal-clear waters off the Gasan coast.",
    fullDesc: "The Tres Reyes Islands — Melchor, Gaspar, and Baltazar — are named after the Three Kings of Christian tradition. These small, lush islands lie off the coast of Gasan and are surrounded by vibrant coral gardens hosting extraordinary marine diversity. They are a top destination for snorkeling and scuba diving, with visibility often exceeding 20 meters on calm days.",
    fee: "₱50–100 entrance fee", hours: "Sunrise to sunset",
    best: "March to May (calmest seas)", how: "Pumpboat charter from Gasan port (20–30 min)",
    activities: ["Snorkeling", "Scuba diving", "Beachcombing", "Island picnic", "Underwater photography"],
    tips: ["Use reef-safe sunscreen to protect the coral", "Hire a local guide for the best snorkeling spots", "Combine with a Gasan town heritage walk"]
  },
  {
    id: 4, name: "Bathala Caves", municipality: "Buenavista", category: "Cave", image: "images/caves.png",
    desc: "A series of spectacular limestone caverns with dramatic stalactite formations, underground pools, and ancient rock art.",
    fullDesc: "The Bathala Caves in Buenavista are among the most impressive natural formations in MIMAROPA. Named after the supreme deity in ancient Tagalog mythology, the cave system contains seven chambers adorned with cathedral-like stalactites and stalagmites millions of years in the making. Several chambers contain underground pools, and archaeologists have discovered evidence of prehistoric human habitation within the caves.",
    fee: "₱100 entrance + ₱200 guide fee", hours: "8:00 AM – 5:00 PM",
    best: "Year-round (cool inside even in summer)", how: "Habal-habal from Boac to Buenavista (1 hr), then short hike",
    activities: ["Cave exploration", "Photography", "Educational tour", "Spelunking (intermediate chambers)"],
    tips: ["Wear closed-toe shoes with good grip", "Bring a flashlight as backup", "A local guide is mandatory and well worth it"]
  },
  {
    id: 5, name: "Mount Malindig", municipality: "Torrijos", category: "Mountain", image: "images/mount_malindig.png",
    desc: "The highest peak in Marinduque at 1,157m — an active stratovolcano offering challenging trails and panoramic views.",
    fullDesc: "Mount Malindig dominates the skyline of Marinduque and rises to 1,157 meters above sea level, making it the island's highest point. Despite being classified as a potentially active volcano, it draws hikers with its diverse ecosystems — from coconut groves at the base to cloud forest at the summit. On clear days, the 360-degree view encompasses the entire island, surrounding seas, and distant mountains.",
    fee: "₱150 registration fee", hours: "Starts before dawn for summit hike",
    best: "November to April (dry season)", how: "Tricycle to trailhead in Torrijos, register at DENR office",
    activities: ["Summit hiking", "Birdwatching", "Nature photography", "Camping (with permit)", "Foraging tours"],
    tips: ["Register with DENR and hire a local guide (₱500–800)", "Bring sufficient water and snacks", "Depart by 4–5 AM for a sunrise summit", "Wear proper hiking footwear"]
  },
  {
    id: 6, name: "Boac Cathedral", municipality: "Boac", category: "Historical Site", image: "images/boac_cathedral.png",
    desc: "A 17th-century fortress-church that once sheltered locals from pirate raids — a stunning example of Philippine colonial baroque.",
    fullDesc: "The Cathedral of Saint John the Baptist in Boac is one of the finest examples of Philippine fortress-church architecture. Built by the Augustinian Recollects in the 17th century, its thick stone walls, watchtower, and elevated position were designed to defend the community against Moro pirate raids. The interior houses antique religious art and an ornate altar, while the grounds offer sweeping views of the Boac River and surrounding valleys.",
    fee: "Free (donations welcome)", hours: "6:00 AM – 6:00 PM daily",
    best: "Year-round; during Mass for an atmospheric experience", how: "Walk from Boac town center (5 min)",
    activities: ["Heritage tour", "Photography", "Attending Mass", "Exploring the cemetery", "Cultural immersion"],
    tips: ["Dress modestly — cover shoulders and knees", "Visit during golden hour for stunning exterior photos", "The Moriones Festival parade passes directly in front"]
  },
  {
    id: 7, name: "Luzon Datum Point", municipality: "Boac", category: "Historical Site", image: "images/luzon_datum.png",
    desc: "The geodetic origin point of all Philippine mapping — a historic marker atop Mataas na Bundok in Boac.",
    fullDesc: "The Luzon Datum of 1911 is the geodetic reference point from which all horizontal control surveys and mapping of the Philippines were historically measured. Located atop a hill in Boac known as Mataas na Bundok, the marker is both a scientific landmark and a symbol of Marinduque's unique national significance. A visit here offers excellent views of Boac and a profound sense of being at the center of an entire archipelago.",
    fee: "Free", hours: "Open daily (daylight hours)",
    best: "Anytime; clearest views in the morning", how: "Short hike or habal-habal from Boac town center",
    activities: ["Heritage visit", "Photography", "Panoramic views of Boac"],
    tips: ["Combine with Boac Cathedral for a morning heritage walk", "Bring water — the uphill walk is short but steep", "Great for geography enthusiasts"]
  },
  {
    id: 8, name: "Malbog Sulfur Spring", municipality: "Boac", category: "Adventure", image: "images/malbog_sulfur_spring.png",
    desc: "Natural hot sulfur springs with therapeutic mineral-rich waters, surrounded by lush mountain vegetation.",
    fullDesc: "Malbog Sulfur Spring in Boac offers a unique geothermal experience in a natural forest setting. The warm, mineral-rich waters — ranging from pleasantly warm to very hot — are believed by locals to have therapeutic properties for skin ailments and muscle aches. The setting is tranquil, with steam rising from the pools amid dense tropical greenery.",
    fee: "₱50 entrance fee", hours: "7:00 AM – 5:00 PM",
    best: "December to February (cool season)", how: "30-min habal-habal ride from Boac town",
    activities: ["Thermal bathing", "Nature walk", "Photography", "Picnicking"],
    tips: ["Test water temperature before submerging — varies by pool", "Best visited in the morning before it gets crowded", "Avoid visiting within two hours of eating"]
  },
  {
    id: 9, name: "Marinduque National Museum", municipality: "Boac", category: "Historical Site", image: "images/museum.png",
    desc: "A fascinating repository of Marinduque's cultural heritage, maritime history, and Moriones traditions.",
    fullDesc: "The Marinduque National Museum in Boac houses an extensive collection tracing the island's prehistoric past, colonial history, and living cultural traditions. Highlights include antique Morion masks and costumes, pre-colonial artifacts discovered in the island's caves, maritime trade relics, and historical photographs chronicling the Moriones Festival. The knowledgeable curators offer rich context that deepens appreciation for everything you'll encounter on the island.",
    fee: "Free", hours: "Tue–Sun, 9:00 AM – 5:00 PM",
    best: "Year-round; visit first before other heritage sites", how: "Walk from Boac town center",
    activities: ["Cultural immersion", "History tour", "Photography (check rules)", "Research"],
    tips: ["Visit first to understand island history before exploring", "Photography may require permission for certain exhibits", "Curators are usually happy to share stories — engage them!"]
  },
  {
    id: 10, name: "Santa Cruz White Beach", municipality: "Santa Cruz", category: "Beach", image: "images/santa_cruz_beach.png",
    desc: "A long stretch of fine white sand with calm, clear, shallow waters — ideal for families and relaxed seaside days.",
    fullDesc: "Santa Cruz White Beach is the municipality's prized coastal asset — a long, gentle arc of fine white sand with calm, shallow waters that make it exceptional for families with young children. The beach is lined with coconut palms providing natural shade, and small local carinderias serve fresh seafood. The pace is unhurried and the locals are exceptionally welcoming.",
    fee: "Free", hours: "Open daily",
    best: "November to May", how: "Tricycle from Santa Cruz town center (10 min)",
    activities: ["Swimming", "Beach lounging", "Fresh seafood dining", "Sunrise walks"],
    tips: ["Weekday visits offer a more peaceful experience", "Rent umbrella and chairs from local vendors (₱100–200)", "Try grilled bangus at nearby seafood stalls"]
  },
  {
    id: 11, name: "Bagumbungan Cave", municipality: "Mogpog", category: "Cave", image: "images/bagumbungan_cave.png",
    desc: "An adventurous cave system requiring crawling and wading, rewarding explorers with dramatic chambers and underground streams.",
    fullDesc: "For the adventure-seeker, Bagumbungan Cave in Mogpog offers a more physically demanding caving experience than Bathala. Explorers must crawl, wade through knee-deep water, and scramble over rocks — but the payoff is extraordinary. The final chambers reveal towering formations and an underground river of stunning clarity.",
    fee: "₱150 guide fee", hours: "8:00 AM – 4:00 PM (no late entries)",
    best: "Dry season (Dec–May) for lower water levels", how: "Habal-habal from Mogpog town to trailhead",
    activities: ["Adventure caving", "Underground river wading", "Photography"],
    tips: ["Wear clothes you don't mind getting muddy and wet", "Waterproof your camera or phone", "Local guides are mandatory — do not enter alone"]
  },
  {
    id: 12, name: "Uraro Cookie Makers", municipality: "Boac", category: "Food Destination", image: "images/uraro.png",
    desc: "Visit local homes and cottage industries where Marinduque's iconic arrowroot cookies are made the traditional way.",
    fullDesc: "Several families in Boac open their kitchens to visitors, offering a glimpse into the centuries-old craft of making uraro — flower-shaped arrowroot cookies that are Marinduque's most famous delicacy. Watch as raw arrowroot is processed into flour, mixed into dough, pressed into molds, and baked to crisp perfection. Most visits include a tasting session and the opportunity to buy fresh cookies directly from the makers.",
    fee: "Free (small tip appreciated)", hours: "Flexible — coordinate with local tourism office",
    best: "Year-round", how: "Coordinate through Boac Municipal Tourism Office",
    activities: ["Food tour", "Cookie-making demonstration", "Tasting session", "Buy fresh pasalubong"],
    tips: ["Contact the tourism office a day ahead to arrange", "Buy directly from makers for freshest cookies at best prices", "Great for families and food enthusiasts"]
  }
];

/* ── STATE ── */
let activeFilter = 'All';
let searchQuery = '';

/* ── RENDER ── */
function renderDestinations() {
  const grid  = document.getElementById('destGrid');
  const count = document.getElementById('destCount');

  const filtered = destinations.filter(d => {
    const matchFilter = activeFilter === 'All' || d.category === activeFilter;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q ||
      d.name.toLowerCase().includes(q) ||
      d.municipality.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q);
    return matchFilter && matchSearch;
  });

  count.textContent = `Showing ${filtered.length} of ${destinations.length} destinations`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <p>No destinations found. Try a different search or filter.</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map(d => `
    <div class="dest-card" onclick="openModal(${d.id})">
      <div class="dest-img-wrap">
        <img src="${d.image}" alt="${d.name}" class="dest-img">
        <span class="dest-badge">${d.category}</span>
      </div>
      <div class="dest-body">
        <h3>${d.name}</h3>
        <p class="dest-loc">📍 ${d.municipality}, Marinduque</p>
        <p class="dest-desc">${d.desc}</p>
        <div class="dest-meta">
          <div class="dest-meta-item"><strong>Fee</strong>${d.fee}</div>
          <div class="dest-meta-item"><strong>Hours</strong>${d.hours.split(',')[0]}</div>
        </div>
        <button class="btn-outline" onclick="event.stopPropagation(); openModal(${d.id})">
          View Details
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  `).join('');
}

/* ── MODAL ── */
function openModal(id) {
  const d = destinations.find(x => x.id === id);
  document.getElementById('modalName').textContent       = d.name;
  document.getElementById('modalCat').textContent        = d.category;
  document.getElementById('modalLoc').textContent        = `📍 ${d.municipality}, Marinduque`;
  document.getElementById('modalDesc').textContent       = d.fullDesc;
  document.getElementById('modalFee').textContent        = d.fee;
  document.getElementById('modalHours').textContent      = d.hours;
  document.getElementById('modalBest').textContent       = d.best;
  document.getElementById('modalHow').textContent        = d.how;
  
  // Dynamic Image Setup
  const modalImg = document.getElementById('modalImg');
  modalImg.src = d.image;
  modalImg.alt = `Photo of ${d.name}`;

  document.getElementById('modalActivities').innerHTML   = d.activities.map(a => `<li>${a}</li>`).join('');
  document.getElementById('modalTips').innerHTML         = d.tips.map(t => `<li>${t}</li>`).join('');
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ── FILTER PILLS ── */
document.getElementById('filterPills').addEventListener('click', e => {
  if (!e.target.classList.contains('pill')) return;
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  e.target.classList.add('active');
  activeFilter = e.target.dataset.filter;
  renderDestinations();
});

/* ── SEARCH ── */
document.getElementById('destSearch').addEventListener('input', e => {
  searchQuery = e.target.value;
  renderDestinations();
});

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', renderDestinations);