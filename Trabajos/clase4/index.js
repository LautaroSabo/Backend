let fs = require('fs')


class Contenedor {
    constructor(url) {
        this.url = url
    }

    async getAll () {
        if (fs.existsSync(this.url)) {
            let productoIfo = await fs.promises.readFile(this.url, 'utf-8')
            let productos = JSON.parse(productoIfo)
            //console.log(productoIfo)
            return productos
        } else {
            console.log("algo pasa")
        }
    }

    async save (product, price, thumbnail,){
        let almacen = await this.getAll()
        //console.log(almacen)
        let producto = {
            product: product,
            price: price,
            thumbnail: thumbnail,
            
        }

        try {
            if(almacen.length === 0){
                producto.id = 0
                almacen.push(producto)
                await fs.promises.writeFile(this.url, JSON.stringify(almacen, null, '\t'))
            }else{
                producto.id =almacen[almacen.length-1].id+1 
                almacen.push(producto)
                await fs.promises.writeFile(this.url, JSON.stringify(almacen, null, '\t'))
            }
        } catch (error) {
            console.log(error)
        }
    }

    async getById(number){
        let almacen = await this.getAll()
        try {
            let filter = almacen.filter (stock => stock.id === number)
            return filter
            //console.log(filter)
        } catch (error) {
            console.log(error)
        }
    }

    async deleteById (number){
        let almacen = await this.getAll()
        try {
            let filter = almacen.filter(stock => stock.id != number)
            console.log(filter)
            //filter.shift() 
            await fs.promises.writeFile(this.url,JSON.stringify(filter,null,'\t'))
            console.log(filter)
            
        } catch (error) {
            console.log(error)
        }
    }

    async deleteAll () {
        
        try {
            await fs.promises.writeFile(this.url,JSON.stringify([]))
        } catch (error) {
            console.log(error)
        }
    }


}

let url = new Contenedor("./producto.json");
//agregar productos
//url.save('Manteca', '33', 'https://carrefourar.vtexassets.com/arquivos/ids/179240-800-auto?v=637468581681170000&width=800&height=auto&aspect=true')
//url.save('Salchicha', '70', 'https://www.paladini.com.ar/assets/img/productos/productos/salchicha-viena-x6.png')
//url.save('Aceite', '48', 'https://jumboargentina.vtexassets.com/arquivos/ids/427751-800-600?v=636495154762100000&width=800&height')

//traer productos por ID
//url.getById(2)

//Borrar por ID
//url.deleteById(1)

//Borrar todos los objetos
//url.deleteAll()
