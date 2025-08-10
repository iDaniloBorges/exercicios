'''Escreva um programa que pergunte o salário de um funcionário e calcule o valor do seu aumento.
Para salários superiores a R$1.250,00. Calcule um aumento de 10%.
Para os inferiores ou iguais, o aumento é de 15%.'''

salario=float(input('Digite o valor do seu salário: '))

salarioReferencia=1.250
aumento1=1.10
aumento2=1.15

if salario > salarioReferencia:
    print('O novo salário será de R${:.2f}'.format(salario*aumento1))
    print('O aumento foi de R${:.2f}'.format(salario*aumento1-salario))
elif salario <= salarioReferencia and salario > 0:
    print('O novo salário será de R${:.2f}'.format(salario*aumento2))
    print('O aumento foi de R${:.2f}'.format(salario*aumento2-salario))
else:
    print('O valor não pode ser menor do que 0. Digite um valor válido.')