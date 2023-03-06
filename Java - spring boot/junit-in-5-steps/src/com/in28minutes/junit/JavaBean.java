package com.in28minutes.junit;

public class JavaBean {
    public static void main(String[] args) {

        register("admin","1234","test");

        AccountBean accBn = new AccountBean();
        accBn.username="admin";
        accBn.password="1234";
        accBn.question="Dragon ?";

        registerV2(accBn);
        
    }

    public static void register(String username, String password, String question) {
        System.out.println("Noe use Java Bean: " + username);
    }

    public static void registerV2(AccountBean bn) {

        System.out.println("Username is: " + bn.username);
    }
}
