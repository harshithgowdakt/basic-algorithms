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

void insert_after_position(struct Node *head, int position, int data)
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

int delete_at_front(struct Node **head)
{
  if (*head != NULL)
  {
    struct Node *temp_node = *head;
    *head = temp_node->next;
    free(temp_node);
  }
}

int main()
{
  struct Node *head = (struct Node *)malloc(sizeof(struct Node));

  head->data = 10;
  head->next = NULL;
  insert_at_beginning(&head, 20);
  insert_at_end(head, 30);
  insert_after_position(head, 1, 40);
  delete_at_front(&head);
  print_list(head);
}