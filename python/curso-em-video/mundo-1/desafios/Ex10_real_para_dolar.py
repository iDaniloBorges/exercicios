#Crie um programa que leia quanto dinheiro uma pessoa tem na carteira e mostre quantos Dólares ela pode comprar.

montante=float(input('Digite o valor disponível na carteira: '))
dolar=float(input('Digite a cotação do Dólar atual: '))

print('Você pode comprar {} Dólares com {:2f} Reais.'.format(montante, montante/dolar))