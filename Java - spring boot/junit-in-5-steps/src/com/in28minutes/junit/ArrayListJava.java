package com.in28minutes.junit;

import java.util.ArrayList;

public class ArrayListJava {
    public static void main(String[] args) {
        ArrayList<String> myList = new ArrayList<String>();
        myList.add(0, "Karn");
        myList.add(0, "Test");
        myList.add(0, "Dragon");



        for(int i = 0; i<myList.size(); i++){
            System.out.println(myList.get(i));
        }


        for(String name : myList){
           System.out.println(name);
        }
    }
}
