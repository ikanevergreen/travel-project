const topBtn = document.createElement('button');
topBtn.textContent = '↑';
Object.assign(topBtn.style, {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    width: '44px',
    height: '44px',
    borderRadius: '50%',
    background: '#2d3748',
    color: '#fff',
    border: '1px solid #4a5568',
    fontSize: '22px',
    cursor: 'pointer',
    zIndex: '999',
    opacity: '0',
    visibility: 'hidden',
    transition: 'opacity 0.3s',
});
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
document.body.appendChild(topBtn);

window.addEventListener('scroll', () => {
    const show = window.scrollY > 500;
    topBtn.style.opacity = show ? '1' : '0';
    topBtn.style.visibility = show ? 'visible' : 'hidden';
});
// ================================================================
// 7. MODAL KONTAK (saat klik tombol Kontak)
// ================================================================
document.addEventListener('DOMContentLoaded', function() {
    const kontakBtn = document.querySelector('.btn-kontak');
    if (kontakBtn) {
        kontakBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showContactModal();
        });
    }

    // juga untuk link kontak di footer
    const footerKontak = document.querySelector('.footer-col ul li a[href="#kontak"]');
    if (footerKontak) {
        footerKontak.addEventListener('click', function(e) {
            e.preventDefault();
            showContactModal();
        });
    }
});

function showContactModal() {
    // cek apakah sudah ada modal
    if (document.getElementById('contactModal')) return;

    const overlay = document.createElement('div');
    overlay.id = 'contactModal';
    Object.assign(overlay.style, {
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)',
        zIndex: 10000,
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        animation: 'fadeInPopup 0.3s ease'
    });

    const modal = document.createElement('div');
    Object.assign(modal.style, {
        background: '#fff', borderRadius: '20px', maxWidth: '500px',
        width: '90%', padding: '30px 24px 24px',
        position: 'relative', textAlign: 'center',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        animation: 'slideUpPopup 0.4s ease'
    });

    // tombol close
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    Object.assign(closeBtn.style, {
        position: 'absolute', top: '12px', right: '16px',
        background: 'none', border: 'none', fontSize: '24px',
        color: '#a0aec0', cursor: 'pointer', lineHeight: '1'
    });
    closeBtn.onclick = () => overlay.remove();

    modal.innerHTML = `
        <h2 style="font-size:1.5rem;font-weight:800;color:#1a365d;margin-bottom:8px;">📞 Hubungi Kami</h2>
        <p style="color:#4a5568;margin-bottom:20px;">Pilih platform favorit Anda untuk terhubung dengan kami</p>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:16px;">
            <a href="https://wa.me/6281234567890" target="_blank" style="display:flex;flex-direction:column;align-items:center;text-decoration:none;background:#f0fdf4;padding:12px 0;border-radius:12px;border:1px solid #bbf7d0;transition:0.2s;">
                <span style="font-size:28px;">💬</span>
                <span style="font-size:0.8rem;color:#166534;font-weight:600;">WhatsApp</span>
            </a>
            <a href="https://instagram.com/luisevistaio" target="_blank" style="display:flex;flex-direction:column;align-items:center;text-decoration:none;background:#fdf2f8;padding:12px 0;border-radius:12px;border:1px solid #fbcfe8;transition:0.2s;">
                <span style="font-size:28px;">📸</span>
                <span style="font-size:0.8rem;color:#831843;font-weight:600;">Instagram</span>
            </a>
            <a href="https://tiktok.com/@luisevistaio" target="_blank" style="display:flex;flex-direction:column;align-items:center;text-decoration:none;background:#faf5ff;padding:12px 0;border-radius:12px;border:1px solid #e9d5ff;transition:0.2s;">
                <span style="font-size:28px;">🎵</span>
                <span style="font-size:0.8rem;color:#4c1d95;font-weight:600;">TikTok</span>
            </a>
        </div>
        <div style="border-top:1px solid #e2e8f0;padding-top:16px;display:flex;flex-direction:column;gap:8px;">
            <a href="mailto:info@luisevistaio.com" style="color:#2d3748;text-decoration:none;font-size:0.95rem;">✉️ info@luisevistaio.com</a>
            <a href="tel:+6281234567890" style="color:#2d3748;text-decoration:none;font-size:0.95rem;">📞 +62 812-3456-7890</a>
        </div>
    `;

    modal.prepend(closeBtn);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // tutup jika klik overlay
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) overlay.remove();
    });

    // tutup dengan ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && document.getElementById('contactModal')) {
            overlay.remove();
        }
    });
}