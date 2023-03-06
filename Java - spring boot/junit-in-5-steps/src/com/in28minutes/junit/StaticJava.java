package com.in28minutes.junit;

public class StaticJava {

    int vat1; // non static
    static int var2; // static

    public static void main(String[] args) {
        String var3 = "Test";
        String var4 = "";

        StaticJava obj = new StaticJava();
        obj.vat1 = 0;

        StaticJava.var2 = 1;
    }
}
