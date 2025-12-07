document.addEventListener('DOMContentLoaded', () => {
    // 1. 현재 연도 자동 업데이트
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }

    // 2. 콘솔 메시지 (개발 확인용)
    console.log('UNO MEDIA System Loaded.');
});