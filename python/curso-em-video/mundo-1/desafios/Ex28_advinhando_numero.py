'''Escreva um programa que faça o computador "pensar" em um número inteiro entre 0 e 5 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador.
O programa deverá escrever na tela se o usuário venceu ou perdeu.'''

from random import choice
from time import sleep
numeroEscolhido=int(input('Escolha um número inteiro entre 0 e 5: '))

lista=[0, 1, 2, 3, 4, 5]

numeroSorteado=choice(lista)

print('PROCESSANDO...')
sleep(3)

if numeroSorteado == numeroEscolhido:
    print('Você acertou o número {}. PARABÉNS!'.format(numeroSorteado))
else:
    print('Você não acertou! O número escolhido foi {}.'.format(numeroSorteado))