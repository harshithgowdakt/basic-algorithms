package main

import "fmt"

func add(x, y int) int {
	return x + y
}

func addFloat(x, y float32) float32 {
	return x + y
}

func main() {
	fmt.Println("Addition of 2 and 3 is :", add(2, 3))
	fmt.Println("Addition of 2.3 and 3.2 is :", addFloat(2.3, 3.2))
}
