#Faça um programa que leia o comprimento do cateto oposto e do cateto adjacente de um triângulo retângulo, calcule e mostre o comprimento da hipotebusa.

from math import sqrt, hypot

catetoOposto=float(input('Digite o valor do cateto oposto: '))
catetoAdjacente=float(input('Digite o valor do cateto oposto: '))

hipotenusa1 = sqrt(catetoOposto**2+catetoAdjacente**2)
print('Para cateto oposto igual a: {} e cateto adjacente igual a: {}, a hipotenusa será: {:.3f}'.format(catetoOposto, catetoAdjacente, hipotenusa1))

# OU

hipotenusa2 = hypot(catetoOposto, catetoAdjacente)
print('Para cateto oposto igual a: {} e cateto adjacente igual a: {}, a hipotenusa será: {:.3f}'.format(catetoOposto, catetoAdjacente, hipotenusa2 ))