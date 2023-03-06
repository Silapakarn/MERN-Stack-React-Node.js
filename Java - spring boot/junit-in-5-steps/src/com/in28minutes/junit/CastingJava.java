package com.in28minutes.junit;

import java.util.ArrayList;

public class CastingJava {
    public static void main(String[] args) {
        ArrayList<Object> myArray = new ArrayList<>();
        myArray.add(0, 1234);
        myArray.add("string");
        myArray.add(true);

        for(Object item : myArray){
            if((item instanceof Integer) == true){
                System.out.println((Integer)item);
            }else if((item instanceof String) == true){
                System.out.println((String)item);
            }else if((item instanceof Boolean) == true){
                System.out.println((Boolean)item);
            }
        }
    }
}
