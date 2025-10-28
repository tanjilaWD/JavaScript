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

/*
১️⃣ প্রোফাইল সিস্টেম নাকি মেরিড, এই টাইপের ডাটা চেঞ্জ করলে PUT না PATCH হবে?
➡️ যদি পুরো অবজেক্ট (সব ফিল্ড) আপডেট করো, তাহলে PUT।
➡️ আর যদি শুধু কিছু ফিল্ড (partial update) চেঞ্জ করো, তাহলে PATCH।
👉 উদাহরণ:

PUT = পুরা প্রোফাইল নতুন ডাটায় replace করা

PATCH = শুধু name বা image change করা

২️⃣ ডাটাবেজে নতুন ইনফরমেশন যোগ করার জন্য কোন HTTP মেথড ব্যবহৃত হয়?
➡️ POST ব্যবহার করা হয়।
কারণ POST মানে নতুন resource create করা।

৩️⃣ একটা ওয়েবসাইটে যখন ভিডিও দেখতে যাই, তখন কী ধরনের অপারেশন হয়?
➡️ তখন তুমি শুধু ডাটা দেখছো, কিছু পরিবর্তন করছো না।
তাই এটা হলো READ operation (GET request)।

৪️⃣ CRUD কী জিনিস?
➡️ CRUD হলো ৪টা basic database operation-এর short form:

C → Create (POST)

R → Read (GET)

U → Update (PUT/PATCH)

D → Delete (DELETE)

৫️⃣ HTTP-এর মেথড বা verb কী কী আছে? কোনটা কী কাজ করে?

মেথড	কাজ
GET	ডাটা পড়া বা দেখা
POST	নতুন ডাটা তৈরি
PUT	পুরা ডাটা আপডেট
PATCH	আংশিক ডাটা আপডেট
DELETE	ডাটা মুছে ফেলা
HEAD	শুধু header চাওয়া, body না
OPTIONS	সার্ভার কী কী মেথড সাপোর্ট করে সেটা দেখা
*/