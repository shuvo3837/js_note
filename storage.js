const handleClick = () => {
    const name = document.getElementById('input').value;
    localStorage.setItem('name', name);
    
}