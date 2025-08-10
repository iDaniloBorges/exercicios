'''Faça um programa que leia o ano de nascimento de um jovem e informe, de acordo com sua idade:
- se ele ainda vai se alistar ao serviço militar
- se é a hora de se alistar
- se já passou do tempo do alistamento

Seu programa também deverá mostrar o tempo que falta ou que passou do prazo'''

from datetime import date

anoNascimento = int(input('Em que ano você nasceu? '))

idadeAtual = date.today().year-anoNascimento

idadeParaServir = 18 
idadeMaximaParaServir = 24 

if idadeAtual < idadeParaServir:
    print('Você ainda possui idade para se alistar. Faltam \033[44m{}\033[40m anos para o alistamento.'.format(idadeParaServir-idadeAtual))

elif idadeAtual > idadeParaServir and idadeAtual < idadeMaximaParaServir:
    print('Você já possui a idade para se alistar. Você ainda tem \033[44m{}\033[40m meses para se alistar.'.format((idadeMaximaParaServir-idadeAtual)*12))

else:
    print('O tempo para se alistar passou \033[44m{}\033[40m meses do prazo.'.format((idadeAtual-idadeMaximaParaServir)*12))