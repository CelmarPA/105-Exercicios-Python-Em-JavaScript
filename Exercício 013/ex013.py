"""
                                ______ Exercício 0013 ______
        Faça um algoritmo que leia o salário de um fucionário e mostre seu novo salário, com 15% de aumento.          
"""

# Obtém o salário do funcionário
salario = float(input("Informe o salário do funcionário: R$"))

# Calcular o novo salário
novo_salario = salario +(salario * 15 / 100)

print(f"O funcionário que ganhava R${salario:.2f}, com aumento de 15%, passa a ganhar R${novo_salario:.2f}.")
