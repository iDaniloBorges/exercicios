valorA = int(input('Digite o valor A: '))
valorB = int(input('Digite o valor B: '))
valorC = int(input('Digite o valor C: '))
valorD = int(input('Digite o valor D: '))

print('Valor A: ${valorA}')
print('Valor A: ${valorB}')
print('Valor A: ${valorC}')
print('Valor A: ${valorD}')

# Ex1 Leia dois valores (0 ou 1) e exiba o resultado da operação E entre eles.
print('Exercício 1')
condicao1 = valorA and valorB
print(condicao1)

# Ex2 Leia dois valores (0 ou 1) e exiba o resultado da operação OU entre eles.
print('Exercício 2')
condicao2 = valorA or valorB
print(condicao2)

# Ex3 Leia um valor (0 ou 1) e exiba o resultado da operação NÃO sobre ele.
print('Exercício 3')
condicao3 = not valorA
print(condicao3)

# Ex4 Leia três valores (0 ou 1) e exiba o resultado de (A E B) OU C.
print('Exercício 4')
condicao4 = valorA and valorB or valorC
print(condicao4)

# Ex5 Leia três valores (0 ou 1) e exiba o resultado de A E (B OU C).
print('Exercício 5')
condicao5 = valorA and (valorB or valorC)
print(condicao5)

# Ex6 Leia dois valores (0 ou 1) e exiba VERDADEIRO caso ambos estejam LIGADOS, senão exiba FALSO.
print('Exercício 6')
condicao6 = valorA == valorB

# Ex7 Leia dois valores (0 ou 1) e exiba VERDADEIRO caso pelo menos um esteja LIGADO, senão FALSO.
print('Exercício 7')
condicao7 = valorA or valorB

# Ex8 Leia três valores (0 ou 1) e exiba VERDADEIRO caso apenas um deles esteja LIGADO.
print('Exercício 8')
condicao8 = valorA or valorB or valorC
print(condicao8)

# Ex9 Leia dois valores (0 ou 1) e exiba o resultado de NÃO (A OU B).
print('Exercício 9')
condicao9 = not (valorA or valorB)
print(condicao9)

# Ex10 Leia dois valores (0 ou 1) e exiba o resultado de NÃO (A E B).
print('Exercício 10')
condicao10 = not (valorA and valorB)
print(condicao10)

# Ex11 Leia quatro valores (0 ou 1) e exiba o resultado de (A E B) OU (C E D).
print('Exercício 11')
condicao11 = (valorA and valorB) or (valorC and valorD)
print(condicao11)
 
# Ex12 Leia três valores (0 ou 1) e exiba o resultado de (NÃO A) OU (B E C).
print('Exercício 12')
condicao12 = (not valorA) or (valorB and valorC)
print(condicao12)

# Ex13 Leia três valores (0 ou 1) e exiba VERDADEIRO caso exatamente dois estejam LIGADOS.
print('Exercício 13')
condicao13 = valorA == valorB or valorA == valorC or valorB == valorC
print(condicao13)

# Ex14 Leia dois valores (0 ou 1) e exiba VERDADEIRO caso A e B sejam diferentes (XOR lógico).
print('Exercício 14')
condicao14 = valorA != valorB
print(condicao14)

# Ex15 Leia quatro valores (0 ou 1) representando sensores de uma máquina:

# - Sensor 1 = Motor ligado
# - Sensor 2 = Nível de água OK
# - Sensor 3 = Tampa fechada
# - Sensor 4 = Botão de iniciar pressionado

# A máquina só liga se **TODOS** os sensores estiverem LIGADOS.

# Exiba "Máquina Ligada" ou "Máquina Desligada" conforme a lógica.

print('Exercício 15')
condicao15 = valorA and valorB and valorC and valorD
print(condicao15)


#Ex16

a=15
b=35
c=55
d=-87
e=-90
f=5

# Realize a proposição abaixo e diga se é verdadeiro ou falso. Explique sua decisão:

# 0 ou a+b = 90 e a * (a+c) + (b / f) ou a + 40
print('Exercício 16')

condicao16 = 0 or a+b == 90 and a*(a+c) + (b/f) or a+40

# condicao16 = 0 or a+b == 90 and a*(a+c) + (b/f) or a+40
# false and 15*70 + 7 or 55
# false or 55
# 55 = true

print(condicao16)
