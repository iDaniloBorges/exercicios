'''Desenvolva um programa que leia o comprimento de três retas e diga ao usuário se elas podem ou não formar um triângulo.'''

primeiraReta=float(input('Informe o valor da primeira reta: '))
segundaReta=float(input('Informe o valor da segundaa reta: '))
terceiraReta=float(input('Informe o valor da terceira reta: '))

if primeiraReta <= 0 or segundaReta <= 0 or terceiraReta <= 0:
    print('Não existem triângulos com retas que forma ângulos menores ou iguais a 0°.')

elif primeiraReta+segundaReta > terceiraReta and primeiraReta+terceiraReta > segundaReta and segundaReta+terceiraReta > primeiraReta :
    print('Os lados A={:.2f} ; B={:.2f} e C={:.2f} atendem as condições para formar um triângulo.'.format(primeiraReta,segundaReta,terceiraReta))

elif primeiraReta+segundaReta < terceiraReta:
    print('A soma entre A={:.2f} e B={:.2f} é menor do que C={:.2f}. Portanto, não é possível formar um triângulo'.format(primeiraReta, segundaReta, terceiraReta))

elif primeiraReta+terceiraReta < segundaReta:
    print('A soma entre A={:.2f} e C={:.2f} é menor do que B={:.2f}. Portanto, não é possível formar um triângulo'.format(primeiraReta, terceiraReta, segundaReta))

elif segundaReta+terceiraReta < primeiraReta:
    print('A soma entre B={:.2f} e C={:.2f} é menor do que A={:.2f}. Portanto, não é possível formar um triângulo'.format(segundaReta,terceiraReta,primeiraReta))

elif primeiraReta<0 or segundaReta<0 or terceiraReta<0:
    print('Os valores das retas não podem ser negativos seu tapado. Digite valores maiores do que 0.')

else:
    print('-----FIM-----')