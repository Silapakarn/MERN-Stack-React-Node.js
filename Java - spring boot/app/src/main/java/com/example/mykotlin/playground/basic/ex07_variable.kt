package com.example.mykotlin.playground.basic

fun main() {
    var null1: String? = null
    println(null1!!.length)

    null1 = "test"
    println(null1?.length)

    null1?.let{
        //todo
    }
}



