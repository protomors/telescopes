document.querySelectorAll('.img img').forEach(img =>{
    img.onclick = () => {
        document.querySelector('.pop').style.display = 'block'; 
        document.querySelector('.pop img').src = img.getAttribute('src'); 
    }
});

document.querySelector('.pop span').onclick = () => {
    document.querySelector('.pop').style.display = 'none';  
}