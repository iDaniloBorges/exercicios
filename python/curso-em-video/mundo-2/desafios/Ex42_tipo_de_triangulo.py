'''Refaça o exercício 35 dos triângulos, acrescentando o rescurso de mostrar que tipo de triângulo será formado: 

Equilátero: todos os lados iguais
isósceles: dois lados iguais
Escaleno: todos os lados diferentes'''

primeiraReta = float(input('Digite o valor da primeira reta: '))
segundaReta = float(input('Digite o valor da segunda reta: '))
terceiraReta = float(input('Digite o valor da terceira reta: '))

if primeiraReta < segundaReta+terceiraReta and segundaReta < primeiraReta+terceiraReta and terceiraReta < primeiraReta+segundaReta and primeiraReta != segundaReta and primeiraReta != terceiraReta and segundaReta != terceiraReta:
    print('As retas formam um TRIÂNGULO ESCALENO.')

elif primeiraReta > segundaReta+terceiraReta and segundaReta > primeiraReta+terceiraReta and terceiraReta > primeiraReta+segundaReta:
    print('As retas informadas NÃO PODEM formar um triângulo')

elif primeiraReta == segundaReta and primeiraReta == terceiraReta:
    print('As retas formam um TRIÂNGULO EQUILÁTERO.')

elif primeiraReta == segundaReta or primeiraReta==terceiraReta or segundaReta == terceiraReta:
    print('As retas formam um TRIÂNGULO ISÓSCELES.')