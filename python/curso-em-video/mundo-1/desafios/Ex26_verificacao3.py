#Faça um programa que leia uma frase pelo teclado e mostre:
#Qauntas vezes aparece a letra ''A'' , em que posição ela aparece a primeira vez e a última.

frase=input('Digite uma frase: ').upper()

print('A letra A aparece {} vezes na frase.'.format(frase.count('A')))
print('Ela aparece pela primeira vez na posição {}'.format(frase.find('A')))
print('Ela aparece pela última vez na posição {}'.format(frase.find('A',-1)))