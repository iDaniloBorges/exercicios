#Escreva um programa que leia um valor em metros e o exiba convertido em centímetros e milímetros.

metros=float(input('Digite um valor em metros: '))

print('{} metros é equivalente a {} kilometros'.format(metros, metros*0.001))
print('{} metros é equivalente a {} decametros'.format(metros, metros*0.01))
print('{} metros é equivalente a {} centímetros'.format(metros, metros*100))
print('{} metros é equivalente a {} milímetros'.format(metros, metros*1000))