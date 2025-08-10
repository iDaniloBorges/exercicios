'''A confederação nacional de natação precisa de um programa que leia o ano de nascimento de um atleta e mostre sua categoria, de acordo com a idade:
até 9 anos : mirim
até 14 anos : infantil
até 19 anos : junior
até 20 anos : sênior
acima : master'''

from datetime import date

nascimento = int(input('Em que ano você nasceu? '))

idade = date.today().year - nascimento

if idade < 0:
    print('---DIGITE VALORES VÁLIDOS!---')

elif idade <= 9:
    print('Sua categoria é \033[44mMIRIM.')

elif idade > 9 and idade <= 14:
    print('Sua categoria é \033[44mINFANTIL.')

elif idade > 14 and idade <= 19:
    print('Sua categoria é \033[44mJUNIOR.')

elif idade > 19 and idade <= 20:
    print('Sua categoria é \033[44mSÊNIOR.')

elif idade > 20:
    print('Sua categoria é \033[44mMASTER.')