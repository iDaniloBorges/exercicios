frase='    Curso em Vídeo Python       '

print(frase[1:15:2])
print(frase[:10])

print('''Hi, my name is Danilo and I want to work programing in Ptyhon''')

print(frase.count('o'))

print(len(frase.strip()))

frase=frase.replace('Python','Android')

print(frase)

print('Curso' in frase)

print(frase.find('Curso'))

print(frase.lower().find('vídeo'))


fraseDividida=frase.split()

print(fraseDividida[0])

print(fraseDividida[2][3])

