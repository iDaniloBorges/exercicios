# Leitura das notas A e B
nota_A = float(input())
nota_B = float(input())

# Pesos das notas
peso_A = 3.5
peso_B = 7.5

# Cálculo da média ponderada
media = (nota_A * peso_A + nota_B * peso_B) / (peso_A + peso_B)

# Imprime a média formatada com 5 dígitos após o ponto decimal
print("MEDIA = {media:.5f}")