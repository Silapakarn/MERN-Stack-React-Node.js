package com.in28minutes.junit;

import com.in28minutes.junit.dummy.Claculator;

public class ClassJava {
    public static void main(String[] args) {

        //create an object of ClassJava
        ClassJava aClassJavaObj = new ClassJava();
        aClassJavaObj.show();

        //Create an object of Calculator (outside our package)
        Claculator claculator = new Claculator();
        claculator.test("ture");

        String result =  claculator.combine(5, 5);

        System.out.println(result);
        System.out.println(claculator.minus(100, 5));
        System.out.println(claculator.divide(100, 5));
    }

    public void show(){
        System.out.println("Dragon____Class Show!");
    }
}
