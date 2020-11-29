#include <stdio.h>
#include <stdlib.h>

struct Node
{
  int data;
  struct Node *next;
};

void print_list(struct Node *n)
{
  while (n != NULL)
  {
    printf("Data %d\n", n->data);
    n = n->next;
  }
}

void insert_at_beginning(struct Node **head, int data)
{
  struct Node *new_node = (struct Node *)malloc(sizeof(struct Node));
  new_node->data = data;
  new_node->next = *head;
  *head = new_node;
}

void insert_at_end(struct Node *head, int data)
{
  struct Node *new_node = (struct Node *)malloc(sizeof(struct Node));
  new_node->data = data;
  new_node->next = NULL;
  struct Node *temp_node = head;
  while (temp_node->next != NULL)
  {
    temp_node = temp_node->next;
  }
  temp_node->next = new_node;
}

void insert_at_position(struct Node *head, int position, int data)
{
  struct Node *new_node = (struct Node *)malloc(sizeof(struct Node));
  new_node->data = data;
  new_node->next = NULL;
  struct Node *temp_node = head;
  for (int i = 2; i <= position; i++)
  {
    if (temp_node->next != NULL)
    {
      temp_node = temp_node->next;
    }
  }
  new_node->next = temp_node->next;
  temp_node->next = new_node;
}

int main()
{
    struct Node *head = (struct Node *)malloc(sizeof(struct Node));
    struct Node *second = (struct Node *)malloc(sizeof(struct Node));
    struct Node *third = (struct Node *)malloc(sizeof(struct Node));

    head->data = 10;
    head->next = second;
    second->data = 20;
    second->next = third;
    third->data = 30;
    third->next = NULL;
    insert_at_beginning(&head, 40);
    insert_at_end(head, 50);
    insert_after_position(head, 1, 60);
    print_list(head);
}