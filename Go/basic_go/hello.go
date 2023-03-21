package main

import (
	"fmt"
)


func main()  {

	skills := [3]string{"js","go","Python"}

	for i := 0; i < len(skills); i++ {
		fmt.Println(skills[i])
	}

	sum := 1
	for i := 0; i < 5; i++ {
		sum += sum
		fmt.Println("i: ", i, "sum: ", sum)
	}

}
