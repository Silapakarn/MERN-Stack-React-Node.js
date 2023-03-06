package com.in28minutes.junit;

public class CalculatorClient {
    public static void main(String[] args) {

        //Call base class
        Calculator cal = new Calculator();
        String result = cal.combine(10, 20);
        System.out.println(result);

        System.out.println(cal.minus(10, 20));
        System.out.println(cal.divide(10, 20));
        System.out.println(cal.multiply(10, 20));

        //Call inherited class
        AdvancedCalculator advCal = new AdvancedCalculator();
        System.out.println(advCal.sin(30));
        System.out.println(advCal.cos(30));
        System.out.println(advCal.tan(30));
    }
}