package com.in28minutes.junit;

public class InterfaceJava implements ICalculatorInterface {

    @Override
    public String combine(double a, double c) {
        return "Comnine Result: " + (a+c);
    }

    @Override
    public String minus(double a, double c) {
        // TODO Auto-generated method stub
        return "Minus Result: " + (a-c);
    }

    @Override
    public String multiply(double a, double c) {
        // TODO Auto-generated method stub
        return "Multiply Result: " + (a*c);
    }
    
}
