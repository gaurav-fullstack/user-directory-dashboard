const loading = document.getElementById('loading');
const errorBox = document.getElementById('error');
const userContainer = document.getElementById('userContainer');


const allUsers=[];

async function getUserData(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        
        if(!response.ok){
            throw new Error ("Network response was not ok");;
        }

        const users = await response.json();

        allUsers.push(...users);

        renderUsers(users);
       
    }
    catch(error){
        console.error(error.message);
        userContainer.style.display = 'none';
        loading.style.display = 'none'
        errorBox.textContent = error.message;
        errorBox.style.display = 'block';
    }
}

function renderUsers(users){
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


function filterUsers(){
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredUsers = allUsers.filter((user)=> user.name.toLowerCase().includes(searchInput));
    renderUsers(filteredUsers);


}