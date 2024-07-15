"""
                    ______ Exercício 004 ______

 Faça um programa que leia algo pelo teclado e mostre na tela o seu tipo primitivo e todas as informações possíveis sobre ele.

"""
entrada = input("Digite algo: ")

print(f"o tipo primitivo dessa entrada é: ", type(entrada))
print(f"Só tem espaços? ", entrada.isspace())
print(f"É um número? ", entrada.isnumeric())
print(f"É alfabético? ", entrada.isalpha())
print(f"É alfanumérico?", entrada.isalnum())
print(f"Está em maiúsculas? ", entrada.isupper())
print(f"Está em minúsculas? ", entrada.islower())
print(f"Está capitalizada?", entrada.istitle())