// load data function
const loadData = async () => {
  const response = await fetch(
    ` https://openapi.programming-hero.com/api/news/categories`
  );
  const data = await response.json();
  const result = data.data.news_category;
  console.log(result);
  showEachData(result);
};
// show data function
const showEachData = (datas) => {
  datas = datas.slice(0, 4);
  datas.forEach((catagory) => {
    const tabcontainer = document.getElementById("tab-container");
    tabcontainer.classList = "tabs font-bold text-5xl gap-4";
    const div = document.createElement("div");
    div.innerHTML = `
        <a class="tab  bg-gray-500 text-white">${catagory.category_name}</a> 
        `;
    tabcontainer.appendChild(div);
    console.log(catagory);
  });
};

// grab your data by clicking catagories
loadData();
