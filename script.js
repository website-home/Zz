// script.js
document.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled'); // إضافة اللون الثابت عند التمرير
    } else {
        header.classList.remove('scrolled'); // الرجوع إلى الشفافية عند العودة للأعلى
    }
});
document.getElementById('consultationBtn').addEventListener('click', function () {
    const confirmation = document.createElement('div');
    confirmation.className = 'confirmation-popup';
    confirmation.textContent = 'شكراً لتواصلك معنا! سيتم التواصل معك قريباً.';
    document.body.appendChild(confirmation);
    setTimeout(() => {
        confirmation.remove();
    }, 3000);
});
// إضافة حدث عند النقر على أيقونة الهامبرغر لفتح/إغلاق قائمة الروابط
document.getElementById('menuToggle').addEventListener('click', function () {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active'); // التبديل بين إظهار وإخفاء القائمة
});
document.addEventListener('DOMContentLoaded', () => {
    const text = "تصميم وتطوير المواقع الالكترونية";
    const typingTextElement = document.getElementById('typing-text');
    let index = 0;
    let isDeleting = false;
    function type() {
        if (!isDeleting) {
            typingTextElement.textContent = text.slice(0, ++index);
        } else {
            typingTextElement.textContent = text.slice(0, --index);
        }
        if (index === text.length) {
            setTimeout(() => (isDeleting = true), 2000); // انتظر قبل البدء في الحذف
        } else if (index === 0) {
            isDeleting = false; // ابدأ من جديد
        }
        setTimeout(type, isDeleting ? 100 : 150);
    }
    type();
});
// form //
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        counter.innerText = '0';
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / 200;
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCounter, 10);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
});

