package com.in28minutes.junit;

import java.util.Hashtable;

public class KeyValueJAva {
    public static void main(String[] args) {
        Hashtable<String,Integer> colorCode = new Hashtable<>();
        colorCode.put("RED", 12345);
        colorCode.put("GREEN", 67890);

        System.out.println(colorCode.get("RED"));
        System.out.println(colorCode.get("GREEN"));

        Hashtable<String, String> dict = new Hashtable<>();
        dict.put("dog", "หมา");
        dict.put("dragon","มังกร");

        System.out.println("\n");
        System.out.println(dict.get("dog"));
        System.out.println(dict.get("dragon"));
    }
}
