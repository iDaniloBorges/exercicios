#Dissecando um variável
#Faça um programa que leia algo pelo teclado e mostre na tela o seu tipo primitivo e todas as informações possíveis sobre ele.

dado=input('Digite algo: ')

print('O tipo primitivo é: ', type(dado))
print('Só tem espaços? ', dado.isspace())
print('É um número?', dado.isnumeric())
print('É alfabético?', dado.isalpha())
print('É alfanumérico?', dado.isalnum())
print('Está em maiúsculas?', dado.isupper())
print('Está em minuscúlas?', dado.islower())
print('Está em maiúsculo?', dado.isupper())
print('Está capitalizada?', dado.istitle())