#Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado e a quantidade de dias pelos quais ele foi alugado.
#Calcule o preço a pagar, sabendo que o carro custa R$60 por dia e R$0,15 por Km rodado.

#Diaria R$60, km rodado $r0,15.

diarias=int(input('Quantos dias o carro foi utilizado? '))
kilometrosPercorridos=float(input('Quantos quilômetros foram percorridos? '))

valorDia=60
valorKilometro=0.15

print('O valor a ser pago será de R${:.2f}'.format(dr*valorDia+kilometrosPercorridos*valorKilometro))