#Faça um algoritmo que leia o preço de um produto e mostre seu novo preço, com 5% de desconto.

preco=float(input('Digite o valor do produto: R$ '))

print('O valor do produto com desconto é de R${}'.format(preco*0.95))
print('O valor do desconto aplicado foi de R${}'.format(preco-preco*0.95))