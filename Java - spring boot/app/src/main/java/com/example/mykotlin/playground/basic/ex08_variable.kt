package com.example.mykotlin.playground.basic

fun main() {
    var cast1: Any = "test101"
    var cast2 = cast1 as String
    println(cast2.length)

    if(cast1 is String){
        println(cast1.length)
    }

    var cast3 = cast1 as? Int
    println(cast3)
}



