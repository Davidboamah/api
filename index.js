const getText = () => {
    fetch('sample.txt')
        .then(res => {
            return res.text()
        })
        .then(data => {
            document.getElementById('output').innerHTML = data
        })
        .catch(error => {
            console.log(error)
        })
}
document.getElementById('getText').addEventListener('click', getText);



const getUsers = () => {
    fetch('user.json')
        .then(res => res.json())
        .then(data => {
            let output = '<h2>Users</h2>'
            data.forEach(user => {
                output += `
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                    <li>Email: ${user.email}</li>
                </ul>
                `
            })
            document.getElementById('output').innerHTML = output;
            // console.log(data);
        })

}
document.getElementById('getUsers').addEventListener('click', getUsers);


const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => {
            let output = '<h2 style="text-align: left">Posts</h2>'
            data.forEach(post => {
                output += `
                <ul>
                  <div style="text-align: left">
                  <h3>${post.title}</h3>
                  <p>${post.body}</p>
                  </div>
                </ul>
                `
            })
            document.getElementById('getPosts').innerHTML = output;
            console.log(data);
        })
        .then(res => {
            console.log('Fetch successful!!!')
        })
        .catch(error => {
            console.log('Failed!!!')
        })
}

document.getElementById('getPosts').addEventListener('click', getPosts);


const addPost = (e) => {
    e.preventDefault();
    let title = document.getElementById('title').value
    let body = document.getElementById('body').value

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            body: body
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}

document.getElementById('addPost').addEventListener('submit', addPost);