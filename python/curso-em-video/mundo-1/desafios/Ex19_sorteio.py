#Um professor quer sortear um dos seus quatro aluno para apagar o quadro. Faça um programa que ajude ele, lendo o nome deles e escrevendo o nome do escolhido.

import random

numeroAleatorio1=input('Digite o nome: ')
numeroAleatorio2=input('Digite o nome: ')
numeroAleatorio3=input('Digite o nome: ')
numeroAleatorio4=input('Digite o nome: ')

lista = [numeroAleatorio1, numeroAleatorio2, numeroAleatorio3, numeroAleatorio4]
sorteio = random.choice(lista)

print('O aluno escolhido foi: ', sorteio)