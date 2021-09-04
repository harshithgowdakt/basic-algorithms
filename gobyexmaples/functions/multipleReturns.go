package main

import "fmt"

func main() {
	a, b := swap(10, 15)
	fmt.Println(a, b)
}

func swap(a, b int) (int, int) {
	return b, a
}
