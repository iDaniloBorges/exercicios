#Crie um programa que leia um número real qualquer e mostre a sua porção inteira.

from math import trunc
numero1=float(input('Digite um número qualquer: '))
print('A porção inteira de {} é {}.'.format(numero1, trunc(numero1)))

# OU

numero2=float(input('Digite um valor'))
print('A porção inteira de {} é {}.'.format(numero2, int(numero2)))