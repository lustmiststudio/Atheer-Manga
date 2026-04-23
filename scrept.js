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
/* -----------------------------------------
   دالة الاكتشاف العشوائي (RANDOM DISCOVERY)
   -----------------------------------------
*/
async function getRandomManga() {
    toggleSidebar(false); // إغلاق القائمة
    
    // إظهار شاشة التحميل البسيطة (Sentinel) لإعطاء إيحاء بالعمل
    const loader = document.getElementById('loading-sentinel');
    loader.style.display = 'block';

    try {
        // طلب مانجا عشوائية من API
        const res = await fetch(`${ATHEER_CONFIG.API}/manga/random?includes[]=cover_art&contentRating[]=safe&contentRating[]=suggestive`);
        const json = await res.json();
        const manga = json.data;

        if (manga) {
            const title = manga.attributes.title.en || Object.values(manga.attributes.title)[0];
            // فتح المانجا العشوائية مباشرة
            openMangaDetail(manga.id, title);
        }
    } catch (err) {
        console.error("Random Fetch Error:", err);
        alert("حدث خطأ أثناء البحث عن مانجا عشوائية، حاول مجدداً.");
    } finally {
        loader.style.display = 'none';
    }
}
