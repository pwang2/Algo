#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define SIZE 1000

void swap(int* a, int x, int y) {
    int t = a[x];
    a[x] = a[y];
    a[y] = t;
}

void sort(int* a, int l, int r) {
    if (l >= r) return;
    int mid = a[(l + r) >> 1];
    int i = l - 1;
    int j = r + 1;
    while (1) {
        while (a[++i] < mid);
        while (a[--j] > mid);
        if (i >= j) break;
        swap(a, i, j);
    }
    sort(a, l, i - 1);
    sort(a, j + 1, r);
}

int* quickSort(int* a) {
    sort(a, 0, SIZE- 1);
    return a;
}


void gen(int *out, int count) {
    for (int i = 0; i < count; i++) {
        out[i] = rand() % SIZE;
    }
}

int main(void){
    int input[SIZE];
    gen(input,SIZE);

    clock_t t= clock();
    for(int i=0;i<10000;i++){
        quickSort(input);
    }
    t=clock()-t;
    double time_taken = ((double)t)/CLOCKS_PER_SEC*1000; // in seconds
    printf("%f\n",time_taken);
    for(int i=0;i<SIZE;i++){
        printf("%d ", input[i]);
    }
    return 0;
}

