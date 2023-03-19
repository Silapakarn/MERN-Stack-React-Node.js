package com.in28minutes.junit;

public class ConditionJava {
    public static void main(String[] args) {
        boolean isFailed = false;
        if(isFailed){
            System.out.println("Failed");
        }else{
            System.out.println("Successful");
        }

        //Condition
        String status = "--";

        if(status.equals("Running") == true){
            System.out.println("RUN");
        }else if(status.equals("Walking") == true){
            System.out.println("WALK");
        }else{
            System.out.println("Program Not Run.");
        }


    
        System.out.println("\n");

        //condition in Number
        int percent = 69;
        if(percent == 100){
            System.out.println("A");
        }else if(percent < 100 && percent > 90){
            System.out.println("B +");
        }else if(percent <= 90 && percent >= 70){
            System.out.println("B");
        }else{
            System.out.println("C");
        }
    }
}
