package com.example.mykotlin.playground.basic

//ค่าคงที่ไม่สามารถเปลี่ยนแปลงได้ Top level
const val const_1 = 1234
const val const_val: Int = 123456

fun main() {
    // Mutable (Implicit)
    var var1 = "Dragon"
    var var2 = 1234
    var var3 = true
    var var4 = 12.55

    var1 = "cat"
    println(var1)

    // Mutable (Explicit)
    var var6: String = "Karn"
    var var7: Int = 1234
    var var8: Boolean = true

    var6 = "dog"
    println(var6)

    // String template
    println("result: $var1, $var2, $var7")


    //Immutable (final) (runtime)
    var var_1 = "Dragob_2"
//    var var_1 = "car"

    var var_2 = "mvn"
    println(const_val)

    // any สามารถใช้ได้หลาย type
    var any1: Any
    any1 = 1234
    any1 = "ffff"
}




