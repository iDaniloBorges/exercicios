'''Escreva um programa para aprovar o empréstimo bancário para a compra de uma casa.
O programa vai perguntar o valor da casa, o salário do comprador e em quantos anos ele vai pagar.

Calcule o valor da prestação mensal, sabendo que ela não pode exceder 30% do salário ou então o empréstimo será negado.'''

valorCasa=float(input('Qual o valor do imóvel? '))
salario=float(input('Qual é seu salário? '))
tempo=int(input('Em quanto tempo você pretende pagar? '))

prestacao=valorCasa/tempo
valorMax=0.3*salario

if prestacao > valorMax:
    print('O empréstimo \033[1;41mNÃO FOI APROVADO!\033[40m')

elif prestacao < valorMax:
    print('O empréstimo foi \033[1;42mAPROVADO\033[40m! Serão {:.0f} parcelas de R${:.2f} por mês.'.format(tempo*12, prestacao))