var myElement = document.getElementById('imposed'),
    imgList = [
        "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnxlbnwwfHwwfHw%3D&w=1000&q=80",
        "https://img.freepik.com/premium-photo/photo-canola-field-bright-hot-summer-day-landscape-nature_299276-517.jpg?w=2000",
        "https://images.unsplash.com/photo-1610378386656-9ac85ffcdaa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2ludGVyJTIwc2NlbmVyeXxlbnwwfHwwfHw%3D&w=1000&q=80"
    ];
    function changeImage(myElement, imgList) {
        setInterval(function(){
            randomImage = Math.floor( Math.random() * imgList.length);
            myElement.style.backgroundImage = "url('" + imgList[randomImage] + "')";
        }, 3000);
    }
    changeImage(myElement, imgList);
