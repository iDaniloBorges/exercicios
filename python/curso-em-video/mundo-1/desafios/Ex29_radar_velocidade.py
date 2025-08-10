'''Escreva um programa que leia a velocidade de um carro.
Se ele ultrapassar 80Km/h. Mostre uma mensagem dizendo que ele foi multado.
A multa vai custar R$7,00 por cada Km acima do limite.'''

velocidade=int(input('Qual é a velocidade do automóvel? '))

if velocidade > 80:
    print('Você foi multado! Pague a multa de R${},00'.format((velocidade-80)*7))
else:
    print('Dentro do limite de velocidade.')

print('-----FIM-----')