#include <assert.h>
#include <ctype.h>
#include <limits.h>
#include <math.h>
#include <stdbool.h>
#include <stddef.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct thread_node
{
    char name[10];
    int priority;
    struct thread_node *next;
};

typedef struct thread_node thread_node;

struct priority_queue
{
    thread_node *front, *rear;
};

typedef struct priority_queue priority_queue;

bool is_queue_empty(priority_queue *queue)
{
    if (queue->front == NULL && queue->rear == NULL)
    {
        return true;
    }
    return false;
}

void insert_in_order(priority_queue *queue, thread_node *thread)
{
    thread_node *temp_thread = queue->front;
    while ((temp_thread->next != NULL) && (thread->priority >= temp_thread->next->priority))
    {
        temp_thread = temp_thread->next;
    }
    if ((temp_thread == queue->front) && thread->priority < temp_thread->priority)
    {
        thread->next = temp_thread;
        queue->front = thread;
    }
    else
    {
        thread->next = temp_thread->next;
        temp_thread->next = thread;
        if (thread->next == NULL)
        {
            queue->rear = thread;
        }
    }
}

void enqueue(priority_queue *queue, thread_node *thread)
{
    if (is_queue_empty(queue))
    {
        queue->front = thread;
        queue->rear = thread;
    }
    else
    {
        insert_in_order(queue, thread);
    }
}

thread_node *dequeue(priority_queue *queue)
{
    if (!is_queue_empty(queue))
    {
        thread_node *temp_thread = queue->front;
        queue->front = queue->front->next;
        return temp_thread;
    }
    return NULL;
}

thread_node *create_node(char *thread_name, int thread_priority)
{
    thread_node *thread;
    thread = malloc(sizeof(thread_node));
    thread->priority = thread_priority;
    strcpy(thread->name, thread_name);
    thread->next = NULL;

    return thread;
}

priority_queue *create_queue()
{
    priority_queue *queue = malloc(sizeof(priority_queue));
    queue->front = NULL;
    queue->rear = NULL;

    return queue;
}

void display(thread_node *thread)
{
    printf("%s %d", thread->name, thread->priority);
    printf("\n");
}

int main(int argc, char *argv[])
{
    int thread_count, thread_priority;
    char thread_name[10];

    priority_queue *queue = create_queue();

    scanf("%d", &thread_count);

    thread_node *thread[thread_count];

    for (int index = 0; index < thread_count; index++)
    {
        scanf("%s %d", thread_name, &thread_priority);
        thread[index] = create_node(thread_name, thread_priority);
        enqueue(queue, thread[index]);
    }

    for (int index = 0; index < thread_count; index++)
    {
        display(dequeue(queue));
    }
}