// fetch('https://dummyjson.com/test/1')
// .then(response => response.json())
// .then(data => {
//     console.log(data);
// })
// .catch(error => {
//     console.log('Error:', error)
// });
//
// async function fetchData(){
//     try{
//     const url=  ('https://dummyjson.com/test/1');
//       const response = await fetch(url);
//       const data = await response.json();
//       console.log(data); 
//     }
//     catch (error){
//         console.error("Error:", error);
//     }
// }
// fetchData();
//
const fetchUserData = async()=>{
    try{
        const response = await
        fetch('https://dummyjson.com/test/1');
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.error('Error:', error);
    }
};
fetchUserData();
//
fetch('https://dummyjson.com/users/1', (user) =>{
    user.json((user) =>{
        fetch(`post-url?userId=${user.id}`, (post) => {
            post.json((posts) =>{
                fetch(`c-url? postId = ${posts[0].id}`, (cmnts) =>{
                    comments.json((cmnts)=>{

                    });
                });
            });
        });
    });
});
//
async function fetchData(){
    try{
        const useRes = await fetch('https://dummyjson.com/RESOURCE/?limit=10&skip=5&select=key1&select=key2&select=key3');
        const user = await userRes.json();
        const postRes = await fetch(`post-url?userId=${user.id}`);
        const posts = await postRes.json();
        const cmntsRes = await fetch(`c-url?postId = ${posts[0].id} `);
        const cmnts = await cmntsRes.json();
    } catch (error){
        console.error('Error:', error);
    }
}
