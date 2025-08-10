'''Crie um programa que leia o nome completo de uma pessoa e mostre na tela: '''
'''O nome de com todas as letras maiusculas, minusculas, quantas letras ao todo sem considerar espaços e quantas letras tem o primeiro nome'''

nome=input('Qual é seu nome completo? ')

print(nome.upper())
print(nome.lower())

nomeFracionado=(nome.split())
nomeSemEspacos=''.join(nomeFracionado)


print('O primeiro nome possui {} caracteres'.format(len(nomeFracionado[0])))
print('O nome possui {} caracteres ao total'.format(len(nomeSemEspacos)))