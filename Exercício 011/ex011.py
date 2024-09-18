"""
                            ______ Exercício 011 ______      

        Faça um programa que leia a largura e altura de uma parede em  metros, calcule a sua área e a quantidade de tinta necessária para pintá-la, sabendo que cada litro de tinta pinta uma área de 2m².    
"""

largura = float(input("Informe a largura (m): "))
altura = float(input("Informe a altura (m): "))

# Calcula a área da parede
area = largura * altura

# Calcula quantidade de litros de tinta
tinta = area / 2

# Exibe a resposta
print(f"Sua parede tem dimensões de {largura} x {altura} possuindo uma área de {area:.2f}m².")
print(f"São necessários {tinta:.2f} litros de tinta para pintar está parede.")