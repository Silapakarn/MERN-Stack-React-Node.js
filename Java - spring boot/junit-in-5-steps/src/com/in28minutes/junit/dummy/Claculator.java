package com.in28minutes.junit.dummy;

public class Claculator {
    public static void test(String test) {
        System.out.println("Class Calculator: " + test);
    }

    public String combine(int a, int b){
        int result = a + b;
        return "Conbine: " + result;
    }

    public String minus(int a, int b){
        int result = a - b;
        return "Minus: " + result;
    }

    public String divide(float a, float b){
        float result = a/b;
        return "Divide: " + result;
    }
}
