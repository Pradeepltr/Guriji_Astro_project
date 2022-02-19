var new_links = [
    {
        img_url: "https://yt3.ggpht.com/ytc/AKedOLQGnY6McntoY-eWaRDI047FWFqj7pVlw2nBfkwz7w=s900-c-k-c0x00ffffff-no-rj",
        page_url: "https://www.ted.com/about/programs-initiatives/tedx-program"
    },
    {
        img_url: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Daily_hunt.png",
        page_url: "https://m.dailyhunt.in/news/india/english/for+you?launch=true&mode=pwa"
    },
    {
        img_url: "https://assets-global.website-files.com/5ae98eec19474ec4b00cd02a/5bee83f7a69edda26bc5b891_YourStory_Logo-New-01.png",
        age_url: "https://yourstory.com/"
    },
    {
        img_url: "https://yt3.ggpht.com/ytc/AKedOLQGnY6McntoY-eWaRDI047FWFqj7pVlw2nBfkwz7w=s900-c-k-c0x00ffffff-no-rj",
        page_url: "https://www.ted.com/about/programs-initiatives/tedx-program"
    },
    {
        img_url: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Daily_hunt.png",
        page_url: "https://m.dailyhunt.in/news/india/english/for+you?launch=true&mode=pwa"
    },
    {
        img_url: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Daily_hunt.png",
        page_url: "https://m.dailyhunt.in/news/india/english/for+you?launch=true&mode=pwa"
    },
    {
        img_url: "https://yt3.ggpht.com/ytc/AKedOLQGnY6McntoY-eWaRDI047FWFqj7pVlw2nBfkwz7w=s900-c-k-c0x00ffffff-no-rj",
        page_url: "https://www.ted.com/about/programs-initiatives/tedx-program"
    },
    {
        img_url: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Daily_hunt.png",
        page_url: "https://m.dailyhunt.in/news/india/english/for+you?launch=true&mode=pwa"
    },
    {
        img_url: "https://yt3.ggpht.com/ytc/AKedOLQGnY6McntoY-eWaRDI047FWFqj7pVlw2nBfkwz7w=s900-c-k-c0x00ffffff-no-rj",
        page_url: "https://www.ted.com/about/programs-initiatives/tedx-program"
    },
    {
        img_url: "https://yt3.ggpht.com/ytc/AKedOLQGnY6McntoY-eWaRDI047FWFqj7pVlw2nBfkwz7w=s900-c-k-c0x00ffffff-no-rj",
        page_url: "https://www.ted.com/about/programs-initiatives/tedx-program"
    },
    {
        img_url: "https://yt3.ggpht.com/ytc/AKedOLQGnY6McntoY-eWaRDI047FWFqj7pVlw2nBfkwz7w=s900-c-k-c0x00ffffff-no-rj",
        page_url: "https://www.ted.com/about/programs-initiatives/tedx-program"
    },
    {
        img_url: "https://yt3.ggpht.com/ytc/AKedOLQGnY6McntoY-eWaRDI047FWFqj7pVlw2nBfkwz7w=s900-c-k-c0x00ffffff-no-rj",
        page_url: "https://www.ted.com/about/programs-initiatives/tedx-program"
    },



];
function display_new_links() {
    const display = document.getElementById('new_link');
    new_links.map((e) => {
        var html = document.createElement('div');
        html.innerHTML = `
        <a href="${e.page_url}">
        <div class="container1">
            <div class="img1"><img
                    src="${e.img_url}"
                    class="img"></div>
    
            <div class="tropy"><img
                    src="https://www.kindpng.com/picc/m/142-1427074_trophy-icon-outline-hd-png-download.png"
                    class="tropy_icon">
                <span class="gray">Jan 7,2021</span>
            </div>
        </div>
    </a>
        `
        display.appendChild(html);
    })

}
display_new_links();
function consultance(){
    const constal=document.getElementById('consultation_section');
    for(var i=1;i<=5;i++){
        const html=document.createElement('div')
        html.innerHTML=`
        <div class="card">
        <div class="card_img">
            <img src="https://img.guruji.app/public/static/images/master/133/img_big_133_1617617583.jpeg" class="c_img" height="150" width="200">
            <div class="details">
                <span class="star_icon"><img src="https://st2.depositphotos.com/8511412/11363/v/450/depositphotos_113638426-stock-illustration-star-star-icon-star-icon.jpg" height="20" width="20"> 4.7</span>
                <span class="blur">(238 total)</span>
                <div class="astro_name_exp">
                    <h4>Swatanwa Astro</h4>
                    <p class="blur">10+ years</p>
                    <p class="blur">Hindi, Englisg, Gujrati</p>
                    <h3>₹20<span class="small_font">/min</span></h3>
                    <p class="blur">Est time - 12mins</p>
                </div>
            </div>
        </div>  
      </div>

        `
        constal.appendChild(html);
    }
}
consultance()