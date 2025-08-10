'''Desenvolva um programa que leia o nome , idade e sexo de 4 pessoas. No final do programa, mostre:
A média de idade do grupo,
Qual é o nome do homem mais velho
Quantas mulheres tem menos de 21 anos'''

print(f'{" INÍCIO DO PROGRAMA ":=^100}')

somaIdade=0
maiorIdadeHomem=0
homem=''
mulher=0

for c in range(1,5):
    print(f'{"=":=^100}')
    print('{}º Pessoa'.format(c))
    nome= str(input('Informe seu nome: '))
    idade= int(input('Informe sua idade: '))
    sexo= int(input('''(1) - Masculino
(2) - Feminino
Informe seu sexo: '''))
    
    somaIdade += idade
    
    if idade > maiorIdadeHomem and sexo == 1:
        maiorIdadeHomem = idade
        homem = nome

    if idade <21 and sexo == 2:
        mulher += 1

print(f'{"=":=^100}')

print('A média da idade do grupo é de {:.0f} anos'.format(somaIdade/4))
print('O nome do homem mais velho é: {}'.format(homem))
print('Há {} mulheres com menos de 21 anos'.format(mulher))

print(f'{" FIM DO PROGRAMA ":=^100}')