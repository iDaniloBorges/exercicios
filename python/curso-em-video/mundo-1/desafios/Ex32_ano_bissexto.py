'''Faça um programa que leia um ano qualquer e mostre se ele é BISSEXTO'''

anoEscolhido=(input('Escolha um ano: '))


if (anoEscolhido % 400 == 0) or ((anoEscolhido % 4 ==0) and (anoEscolhido % 100 !=0)):
    print('O ano de {} é um ano bissexto.'.format(anoEscolhido))
else:
    print('O ano de {} não é um ano bissexto.'.format(anoEscolhido))

print('----FIM----')