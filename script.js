// Збереження інформації про браузер та ОС
localStorage.setItem("Browser", navigator.userAgent);
localStorage.setItem("Platform", navigator.platform);
localStorage.setItem("Language", navigator.language);

// Виведення localStorage у footer
const storageInfo = document.getElementById("storage-info");

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    storageInfo.innerHTML += `
        <p><strong>${key}:</strong> ${localStorage.getItem(key)}</p>
    `;
}

// Завантаження коментарів
fetch('https://jsonplaceholder.typicode.com/posts/5/comments')
    .then(response => response.json())
    .then(data => {

        const container = document.getElementById('comments-container');

        container.innerHTML = '';

        data.forEach(comment => {
            container.innerHTML += `
                <div class="comment">
                    <h4>${comment.name}</h4>
                    <p>${comment.body}</p>
                    <small>${comment.email}</small>
                </div>
            `;
        });
    });

// Модальне вікно через 1 хвилину
setTimeout(() => {
    document.getElementById('feedback-modal').style.display = 'block';
}, 60000);

// Закриття модального вікна
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('feedback-modal').style.display = 'none';
});

// Автоматична тема
const hour = new Date().getHours();

if (hour >= 7 && hour < 21) {
    document.body.classList.add('light-theme');
} else {
    document.body.classList.add('dark-theme');
}

// Перемикач тем
document.getElementById('theme-toggle').addEventListener('click', () => {

    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
});