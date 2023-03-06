package com.example.mykotlin.playground.basic

fun main() {
    normalFunction()
    argumentFunction(11,22)
    returnFunction1()
    returnFunction2()
    optionalFunction(1150)
    optionalFunction(x1 = 22, x2 = 55)

    //Lambda Expression
    val lamda1: (Int, Int) -> Int = {x1, x2 -> x1 + x2}
    println("Lambda Expression: " + lamda1(2,2))
}

fun normalFunction(){
    println("normalFunction")
}

fun  argumentFunction(x1: Int, x2: Int){
    println("sum: ${x1 + x2}")
}

fun returnFunction1(): String{
    return  "Dragon"
}
//shot from
fun returnFunction2() = "Dragon"

fun optionalFunction(x1: Int, x2: Int = 0){
    println("sum: ${x1 + x2}")
}




