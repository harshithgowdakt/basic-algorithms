#include <stdio.h>
#include <stdlib.h>

struct Node
{
    int data;
    struct Node *next;
};

struct Node *top = NULL;

void print_list()
{
    struct Node *temp_node = top;
    while (temp_node != NULL)
    {
        printf("Data %d\n", temp_node->data);
        temp_node = temp_node->next;
    }
}

void push(int data)
{
    struct Node *new_node = (struct Node *)malloc(sizeof(struct Node));
    new_node->data = data;
    new_node->next = top;
    top = new_node;
}

int pop()
{
    if (top != NULL)
    {
        struct Node *current_node = top;
        top = current_node->next;
        int data = current_node->data;
        free(current_node);
        return data;
    }
    return -1;
}

int main()
{
    push(10);
    push(20);
    push(30);
    push(40);
    print_list();
    pop();
    pop();
    pop();
    pop();
    print_list();
}