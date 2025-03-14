// Şifre doğrulama fonksiyonu
function checkPassword() {
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
    var favoritesContainer = document.getElementById("favorites-container");
    var loginContainer = document.getElementById("login-container");

    var correctPassword = "busee";  // Şifreyi burada değiştirebilirsiniz

    if (password === correctPassword) {
        // Şifre doğruysa favori ekranını göster
        loginContainer.style.transform = "scale(0)";
        setTimeout(function() {
            loginContainer.style.display = "none";
            favoritesContainer.style.display = "block";
            favoritesContainer.style.opacity = 0;
            setTimeout(function() {
                favoritesContainer.style.opacity = 1;
            }, 10);
        }, 500);

        // Sevdiği şeyleri burada tanımlıyoruz
        var favorites = ["Yüzmek", "Gezmek", "Tatil", "Yaz Mevsimi"];

        var favoritesList = document.getElementById("favorites-list");
        favoritesList.innerHTML = "";
        favorites.forEach(function(item) {
            var li = document.createElement("li");
            li.textContent = item;
            li.onclick = function() {
                showActivityMessage();
            };
            favoritesList.appendChild(li);
        });

    } else {
        // Şifre yanlışsa hata mesajını göster
        errorMessage.textContent = "Yanlış şifre, tekrar deneyin.";
        errorMessage.style.opacity = 1;
        setTimeout(function() {
            errorMessage.style.opacity = 0;
        }, 3000);
    }
}

// Aktivite mesajını gösterme fonksiyonu
function showActivityMessage() {
    var activityMessage = document.getElementById("activity-message");
    activityMessage.textContent = "Çok güzel bir aktivite, Busee!";
}

// Geri butonu işlevi
function goBack() {
    var favoritesContainer = document.getElementById("favorites-container");
    var loginContainer = document.getElementById("login-container");

    favoritesContainer.style.transform = "scale(0)";
    setTimeout(function() {
        favoritesContainer.style.display = "none";
        loginContainer.style.display = "block";
        loginContainer.style.transform = "scale(1)";
    }, 500);
}
