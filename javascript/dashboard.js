const checkbox = document.querySelector('#check-dark');
if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    checkbox.checked = true;
}else{
    checkbox.checked = false;
}

checkbox.addEventListener('change', function(event){
    if(this.checked){
        document.body.classList.add('dark-mode-theme')
        document.body.classList.remove('light-mode-theme')
    }else{
        document.body.classList.remove('dark-mode-theme')
        document.body.classList.add('light-mode-theme')
    }
})
