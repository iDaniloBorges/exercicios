valor1 = float(input("Digite o primeiro valor: "))
valor2 = float(input("Digite o segundo valor: "))
valor3 = float(input("Digite o terceiro valor: "))

total = valor1 + valor2 + valor3

total2 = f"R${total:.2f}"
total3 = str(total2).replace(".", ",")

print(total3.center(30, "-"))
print("FIM".center(30, "-"))
