package main

import (
	"fmt"
)

func main()  {
	
	ratings := 9.0

	switch {
	case ratings < 5.0:
		fmt.Println("Disappointed")
	case ratings == 5.0 && ratings < 7.0:
		fmt.Println("Normal")
	case ratings >= 7.0 && ratings < 10.0:
		fmt.Println("Good")
	}
}
