'''Crie um programa que leia duas notas de um aluno e calcule sua média, mostrando uma mensagem no final, de acordo com a média atingida:
média abaixo de 5 :  reprovado
média entre 5 e 6.9 : recuperação
média 7 ou superior : aprovado'''

nota1 = float(input('Digite sua primeira nota: '))
nota2 = float(input('Digite sua segunda nota: '))

media = (nota1 + nota2)/2

reprovacao=5
recuperacao=6.9
aprovacao=7

if nota1 < 0 or nota1 > 10 or nota2 < 0 or nota2 > 10:
    print('\033[44mDIGITE VALORES ENTRE 0 E 10 EM CADA UMA DAS NOTAS.\033[30m')

elif media < reprovacao:
    print('Sua média foi de \033[34m{:.2f}\033[30m. Portanto, você foi \033[41mREPROVADO\033[40m.'.format(media))

elif media > reprovacao and media < recuperacao:
    print('Sua média foi de \033[34m{:.2f}\033[30m. Portanto, você está em \033[43mRECUPERAÇÃO\033[40m.'.format(media))

elif media > aprovacao:
    print('Sua média foi de \033[34m{:.2f}\033[30m. Portanto, você está \033[42mAPROVADO\033[40m.'.format(media))


print('-----FIM-----')