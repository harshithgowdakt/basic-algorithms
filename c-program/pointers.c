#include <stdio.h>
int main()
{
  int a = 5;
  int *ptr = &a;
  int b= 20;
  *ptr = 10;
  ptr = &b;
  printf("var: %d\n", a);
  printf("data at the ptr %d \n", *ptr);
  printf("pointer address %p\n", ptr);
  printf("address of var: %p\n", &b);  
  return 0;
}