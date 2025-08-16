## Exercício 2:

# 📝 Exercício Melhorado – Conversão de Tempo de Viagem

# Enunciado:
# Em operações logísticas, o tempo de viagem de um caminhão é frequentemente registrado em segundos.
# Seu programa deve receber o tempo total em segundos e convertê-lo para horas, minutos e segundos.

# 1 hora = 3600 segundos
# 1 minuto = 60 segundos

registro_segundos = int(input("Digite o tempo em segundos: "))

calc_hora = int(registro_segundos / 3600)
calc_minuto = int(calc_hora % 60)
calc_segundo = int((registro_segundos % 3600)) % 60

# calc_segundo = int(calc_minuto % 600)
# calc_minuto = int(registro_segundos / 60) % 60
# y = registro_segundos / 60
# 60 = 1
# x = y

print(calc_hora)
print(calc_minuto)
print(calc_segundo)


print(
    f"O tempo de viagem é de {calc_hora} horas, {calc_minuto} minutos e {calc_segundo} segundos."
)
