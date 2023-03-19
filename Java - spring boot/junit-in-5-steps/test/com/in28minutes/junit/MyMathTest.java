package com.in28minutes.junit;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class MyMathTest {

	private MyMath math = new MyMath();

	@Test
	void calculateSum_ThreeMemberArray() {
		
			System.out.println("result sum: " + math.calculatesSum(new int[] {1,2,3,4}));
			
			int expectedResult = 10;
			assertEquals(expectedResult, math.calculatesSum(new int[] {1,2,3,4}));
	}
	
	
	@Test
	void test1() {
		
			int[] numbers = {};
			int result = math.calculatesSum(numbers);
			System.out.println("result sum: " + result);
			
			int expectedResult = 0;
			assertEquals(expectedResult, result);
	}


	@Test
	void testHigherCalculate(){
		
		System.out.println("result: " + math.higher(2, 5));
		
		System.out.println("result: " + math.higher(3, 5));

		int expectedResult = 25;
		assertEquals(expectedResult, math.higher(25, 23));

	}

}
