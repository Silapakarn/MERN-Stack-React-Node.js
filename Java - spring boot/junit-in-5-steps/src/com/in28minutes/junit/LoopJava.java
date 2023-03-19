package com.in28minutes.junit;

public class LoopJava {
    public static void main(String[] args) {
        
        for(int i=0; i <= 50; i++){
            System.out.println("i is: " + i);
        }

        for(int i = 50; i >= 0; i--){
            System.out.println("i is: " + i);
        }

        int count = 0;
        while(count<=50){
            System.out.println("Count + :" + count);
            count++;
            if(count == 25){
                break;
            }
        }
    }
}
