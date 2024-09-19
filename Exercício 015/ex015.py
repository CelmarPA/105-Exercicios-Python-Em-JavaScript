"""
                                ______ Exercício 015 ______ 
        Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado e a quantidade de dias pelos quais ele foi alugado. Calcule o preço a pagar, sabendo que o carro custa R$60 por dia e R$0,15 por Km rodado.       
"""
# Obtém os dados do usuário
dias = int(input("Quantos dias de aluguel? "))
km = float(input("Quantos quilômetros rodados? "))

# Calcula o valor
valor = (dias * 60) + (km * 0.15)

# Exibe o resultado
print(f"O total a pagar por {dias} dias de aluguel e {km}km rodadados é de R${valor:.2f}.")
