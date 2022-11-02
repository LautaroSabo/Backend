
//
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
    
}



let lautaro = new Usuario ("Lautaro","Sabo",[],[])
let axel = new Usuario("Axel","Sabo",[],["Gato"])
let xiomara = new Usuario ("Xiomara", "Sabo",[], ["Perro","Gato"])


//console.log(lautaro.getFullName())
//console.log(axel.addMascota())
console.log(xiomara.countMascotas())



