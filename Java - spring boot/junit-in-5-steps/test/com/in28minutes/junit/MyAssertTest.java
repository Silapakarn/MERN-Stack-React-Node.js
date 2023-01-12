package com.in28minutes.junit;

import static org.junit.jupiter.api.Assertions.*;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;

class MyAssertTest {
	
	List<String> todos = Arrays.asList("AWS","DevOps");
	
	@Test
	void test() {
			
			Boolean test = todos.contains("AWS");
			Boolean test2 = todos.contains("DevOps");

		
//			assertEquals(true, test);
			assertTrue(test);
			assertFalse(test2);
			assertArrayEquals(new int[] {1,2}, new int[] {1,2});
			
			assertEquals(2, todos.size());
			
	}

}
