const handleCategory = async () => {
  // console.log(categoryId)
  const response = await fetch(
    `https://openapi.programming-hero.com/api/news/categories`
  );
  const data = await response.json();
  let result = data.data.news_category;
  result = result.slice(0, 5);
  const tabContainer = document.getElementById("tab-container");
  result.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = ` <a onclick='handleCategoryNews("${category.category_id}")' class="tab text-white rounded-md text-cente bg-violet-500 text-md font-semibold">${category.category_name}</a>
        `;
    tabContainer.appendChild(div);
  });
};

const handleCategoryNews = async (categoryId) => {
  // console.log(categoryId)
  const response = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${categoryId}`
  );
  const data = await response.json();
  const result = data.data;
  // console.log(result)
  const cardContainer = document.getElementById("news-sectiton");
  cardContainer.textContent = "";
  result.forEach((news) => {
    console.log(news)
    const div = document.createElement("div");
    div.classList = "card w-96 bg-base-100 shadow-xl";
    div.innerHTML = `  
        <figure><img src="${news?.image_url}" alt="" /></figure>
          <div class="card-body">
            <h2 class="card-title">
             ${news.title}
              <div class="badge badge-secondary">${news.rating.badge}</div>
            </h2>
            <p>${news.details.slice(0, 60)}</p>
            <p>total views: ${
              news.total_view ? news.total_view : "No views"
            }</p>
            <div class="card-actions justify-between">
              <div class="mt-2 flex justify-center items-center gap-4">
              <img class='h-10 w-10 rounded-full' src="${
                news?.author.img
              }" alt="" />
              <div>
              <h4>${news?.author?.name ? news.author?.name : "No name"}</h4>
              <small>${
                news?.author?.published_date ? news.author?.published_date : ""
              }</small>
              </div>
              </div> 
              <div>
              <button onclick='showModal()' class="btn">Read more...</button>
              </div>
            </div>
          </div>
        `;

    // console.log(news)
    cardContainer.appendChild(div);
  });
};
// show details modal functionality
const showModal = async() => {
  const response = await fetch(`https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a`);
  const data = await response.json();
  const result = data.data[0]
  console.log(result)
  const detailsContainer = document.getElementById("show_details");
  detailsContainer.innerHTML = `
  <div class="modal-box">
          <img src='${result.image_url}'>
          <h3 class="font-bold text-lg">${result.title}</h3>
          <p class="py-4">${result.details}</p>
          <small class="py-4">total views:  ${result.total_view}</small>
          <div class="modal-action">
            <form method="dialog">
              <button class="btn">Close</button>
            </form>
          </div>
        </div>
  `;
  show_details.showModal();
};
handleCategory();
handleCategoryNews("01");
