package com.in28minutes.junit;

public class MyMath {
	
	
	public int calculatesSum(int[] numbers) {
		int sum = 0;
		for(int number:numbers) {
			sum += number;
		}
		return sum;
	}


	public int higher(int x, int y){
		if(x > y){
			return x;
		}
		else{
			return y;
		}
	}
}
