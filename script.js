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
                showGif(item);
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

// GIF'i gösterme fonksiyonu
function showGif(favorite) {
    var gifContainer = document.getElementById("gif-container");
    var gifImage = document.createElement("img");

    // Favoriye göre GIF URL'sini belirleyelim
    var gifUrls = {
        "Yüzmek": "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3RhdTRsZzA5azZrd3I4dWRyZXFyOWhkMGo5cjN5NGozaGs5d3Z1dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7DIF9HAz65YE8/giphy.gif", // Yüzme GIF
        "Gezmek": "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXFyMzFzZGUyZm5uZmF3dzV0bDg5bnVjZXhnaWVxZjU2MXd4Z3lpMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gkKdyFwoKktVBiJhkk/giphy.gif", // Gezmek GIF
        "Tatil": "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGppa2Y2cTFvOGExNWlobGR0d2lyaW5tY2l3MTFzY3Y0ZHljZW12YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5xtDarqlsEW6F7F14Fq/giphy.gif", // Tatil GIF
        "Yaz Mevsimi": "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjJxNmxpM21rdm90ZHQweWxhNW1qanc1NG4xZXA3Z205dG5sN3l2byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/etn52ENYVnpxqMaXiT/giphy.gif" // Yaz Mevsimi GIF
    };

    gifImage.src = gifUrls[favorite] || "";
    gifContainer.innerHTML = "";
    gifContainer.appendChild(gifImage);
    gifContainer.style.display = "block";
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
