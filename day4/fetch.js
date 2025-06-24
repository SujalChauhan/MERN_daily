console.log("Fetching Data...");

async function fetchData(){
    let post=await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
    let data=await post.json();
    // let datastr=JSON.stringify(data);
    let titles=data.map((post)=>{
        return post.title
    });

    titles.sort().reverse().map((title)=>{
        console.log(title);
    });
    // console.log(data.title);
    // console.log("async");
}

// function fetchDatasync() {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(response => response.json())
//     .then(data => console.log(data.title))
//     .catch(error => console.error("Error fetching data:", error));
// }

fetchData();
// fetchDatasync();
