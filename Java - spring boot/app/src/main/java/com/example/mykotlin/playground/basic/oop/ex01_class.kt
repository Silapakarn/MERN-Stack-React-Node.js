package com.example.mykotlin.playground.basic.oop


fun main() {
    val objects1 = PrimaryClass("Karn", 28)
    objects1.display()
}

class PrimaryClass(val name: String, val age: Int ) {
    init{
        println("primary init")
    }

    init{
        println("init age: $age")
    }

    fun display(){
        val result = "name: $name, age: $age"
        println("Primary: $result")
    }
}

class Secondary{
    var name: String
    var age: Int

    constructor(){
        this.name = ""
        this.age = 0
    }
    constructor(name: String, age: Int){
        this.name = name
        this.age =age
    }
}




