package main

import "fmt"

type Publisher interface {
	Publish() error
}

type BlogPost struct {
	author string
	title  string
	postId int
}

func (b BlogPost) Publish() error {
	fmt.Printf("The title on %s has been published by %s, with postId %d\n", b.title, b.author, b.postId)
	return nil
}
