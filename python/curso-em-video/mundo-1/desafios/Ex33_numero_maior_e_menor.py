'''Faça um programa que leia três números e mostre qual é o maior e qual é o menor.'''

number1=float(input('Digite o primeiro valor: '))
number2=float(input('Digite o segundo valor: '))
number3=float(input('Digite o terceiro valor: '))

maiorNumber = max(number1, number2, number3)
menorNumber = min(number1, number2, number3)

if number1 == number2 == number3:
    print(f'Todos os valores são iguais a {number1}')
else:
    print(f'O maior valor é {maiorNumber}')
    print(f'O menor valor é {menorNumber}')
