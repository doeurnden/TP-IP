let dataLoad = document.querySelector('.dataLoad')
// let pageLoad = document.querySelector('.pageLoad')
let page = 1
let isScroll = true

const addData =() =>{
    fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=20`).
    then(res=>res.json()).
    then(data=>{
        // console.log(data);
        render(data, page)

        page += 1;
        isScroll = true
    })
}
dataLoad.addEventListener('scroll',(e)=>{
    let target = e.target
    const { clientHeight, scrollHeight, scrollTop } = target
    if ((clientHeight + scrollTop) >= scrollHeight * 0.95){
        if(isScroll){
            addData()
            isScroll = false
        }
    }
})

const render = (data, page)=>{
    
    if(data){
        // pageLoad.innerHTML = page
        // console.log(pageLoad)
        console.log(data);
        let tmp = "";
        data.forEach(element => {
            tmp += `
                <div class="item">
                    <div class="beer">🍻</div>
                    <div class="data">
                        <div>${element.name}</div>
                        <div>${element.tagline}</div>
                    </div>
                </div>
            `
        });
        dataLoad.innerHTML += tmp;
    }
}
window.addEventListener('load', (e)=>{
    addData()
})


function getData(){
    fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=20`).
    then(async (res)=>{
        let data = await res.json();
        let detail = `
            <div class="img">${data.image_url}</div>
            <div class="name"${data.name}></div>
            <div class="day">${data.first_brewed}</div>
            <div class="descri">${data.description}</div>
            <div class="contributeg">${data.contributed_by}</div>
        `
    })
    document.querySelector('.detail').innerHTML = detail
}