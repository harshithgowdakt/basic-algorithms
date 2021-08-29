package main

import (
	"fmt"
	"math"
)

type Address struct {
	name, street, city, state string
	pincide                   int
}

type Person struct {
	name string
	age  int
}

func newPerson(name string) *Person {
	p := &Person{name: name}
	p.age = 24
	return p
}


type Circle struct {
	x, y, r float64
}

func (c *Circle) area() float64 {
	return 2 * math.Pi * c.r
}

func main() {
	// fmt.Println(Person{"Harshith", 24})
	// fmt.Println(Person{name: "Harshith", age: 24})
	// fmt.Println(Person{name: "Harshith"})
	// p := newPerson("Harshith")
	// fmt.Println((*p).age, (*p).name)
	// fmt.Println(p.age, p.name)

	c := &Circle{1, 1, 2}
	fmt.Println(c.area())
}
