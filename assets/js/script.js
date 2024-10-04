
// latest post API
// https://openapi.programming-hero.com/api/retro-forum/latest-posts

// load all latest post
const loadPosts = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const data = await res.json()
    showPosts(data)
    // .then((res) => res.json())
    // .then((data) => console.log(data))
    // .catch((err) => console.log(err))
}
loadPosts()
// showPosts 

// post conainer 
const postsContainer = document.getElementById('posts-container')

const showPosts = (data) => {
    data.forEach((post) => {
        console.log(post)
        const postCard = document.createElement('div');
        postCard.classList ='card bg-base-100 shadow-xl';
        postCard.innerHTML = `
        <figure class="px-5 pt-5">
          <img
            src=${post.cover_image}
            class="rounded-xl" />
        </figure>
        <div class="card-body">
          <p>${post.author.posted_date} </p>
          <h2 class="card-title">${post.title} </h2>
          <p>${post.description} </p>
          <div class="profile-info flex gap-5 items-center">
            <div class="profile-pic w-14 h-14 rounded-full border-[3px] border-blue-500 p-[2px] ">
                <img src=${post.profile_image} alt="profile-pic" class=" rounded-full">
            </div>
            <div class="profile-name-profession">
                <h1>${post.author.name} </h1>
                <h3>${post.author.designation} </h3>
            </div>
          </div>
        </div>
        `
        postsContainer.appendChild(postCard)
    })
}
// showPosts()
