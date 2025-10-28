// Read/Get
/*
const url = 'https://dummyjson.com/test';
fetch(url)
.then((res) => res.json())
.then((data)=> console.log(data));
*/

//Create/post
const url = 'https://dummyjson.com/test';
const user = {name: 'John Doe', email: 'john.doe@example.com'}
const options = {
    method: 'POST',
    body: JSON.stringify(user),
    headers:{
        'Content-type': 'application/json',
    },
}
.fetch(url, options)
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.error(error));

//Update(put,patch)
const Url = 'https://dummyjson.com/test';
const updatedUser ={name:'John Doe', email: 'john.doe@newemail.com'};
const Options = {
mathod: 'PUT',
body: JSON.stringify(updatedUser),
headers:{
    'Content-type': 'application/json',
},
};
fetch(url, options)
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.error(error));


//Delete
const URL = 'https://dummyjson.com/test';
const OPTIONS = {
    method: 'DELETE',
};
fetch(URL,OPTIONS)
.then(res => res.json())
.then(data => console.log('Deleted:', data))
.catch(error => console.error(error));
