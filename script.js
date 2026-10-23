
///////////////
const run = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if(!response.ok){
            throw new Error("URL is not working");
        }

        const data = await response.json();

        console.log(data);
///////////////////////////////////////////////////////////////////////////////////////
    let table = document.getElementById("tabledata");

    data.forEach(user => {
    table.innerHTML += `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.address.city}</td>
            <td>${user.phone}</td>
            <td>${user.website}</td>
            <td>${user.company.name}</td>
        </tr>`;
    });
 
    }//end of try...
        catch(error){
        console.log(error.message);
         }
    
}

run();

 