package com.in28minutes.junit;

public class JavaTryCatch {
    public static void main(String[] args) {
        String[] myArray = new String[]{"a","b","c"};

        try{
            System.out.println(myArray[4]);
        }catch(Exception e){
            System.out.println("Index out of bounfs: " + myArray.length);
        }
        
    }
}
