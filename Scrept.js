async function readerStart(idx) {
    // ... الكود السابق الخاص بك ...
    
    // إظهار مساحة الإعلان داخل القارئ
    const adContainer = document.getElementById('ad-reader-interstitial');
    if(adContainer) adContainer.style.display = 'block';

    // منطق التحميل الأصلي الخاص بك
    try {
        // ... جلب الصفحات ...
        canvas.innerHTML = pages.map(p => `...`).join('');
        
        // إضافة الإعلان في منتصف الصفحات أو نهايتها
        canvas.appendChild(adContainer); 
    } catch (err) { /* ... */ }
}
