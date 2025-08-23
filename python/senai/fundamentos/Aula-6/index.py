# Atividade 3: Validador de Senha -  Utilize variáveis globais.
# Crie uma função validarSenha que verifica se uma senha tem pelo menos 8
# caracteres, contém pelo menos um número e uma letra maiúscula.

import re

senha = input("Digite sua senha: ")


def hasNumber():
    if re.search("[0-9]", senha):
        print("There is number")


def hasLowerString():
    if re.search("[a-z]", senha):
        print("There is lower string")


def hasUpperString():
    if re.search("[A-Z]", senha):
        print("There is UPPER string")


def hasQtf():
    if len(senha) >= 8:
        print("There are caracters enough")


def validarSenha():
    if hasNumber & hasLowerString & hasUpperString & hasQtf:
        print("A senha atendes aos padrões")

