console.log("script.jsが読み込まれました！");
document.querySelectorAll('.map-item').forEach(item => {
    item.addEventListener('click', () => {
        const tooltip = item.querySelector('.map-tooltip');
        tooltip.style.display = tooltip.style.display === 'inline' ? 'none' : 'inline';
    });
});