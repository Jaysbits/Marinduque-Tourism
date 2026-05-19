/* ═══════════════════════════════════════
   GALLERY PAGE — gallery.js
═══════════════════════════════════════ */

const galleryData = [
  { label: "Island of Marinduque", wide: true, tall: true, src: "images/marinduque_island.png" },
  { label: "Moriones Festival parade — Roman soldier costumes", src: "images/moriones_festival.png" },
  { label: "Poctoy White Beach", src: "../images/poctoy.png" },
  { label: "Tres Reyes Islands aerial view from the sea", wide: true, src: "images/tres_reyes_islands.png" },
  { label: "Boac Cathedral fortress-church at golden hour", src: "images/boac_cathedral.png" },
  { label: "Moriones mask close-up — hand-carved and painted wood", src: "images/masks.png" },
  { label: "Maniwaya Beach crystal-clear turquoise waters", tall: true, src: "images/maniwaya.png" },
  { label: "Mount Malindig summit panoramic view", src: "images/malindig.png" },
  { label: "Bathala Cave stalactites and underground pool", src: "images/caves.png" },
  { label: "Uraro arrowroot cookies on display at market", wide: true, src: "images/uraro.png" },
  { label: "Putong crowning ceremony welcoming guests", src: "images/putong.png" },
  { label: "Local fishermen at Gasan port with outrigger boats", src: "images/gasan.png" },
  { label: "Luzon Datum Point marker on Mataas na Bundok hill", src: "images/luzon_datum.png" },
  { label: "Malbog Sulfur Spring steam rising from natural pool", tall: true, src: "images/malbog_sulfur_spring.png" },
  { label: "Tuba sa Marinduque", src: "images/tuba.png" },
  { label: "Manakla freshwater crustaceans", src: "images/manakla.png" },
  { label: "Bila-Bila Festival", wide: true, src: "images/bila_bila.png" },
  { label: "Ancestral Houses of Marinduque", src: "images/Ancestral_Houses.png" },
  { label: "Miki Yummy", src: "images/miki.png" },
  { label: "Patis Black", src: "images/patis.png" },
  { label: "Festival in Marinduque", tall: true, src: "images/festival2.png" },
  { label: "Santa Cruz White Beach", src: "images/santa_cruz_beach.png" },
  { label: "Bagumbungan Cave glowing water", src: "images/bagumbungan_cave.png" },
  { label: "Marinduque Museum — Morion mask collection", wide: true, src: "images/museum.png" },
  { label: "Carving Moriones masks", src: "images/carve.png" },
  { label: "Buko Pie", src: "images/buko_pie.png" },
  { label: "Butterfly resting in Marinduque's lush forest", tall: true, src: "images/butterfly.png" },
  { label: "Arrowroot", src: "images/arrowroot.png" },
  { label: "Maalindog Festival", src: "images/maalindog.png" },
  { label: "Mogpog", src: "images/mogpog.png" },
  { label: "Aura Monster", src: "images/aura_monster.gif" }
];

/* ── BUILD GRID ── */
function buildGallery() {
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = galleryData.map((g, i) => `
    <div class="gallery-item ${g.tall ? 'tall' : ''} ${g.wide ? 'wide' : ''}" 
         onclick="openLightbox(${i})" 
         title="${g.label}">
      <img src="${g.src}" alt="${g.label}" class="gallery-img" />
    </div>
  `).join('');
}

/* ── LIGHTBOX ── */
let currentIdx = 0;

function openLightbox(i) {
  currentIdx = i;
  updateLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function updateLightbox() {
  const g = galleryData[currentIdx];

  const lbImg = document.getElementById('lbImage');
  if (lbImg) {
    lbImg.src = g.src;
    lbImg.alt = g.label;
  }
  
  document.getElementById('lbCaption').textContent = `${g.label} — Marinduque, Philippines (${currentIdx + 1} / ${galleryData.length})`;
}

document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbPrev').addEventListener('click', () => {
  currentIdx = (currentIdx - 1 + galleryData.length) % galleryData.length;
  updateLightbox();
});
document.getElementById('lbNext').addEventListener('click', () => {
  currentIdx = (currentIdx + 1) % galleryData.length;
  updateLightbox();
});
document.getElementById('lightbox').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeLightbox();
});
document.addEventListener('keydown', e => {
  if (!document.getElementById('lightbox').classList.contains('open')) return;
  if (e.key === 'ArrowRight') { currentIdx = (currentIdx + 1) % galleryData.length; updateLightbox(); }
  if (e.key === 'ArrowLeft')  { currentIdx = (currentIdx - 1 + galleryData.length) % galleryData.length; updateLightbox(); }
  if (e.key === 'Escape') closeLightbox();
});

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', buildGallery);