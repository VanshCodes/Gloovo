let obj = [

    {
        "name": "headwear",
        "imgLink": "https://www.urbanmonkey.com/cdn/shop/collections/1-all-headwear_120x120.jpg?v=1680249946"
    },
    {
        "name": "tshirts",
        "imgLink": "https://www.urbanmonkey.com/cdn/shop/collections/4a2-tshirt_120x120.webp?v=1685957463"
    },
    {
        "name": "eyewear",
        "imgLink": "https://www.urbanmonkey.com/cdn/shop/collections/3-eyewear_120x120.jpg?v=1680513152"
    },
    {
        "name": "wallets",
        "imgLink": "https://www.urbanmonkey.com/cdn/shop/collections/5a-wallet_120x120.jpg?v=1680254555"
    },
    {
        "name": "backpack",
        "imgLink": "https://www.urbanmonkey.com/cdn/shop/collections/5c-backpack_120x120.jpg?v=1680258901"
    },
    {
        "name": "clothing",
        "imgLink": "https://www.urbanmonkey.com/cdn/shop/collections/4a1-all-tops_c3fa77ec-b5e8-4200-9e5f-e6ef8c2a7398_120x120.jpg?v=1680173139"
    },
    {
        "name": "bottoms",
        "imgLink": "https://www.urbanmonkey.com/cdn/shop/collections/4b1-all-bottoms_120x120.jpg?v=1680173271"
    },

    {
        "name": "socks",
        "imgLink": "https://www.urbanmonkey.com/cdn/shop/collections/4A8_SOCKS_120x120.jpg?v=1708667726"
    },

    {
        "name": "hoodies",
        "imgLink": "https://www.urbanmonkey.com/cdn/shop/collections/4a4-hoodie_120x120.jpg?v=1680173220"
    },
    {
        "name": "boxers",
        "imgLink": "https://www.urbanmonkey.com/cdn/shop/collections/4b2-boxers_120x120.jpg?v=1680173290"
    },

]
let s = document.getElementById("insert-scroll")
for (let index of obj) {

    s.innerHTML += `            
        <a  href="/categories/${index.name.toLowerCase()}" class='h- p-2 m-1 border-2 w-[100px] h-[100px]'>
                <img height="40px" width="50px" class="object-contain text-sm"
                    src="${index.imgLink}"
                    alt="Urban Monkey" />
                <h1>${index.name}</h1>
        </a>
    `
}
