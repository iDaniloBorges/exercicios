#Faça um programa que leia um número inteiro qualquer e mostre na tela sua tabuada.

number=int(input('Digite um valor inteiro: '))

print('Tabuada de {}'.format(number))
print(20 * '=')
print('1  X  {:2} = {} '.format(number, number))
print('2  X  {} = {}'.format(number, number*2))
print('3  X  {} = {}'.format(number, number*3))
print('4  X  {} = {}'.format(number, number*4))
print('5  X  {} = {}'.format(number, number*5))
print('6  X  {} = {}'.format(number, number*6))
print('7  X  {} = {}'.format(number, number*7))
print('8  X  {} = {}'.format(number, number*8))
print('9  X  {} = {}'.format(number, number*9))
print('10 X  {} = {}'.format(number, number*10))
print(20 * '=')