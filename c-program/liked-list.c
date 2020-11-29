#include <stdio.h>
#include <stdlib.h>

struct Node
{
  int data;
  struct Node *next;
};

void print_list(struct Node *head)
{
  while (head != NULL)
  {
    printf("Data %d\n", head->data);
    head = head->next;
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

void delete_at_position(struct Node **head, int position)
{
  struct Node *temp_node = *head, *previous_node;

  for (int i = 1; i <= position; i++)
  {
    if (temp_node->next != NULL)
    {
      previous_node = temp_node;
      temp_node = temp_node->next;
    }
  }
  if (temp_node == *head)
  {
    *head = temp_node->next;
    free(temp_node);
  }
  else
  {
    previous_node->next = temp_node->next;
    free(temp_node);
  }
}

void delete_at_end(struct Node *head)
{
  struct Node *temp_node = head, *previous_node;
  while (temp_node->next != NULL)
  {
    previous_node = temp_node;
    temp_node = temp_node->next;
  }
  previous_node->next = NULL;
  free(temp_node);
}

int reverse_linked_list(struct Node **head)
{
  struct Node *current_node = *head, *previous_node = NULL, *next_node = NULL;
  while (current_node != NULL)
  {
    next_node = current_node->next;
    current_node->next = previous_node;
    previous_node = current_node;
    current_node = next_node;
  }
  *head = previous_node;
}

int main()
{
  struct Node *head = (struct Node *)malloc(sizeof(struct Node));

  head->data = 20;
  head->next = NULL;
  insert_at_beginning(&head, 10);
  insert_at_end(head, 40);
  insert_after_position(head, 1, 30);
  reverse_linked_list(&head);
  printf("List after reverse\n");
  print_list(head);
  delete_at_front(&head);
  delete_at_position(&head, 2);
  delete_at_end(head);
  printf("List after deletion\n");
  print_list(head);
}