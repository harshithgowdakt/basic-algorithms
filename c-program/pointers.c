#include <stdio.h>
int main()
{
  int a = 5, b = 20;
  int *ptr = &a;
  printf("data at the ptr %d \n", *ptr);
  printf("address of a: %p\n", ptr);
  *ptr = 10;
  printf("data at the ptr %d \n", *ptr);
  ptr = &b;
  printf("data at the ptr %d \n", *ptr);
  printf("address of a: %p\n", ptr);
  printf("address of pointer: %p\n", &ptr);
  return 0;
}