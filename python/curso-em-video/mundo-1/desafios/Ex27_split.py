#Faça um programa que leia o nome completo de uma pessoa, mostrando em seguida o primeiro e o último nome separadamente.
#Ex: Ana Maria de Souza. Primeiro: Ana , Último: Souza

nome=input('Digite seu nome: ')
nomeFracionado=nome.split()

print('O primeiro nome é: {}'.format(nomeFracionado[0]))
print('O último nome é: {}'.format(nomeFracionado[-1]))