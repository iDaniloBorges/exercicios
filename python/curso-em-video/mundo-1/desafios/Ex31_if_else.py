'''Desenvolva um programa que pergunte a distância de uma viagem em Km.
Calcule o preço da passagem. Cobrando R$0,50 por Km para viagens de até 200Km e R$0,45 para viagens mais longas '''

distanciaViagem=float(input('Qual é a distãncia da viagem em Km? '))

preço= distanciaViagem*0.5 if distanciaViagem<=200 else distanciaViagem*0.45

print('O valor da passagem será de R${:.2f}'.format(preço))

if 0<distanciaViagem<200:
    print('O valor da passagem será de R${:.2f}'.format(distanciaViagem*0.50))
else:
    print('O valor da passagem será de R${:.2f}'.format(distanciaViagem*0.45))

print('----FIM----')