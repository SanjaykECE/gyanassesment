

const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log('hi')
        var name =document.getElementById("name").value;
        var password =document.getElementById("pass").value;
        if(name == localStorage.getItem('email') && password == localStorage.getItem('pass'))
        {
            window.location.href = '/image/home/staff.html'
        }
        else{
            alert("invalid user name or password");
            return false;
        }
        
        
})