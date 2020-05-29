function onlineShopClient() {
    this.searchProductByTitle = searchProductByTitle
    this.findCoke = findCoke
    this.findProductByID = findProductByID


    function searchProductByTitle(title) {
        return fetch("https://amazon-price1.p.rapidapi.com/search?keywords=apple&marketplace=US".replace('apple', title), {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "amazon-price1.p.rapidapi.com",
                "x-rapidapi-key": "39489d2f16msh8d0337a260b9aacp123c9bjsn0d5db0a44753"
            }
        })
            .then(function (response) {
                return response.json()
            })
    }

    function findCoke() {
        return fetch("https://amazon-price1.p.rapidapi.com/search?keywords=coke&marketplace=US", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "amazon-price1.p.rapidapi.com",
                "x-rapidapi-key": "39489d2f16msh8d0337a260b9aacp123c9bjsn0d5db0a44753"
            }
        })
            .then(function (response) {
                return response.json()
            })
    }

    function findProductByID(ID) {
        return fetch("https://amazon-price1.p.rapidapi.com/priceReport?asin=coke&marketplace=ES".replace('coke', ID), {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "amazon-price1.p.rapidapi.com",
                "x-rapidapi-key": "39489d2f16msh8d0337a260b9aacp123c9bjsn0d5db0a44753"
            }
        })
            .then(function (response) {
                return response.json()
            })
    }


}