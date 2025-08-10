#Faça um programa que leia a altura e a largura de uma parede em metros, calcule sua área e a quantidade de tinta necessária para pintá-la, sabendo que cada litro de tinta, pinta uma área de 2m².

altura=float(input('Altura da parede em metros: '))
largura=float(input('Largura da parede em metros: '))

print('Para pintar {}m² de parede, são necessários {} litros de tinta.'.format(altura*largura, ((altura*largura)/2)))