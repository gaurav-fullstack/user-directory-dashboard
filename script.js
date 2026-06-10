async function getUserData(){

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
        if(!response.ok){
            throw new Error ("Network response was not ok");
        }

        const users = await response.json();

        const userContainer = document.getElementById('userContainer');
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

    }
    catch(error){
        console.error(error.message);
    }
}