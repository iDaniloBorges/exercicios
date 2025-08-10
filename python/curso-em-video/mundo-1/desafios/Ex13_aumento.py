#Faça um algorítmo que leia o salário de um funcionário e mostre seu novo salário, com 15% de aumento.
salario=float(input('Escreva o valor do salário: R$ '))

aumumento=1.15
novoSalario=salario*aumumento

print('O salário de R${}, com acréscimo de 15% será de R${}'.format(salario, novoSalario))
print('O valor do aumento aplciado foi de R${}'.format(novoSalario-salario))