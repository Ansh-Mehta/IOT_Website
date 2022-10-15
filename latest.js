var myElement = document.getElementById('imposed'),
    imgList = [
        "https://images.unsplash.com/photo-1595454216162-f5e9b838058b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJhaW5kcm9wc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60", //rainy
        "https://images.unsplash.com/photo-1618872361493-dcc87259c544?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHN1bW1lciUyMGRheXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60", 
        //summer
        "https://images.unsplash.com/photo-1505322101000-19457cff32ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2ludGVyJTIwbmlnaHR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" //winter
    ];
    function changeImage(myElement, imgList) {
        setInterval(function(){
            randomImage = Math.floor( Math.random() * imgList.length);
            myElement.style.backgroundImage = "url('" + imgList[randomImage] + "')";
        }, 3000);
    }
    changeImage(myElement, imgList);
