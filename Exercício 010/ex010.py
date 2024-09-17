"""
                        ______ Exercício 010 ______
    Crie um programa que leia quanto dinheiro uma pessoa tem na carteira e mostre quantos dólares ela pode comprar.

"""
dinheiro = float(input("Quanto você tem em sua carteira? "))

valor_dolar = 5.48

usd = dinheiro / valor_dolar

# Exibe e a resposta
print(f'Com R${dinheiro:.2f} você pode adiquirir US${usd:.2f}!')
