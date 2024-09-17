"""
                            ______ Exercício 009 ______
    Faça um programa que leia um número inteiro qualquer e mostre na tela sua tabuada.

"""
# Solicita um número ao usuário
num = int(input("Digite um número para ver sua tabuada: "))

# Cacula a tabuada
n1 = num * 1
n2 = num * 2
n3 = num * 3
n4 = num * 4
n5 = num * 5
n6 = num * 6
n7 = num * 7
n8 = num * 8
n9 = num * 9
n10 = num * 10

# Exibe a tabuada formatada
print(f"-" * 12)
print(f"{num} x {1:2} = {n1}")
print(f"{num} x {2:2} = {n2}")
print(f"{num} x {3:2} = {n3}")
print(f"{num} x {4:2} = {n4}")
print(f"{num} x {5:2} = {n5}")
print(f"{num} x {6:2} = {n6}")
print(f"{num} x {7:2} = {n7}")
print(f"{num} x {8:2} = {n8}")
print(f"{num} x {9:2} = {n9}")
print(f"{num} x {10:2} = {n10}")
