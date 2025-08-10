'''O mesmo professor do desafio anterior quer sortear a ordem uma apresentação de trabalhos dos alunos.
Faça um programa que leia o nome dos quatro alunos e mostre a ordem sorteada.'''

import random

aluno1=str(input('Digite o nome do aluno: '))
aluno2=str(input('Digite o nome do aluno: '))
aluno3=str(input('Digite o nome do aluno: '))
aluno4=str(input('Digite o nome do aluno: '))

lista=[aluno1, aluno2, aluno3, aluno4]
sorteio=random.sample(lista, 4)

print('A ordem sorteada é: {}'.format(sorteio))