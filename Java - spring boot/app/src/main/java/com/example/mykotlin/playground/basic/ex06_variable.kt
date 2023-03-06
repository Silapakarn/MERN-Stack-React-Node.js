package com.example.mykotlin.playground.basic

//List Set Map
fun main() {
    //Dynamic size (Mutable)
    val list1 = mutableListOf<Any>(1111,"1111")
    val list2 = mutableListOf<Int>(111,1222)

    list1.add("123444")
    for (item in list1){
        println("$item")
    }
}



