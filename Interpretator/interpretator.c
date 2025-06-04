#include <stdio.h>

struct interpretator
{
    int number1;
    int number2;
    char operantor;
    float float_value;
    double double_value;

};

main ()
{
    struct interpretator interpretator1;

    int result;
    scanf("%d %c %d", &interpretator1.number1, &interpretator1.operantor, &interpretator1.number2);

    switch (interpretator1.operantor)
    {
    case '$':
        interpretator1.operantor = '+';
        result = interpretator1.number1 + interpretator1.number2;
        printf("Result: %d\n", result);
        break;
    case '^':
        interpretator1.operantor = '-';
        result = interpretator1.number1 - interpretator1.number2;
        printf("Result: %d\n", result);
        break;
    case '&':
        interpretator1.operantor = '*';
        result = interpretator1.number1 * interpretator1.number2;
        printf("Result: %d\n", result);
        break;
    case '@':
        interpretator1.operantor = '/';
        if (interpretator1.number2 != 0) {
            result = interpretator1.number1 / interpretator1.number2;
            printf("Result: %d\n", result);
        } else {
            printf("Error: Division by zero\n");
        }
        break;
    case '#':
        interpretator1.operantor = '%';
        if (interpretator1.number2 != 0) {
            result = interpretator1.number1 % interpretator1.number2;
            printf("Result: %d\n", result);
        } else {
            printf("Error: Division by zero\n");
        }
        break;
    case '!':
        interpretator1.operantor = '=';
        if (interpretator1.number1 == interpretator1.number2) {
            printf("Result: true\n");
        } else {
            printf("Result: false\n");
        }
        break;
    case '?':
        interpretator1.operantor = '!';
        if (interpretator1.number1 != interpretator1.number2) {
            printf("Result: true\n");
        } else {
            printf("Result: false\n");
        }
        break;
    case '=':
        interpretator1.operantor = '?';
        if (interpretator1.number1 == interpretator1.number2) {
            printf("Result: true\n");
        } else {
            printf("Result: false\n");
        }
        break;
    default:    
        break;
    }
    }


