'''Escreva um programa que leia dois números inteiros e compare-os, mostrando na tela uma mensagem:
- o primeiro valor é maior
= o segundo valor é maior
- não existe valor maior, os dois são iguais '''

valor1 = int(input('Digite o primeiro valor: '))
valor2 = int(input('Digite o segundo valor: '))

if valor1 > valor2:
    print('O primeiro valor \033[42m({})\033[40m é maior do que o segundo valor \033[41m({})\033[40m.'.format(valor1, valor2))

elif valor2 > valor1:
    print('O segundo valor \033[42m({})\033[40m é maior do que o primeiro valor \033[41m({})\033[40m.'.format(valor2, valor1))

else:
    print('O primeiro valor \033[44m({})\033[40m é igual segundo valor \033[44m({})\033[40m'.format(valor1, valor2))