//promise

// let mypromise1=new Promise((resolve,reject)=>{
// let myvalue=true;
// if(myvalue){
//   resolve("my promise is fullfilled");
// }
// else{
//   reject("my promise is rejected");
// }
// });
// mypromise1
// .then((message)=>{
//   console.log(message);
// }).catch((error)=>{
//   console.log(error);
// }).finally(()=>{
//   console.log("mai toh chalunga hee");
// });

// console.log("promise chaing is started");
// console.log("");


//multiple then catch or promise chaining

// let mypromise2=new Promise((resolve,reject)=>{
//   let myvalue=true;
//   if(myvalue){
//     resolve("my promise is fullfilled");
//   }
//   else{
//     reject("my promise is rejected");
//   }
//   });
//   mypromise2
//   .then((message)=>{
//     console.log(message);
//     return "I am 2nd then block"
//   }).then((message)=>{
//     console.log(message);
//   }).catch((error)=>{
//     console.log(error);
//   }).finally(()=>{
//     console.log("mai toh chalunga hee");
//   });


  //async await

  async function fetchPosts() {
    try {
      // Fetch data from the posts endpoint
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      // Parse the response JSON
      const posts = await response.json();
  
      // Log the title of each post
      posts.forEach(post => {
        console.log(post.title);
      });
    } catch (error) {
      // Log any error that occurred during the fetch or parsing
      console.log('Error:', error.message);
    }
  }
  
  fetchPosts(); // Call the function to fetch posts
  