#Crie um programa que leia o nome de uma cidade e diga se ela começou ou não com o nome ''SANTO''.

cidade = input('Digite o nome de uma cidade: ')

cidadeSemEspacos = cidade.split()

primeiraPalavra = cidadeSemEspacos[0].upper()

print('A primeira palavra contém "SANTO"?', 'SANTO' in primeiraPalavra)
