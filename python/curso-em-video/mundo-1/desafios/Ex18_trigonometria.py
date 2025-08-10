#Faça um programa que leia um ângulo qualquer e mostre na tela o valor do seno, cosseno e tangente desse ângulo.

import math

from math import sin, cos, tan, radians

angulo=float(input('Digite o valor do ângulo: '))

seno=sin(radians(angulo))
cosseno=cos(radians(angulo))
tangente=tan(radians(angulo))

print('='*30)

print('O valot de Seno é: {:.2f}'.format(seno))
print('O valor de Cosseno é: {:.2f}'.format(cosseno))
print('O valor da Tangente é: {:.2f}'.format(tangente))

