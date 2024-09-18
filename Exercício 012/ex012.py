"""
                        ______ Exercício 012 ______  

        Faça um algoritmo que leia o preço de um produto e mostre seu novo preço com 5% de desconto.        
"""
# Obtém o valor do produto
preco = float(input("Digite o valor do protudo? R$"))

# Calcula o valor com desconto de 5%
valor_com_desconto = preco - (preco * 5 / 100)

# Exibe a resposta
print(f"O produto que custava R${preco:.2f}, com desconto de 5% passa a custar R${valor_com_desconto:.2f}.")
