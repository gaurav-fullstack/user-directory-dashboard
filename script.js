const loading = document.getElementById('loading');
const errorBox = document.getElementById('error');

async function getUserData(){
    const userContainer = document.getElementById('userContainer');
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
        if(!response.ok){
            throw new Error ("Network response was not ok");;
        }

        const users = await response.json();

       
        userContainer.innerHTML='';
        users.forEach(user=>{
            const userCard = `
            <div class="user-card">
                <h2>${user.name}</h2>
                <p>Email: ${user.email}</p>
                <p>Phone: ${user.phone}</p>
                <p>City: ${user.address.city}</p>
                <p>Company: ${user.company.name}</p>
            </div>`;

            userContainer.innerHTML += userCard;
        })
        userContainer.style.display = 'flex';
        loading.style.display = 'none';

    }
    catch(error){
        console.error(error.message);
        userContainer.style.display = 'none';
        loading.style.display = 'none'
        errorBox.textContent = error.message;
        errorBox.style.display = 'block';
    }
}