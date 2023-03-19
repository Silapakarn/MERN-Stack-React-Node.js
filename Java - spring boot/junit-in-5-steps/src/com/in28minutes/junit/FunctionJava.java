package com.in28minutes.junit;

public class FunctionJava {

    public static void main(String[] args) {
        print();

        runSomething();
        String grade = getGrade();
        System.out.println("Grade is: " + grade);

        boolean inRunning = isRunning();
        System.out.println("It is running: " + inRunning);

        //Function with single arguments
        printIt("Karn");
        int count = 0;
        count(count++);
        count(count++);
        count(count++);
        count(count++);

        //Function with mutiple argument
        int combineValue =  combine(2,3, "Ater combine: ");
        System.out.println("return is: " + combineValue);

    }

    private static int combine(int i, int j, String msg) {
        int output = i + j;
        System.out.println(msg + output);

        return output;
    }

    private static void count(int count) {
        System.out.println("Count is: " + count);
    }

    private static void printIt(String name) {
        System.out.println("It is: " + name);
    }

    public static boolean isRunning(){
        return true;
    }

    private static String getGrade() {
        return "A";
    }

    private static void runSomething() {
        System.out.println("SomeThing!");
    }

    public static void print(){
        System.out.println("CodeMobiles Hey!");
        System.out.println("CodeMobiles Hi");
        System.out.println("CodeMobiles Hoo");
    }
}
