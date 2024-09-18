"""
                        ______ Exercício 014 ______  
        Escreva um programa que converta uma temperatura digitada em °C para °F.     
"""

# Obtém a temparatura em graus celsius
celsius = float(input("Informe a temperatura em graus Celsius: "))

# Converte a temperatura de Celsius para Fahrenheit
fahrenheit = (celsius * 1.8) + 32

# Exibe o resultado
print(f"A temperatura de {celsius:.2f}°C corresponde a {fahrenheit:.2f}°F.")
