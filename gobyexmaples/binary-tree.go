package main

import "fmt"

type Node struct {
	key   int
	left  *Node
	right *Node
}

type Tree struct {
	root *Node
}

func (n *Node) insert(data int) {
	if data <= n.key {
		if n.left != nil {
			n.left.insert(data)
		} else {
			n.left = &Node{key: data, left: nil, right: nil}
		}
	} else {
		if n.right != nil {
			n.right.insert(data)
		} else {
			n.right = &Node{key: data, left: nil, right: nil}
		}
	}
}

func (t *Tree) insert(data int) {
	if t.root == nil {
		t.root = &Node{key: data, left: nil, right: nil}
	} else {
		t.root.insert(data)
	}
}

func printPreOrder(n *Node) {
	if n == nil {
		return
	} else {
		fmt.Println(n.key)
		printPreOrder(n.left)
		printPreOrder(n.right)
	}
}

func printInOrder(n *Node) {
	if n == nil {
		return
	} else {
		printInOrder(n.left)
		fmt.Println(n.key)
		printInOrder(n.right)
	}
}

func printPostOrder(n *Node) {
	if n == nil {
		return
	} else {
		printPostOrder(n.left)
		printPostOrder(n.right)
		fmt.Println(n.key)
	}
}

func main() {
	var t Tree
	t.insert(1)
	t.insert(2)
	t.insert(5)
	t.insert(4)
	t.insert(3)
	printPostOrder(t.root)
}
