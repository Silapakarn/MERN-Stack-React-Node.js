package main

import (
	"fmt"
	"testing"
)

// func Add(a int, b int){

// 	r  := a + b
// 	return r
// }

func Add(a , b int) int{
	p := a + b
	fmt.Println("discount:", p)

	return p
}


func TestAdd(t *testing.T){
	r := Add(1,2)

	if r != 3{
		t.Error("Add(1,2) should be 3")
	}
}