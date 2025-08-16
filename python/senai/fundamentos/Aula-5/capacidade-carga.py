### Exercício 3: Cálculo de Capacidade de Carga

# Uma transportadora deseja calcular quantos **caminhões** são necessários para transportar uma carga.

# - Cada caminhão suporta até **10 toneladas**.
# - O usuário deve informar o peso total da carga em toneladas.
# - O programa deve calcular e mostrar:
#     1. Quantos caminhões serão necessários.
#     2. Se sobra espaço no último caminhão (quanto sobra em toneladas).
#     3. Formato: Precisamos de x caminhões cheios e sobrará y de espaço restante.

# 🔹 **Dica:**

# - Use divisão inteira (`//`) para descobrir a quantidade de caminhões cheios.
# - Use o operador de resto (`%`) para calcular o espaço ocupado no último caminhão.

carga_transportada = float(
    input("Digite o tamanho da carga a ser transportada (em TONELADAS): ")
)

capacidade_caminhao = 10

caminhoes_necessarios = int(carga_transportada // capacidade_caminhao)

espaco_restante = 10 - (carga_transportada % capacidade_caminhao)

print(caminhoes_necessarios)
print(espaco_restante)

print(
    f"Precisamos de {caminhoes_necessarios} caminhões cheios e 1 caminhão com {espaco_restante}T de espaço restante.."
)
