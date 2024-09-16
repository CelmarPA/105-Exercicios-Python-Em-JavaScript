"""
                        ______ Exercício 006 ______

        Crie um algoritmo que leia um número e mostre o seu dobro, triplo e raiz quadrada.
"""
num = int(input("Digite um número: "))

dobro = num * 2
triplo = num * 3
raiz = num ** (1 / 2)

print(f"O drobro de {num} é igual a {dobro}.")
print(f"O triplo de {num} é igual a {triplo}.")
print(f"A raiz quadrada de {num} é igual a {raiz:.2f}.")
