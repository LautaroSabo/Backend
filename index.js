

class Usuario {
    
            constructor(nombre, apellido,libros=[], mascotas=[] ){
        
                this.nombre = nombre
                this.apellido = apellido
                this.libros = libros
                this.mascotas= mascotas
    }

    getFullName(){
        return `El nombre del usuario es ${this.nombre} y Su apellido es ${this.apellido}`
    }

    addMascota(newMascota){
        this.mascotas.push(newMascota)
        return`El usuario tiene de mascota un ${this.mascotas}`
    }
    
    countMascotas(){
        
        return `El Usuario ${this.nombre} tiene ${this.mascotas.length} y son ${this.mascotas}`
    }
    
    addBooks(name, author){

        this.libros.push({nombre: name  , autor: author})
        console.log(this.libros)
    }

    getBookName(){
        
        return this.libros.map(libros => libros.nombre)
        
    }

    
    
}



let lautaro = new Usuario ("Lautaro","Sabo",[],[])
let axel = new Usuario("Axel","Sabo",[],["Gato"])
let xiomara = new Usuario ("Xiomara", "Sabo",[], ["Perro","Gato"])
let magali = new Usuario ("Magali","Herrera",[],[])



console.log(lautaro.getFullName())
console.log(axel.addMascota())
console.log(xiomara.countMascotas())
console.log(magali.addBooks("Los ojos del Perro Siberiano", "Antonio Santa Ana"))
console.log(magali.getBookName())



