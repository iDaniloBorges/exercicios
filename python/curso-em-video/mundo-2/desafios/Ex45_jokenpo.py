''' Crie um programa que faça o computador jogar Jokenpô com você '''

from random import choice

print('-'*20, 'INÍCIO DO JOGO','-'*20)

print('Escolha entre: ')
print('(1) PEDRA')
print('(2) PAPEL')
print('(3) TESOURA')

opcaoEscolhida = (int(input('Digite sua opção: ')))

lista = [1, 2, 3]

maquina = choice(lista)

if opcaoEscolhida < 1 or opcaoEscolhida > 3:
    print('ESCOLHA UM VALORES ENTRE 1 E 3.')

elif maquina == 1 and opcaoEscolhida == 2:
    print('PAPEL VENCE PEDRA, ENTÃO VOCÊ VENCEU.')

elif maquina == 2 and opcaoEscolhida == 3:
    print('TESOURA VENCE PAPEL, ENTÃO VOCÊ VENCEU.')

elif maquina == 3 and opcaoEscolhida == 1:
    print('PEDRA VENCE TESOURA, ENTÃO VOCÊ VENCEU.')

elif maquina == opcaoEscolhida and maquina == 1:
    print('AMBOS ESCOLHEMOS PEDRA, ENTÃO HOUVE EMPATE')

elif maquina == 1 and opcaoEscolhida == 3:
    print('PEDRA VENCE TESOURA, ENTÃO VOCÊ PERDEU.')

elif maquina == 2 and opcaoEscolhida == 1:
    print('PAPEL VENCE PEDRA, ENTÃO VOCÊ PERDEU.')

elif maquina == 3 and opcaoEscolhida == 2:
    print('TESOURA VENCE PAPEL, ENTÃO VOCÊ PERDEU.')

print('-'*20, 'FIM DO JOGO','-'*20)